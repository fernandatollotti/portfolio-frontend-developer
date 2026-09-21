import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que dizem sobre o trabalho"
          headingId="depoimentos-heading"
        />
      </Reveal>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.id}
            as="li"
            delay={index * 80}
            className="flex flex-col rounded-2xl border border-border bg-bg-secondary p-6"
          >
            <Quote className="h-5 w-5 text-accent" aria-hidden="true" />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-heading text-sm font-semibold text-text">{testimonial.name}</p>
              <p className="text-xs text-text-muted">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
