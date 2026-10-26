import { Problem } from "@/types";

export const problems: Problem[] = [
  {
    id: "mobile",
    title: "Experiência mobile",
    description: "Site difícil de usar no celular.",
    icon: "mobile",
    href: "/servicos/recriacao-de-sites",
  },
  {
    id: "desempenho",
    title: "Desempenho",
    description: "Páginas que precisam de otimização.",
    icon: "performance",
    href: "/servicos/manutencao-de-sites",
  },
  {
    id: "redesign",
    title: "Redesign",
    description: "Apresentação desatualizada.",
    icon: "redesign",
    href: "/servicos/recriacao-de-sites",
  },
  {
    id: "manutencao",
    title: "Manutenção",
    description: "Falta de suporte técnico contínuo.",
    icon: "maintenance",
    href: "/servicos/manutencao-de-sites",
  },
];
