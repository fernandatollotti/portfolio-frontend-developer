import { profile } from "@/data/profile";
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
    </section>
  );
}
