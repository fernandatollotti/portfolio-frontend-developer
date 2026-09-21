"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let winnerId = activeId;
        let winnerRatio = 0;
        for (const [id, ratio] of visibleRatios) {
          if (ratio > winnerRatio) {
            winnerRatio = ratio;
            winnerId = id;
          }
        }

        if (winnerRatio > 0) {
          setActiveId(winnerId);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-15% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
