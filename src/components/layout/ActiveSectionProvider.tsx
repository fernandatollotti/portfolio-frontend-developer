"use client";

import { createContext, useContext } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/nav";

const ActiveSectionContext = createContext<string>(navItems[0]?.id ?? "");

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const activeId = useActiveSection(navItems.map((item) => item.id));
  return (
    <ActiveSectionContext.Provider value={activeId}>{children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  return useContext(ActiveSectionContext);
}
