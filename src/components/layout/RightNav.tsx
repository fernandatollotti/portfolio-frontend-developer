"use client";

import { navItems } from "@/data/nav";
import { navIconMap } from "@/components/layout/navIcons";
import { useActiveSectionContext } from "@/components/layout/ActiveSectionProvider";
import { cn } from "@/lib/utils";

export function RightNav() {
  const activeId = useActiveSectionContext();

  return (
    <nav
      aria-label="Navegação de seções"
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center lg:sticky lg:inset-x-auto lg:bottom-auto lg:top-0 lg:z-auto lg:h-screen lg:w-[96px] lg:shrink-0 lg:items-center lg:border-l lg:border-border"
    >
      <ul className="flex items-center gap-1 rounded-full border border-border/70 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md lg:flex-col lg:gap-2 lg:p-2">
        {navItems.map((item) => {
          const Icon = navIconMap[item.icon];
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="group relative">
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                  isActive
                    ? "border-accent bg-accent-dim text-accent"
                    : "border-transparent text-text-secondary hover:border-accent hover:text-accent"
                )}
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" strokeWidth={1.75} />
              </a>

              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded-md border border-border bg-bg-secondary px-3 py-1.5 text-xs whitespace-nowrap text-text opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 lg:top-1/2 lg:bottom-auto lg:left-auto lg:right-full lg:mr-3 lg:mb-0 lg:-translate-x-0 lg:-translate-y-1/2"
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
