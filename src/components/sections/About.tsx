import { profile } from "@/data/profile";
import { metrics } from "@/data/metrics";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="scroll-mt-24 border-b border-border py-20 sm:py-28">
      <Reveal>
        <SectionTitle eyebrow="Sobre" title="Sobre mim" headingId="sobre-heading" />
      </Reveal>
      <div className="max-w-2xl space-y-5">
        {profile.bio.map((paragraph, index) => (
          <Reveal key={index} delay={index * 80}>
            <p className="text-base leading-relaxed text-text-secondary">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.id} as="li" delay={index * 80}>
            <p className="font-heading text-3xl font-semibold text-accent sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-1 text-sm text-text-secondary">{metric.label}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
