import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "briefing",
    number: "01",
    title: "Briefing",
    description: "Entendimento do projeto, objetivos e necessidades.",
  },
  {
    id: "planejamento",
    number: "02",
    title: "Planejamento",
    description: "Definição da estrutura, tecnologias e solução.",
  },
  {
    id: "desenvolvimento",
    number: "03",
    title: "Desenvolvimento",
    description: "Implementação da interface e funcionalidades.",
  },
  {
    id: "testes",
    number: "04",
    title: "Testes",
    description: "Validação de responsividade, funcionamento, performance e compatibilidade.",
  },
  {
    id: "entrega",
    number: "05",
    title: "Entrega",
    description: "Publicação, ajustes finais e orientações.",
  },
];
