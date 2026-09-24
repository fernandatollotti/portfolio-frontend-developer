import { Profile } from "@/types";

/**
 * Placeholder content — replace every field with your real information.
 * This is the single source of truth for the sidebar, hero and SEO metadata.
 *
 * SEO notes (local SEO focus: São Paulo, SP):
 * - Primary keyword: "Desenvolvedor Front-end em São Paulo"
 * - Secondary keywords: "Criação de sites institucionais", "Desenvolvimento WordPress",
 *   "React", "Next.js", "TypeScript"
 * - "São Paulo" appears in the H1 (heroHeadline), the hero eyebrow (tagline), the meta
 *   title/description, the bio paragraphs and the Person JSON-LD in layout.tsx — enough
 *   for topical/geographic relevance without keyword-stuffing the copy.
 */
export const profile: Profile = {
  name: "Seu Nome",
  role: "Front-end Developer",
  tagline: "Front-end Developer em São Paulo",
  heroHeadline: "Desenvolvedor Front-end em São Paulo, criando interfaces web modernas e de alta performance.",
  heroDescription:
    "Desenvolvo sites institucionais, aplicações web e projetos WordPress com React, Next.js e TypeScript — atendendo empresas em São Paulo e em todo o Brasil, com foco em performance e acessibilidade.",
  seoTitle: "Desenvolvedor Front-end em São Paulo — Seu Nome",
  seoDescription:
    "Desenvolvedor Front-end em São Paulo especializado em React, Next.js e WordPress. Sites institucionais rápidos, responsivos e otimizados para SEO.",
  keywords: [
    "Desenvolvedor Front-end São Paulo",
    "Criação de sites São Paulo",
    "Desenvolvimento WordPress São Paulo",
    "Front-end Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Sites institucionais",
    "Desenvolvimento Web São Paulo",
  ],
  bio: [
    "Sou desenvolvedor Front-end em São Paulo, com foco na construção de interfaces modernas, responsivas e performáticas — unindo código limpo a atenção real aos detalhes visuais.",
    "Trabalho principalmente com React, Next.js e TypeScript, sempre buscando equilíbrio entre boa experiência de usuário, acessibilidade e performance técnica.",
    "Tenho experiência com criação de sites institucionais e projetos em WordPress, além de manutenção e evolução de produtos já em produção — atendendo clientes em São Paulo e em outras regiões do Brasil.",
    "Acredito em evolução contínua: estudo constantemente novas ferramentas e boas práticas para entregar interfaces cada vez mais sólidas, rápidas e bem construídas.",
  ],
  location: "São Paulo, SP",
  email: "seuemail@exemplo.com",
  socials: [
    { label: "GitHub", href: "https://github.com/seu-usuario", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/seu-usuario", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/seu-usuario", icon: "instagram" },
    { label: "E-mail", href: "mailto:seuemail@exemplo.com", icon: "mail" },
  ],
};
