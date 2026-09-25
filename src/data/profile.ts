import { Profile } from "@/types";

/**
 * Real name/photo are set — email and social links below are still placeholders,
 * swap them for the real ones before publishing.
 */
export const profile: Profile = {
  name: "Fernanda Tollotti",
  role: "Front-end Developer",
  tagline: "Front-end Developer",
  heroHeadline: "Desenvolvedora Front-end criando interfaces web modernas e de alta performance.",
  heroDescription:
    "Desenvolvo sites institucionais, aplicações web e projetos WordPress com React, Next.js e TypeScript, com foco em performance e acessibilidade.",
  seoTitle: "Fernanda Tollotti — Desenvolvedora Front-end",
  seoDescription:
    "Desenvolvedora Front-end especializada em React, Next.js e WordPress. Sites institucionais rápidos, responsivos e otimizados para SEO.",
  keywords: [
    "Desenvolvedora Front-end",
    "Criação de sites institucionais",
    "Desenvolvimento WordPress",
    "Front-end Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Sites institucionais",
  ],
  bio: [
    "Sou desenvolvedora Front-end, com foco na construção de interfaces modernas, responsivas e performáticas — unindo código limpo a atenção real aos detalhes visuais.",
    "Trabalho principalmente com React, Next.js e TypeScript, sempre buscando equilíbrio entre boa experiência de usuário, acessibilidade e performance técnica.",
    "Tenho experiência com criação de sites institucionais e projetos em WordPress, além de manutenção e evolução de produtos já em produção.",
    "Acredito em evolução contínua: estudo constantemente novas ferramentas e boas práticas para entregar interfaces cada vez mais sólidas, rápidas e bem construídas.",
  ],
  location: "Brasil",
  email: "seuemail@exemplo.com",
  socials: [
    { label: "GitHub", href: "https://github.com/seu-usuario", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/seu-usuario", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/seu-usuario", icon: "instagram" },
    { label: "E-mail", href: "mailto:seuemail@exemplo.com", icon: "mail" },
  ],
};
