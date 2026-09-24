"use client";

import { useEffect, useState } from "react";

/**
 * Like useActiveSection, but returns null when nothing is intersecting instead of
 * defaulting to the first item — the sidebar should fall back to the profile card
 * whenever the visitor isn't scrolled through a project.
 */
export function useActiveProjectId(projectIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const items = projectIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (items.length === 0) return;

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let winnerId: string | null = null;
        let winnerRatio = 0;
        for (const [id, ratio] of visibleRatios) {
          if (ratio > winnerRatio) {
            winnerRatio = ratio;
            winnerId = id;
          }
        }

        setActiveId(winnerRatio > 0 ? winnerId : null);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-35% 0px -35% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectIds.join(",")]);

  return activeId;
}
