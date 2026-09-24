import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[45%] opacity-70 xl:block"
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dab061" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#dab061" stopOpacity="0" />
        </radialGradient>
        <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#26262d" />
        </pattern>
      </defs>

      <circle cx="980" cy="260" r="260" fill="url(#hero-glow)" />
      <circle cx="980" cy="260" r="230" fill="none" stroke="#26262d" strokeWidth="1" />
      <circle cx="980" cy="260" r="160" fill="none" stroke="#26262d" strokeWidth="1" />
      <circle cx="980" cy="260" r="90" fill="none" stroke="#dab061" strokeWidth="1.5" opacity="0.5" />

      <rect x="760" y="420" width="220" height="220" fill="url(#hero-dots)" opacity="0.6" />

      <line x1="700" y1="40" x2="1160" y2="500" stroke="#26262d" strokeWidth="1" />
      <line x1="840" y1="0" x2="1200" y2="360" stroke="#dab061" strokeWidth="1" opacity="0.35" />

      <circle cx="1120" cy="620" r="5" fill="#dab061" />
      <circle cx="1080" cy="560" r="3" fill="#dab061" opacity="0.6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-[92vh] scroll-mt-24 flex-col justify-center overflow-hidden border-b border-border py-20"
    >
      <HeroGraphic />

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
          <Button href={`mailto:${profile.email}`} variant="secondary">
            Vamos conversar
          </Button>
        </div>
      </Reveal>

      <a
        href="#clientes"
        aria-label="Rolar para a próxima seção"
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
