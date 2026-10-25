import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "sites",
    number: "01",
    title: "Criação de sites profissionais",
    description:
      "Site institucional ou landing page do layout à publicação — rápido, responsivo e pronto para aparecer no Google. Em WordPress, para você editar sozinho, ou em código sob medida.",
    idealFor: "Empresas e profissionais que precisam de presença online",
    icon: "layout",
  },
  {
    id: "frontend",
    number: "02",
    title: "Desenvolvimento Front-end",
    description:
      "Transformo layouts do Figma em interfaces e aplicações web com React, Next.js e TypeScript, integradas à sua API e prontas para produção.",
    idealFor: "Agências, startups e times de produto",
    icon: "code",
  },
  {
    id: "manutencao",
    number: "03",
    title: "Manutenção e melhorias",
    description:
      "Correções, atualizações, novas seções e ganhos de performance e SEO em sites que já estão no ar, incluindo manutenção de sites WordPress.",
    idealFor: "Quem já tem site e precisa de suporte contínuo",
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
