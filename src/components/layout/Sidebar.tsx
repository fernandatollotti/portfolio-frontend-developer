import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { getInitials } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside
      aria-label="Perfil"
      className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:w-[320px] lg:shrink-0 lg:p-4"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-border bg-bg-secondary shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed */}
        <img
          src="/images/avatar-placeholder.svg"
          alt={`Foto de perfil de ${profile.name}`}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-bg from-15% via-bg/40 via-55% to-transparent"
        />

        <span className="absolute top-6 left-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/70 font-heading text-xs font-semibold text-text backdrop-blur">
          {getInitials(profile.name)}
        </span>

        <nav aria-label="Redes sociais" className="absolute top-6 right-6 flex flex-col gap-2">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/70 text-text-secondary backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </nav>

        <div className="absolute inset-x-6 bottom-6">
          <p className="text-sm text-text-secondary">Olá, eu sou</p>
          <h1 className="mt-1 font-heading text-2xl font-semibold text-text">{profile.name}</h1>
          <p className="mt-1 text-sm font-medium text-accent">{profile.role}</p>

          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {profile.heroDescription}
          </p>

          <div className="my-5 h-px bg-border" />

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pr-2.5 pl-5 font-heading text-sm font-medium text-bg transition-colors hover:bg-accent/90"
            >
              Vamos conversar
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bg/15">
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar CV
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
