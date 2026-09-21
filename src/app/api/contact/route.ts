import { NextRequest, NextResponse } from "next/server";
import { contactSchema, sanitizeText } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Muitas tentativas. Tente novamente em instantes." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Dados inválidos.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot tripped — silently report success so the bot doesn't learn anything.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const submission = {
    name: sanitizeText(parsed.data.name),
    email: sanitizeText(parsed.data.email),
    subject: sanitizeText(parsed.data.subject),
    message: sanitizeText(parsed.data.message),
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  try {
    if (resendApiKey && contactToEmail) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
          to: contactToEmail,
          reply_to: submission.email,
          subject: `[Portfólio] ${submission.subject}`,
          text: `Nome: ${submission.name}\nE-mail: ${submission.email}\n\n${submission.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend respondeu com status ${response.status}`);
      }
    } else {
      // No email provider configured yet — log server-side so nothing is silently lost
      // during local development. Set RESEND_API_KEY and CONTACT_TO_EMAIL to go live.
      console.info("[contact] novo envio (sem provedor de e-mail configurado):", submission);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] falha ao enviar e-mail:", error);
    return NextResponse.json(
      { ok: false, message: "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde." },
      { status: 502 }
    );
  }
}
