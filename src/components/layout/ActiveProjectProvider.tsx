"use client";

import { createContext, useContext, useMemo } from "react";
import { useActiveProjectId } from "@/hooks/useActiveProjectId";
import { projects } from "@/data/projects";
import { projectDomId } from "@/lib/utils";
import { Project } from "@/types";

const ActiveProjectContext = createContext<Project | null>(null);

export function ActiveProjectProvider({ children }: { children: React.ReactNode }) {
  const domIds = useMemo(() => projects.map((project) => projectDomId(project.id)), []);
  const activeDomId = useActiveProjectId(domIds);
  const activeProject = projects.find((project) => projectDomId(project.id) === activeDomId) ?? null;

  return (
    <ActiveProjectContext.Provider value={activeProject}>{children}</ActiveProjectContext.Provider>
  );
}

export function useActiveProjectContext() {
  return useContext(ActiveProjectContext);
}
