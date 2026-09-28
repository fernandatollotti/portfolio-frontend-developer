# Portfólio — Front-end Developer

Portfólio pessoal construído com Next.js (App Router), React, TypeScript e Tailwind CSS.
Estrutura, navegação e composição inspiradas no template Isak; identidade visual própria em dark mode
(`#0D0D11` + `#DAB061`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde editar o conteúdo

Todo o conteúdo (textos, projetos, experiência, serviços etc.) fica isolado em `src/data/`,
separado dos componentes — edite esses arquivos para colocar suas informações reais:

| Arquivo | Conteúdo |
|---|---|
| `src/data/profile.ts` | Nome, cargo, headline do hero, bio, localização, contato, redes sociais, título/descrição/palavras-chave de SEO |
| `src/data/projects.ts` | Projetos (nome, categoria, descrição, imagem, link) |
| `src/data/experience.ts` | Timeline de formação & experiência |
| `src/data/services.ts` | Serviços oferecidos |
| `src/data/process.ts` | Etapas do processo de trabalho |
| `src/data/technologies.ts` | Lista de tecnologias (stack) |
| `src/data/testimonials.ts` | Depoimentos de clientes |
| `src/data/clients.ts` | Clientes/empresas atendidas |
| `src/data/nav.ts` | Itens do menu de navegação lateral |

Nome, foto (`public/images/avatar.webp`) e projetos (`public/images/projects/*.jpg`) já estão com
dados reais. **Ainda são placeholder**: e-mail e links de redes sociais (`profile.ts`), depoimentos
(`testimonials.ts`) e clientes/empresas da seção "Clientes" (`clients.ts`) — não publique
depoimentos ou clientes como reais sem que sejam.

## Contato

Não há mais uma seção/formulário de contato dedicado — o convite "Vamos conversar" (no hero e no
card do perfil) leva direto para o WhatsApp (`profile.whatsapp`, formato `https://wa.me/<código do
país><número>`); o botão de chat flutuante oferece e-mail e redes sociais. Todos os contatos ficam
em `src/data/profile.ts`.

## SEO

`NEXT_PUBLIC_SITE_URL` alimenta o `metadataBase`, o `sitemap.xml` (`src/app/sitemap.ts`) e o
`robots.txt` (`src/app/robots.ts`). A imagem de Open Graph é gerada dinamicamente em
`src/app/opengraph-image.tsx`. Defina essa variável antes de publicar.

### Estratégia de SEO

O conteúdo está escrito sem foco em uma cidade específica no momento (posicionamento
nacional/remoto). Se quiser voltar a mirar SEO local, edite os campos abaixo em
`src/data/profile.ts` seguindo o mesmo padrão:

- **Palavra-chave primária**: algo como "Desenvolvedora Front-end em [Cidade]" — usada no H1 do
  hero (`heroHeadline`), no eyebrow (`tagline`), no `<title>` (`seoTitle`) e na meta description
  (`seoDescription`).
- **Palavras-chave secundárias**: `keywords` — usadas na tag `<meta name="keywords">` e como guia
  para o texto (bio, serviços). Ajuste para os serviços que você realmente oferece.
- `seoTitle` e `seoDescription` são **separados** de `heroHeadline`/`heroDescription` de propósito:
  o título/descrição de busca precisam ser curtos e objetivos (título ≤ 60 caracteres, descrição
  ≤ 160), enquanto o texto do hero pode ser um pouco mais longo e humano.
- Para SEO local funcionar de verdade, a cidade precisa aparecer no conteúdo visível (hero, bio,
  serviços), não só nos dados estruturados (`Person` JSON-LD em `src/app/layout.tsx`, campo
  `address.addressLocality`).

Depois de publicar, valide com:
- [Google Rich Results Test](https://search.google.com/test/rich-results) para o JSON-LD
- [PageSpeed Insights](https://pagespeed.web.dev) para Core Web Vitals
- Google Search Console (veja abaixo) para indexação e consultas de busca reais

### Analytics e Search Console

Nenhum script de rastreamento é carregado até você configurar as variáveis de ambiente
(veja `.env.example`):

- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics 4 (formato `G-XXXXXXXXXX`), criado em
  [analytics.google.com](https://analytics.google.com). Com essa variável definida, o
  `src/components/Analytics.tsx` carrega o `gtag.js` automaticamente.
- `GOOGLE_SITE_VERIFICATION`: código de verificação do
  [Search Console](https://search.google.com/search-console) (método "HTML tag" — cole só o
  valor do atributo `content`, não a tag inteira).

Depois de configurar o Search Console, envie o sitemap (`/sitemap.xml`) para acompanhar indexação
e as palavras-chave que realmente trazem tráfego orgânico — é esse relatório que valida (ou não)
as palavras-chave escolhidas aqui, então revise periodicamente e ajuste o conteúdo.

**LGPD**: ao ativar o Analytics, você passa a coletar dados de visitantes. Se for publicar para o
público brasileiro, avalie a necessidade de uma política de privacidade / aviso de cookies — este
projeto não inclui banner de consentimento.

## Deploy (GitHub Pages)

O site é publicado automaticamente no GitHub Pages a cada push na branch `master`, via
`.github/workflows/deploy.yml`. GitHub Pages só serve arquivos estáticos, então o build de CI usa
export estático do Next.js (`output: "export"`), ativado automaticamente quando
`NEXT_PUBLIC_BASE_PATH` está definido — isso só acontece dentro do workflow, então `npm run dev` e
`npm run build` locais continuam funcionando normalmente, em modo servidor.

**Passo único manual** (só precisa fazer uma vez): no repositório no GitHub, vá em
**Settings → Pages** e defina **Source** como **GitHub Actions**. Depois disso, todo push na
`master` publica sozinho em `https://fernandatollotti.github.io/portfolio-frontend-developer`.

Detalhes técnicos, caso precise mexer:

- `NEXT_PUBLIC_BASE_PATH=/portfolio-frontend-developer` e `NEXT_PUBLIC_SITE_URL` (já com esse
  caminho incluído) são definidos como variáveis de ambiente **dentro do workflow**, não em
  `.env.local` — não precisa configurar nada localmente para isso funcionar.
- `src/lib/basePath.ts` exporta `withBasePath()`, usado nas poucas imagens referenciadas por
  caminho absoluto (`<img src="...">`, não gerenciadas pelo Next) para que também respeitem o
  `basePath` no build do GitHub Pages — se adicionar novas imagens assim, use esse helper.
- Como GitHub Pages não serve headers HTTP customizados, os headers de segurança
  (`next.config.ts`) só se aplicam ao rodar em um servidor Node de verdade (`npm start` ou outra
  hospedagem) — no GitHub Pages eles simplesmente não existem, é uma limitação da plataforma.
- Se trocar o nome do repositório, atualize `NEXT_PUBLIC_BASE_PATH`/`NEXT_PUBLIC_SITE_URL` no
  workflow.

## Build de produção (servidor Node, sem GitHub Pages)

```bash
npm run build
npm start
```
