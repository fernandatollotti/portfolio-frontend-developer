import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "frontend",
    number: "01",
    title: "Desenvolvimento Front-end",
    description: "Criação de interfaces modernas, responsivas e performáticas com React e Next.js.",
    icon: "code",
  },
  {
    id: "websites",
    number: "02",
    title: "Desenvolvimento de Websites",
    description:
      "Desenvolvimento de sites institucionais para empresas em São Paulo e em todo o Brasil.",
    icon: "globe",
  },
  {
    id: "wordpress",
    number: "03",
    title: "WordPress",
    description: "Criação, personalização e evolução de sites WordPress com foco em SEO e performance.",
    icon: "wordpress",
  },
  {
    id: "manutencao",
    number: "04",
    title: "Manutenção e evolução",
    description: "Correções, melhorias, atualizações e evolução contínua de projetos existentes.",
    icon: "wrench",
  },
];
