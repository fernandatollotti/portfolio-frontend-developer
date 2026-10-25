import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import {
  servicePages,
  getServicePage,
  getServicePageById,
} from "@/data/servicePages";
import { projects } from "@/data/projects";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { RightNav } from "@/components/layout/RightNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteUrl, ogImage } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  const url = `${siteUrl}/servicos/${page.slug}`;
  const fullTitle = `${page.seoTitle} | ${profile.name}`;

  // openGraph/twitter are redeclared in full: child metadata replaces these
  // objects from the root layout instead of merging.
  return {
    title: { absolute: fullTitle },
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title: fullTitle,
      description: page.seoDescription,
      siteName: profile.name,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.seoDescription,
      images: [ogImage.url],
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const service = services.find((s) => s.id === page?.serviceId);
  if (!page || !service) notFound();

  const url = `${siteUrl}/servicos/${page.slug}`;
  const relatedProjects = projects.filter((p) =>
    page.projectIds.includes(p.id),
  );
  const otherServices = services
    .filter((s) => s.id !== service.id)
    .map((s) => ({ service: s, page: getServicePageById(s.id) }))
    .filter((item) => item.page);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: page.seoDescription,
        url,
        provider: { "@id": `${siteUrl}/#person` },
        areaServed: { "@type": "Country", name: "Brasil" },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Serviços",
            item: `${siteUrl}/#servicos`,
          },
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <MobileMenu homeHref="/" />

      <div className="mx-auto flex w-full max-w-[1440px]">
        <Sidebar />

        <main id="main-content" className="min-w-0 flex-1 pt-20 lg:pt-0">
          <Container className="max-w-5xl pt-12 sm:pt-16">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-accent"
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/#servicos"
                    className="transition-colors hover:text-accent"
                  >
                    Serviços
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-text-secondary">
                  {service.title}
                </li>
              </ol>
            </nav>

            {/* Hero */}
            <header className="border-b border-border py-14 sm:py-20">
              <p className="font-heading text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 font-heading text-3xl leading-[1.15] font-semibold tracking-tight text-text sm:text-4xl">
                {page.headline}
              </h1>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={profile.whatsapp}>
                  Pedir um orçamento
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/#projetos" variant="secondary">
                  Ver projetos
                </Button>
              </div>
            </header>

            {/* Included */}
            <section
              aria-labelledby="incluido-heading"
              className="border-b border-border py-14 sm:py-20"
            >
              <h2
                id="incluido-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl"
              >
                {page.includedTitle}
              </h2>
              <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {page.included.map((item) => (
                  <li key={item.title} className="bg-bg-secondary p-6 sm:p-8">
                    <h3 className="flex items-center gap-3 font-heading text-base font-semibold text-text">
                      <Check
                        className="h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* For whom */}
            <section
              aria-labelledby="para-quem-heading"
              className="border-b border-border py-14 sm:py-20"
            >
              <h2
                id="para-quem-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl"
              >
                Para quem é este serviço
              </h2>
              <ul className="mt-8 space-y-4">
                {page.forWhom.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-text-secondary"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section
              aria-labelledby="processo-heading"
              className="border-b border-border py-14 sm:py-20"
            >
              <h2
                id="processo-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl"
              >
                Como trabalho
              </h2>
              <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-5">
                {processSteps.map((step) => (
                  <li key={step.id}>
                    <span className="font-heading text-sm text-accent">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-heading text-base font-semibold text-text">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Projects */}
            {relatedProjects.length > 0 && (
              <section
                aria-labelledby="projetos-heading"
                className="border-b border-border py-14 sm:py-20"
              >
                <h2
                  id="projetos-heading"
                  className="font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl"
                >
                  Projetos relacionados
                </h2>
                <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {relatedProjects.map((project) => (
                    <li
                      key={project.id}
                      className="overflow-hidden rounded-2xl border border-border bg-bg-secondary"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- local static asset */}
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        width={640}
                        height={400}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                      <div className="p-5">
                        <p className="text-xs text-text-muted">
                          {project.category} · {project.year}
                        </p>
                        <h3 className="mt-1 font-heading text-base font-semibold text-text">
                          {project.href ? (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                            >
                              {project.name}
                              <ArrowUpRight
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </a>
                          ) : (
                            project.name
                          )}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            <section
              aria-labelledby="faq-heading"
              className="border-b border-border py-14 sm:py-20"
            >
              <h2
                id="faq-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl"
              >
                Perguntas frequentes
              </h2>
              <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-bg-secondary">
                {page.faq.map((item) => (
                  <details key={item.question} className="group p-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-base font-semibold text-text">
                      {item.question}
                      <span
                        className="mt-0.5 text-accent transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="py-14 sm:py-20">
              <div className="rounded-2xl border border-accent/30 bg-accent-dim p-8 sm:p-12">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  Vamos conversar sobre o seu projeto?
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-text-secondary">
                  Me conte o que você precisa. Respondo com os próximos passos e
                  um orçamento sob medida.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={profile.whatsapp}>
                    Chamar no WhatsApp
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href={`mailto:${profile.email}`} variant="secondary">
                    {profile.email}
                  </Button>
                </div>
              </div>
            </section>

            {/* Other services */}
            <section
              aria-labelledby="outros-heading"
              className="border-t border-border py-14"
            >
              <h2
                id="outros-heading"
                className="font-heading text-lg font-semibold text-text"
              >
                Outros serviços
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {otherServices.map(({ service: other, page: otherPage }) => (
                  <li key={other.id}>
                    <Link
                      href={`/servicos/${otherPage!.slug}`}
                      className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-bg-secondary p-4 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      {other.title}
                      <ArrowRight
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/"
                className="mt-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Voltar para o início
              </Link>
            </section>

            <Footer />
          </Container>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </main>

        <RightNav hrefPrefix="/" activeId="servicos" />
      </div>
    </>
  );
}
