import { processSteps } from "@/data/process";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle eyebrow="Como eu trabalho" title="Processo" headingId="processo-heading" />
      </Reveal>

      <ol className="flex max-w-2xl flex-col">
        {processSteps.map((step, index) => (
          <Reveal
            key={step.id}
            as="li"
            delay={index * 80}
            className="flex gap-6 border-t border-border py-6 first:border-t-0 sm:gap-10"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <div>
              <h3 className="font-heading text-base font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
