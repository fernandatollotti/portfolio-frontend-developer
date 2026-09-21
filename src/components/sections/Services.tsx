import { Code2, Globe, LayoutTemplate, Wrench, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { Service } from "@/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<Service["icon"], LucideIcon> = {
  code: Code2,
  globe: Globe,
  layout: LayoutTemplate,
  wordpress: Globe,
  wrench: Wrench,
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
          return (
            <Reveal key={service.id} as="li" delay={index * 60} className="bg-bg-secondary p-8">
              <div className="flex items-start justify-between">
                <span className="font-heading text-sm text-text-muted">{service.number}</span>
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-text">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
