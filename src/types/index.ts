export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "dribbble" | "x" | "mail";
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  bio: string[];
  location: string;
  email: string;
  socials: SocialLink[];
  resumeUrl?: string;
}

export type NavIcon =
  | "home"
  | "clients"
  | "about"
  | "experience"
  | "projects"
  | "services"
  | "process"
  | "technologies"
  | "testimonials"
  | "contact";

export interface NavItem {
  id: string;
  label: string;
  icon: NavIcon;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
}

export interface Client {
  id: string;
  name: string;
  projectsCount?: number;
}

export interface ExperienceItem {
  id: string;
  year: string;
  type: "work" | "education" | "certification";
  title: string;
  org: string;
  description: string;
  tech?: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "code" | "globe" | "layout" | "wordpress" | "wrench";
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
}
