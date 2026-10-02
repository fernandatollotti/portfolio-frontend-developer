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
país><número>`). O botão de chat flutuante (`ChatButton`) está oculto em `src/app/page.tsx`.
Todos os contatos ficam em `src/data/profile.ts`.

## SEO

`NEXT_PUBLIC_SITE_URL` alimenta o `metadataBase`, o `sitemap.xml` (`src/app/sitemap.ts`) e o
`robots.txt` (`src/app/robots.ts`). Sem a variável, o padrão é `https://fernandatollotti.com.br`.
A imagem de Open Graph é gerada no build em `src/app/og-image.png/route.tsx` e publicada como
`/og-image.png` (com extensão, para ser servida como `image/png` em hospedagem estática).

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

**LGPD**: o Analytics só é carregado depois que o visitante clica em **Aceitar** no aviso de
cookies (`src/components/CookieConsent.tsx`). A política fica em `/politica-de-privacidade`.

## Build

O site é sempre exportado como estático (`output: "export"`): `npm run build` gera a pasta `out/`,
pronta para qualquer hospedagem estática. Para conferir o resultado localmente:

```bash
npm run build
npx serve out
```

## Deploy (Cloudflare Pages) — principal

Configuração (uma vez só) em **Workers & Pages → Create → Pages → Connect to Git**, escolhendo
este repositório:

| Campo | Valor |
|---|---|
| Production branch | `master` |
| Build command | `npm run build` |
| Build output directory | `out` |

Variáveis de ambiente (Settings → Variables and secrets):

| Variável | Valor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://fernandatollotti.com.br` |
| `NEXT_PUBLIC_GA_ID` | ID do GA4 (opcional) |
| `GOOGLE_SITE_VERIFICATION` | opcional — com propriedade de Domínio no Search Console não é necessário |

A versão do Node vem do `.nvmrc`. Depois disso, todo push na `master` publica sozinho.

- **Headers de segurança e cache**: `public/_headers` (formato do Cloudflare Pages).
- **Domínio**: em **Custom domains**, adicione `fernandatollotti.com.br` e `www`. Para mandar o
  `www` para o domínio principal, use **Rules → Redirect Rules** (modelo "Redirect from WWW to
  root").
- **Rocket Loader** (Speed → Optimization) deve ficar **desligado** — ele reescreve os scripts da
  página e quebra a hidratação do React/Next.js.

## Deploy (GitHub Pages) — legado

O workflow `.github/workflows/deploy.yml` também publica em
`https://fernandatollotti.github.io/portfolio-frontend-developer` a cada push. Esse build usa
`NEXT_PUBLIC_BASE_PATH=/portfolio-frontend-developer` (definido só dentro do workflow), e
`src/lib/basePath.ts` exporta `withBasePath()` para as imagens referenciadas por `<img src="...">`
— se adicionar novas imagens assim, use esse helper. GitHub Pages ignora o `_headers`.

Quando o domínio no Cloudflare estiver no ar, apague esse workflow e desative o Pages em
**Settings → Pages**, para não haver duas cópias do site indexadas.
