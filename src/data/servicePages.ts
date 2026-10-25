import { ServicePage } from "@/types";

/**
 * Content for the dedicated service pages at /servicos/[slug].
 * Keyed by the `id` of each entry in `services.ts`.
 */
export const servicePages: ServicePage[] = [
  {
    serviceId: "criacao",
    slug: "criacao-de-sites",
    seoTitle: "Criação de Sites Profissionais",
    seoDescription:
      "Criação de sites institucionais e landing pages rápidos, responsivos e otimizados para o Google. Desenvolvimento Front-end com React, Next.js ou WordPress.",
    eyebrow: "Serviço 01",
    headline: "Criação de sites profissionais, do layout à publicação",
    intro: [
      "Um site é, muitas vezes, o primeiro contato de um cliente com a sua empresa. Por isso, ele precisa carregar rápido, funcionar bem no celular, transmitir confiança e ser encontrado no Google.",
      "Desenvolvo sites institucionais e landing pages do zero, cuidando de todas as etapas: estrutura de conteúdo, interface, desenvolvimento, SEO técnico e publicação. Você escolhe entre um site em código sob medida, com React e Next.js, ou em WordPress, para editar textos e imagens sozinho pelo painel.",
    ],
    includedTitle: "O que está incluído",
    included: [
      {
        title: "Layout responsivo",
        text: "Interface pensada para celular, tablet e desktop, com leitura confortável em qualquer tela.",
      },
      {
        title: "SEO técnico desde o início",
        text: "Títulos, descrições, dados estruturados, sitemap e URLs amigáveis configurados para o Google entender o seu site.",
      },
      {
        title: "Performance",
        text: "Imagens otimizadas e código enxuto para um carregamento rápido e boas notas no Core Web Vitals.",
      },
      {
        title: "Acessibilidade",
        text: "Contraste, navegação por teclado e textos alternativos para que todas as pessoas consigam usar o site.",
      },
      {
        title: "Integrações essenciais",
        text: "WhatsApp, formulário de contato, Google Analytics e Search Console configurados.",
      },
      {
        title: "Publicação e orientação",
        text: "Configuração de domínio e hospedagem, além de orientações para você cuidar do site no dia a dia.",
      },
    ],
    forWhom: [
      "Empresas e profissionais que ainda não têm site",
      "Negócios que dependem só de redes sociais e querem um canal próprio",
      "Quem precisa de uma landing page para divulgar um produto, serviço ou campanha",
    ],
    projectIds: ["atos-hub", "tempervale", "macena-silva"],
    faq: [
      {
        question: "Qual a diferença entre um site em WordPress e um site em código sob medida?",
        answer:
          "O WordPress é ideal quando você quer atualizar textos, imagens e posts sozinho por um painel. O código sob medida, com React e Next.js, oferece mais liberdade de design e o máximo de performance, e é indicado para sites com interações específicas ou que vão crescer como produto. Na conversa inicial eu indico o melhor caminho para o seu caso.",
      },
      {
        question: "Quanto tempo leva para criar um site?",
        answer:
          "Depende do número de páginas, do conteúdo disponível e das funcionalidades. O prazo é definido no orçamento, depois do briefing, e acompanhado em cada etapa do projeto.",
      },
      {
        question: "O site vai aparecer no Google?",
        answer:
          "O site é entregue com todo o SEO técnico configurado e cadastrado no Google Search Console. O posicionamento depende também de conteúdo e tempo, mas o seu site começa com a base certa.",
      },
      {
        question: "Preciso ter o texto e as imagens prontos?",
        answer:
          "Não é obrigatório. Posso ajudar a organizar a estrutura de conteúdo de cada página e indicar o que é necessário para começar.",
      },
    ],
  },
  {
    serviceId: "recriacao",
    slug: "recriacao-de-sites",
    seoTitle: "Recriação e Redesign de Sites",
    seoDescription:
      "Redesign e reconstrução de sites antigos ou lentos: visual novo, código moderno, mais performance e SEO, sem perder o conteúdo e as posições no Google.",
    eyebrow: "Serviço 02",
    headline: "Recriação de sites: visual novo, código moderno e mais resultado",
    intro: [
      "Sites antigos costumam ser lentos, difíceis de atualizar e pouco adaptados ao celular, e isso afasta visitantes e prejudica o posicionamento no Google.",
      "Na recriação, eu reconstruo o seu site com um visual atual e uma base técnica moderna, preservando o que já funciona: o conteúdo, as páginas mais acessadas e o histórico no Google. A migração é planejada para que nenhum link importante se perca no caminho.",
    ],
    includedTitle: "Como funciona a recriação",
    included: [
      {
        title: "Diagnóstico do site atual",
        text: "Análise de performance, SEO, acessibilidade e das páginas que mais trazem visitas.",
      },
      {
        title: "Novo layout",
        text: "Interface redesenhada, responsiva e alinhada à identidade da sua marca.",
      },
      {
        title: "Código moderno",
        text: "Reconstrução em Next.js ou WordPress, com uma estrutura mais leve e fácil de manter.",
      },
      {
        title: "Migração de conteúdo",
        text: "Textos, imagens e páginas transferidos e revisados para a nova estrutura.",
      },
      {
        title: "Redirecionamentos 301",
        text: "Mapeamento das URLs antigas para as novas, para não perder posições nem links de outros sites.",
      },
      {
        title: "Comparativo antes e depois",
        text: "Medição de performance antes e depois da publicação, para você ver a evolução.",
      },
    ],
    forWhom: [
      "Quem tem um site antigo, lento ou que não funciona bem no celular",
      "Empresas que mudaram a identidade visual ou o posicionamento",
      "Sites difíceis de atualizar ou que dependem de plugins e temas desatualizados",
    ],
    projectIds: ["tempervale", "macena-silva"],
    faq: [
      {
        question: "Vou perder minhas posições no Google ao trocar de site?",
        answer:
          "O risco existe quando a migração é feita sem planejamento. Por isso, mapeio as URLs atuais, configuro redirecionamentos 301 e preservo títulos e conteúdos relevantes, reduzindo ao máximo o impacto.",
      },
      {
        question: "É possível manter o mesmo domínio?",
        answer: "Sim. O novo site é publicado no mesmo domínio, substituindo a versão antiga.",
      },
      {
        question: "Posso continuar usando WordPress?",
        answer:
          "Sim. A recriação pode ser feita em WordPress, com um tema novo e mais leve, ou em código sob medida, se fizer mais sentido para o seu objetivo.",
      },
      {
        question: "O site antigo fica fora do ar durante o processo?",
        answer:
          "Não. O novo site é desenvolvido em um ambiente separado e só substitui o atual depois de revisado e aprovado.",
      },
    ],
  },
  {
    serviceId: "manutencao",
    slug: "manutencao-de-sites",
    seoTitle: "Manutenção de Sites WordPress e Next.js",
    seoDescription:
      "Manutenção e evolução de sites WordPress e Next.js: atualizações, correções de bugs, novas páginas e melhorias de performance e SEO.",
    eyebrow: "Serviço 03",
    headline: "Manutenção e evolução de sites que já estão no ar",
    intro: [
      "Um site publicado precisa de cuidado contínuo: atualizações de segurança, correções, ajustes de conteúdo e melhorias que acompanham o crescimento do negócio.",
      "Cuido da manutenção de sites WordPress e de sites desenvolvidos em código, como Next.js e React, para que você não precise se preocupar com a parte técnica e possa focar no seu trabalho.",
    ],
    includedTitle: "O que posso fazer pelo seu site",
    included: [
      {
        title: "Atualizações",
        text: "WordPress, temas, plugins e dependências sempre atualizados e testados.",
      },
      {
        title: "Correção de bugs",
        text: "Identificação e correção de erros de layout, formulários, integrações e funcionalidades.",
      },
      {
        title: "Novas páginas e seções",
        text: "Criação de páginas, seções e funcionalidades seguindo o padrão visual do site.",
      },
      {
        title: "Performance",
        text: "Otimização de imagens, código e carregamento para melhorar a velocidade e o Core Web Vitals.",
      },
      {
        title: "SEO técnico",
        text: "Ajustes de títulos, descrições, dados estruturados, indexação e erros do Search Console.",
      },
      {
        title: "Ajustes de conteúdo",
        text: "Atualização de textos, imagens e informações sempre que você precisar.",
      },
    ],
    forWhom: [
      "Quem já tem site e não tem uma pessoa técnica para cuidar dele",
      "Agências que precisam de apoio em manutenção de sites de clientes",
      "Sites WordPress com erros, lentidão ou plugins desatualizados",
    ],
    projectIds: [],
    faq: [
      {
        question: "Você atende sites que não foram criados por você?",
        answer:
          "Sim. Faço primeiro uma análise do site para entender a estrutura, a tecnologia e os pontos de atenção antes de qualquer alteração.",
      },
      {
        question: "A manutenção é pontual ou mensal?",
        answer:
          "As duas opções são possíveis: demandas pontuais, como uma correção ou uma nova página, ou um acompanhamento contínuo combinado no orçamento.",
      },
      {
        question: "Quais tecnologias você atende?",
        answer:
          "WordPress e PHP, além de sites em JavaScript, React e Next.js. Se o seu site usa outra tecnologia, me envie o link para avaliarmos juntos.",
      },
    ],
  },
  {
    serviceId: "qa",
    slug: "qa-e-testes",
    seoTitle: "QA e Testes de Interface para Sites e Aplicações Web",
    seoDescription:
      "Testes funcionais, de responsividade, entre navegadores e de acessibilidade para sites e aplicações web, com relatório de bugs e validação das correções.",
    eyebrow: "Serviço 04",
    headline: "QA e testes de interface antes de lançar",
    intro: [
      "Um bug encontrado pelo cliente custa muito mais caro do que um bug encontrado antes do lançamento. Formulários que não enviam, botões que não funcionam no celular e layouts quebrados em um navegador específico afetam a confiança e a conversão.",
      "Faço testes de interface em sites e aplicações web com o olhar de quem também desenvolve: além de encontrar o problema, descrevo como reproduzir, onde ele acontece e o que provavelmente está causando, para que a correção seja rápida.",
    ],
    includedTitle: "O que é testado",
    included: [
      {
        title: "Testes funcionais",
        text: "Fluxos principais, formulários, links, botões e integrações funcionando como esperado.",
      },
      {
        title: "Responsividade",
        text: "Comportamento do layout em diferentes tamanhos de tela, do celular ao monitor grande.",
      },
      {
        title: "Compatibilidade entre navegadores",
        text: "Verificação em Chrome, Safari, Firefox e Edge, no desktop e no celular.",
      },
      {
        title: "Acessibilidade",
        text: "Navegação por teclado, contraste, textos alternativos e leitura por leitores de tela, com base nas diretrizes WCAG.",
      },
      {
        title: "Relatório de bugs",
        text: "Cada problema documentado com passos para reproduzir, prioridade e evidências.",
      },
      {
        title: "Validação das correções",
        text: "Novo teste depois dos ajustes para confirmar que tudo foi resolvido.",
      },
    ],
    forWhom: [
      "Projetos prestes a ser lançados",
      "Times de desenvolvimento e agências sem um QA dedicado",
      "Sites que receberam grandes mudanças e precisam de uma revisão completa",
    ],
    projectIds: [],
    faq: [
      {
        question: "Preciso dar acesso ao código?",
        answer:
          "Não necessariamente. A maior parte dos testes é feita no site publicado ou em um ambiente de homologação. O acesso ao código ajuda apenas quando eu também for responsável pelas correções.",
      },
      {
        question: "Você também corrige os bugs encontrados?",
        answer:
          "Posso corrigir, se fizer sentido para o projeto, ou entregar o relatório para o seu time resolver. Nos dois casos, valido as correções no final.",
      },
      {
        question: "Como recebo o resultado dos testes?",
        answer:
          "Em um relatório organizado por prioridade, com a descrição de cada problema, os passos para reproduzir e capturas de tela.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getServicePageById(serviceId: string) {
  return servicePages.find((page) => page.serviceId === serviceId);
}
