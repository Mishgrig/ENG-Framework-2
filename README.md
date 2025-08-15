# Telegram MiniApps Framework (EN)

Production-ready marketing site + Studio (vibe-coding) for building Mini Apps schemas live.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Minimal shadcn-compatible UI primitives
- LZ-string for shareable Studio URLs
- Optional analytics (Plausible or GA4)

## Quick start
```bash
pnpm i # or npm i / yarn
pnpm dev
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import to Vercel.
3. (Optional) Set env vars:
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA4_ID`
4. Deploy.

## CI/CD
See `.github/workflows/ci.yml` for lint+typecheck+build placeholder.

## Studio (/studio)
- Left: JSON schema editor
- Right: Live preview with device switcher
- Command bar: `/add type=button label='Get Started'`, `/add type=input text='Your name'` or `/add type=text text='Hello'`
- Share state via URL:
  - Raw JSON: `?s=...`
  - Compressed: `?lz=...` (LZ-string)

## Templates
Open any template “Open in Studio” to remix its schema.

## Legal-first
This project provides recommendations only — no legal guarantees.
