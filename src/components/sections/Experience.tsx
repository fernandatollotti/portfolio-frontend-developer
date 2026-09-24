"use client";

import { experience } from "@/data/experience";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const typeLabel: Record<(typeof experience)[number]["type"], string> = {
  work: "Experiência profissional",
  education: "Formação",
  certification: "Curso / Certificação",
};

export function Experience() {
  const { ref, progress } = useScrollProgress<HTMLOListElement>();

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle
          eyebrow="Trajetória"
          title="Formação & Experiência"
          headingId="experiencia-heading"
        />
      </Reveal>

      <ol ref={ref} className="relative max-w-2xl pl-8">
        <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-border" />
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 w-px bg-accent transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />

        {experience.map((item, index) => (
          <Reveal key={item.id} as="li" delay={index * 100} className="relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[calc(2rem+5px)] h-[10px] w-[10px] rounded-full bg-accent"
            />
            <span className="font-heading text-sm font-semibold text-accent">{item.year}</span>
            <p className="mt-1 text-xs tracking-wide text-text-muted uppercase">
              {typeLabel[item.type]}
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold text-text">{item.title}</h3>
            <p className="text-sm text-text-secondary">{item.org}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
            {item.tech && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
