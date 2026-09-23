import { MapPin, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Sidebar() {
  return (
    <aside
      aria-label="Perfil"
      className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:shrink-0 lg:flex-col lg:overflow-y-auto lg:border-r lg:border-border lg:px-8 lg:py-12"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed */}
        <img
          src="/images/avatar-placeholder.svg"
          alt={`Foto de perfil de ${profile.name}`}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full border border-border bg-bg/80 px-3 py-1.5 text-xs font-medium text-text backdrop-blur">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {profile.availability}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-sm text-text-secondary">Olá, eu sou</p>
        <h1 className="mt-1 font-heading text-2xl font-semibold text-text">{profile.name}</h1>
        <p className="mt-1 text-sm font-medium text-accent">{profile.role}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {profile.heroDescription}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary">
        <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
        {profile.location}
      </span>

      <div className="mt-6 border-t border-border" />

      <div className="mt-6 flex flex-col gap-3">
        <a
          href="#contato"
          className="group inline-flex items-center justify-between rounded-full bg-accent px-5 py-3 font-heading text-sm font-medium text-bg transition-colors hover:bg-accent/90"
        >
          Vamos conversar
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>

        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 font-heading text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Baixar CV
          </a>
        )}
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
    </aside>
  );
}
