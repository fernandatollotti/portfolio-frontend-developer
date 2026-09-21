import { technologies } from "@/data/technologies";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Technologies() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle
          eyebrow="Stack técnico"
          title="Tecnologias"
          headingId="tecnologias-heading"
        />
      </Reveal>

      <ul className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <Reveal key={tech.id} as="li" delay={index * 40}>
            <span className="inline-flex items-center rounded-full border border-border px-5 py-2.5 font-heading text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
              {tech.name}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
