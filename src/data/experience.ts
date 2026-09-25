import { ExperienceItem } from "@/types";

/**
 * Timeline baseada no histórico real do LinkedIn.
 * Datas de "Estagiária" (Agicom Metadata) e "Aprendiz da Qualidade" (Johnson Controls)
 * são aproximadas — a captura de tela original estava difícil de ler nesses dois
 * períodos, então vale conferir e ajustar antes de publicar.
 */
export const experience: ExperienceItem[] = [
  {
    id: "webgui",
    year: "2025 – atual",
    type: "work",
    title: "Web Developer",
    org: "Webgui",
    description:
      "Desenvolvimento, manutenção e otimização de websites para múltiplos clientes, acompanhando requisitos técnicos, prazos e padrões de qualidade. Acompanhamento sistemático de demandas e correções, com interface direta com clientes e equipes para levantamento de requisitos e resolução de problemas.",
  },
  {
    id: "mackenzie",
    year: "2024 – atual",
    type: "education",
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Universidade Presbiteriana Mackenzie",
    description:
      "Formação com foco em lógica de programação, desenvolvimento web e fundamentos de engenharia de software.",
  },
  {
    id: "crp-manga",
    year: "2023 – 2024",
    type: "work",
    title: "Gestão de Projetos Digitais",
    org: "CRP Mangá",
    description:
      "Acompanhamento de múltiplos projetos e sistemas simultâneos, organizando demandas, prioridades e prazos. Atuação como ponte entre clientes e equipe técnica, identificando pendências e riscos e apoiando a resolução de problemas para garantir a qualidade das entregas.",
  },
  {
    id: "wa3",
    year: "2021 – 2023",
    type: "work",
    title: "Desenvolvedora WordPress & PHP Júnior",
    org: "Agência WA3 — Marketing e Comunicação",
    description:
      "Desenvolvimento e manutenção de websites em WordPress e PHP, seguindo requisitos técnicos e padrões definidos para garantir qualidade, funcionalidade e conformidade das entregas.",
    tech: ["WordPress", "PHP"],
  },
  {
    id: "agicom",
    year: "2018 – 2019",
    type: "work",
    title: "Estagiária",
    org: "Agicom Metadata",
    description:
      "Apoio ao desenvolvimento e acompanhamento de projetos digitais, incluindo cronogramas, levantamento de requisitos e participação em reuniões de briefing — traduzindo necessidades dos clientes em soluções técnicas.",
  },
  {
    id: "metodista",
    year: "2017 – 2019",
    type: "education",
    title: "Tecnólogo em Produção Multimídia",
    org: "Universidade Metodista de São Paulo",
    description:
      "Formação com atividades em design gráfico, animação, criação de websites, curta-metragem, vídeo-clipe e modelagem 3D.",
  },
  {
    id: "johnson-controls",
    year: "2014 – 2016",
    type: "work",
    title: "Aprendiz da Qualidade",
    org: "Johnson Controls",
    description:
      "Coleta e controle de dados dimensionais e acompanhamento do cronograma de manutenção de ativos, apoiando a identificação de desvios e a tomada de decisão a partir da análise de informações.",
  },
];
