# Heyday Flower Co — Next.js 14 (App Router)

A refined, editorial, photo-first site with luxury typography, glassy UI, restrained motion, and curated galleries.

## Tech
- Next.js 14 (App Router), TypeScript
- next/font (Fraunces + Inter)
- Next Image, masonry layout, rotating heroes (reduced-motion aware)
- SEO: Metadata, Open Graph, Twitter Card, robots, sitemap, LocalBusiness JSON-LD

## Prerequisites
- Node 18+ (recommended 20+)
- npm 9+

## Quick start
```cmd
cd C:\Users\campb\OneDrive\HEYDAYWEBSITE
npm install
npm run dev
```
Local dev server prints a URL (e.g. http://localhost:3000 or the next available port).

## Assets
1) Unzip your curated bundle and place the `public/` folder at the project root:
```
public/
  og-default.jpg
  images/
    hero/...
    gallery/...
```
2) Optional: set your canonical URL for metadata and sitemap. Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — run the built app

## Deploy
- Push to GitHub, import into Vercel. Framework auto-detects Next.js.

## Troubleshooting
- Port in use: Next will try 3000 → 3001 → 3002 automatically.
- Images not showing: confirm files exist under `public/images/...` and paths match lib arrays.
- Type errors during build: run `npm run build` to see details.
- Optional: security audit
```cmd
npm audit
npm audit fix --force
```

## Structure
- `app/` — layout, pages, SEO routes
- `components/` — UI building blocks
- `lib/` — brand constants, data for heroes & galleries
- `public/` — static assets (images, OG image)
- `scripts/` — optional image conversion helper

---
© Heyday Flower Co. All rights reserved.

