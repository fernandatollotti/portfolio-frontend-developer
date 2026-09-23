import {
  Home,
  Building2,
  UserRound,
  GraduationCap,
  FolderKanban,
  Wrench,
  Workflow,
  Code2,
  Quote,
  Send,
  type LucideIcon,
} from "lucide-react";
import { NavIcon } from "@/types";

export const navIconMap: Record<NavIcon, LucideIcon> = {
  home: Home,
  clients: Building2,
  about: UserRound,
  experience: GraduationCap,
  projects: FolderKanban,
  services: Wrench,
  process: Workflow,
  technologies: Code2,
  testimonials: Quote,
  contact: Send,
};
