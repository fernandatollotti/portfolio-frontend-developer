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
| `src/data/profile.ts` | Nome, cargo, headline do hero, bio, localização, contato, redes sociais |
| `src/data/projects.ts` | Projetos (nome, categoria, descrição, tecnologias, imagem, link) |
| `src/data/experience.ts` | Timeline de formação & experiência |
| `src/data/services.ts` | Serviços oferecidos |
| `src/data/process.ts` | Etapas do processo de trabalho |
| `src/data/technologies.ts` | Lista de tecnologias (stack) |
| `src/data/testimonials.ts` | Depoimentos de clientes |
| `src/data/clients.ts` | Clientes/empresas atendidas |
| `src/data/nav.ts` | Itens do menu de navegação lateral |

**Todo o conteúdo acima está com dados de exemplo (placeholder)** — substitua antes de publicar,
especialmente os depoimentos e clientes, que não devem ser apresentados como reais sem sê-lo.

As imagens dos projetos (`public/images/projects/*.svg`) e o avatar (`public/images/avatar-placeholder.svg`)
também são placeholders gerados — troque pelos seus prints/fotos reais (recomendado: `.webp` ou `.avif`).

## Formulário de contato

O endpoint `src/app/api/contact/route.ts` valida (client + server, via `zod`), sanitiza os campos,
aplica um honeypot anti-spam e um rate limit por IP (5 envios/minuto por instância).

Por padrão, sem nenhuma variável de ambiente configurada, os envios só são logados no console do
servidor (útil em desenvolvimento). Para enviar e-mails de verdade, configure no `.env.local`
(veja `.env.example`):

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=voce@seudominio.com
CONTACT_FROM_EMAIL="Portfólio <onboarding@resend.dev>"
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

Usa a API da [Resend](https://resend.com) via `fetch` direto (sem SDK). Pode trocar por
qualquer outro provedor (SendGrid, SMTP via Nodemailer etc.) editando essa rota.

## SEO

`NEXT_PUBLIC_SITE_URL` alimenta o `metadataBase`, o `sitemap.xml` (`src/app/sitemap.ts`) e o
`robots.txt` (`src/app/robots.ts`). A imagem de Open Graph é gerada dinamicamente em
`src/app/opengraph-image.tsx`. Defina essa variável antes de publicar.

## Build de produção

```bash
npm run build
npm start
```
