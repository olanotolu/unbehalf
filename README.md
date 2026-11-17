# Unbehalf

> Superintelligence on behalf of U.

Unbehalf is an agent that acts on your behalf. Tell it the outcome you want —
it plans, browses, books, and builds, doing the work instead of just describing it.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS 4

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command           | What it does                    |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the dev server            |
| `npm run build`   | Production build                |
| `npm run start`   | Serve the production build      |
| `npm run typecheck` | Type-check without emitting   |

## Project structure

```text
app/            # App Router — layout, page, global styles
public/         # Static assets (logo)
```

## Deploy

Vercel. Every push to `main` is checked by CI (install, typecheck, build).

## Environment

No environment variables are required yet. When one is added, document it in
`.env.example`.
