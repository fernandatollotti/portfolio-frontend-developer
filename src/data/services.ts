import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "criacao",
    number: "01",
    title: "Criação de sites",
    description:
      "Sites institucionais e landing pages do zero, do layout à publicação. Desenvolvimento Front-end com React e Next.js ou em WordPress, para você editar o conteúdo sozinho.",
    idealFor: "Empresas e profissionais que ainda não têm site",
    icon: "layout",
  },
  {
    id: "recriacao",
    number: "02",
    title: "Recriação de sites",
    description:
      "Redesign e reconstrução de sites desatualizados ou lentos: visual novo, código moderno, mais performance e SEO, preservando o conteúdo e cuidando dos redirecionamentos para não perder posições no Google.",
    idealFor: "Quem tem um site antigo, lento ou difícil de atualizar",
    icon: "refresh",
  },
  {
    id: "manutencao",
    number: "03",
    title: "Manutenção e evolução",
    description:
      "Correções, atualizações, novas páginas e funcionalidades em sites que já estão no ar, incluindo manutenção de sites WordPress.",
    idealFor: "Quem precisa de suporte contínuo para o site",
    icon: "wrench",
  },
  {
    id: "qa",
    number: "04",
    title: "QA e testes de interface",
    description:
      "Testes funcionais, de responsividade, entre navegadores e de acessibilidade antes do lançamento, com relatório de bugs e validação das correções.",
    idealFor: "Projetos prestes a lançar ou times sem QA dedicado",
    icon: "check",
  },
];
