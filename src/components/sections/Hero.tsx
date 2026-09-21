import { ArrowDown, ArrowRight, MapPin, CircleDot } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-[92vh] scroll-mt-24 flex-col justify-center overflow-hidden border-b border-border py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
      />

      <Reveal>
        <p className="mb-6 font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          {profile.tagline}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1
          id="home-heading"
          className="max-w-3xl font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          {profile.heroHeadline}
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {profile.heroDescription}
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projetos">
            Ver projetos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#contato" variant="secondary">
            Vamos conversar
          </Button>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.location}
          </span>
        </div>
      </Reveal>

      <a
        href="#clientes"
        aria-label="Rolar para a próxima seção"
        className="mt-16 inline-flex w-fit items-center gap-2 text-xs tracking-widest text-text-muted uppercase transition-colors hover:text-accent"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        Scroll
      </a>
    </section>
  );
}
