"use client";

import { FormEvent, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = { name: "", email: "", subject: "", message: "", company: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(field: keyof typeof values) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] ?? "",
        email: fieldErrors.email?.[0] ?? "",
        subject: fieldErrors.subject?.[0] ?? "",
        message: fieldErrors.message?.[0] ?? "",
      });
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage("Falha de conexão. Verifique sua internet e tente novamente.");
    }
  }

  const fieldClasses =
    "w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text placeholder:text-text-muted transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-describedby="form-status">
      {/* Honeypot — hidden from sighted users and keyboard/tab order, bots still fill it in. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Não preencha este campo</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={handleChange("company")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text">
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={handleChange("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClasses}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-2 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClasses}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-sm font-medium text-bg transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Enviar mensagem
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {status === "success" && (
          <p className="inline-flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Mensagem enviada com sucesso! Retorno em breve.
          </p>
        )}
        {status === "error" && (
          <p className="inline-flex items-center gap-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {serverMessage}
          </p>
        )}
      </div>
    </form>
  );
}
