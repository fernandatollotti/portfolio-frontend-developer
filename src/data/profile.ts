import { Profile } from "@/types";

/** Real name, photo, email and social links are all set. */
export const profile: Profile = {
  name: "Fernanda Tollotti",
  role: "Desenvolvedora Front-end",
  tagline: "Desenvolvedora Front-end",
  heroHeadline: "Desenvolvedora Front-end especializada em experiências web",
  heroDescription:
    "Desenvolvo interfaces responsivas e aplicações web com foco em qualidade técnica, performance, acessibilidade e experiência do usuário.",
  seoTitle: "Fernanda Tollotti | Desenvolvedora Front-end",
  seoDescription:
    "Desenvolvedora Front-end especializada em interfaces web, React, JavaScript e WordPress. Conheça meus projetos e soluções com foco em performance, acessibilidade e SEO.",
  keywords: [
    "Desenvolvedora Front-end",
    "Desenvolvimento Front-end",
    "Desenvolvedora WordPress",
    "Criação de sites profissionais",
    "Manutenção de sites WordPress",
    "Front-end Developer",
    "React",
    "JavaScript",
    "Next.js",
    "TypeScript",
  ],
  bio: [
    "Desenvolvedora Front-end com mais de 3 anos de experiência no desenvolvimento de interfaces, aplicações web e sites profissionais, com React, Next.js, JavaScript e WordPress. Participo de todas as etapas do projeto, da concepção visual da interface até a publicação, com atenção à qualidade técnica e à experiência de quem vai usar o produto.",
    "Meu trabalho se apoia em quatro pilares: performance, acessibilidade, responsividade e SEO. Cada projeto é pensado para carregar rápido, funcionar bem em qualquer dispositivo, ser acessível a todas as pessoas e ser encontrado nos mecanismos de busca.",
    "A experiência com gestão de projetos digitais ampliou minha visão além do código. Sei conduzir a comunicação entre clientes e equipes técnicas, organizar prioridades e garantir que a entrega final atenda ao objetivo do negócio.",  ],
  location: "Brasil",
  whatsapp: `https://wa.me/5511951040817?text=${encodeURIComponent(
    "Olá, Fernanda! Vi seu portfólio e gostaria de conversar sobre um projeto."
  )}`,
  email: "contato@fernandatollotti.com.br",
  socials: [
    { label: "GitHub", href: "https://github.com/fernandatollotti", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/fernanda-tollotti", icon: "linkedin" },
    { label: "E-mail", href: "mailto:contato@fernandatollotti.com.br", icon: "mail" },
  ],
};
