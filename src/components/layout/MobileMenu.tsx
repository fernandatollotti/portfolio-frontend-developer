"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { useActiveSectionContext } from "@/components/layout/ActiveSectionProvider";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSectionContext();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-bg/90 px-6 py-4 backdrop-blur">
        <a href="#home" className="font-heading text-base font-semibold text-text">
          {profile.name}
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-bg px-6 py-6 transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between">
          <span className="font-heading text-base font-semibold text-text">{profile.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Seções" className="mt-10 flex-1">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block border-b border-border py-4 font-heading text-lg",
                      isActive ? "text-accent" : "text-text"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 pb-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
