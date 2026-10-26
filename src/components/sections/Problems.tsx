import { Gauge, Paintbrush, Smartphone, Wrench, type LucideIcon } from "lucide-react";
import { problems } from "@/data/problems";
import { Problem } from "@/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<Problem["icon"], LucideIcon> = {
  mobile: Smartphone,
  performance: Gauge,
  redesign: Paintbrush,
  maintenance: Wrench,
};

export function Problems() {
  return (
    <section
      id="problemas"
      aria-labelledby="problemas-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle
          eyebrow="Como posso ajudar"
          title="Problemas que resolvo"
          description="Se o seu site passa por alguma destas situações, eu posso ajudar."
          headingId="problemas-heading"
        />
      </Reveal>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {problems.map((problem, index) => {
          const Icon = iconMap[problem.icon];
          return (
            <Reveal
              key={problem.id}
              as="li"
              delay={index * 60}
              className="flex gap-5 rounded-2xl border border-border bg-bg-secondary p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-dim text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-text">{problem.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {problem.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
