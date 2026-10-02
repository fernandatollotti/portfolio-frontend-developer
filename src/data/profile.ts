import { Profile } from "@/types";

/** Real name, photo, email and social links are all set. */
export const profile: Profile = {
  name: "Fernanda Tollotti",
  role: "Front-end Developer & Web Designer",
  tagline: "Front-end Developer & Web Designer",
  heroHeadline: "Interfaces web rápidas, acessíveis e pensadas para gerar resultados",
  heroDescription:
    "Como desenvolvedora Front-end e Web Designer, crio sites institucionais e aplicações web que unem performance, SEO e uma boa experiência para quem acessa — do layout à publicação.",
  seoTitle: "Fernanda Tollotti | Front-end Developer & Web Designer",
  seoDescription:
    "Desenvolvedora Front-end e Web Designer. Criação de sites institucionais e landing pages rápidos, responsivos, acessíveis e otimizados para o Google.",
  keywords: [
    "Desenvolvedora Front-end",
    "Web Designer",
    "Criação de landing pages",
    "Criação de sites institucionais",
    "Desenvolvimento WordPress",
    "Front-end Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Sites institucionais",
  ],
  bio: [
    "Desenvolvedora Front-end e Web Designer com mais de 3 anos de experiência na criação de sites institucionais e landing pages. Participo de todas as etapas do projeto, da concepção visual da interface até a publicação, com atenção à qualidade técnica e à experiência de quem vai usar o produto.",
    "Meu trabalho se apoia em quatro pilares: performance, acessibilidade, responsividade e SEO. Cada projeto é pensado para carregar rápido, funcionar bem em qualquer dispositivo, ser acessível a todas as pessoas e ser encontrado nos mecanismos de busca.",
    "A experiência com gestão de projetos digitais ampliou minha visão além do código. Sei conduzir a comunicação entre clientes e equipes técnicas, organizar prioridades e garantir que a entrega final atenda ao objetivo do negócio.",  ],
  location: "Brasil",
  whatsapp: `https://wa.me/551151040817?text=${encodeURIComponent(
    "Olá, Fernanda! Vi seu portfólio e gostaria de conversar sobre um projeto."
  )}`,
  email: "contato@fernandatollotti.com.br",
  socials: [
    { label: "GitHub", href: "https://github.com/fernandatollotti", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/fernanda-tollotti", icon: "linkedin" },
    { label: "E-mail", href: "mailto:contato@fernandatollotti.com.br", icon: "mail" },
  ],
};
