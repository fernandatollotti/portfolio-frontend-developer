import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { siteUrl, ogImage } from "@/lib/site";

const title = "Política de Privacidade";
const description = `Política de Privacidade do site de ${profile.name}: quais dados são coletados, como são usados e como exercer seus direitos sob a LGPD.`;
const url = `${siteUrl}/politica-de-privacidade`;

// openGraph/twitter are redeclared in full: child metadata replaces these
// objects from the root layout instead of merging, so the home's url/title
// (and canonical) would otherwise leak into this page.
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url,
    title: `${title} — ${profile.name}`,
    description,
    siteName: profile.name,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — ${profile.name}`,
    description,
    images: [ogImage.url],
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-semibold text-text">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-secondary">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-16 sm:py-24">
      <Container className="max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar para o início
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-semibold text-text sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-text-muted">Última atualização: setembro de 2026</p>

        <p className="mt-6 text-sm leading-relaxed text-text-secondary">
          Esta política explica quais dados este site coleta, para que servem e como você pode
          exercer seus direitos, em conformidade com a Lei Geral de Proteção de Dados (LGPD —
          Lei nº 13.709/2018).
        </p>

        <Section title="Quem é o controlador dos dados">
          <p>
            {profile.name} é a responsável pelo tratamento dos dados coletados neste site. Dúvidas
            ou solicitações sobre privacidade podem ser enviadas para{" "}
            <a href={`mailto:${profile.email}`} className="text-accent underline hover:no-underline">
              {profile.email}
            </a>
            .
          </p>
        </Section>

        <Section title="Quais dados são coletados">
          <p>
            Este site não possui formulário de contato nem cadastro — nenhum dado pessoal é
            coletado diretamente por meio de formulários.
          </p>
          <p>
            Se você aceitar os cookies de análise no aviso exibido na primeira visita, ferramentas
            como Google Analytics e/ou Google Tag Manager podem coletar dados de navegação, como:
            endereço IP (de forma aproximada/anonimizada), tipo de dispositivo e navegador, páginas
            visitadas, tempo de permanência e origem do acesso. Esses dados são estatísticos e não
            identificam você diretamente.
          </p>
          <p>
            Se você clicar em “Vamos conversar” e enviar uma mensagem pelo WhatsApp, essa conversa
            acontece diretamente no WhatsApp, sujeita à política de privacidade do próprio
            WhatsApp/Meta — este site não armazena o conteúdo dessa conversa.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Usamos apenas cookies/armazenamento local não essenciais para análise de uso do site,
            carregados somente após seu consentimento no aviso de cookies. Você pode recusar sem
            qualquer prejuízo à navegação, e pode limpar os dados do site a qualquer momento nas
            configurações do seu navegador para revogar o consentimento.
          </p>
        </Section>

        <Section title="Finalidade do tratamento">
          <p>
            Os dados de navegação (quando o uso de cookies é aceito) servem exclusivamente para
            entender como o site é utilizado e melhorar seu conteúdo e experiência — não são usados
            para decisões automatizadas, perfis de publicidade ou venda a terceiros.
          </p>
        </Section>

        <Section title="Compartilhamento de dados">
          <p>
            Dados de navegação coletados via Google Analytics/Tag Manager são processados pelo
            Google, conforme a{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:no-underline"
            >
              política de privacidade do Google
            </a>
            . Não compartilhamos dados com outros terceiros.
          </p>
        </Section>

        <Section title="Seus direitos (LGPD, art. 18)">
          <p>Você pode solicitar, a qualquer momento e gratuitamente:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Confirmação de que seus dados estão sendo tratados;</li>
            <li>Acesso aos dados coletados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Informação sobre com quem os dados são compartilhados;</li>
            <li>Revogação do consentimento e eliminação dos dados tratados com base nele.</li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, envie um e-mail para{" "}
            <a href={`mailto:${profile.email}`} className="text-accent underline hover:no-underline">
              {profile.email}
            </a>
            .
          </p>
        </Section>

        <Section title="Alterações nesta política">
          <p>
            Esta política pode ser atualizada eventualmente para refletir mudanças no site ou na
            legislação. A data no topo desta página indica a versão mais recente.
          </p>
        </Section>
      </Container>
    </main>
  );
}
