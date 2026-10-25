import Link from "next/link";
import { ArrowRight, Code2, Globe, LayoutTemplate, RefreshCw, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { getServicePageById } from "@/data/servicePages";
import { Service } from "@/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const iconMap: Record<Service["icon"], LucideIcon> = {
  code: Code2,
  globe: Globe,
  layout: LayoutTemplate,
  wordpress: Globe,
  wrench: Wrench,
  check: ShieldCheck,
  refresh: RefreshCw,
};

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle eyebrow="O que eu faço" title="Serviços" headingId="servicos-heading" />
      </Reveal>

      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          const page = getServicePageById(service.id);
          return (
            <Reveal
              key={service.id}
              as="li"
              delay={index * 60}
              className={cn(
                "bg-bg-secondary p-8",
                // Odd count: the last card spans both columns so the grid has no gap.
                services.length % 2 === 1 && index === services.length - 1 && "sm:col-span-2"
              )}
            >
              <div className="flex items-start justify-between">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-text">
                {page ? (
                  <Link href={`/servicos/${page.slug}`} className="transition-colors hover:text-accent">
                    {service.title}
                  </Link>
                ) : (
                  service.title
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              {service.idealFor && (
                <p className="mt-4 text-xs text-text-muted">
                  <span className="font-semibold text-accent">Ideal para:</span> {service.idealFor}
                </p>
              )}
              {page && (
                <Link
                  href={`/servicos/${page.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  aria-label={`Saiba mais sobre ${service.title}`}
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
