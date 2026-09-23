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
      className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[96px] lg:shrink-0 lg:items-center lg:justify-center lg:border-l lg:border-border"
    >
      <ul className="flex flex-col gap-2">
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
                className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-md border border-border bg-bg-secondary px-3 py-1.5 text-xs whitespace-nowrap text-text opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
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
