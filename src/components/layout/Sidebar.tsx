"use client";

import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { cn } from "@/lib/utils";
import { useActiveProjectContext } from "@/components/layout/ActiveProjectProvider";

export function Sidebar() {
  const activeProject = useActiveProjectContext();
  const activeIndex = activeProject ? projects.findIndex((p) => p.id === activeProject.id) : -1;

  return (
    <aside
      aria-label="Perfil"
      className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:w-[320px] lg:shrink-0 lg:p-4"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-border bg-bg-secondary shadow-2xl">
        {/* Profile layer */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            activeProject ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- local static asset, no optimization needed */}
          <img
            src="/images/avatar.webp"
            alt={`Foto de perfil de ${profile.name}`}
            width={1086}
            height={1448}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bg from-15% via-bg/40 via-55% to-transparent"
          />

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
            <p className="mt-1 font-heading text-2xl font-semibold text-text">{profile.name}</p>
            <p className="mt-1 text-sm font-medium text-accent">
              {profile.role.split(" & ").map((part, i) => (
                <span key={part} className="whitespace-nowrap">
                  {i > 0 && " & "}
                  {part}
                </span>
              ))}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {profile.heroDescription}
            </p>

            <div className="my-5 h-px bg-border" />

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
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

        {/* Active-project layer — full-bleed screenshot, top-anchored so the header/
            hero area (the most recognizable part of a site) stays in frame. */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            activeProject ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          {activeProject && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element -- local static asset, no optimization needed */}
              <img
                src={activeProject.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-black/40 backdrop-blur-md" />

              <div className="absolute inset-x-6 bottom-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  {activeProject.category} · {activeProject.year}
                </p>
                <h2 className="mt-2 font-heading text-2xl font-semibold text-text">
                  {activeProject.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {activeProject.description}
                </p>

                <div className="my-5 h-px bg-border" />

                <div className="flex items-center justify-between gap-3">
                  <a
                    href={activeProject.href ?? "#"}
                    target={activeProject.href?.startsWith("http") ? "_blank" : undefined}
                    rel={activeProject.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pr-2.5 pl-5 font-heading text-sm font-medium text-bg transition-colors hover:bg-accent/90"
                  >
                    Ver projeto
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bg/15">
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                  <p className="shrink-0 text-xs text-text-muted">
                    <span className="text-text-secondary">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>{" "}
                    / {String(projects.length).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
