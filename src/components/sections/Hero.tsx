import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 600 1300"
      preserveAspectRatio="xMidYMid slice"
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

      <circle cx="420" cy="430" r="170" fill="url(#hero-glow)" />
      <circle cx="420" cy="430" r="150" fill="none" stroke="#26262d" strokeWidth="1" />
      <circle cx="420" cy="430" r="105" fill="none" stroke="#26262d" strokeWidth="1" />
      <circle cx="420" cy="430" r="60" fill="none" stroke="#dab061" strokeWidth="1.5" opacity="0.5" />

      <rect x="300" y="650" width="180" height="180" fill="url(#hero-dots)" opacity="0.6" />

      <line x1="120" y1="80" x2="520" y2="560" stroke="#26262d" strokeWidth="1" />
      <line x1="260" y1="20" x2="560" y2="380" stroke="#dab061" strokeWidth="1" opacity="0.35" />
      <line x1="180" y1="900" x2="480" y2="1220" stroke="#26262d" strokeWidth="1" />

      <circle cx="470" cy="980" r="5" fill="#dab061" />
      <circle cx="410" cy="1040" r="3" fill="#dab061" opacity="0.6" />
      <circle cx="330" cy="620" r="140" fill="none" stroke="#26262d" strokeWidth="1" opacity="0.5" />
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
