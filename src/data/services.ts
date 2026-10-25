import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "frontend",
    number: "01",
    title: "Desenvolvimento Front-end",
    description:
      "Interfaces e aplicações web com React, Next.js, TypeScript e JavaScript — componentizadas, responsivas e performáticas.",
    icon: "code",
  },
  {
    id: "qa",
    number: "02",
    title: "QA e testes de interface",
    description:
      "Testes funcionais, de responsividade, compatibilidade entre navegadores e acessibilidade, com relatório de bugs e validação das correções.",
    icon: "check",
  },
  {
    id: "sites",
    number: "03",
    title: "Criação de sites profissionais",
    description:
      "Sites institucionais e páginas profissionais do layout à publicação, otimizados para SEO, performance e conversão.",
    icon: "layout",
  },
  {
    id: "wordpress",
    number: "04",
    title: "Desenvolvimento WordPress",
    description:
      "Temas e personalizações sob medida em WordPress e PHP, com um painel simples para você gerenciar o conteúdo.",
    icon: "wordpress",
  },
  {
    id: "manutencao",
    number: "05",
    title: "Manutenção de sites WordPress",
    description:
      "Atualizações, correções, melhorias de performance e evolução contínua de sites WordPress já publicados.",
    icon: "wrench",
  },
];
