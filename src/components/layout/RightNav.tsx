"use client";

import { navItems } from "@/data/nav";
import { useActiveSectionContext } from "@/components/layout/ActiveSectionProvider";
import { cn } from "@/lib/utils";

export function RightNav() {
  const activeId = useActiveSectionContext();

  return (
    <nav
      aria-label="Navegação de seções"
      className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[220px] lg:shrink-0 lg:items-center lg:border-l lg:border-border lg:px-8"
    >
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group flex items-center gap-3 py-2 text-sm transition-colors",
                  isActive ? "text-accent" : "text-text-secondary hover:text-text"
                )}
              >
                <span
                  className={cn(
                    "h-px w-4 shrink-0 bg-text-muted transition-all",
                    isActive && "w-6 bg-accent"
                  )}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
