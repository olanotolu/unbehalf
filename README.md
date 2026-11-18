# Unbehalf

> Superintelligence on behalf of U.

Unbehalf is an agent that acts on your behalf. Tell it the outcome you want —
it plans, browses, books, and builds, doing the work instead of just describing it.

This repo is the source of truth for [unbehalf.com](https://unbehalf.com).
What you see here is exactly what ships — no framework, no build step.

## Stack

- Plain HTML, CSS, and JavaScript. No dependencies.
- The page is a small single-page app: system-followed light/dark theme,
  home / manifesto / blog / join views, a canvas-painted hero, and a
  waitlist survey.
- Hosting: Vercel (static). Every push to `main` auto-deploys.

## Quickstart

```bash
npm run dev      # http://localhost:3000
npm run check    # verify every file index.html references exists
npm run deploy   # deploy the current tree to production (Vercel)
```

## Project structure

```text
index.html          # the page — markup only
styles.css          # all CSS
app.js              # all JS (theme, views, canvas painting, survey)
vercel.json         # www → apex redirect, immutable caching for CSS/JS
scripts/check.mjs   # static checks (run by CI)
```

## Notes

- The hero painting is embedded as a data URI in `index.html` (twice, two
  layers) and once more inside `app.js` for the canvas painter. That
  duplication is known — a future cleanup can extract it to a single
  `assets/painting.webp` once binary uploads are possible.
- `www.unbehalf.com` redirects to the apex domain (see `vercel.json`).
