import { MapPin, CircleDot } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Button } from "@/components/ui/Button";

export function Sidebar() {
  return (
    <aside
      aria-label="Perfil"
      className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[280px] lg:shrink-0 lg:flex-col lg:justify-between lg:overflow-y-auto lg:border-r lg:border-border lg:px-8 lg:py-12"
    >
      <div>
        <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border bg-bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed */}
          <img
            src="/images/avatar-placeholder.svg"
            alt={`Foto de perfil de ${profile.name}`}
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="mt-6 font-heading text-xl font-semibold text-text">{profile.name}</h1>
        <p className="mt-1 text-sm font-medium text-accent">{profile.role}</p>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          {profile.heroDescription}
        </p>

        <div className="mt-6 flex flex-col gap-2 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.availability}
          </span>
        </div>

        <nav aria-label="Redes sociais" className="mt-6 flex items-center gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>

      <Button href="#contato" className="mt-10 w-full">
        Vamos conversar
      </Button>
    </aside>
  );
}
