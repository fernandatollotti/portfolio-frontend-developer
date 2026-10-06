import { ArrowRight } from "lucide-react";
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
      {/* Mobile only — on desktop the photo lives in the sidebar card. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- local static asset, no optimization needed */}
      <img
        src="/images/avatar-face.webp"
        alt={`Foto de perfil de ${profile.name}`}
        width={256}
        height={256}
        loading="lazy"
        className="mb-8 h-28 w-28 rounded-full border-2 border-accent/60 object-cover p-1 sm:h-32 sm:w-32 lg:hidden"
      />

      <Reveal>
        <p className="mb-6 font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          {profile.tagline}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1
          id="home-heading"
          className="max-w-full font-heading text-3xl leading-[1.15] font-semibold tracking-tight text-text sm:text-4xl lg:text-3xl xl:text-4xl"
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
          <Button href={profile.whatsapp} variant="secondary">
            Vamos conversar
          </Button>
        </div>
      </Reveal>

      <a
        href="#sobre"
        aria-label="Scroll: ir para a próxima seção"
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5 transition-colors group-hover:border-accent">
          <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-accent" />
        </span>
        <span className="text-[10px] tracking-[0.2em] text-text-muted uppercase transition-colors group-hover:text-accent">
          Scroll
        </span>
      </a>
    </section>
  );
}
