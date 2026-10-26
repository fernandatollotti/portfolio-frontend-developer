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
  /** Dedicated <title> copy — kept separate from heroHeadline so each can be tuned for its own audience (search snippet vs. on-page reading). */
  seoTitle: string;
  /** Dedicated meta description copy, ~150-160 characters. */
  seoDescription: string;
  /** Target keywords for the <meta name="keywords"> tag and general on-page content strategy. */
  keywords: string[];
  bio: string[];
  location: string;
  whatsapp: string;
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
  imageAlt: string;
  href?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Who the service is for, shown under the description. */
  idealFor?: string;
  icon: "code" | "globe" | "layout" | "wordpress" | "wrench" | "check" | "refresh";
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

export interface ServicePage {
  /** `id` of the matching entry in services.ts. */
  serviceId: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  includedTitle: string;
  included: { title: string; text: string }[];
  forWhom: string[];
  /** Ids from projects.ts shown as examples; empty hides the section. */
  projectIds: string[];
  faq: { question: string; answer: string }[];
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  icon: "mobile" | "performance" | "redesign" | "maintenance";
  /** Service page that solves this problem. */
  href?: string;
}
