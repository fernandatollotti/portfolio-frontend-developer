import { Profile } from "@/types";

/** Real name, photo, email and social links are all set. */
export const profile: Profile = {
  name: "Fernanda Tollotti",
  role: "Front-end Developer",
  tagline: "Front-end Developer",
  heroHeadline: "Desenvolvedora Front-end especializada em interfaces web modernas, rápidas e acessíveis",
  heroDescription:
    "Desenvolvo sites institucionais e aplicações web com React e WordPress, unindo performance, SEO e experiência do usuário em cada projeto.",
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
    "Desenvolvedora Front-end com mais de 3 anos de experiência em desenvolvimento web. Minha trajetória começou em WordPress e PHP e foi direcionada progressivamente para o desenvolvimento Front-end moderno.",
    "Tenho experiência no desenvolvimento e manutenção de websites e landing pages, utilizando WordPress, JavaScript, HTML, CSS, PHP e MySQL, além de conhecimentos em React. O trabalho é orientado por responsividade, performance, acessibilidade, SEO e experiência do usuário.",
    "Também atuei com gestão de projetos digitais, fazendo a ponte entre clientes e equipes técnicas — experiência que reforçou a importância de entender bem o problema antes de propor uma solução técnica.",
    "Atualmente curso Análise e Desenvolvimento de Sistemas, aprofundando conhecimentos em programação e engenharia de software, com foco em entregar soluções completas, bem estruturadas e orientadas a resultado.",
  ],
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
