# githzweb website

Company site for githzweb (founder and lead developer: Githan Raj). Plan: `docs/PLAN.md` (kept local, not in git). Look and feel: `docs/DESIGN.md`. Read both before changing anything.

## Stack
(Next.js 16 has breaking changes: check `node_modules/next/dist/docs/` before using Next.js APIs.)

Next.js 16 (App Router, static pages) + TypeScript + Tailwind CSS 4, hosted on Netlify's free plan. No CMS: content lives in `content/site.ts` (contact details, WhatsApp number) and `content/services.ts` (services and prices).

## Commands
- `npm run dev` for the local site
- `npm run build` before every commit
- `npm run lint`

## Rules
- Free tiers only. Never add a paid service.
- Never invent testimonials, client logos, stats or reviews. Every claim must be true.
- Never claim TikTok Shop or PC builds for Githan.
- Never use the nickname "Machi" on the site: public name is Githan Raj.
- Contact form = Netlify Forms. If you change fields in `components/ContactForm.tsx`, change `public/__forms.html` to match. The form only submits on Netlify, not on `npm run dev`.
- Don't use the words or styles listed under "Never" in `docs/DESIGN.md`.
- Never delete, rename or edit `public/google369fc32a9de6c8d6.html`. It proves ownership of the site to Google Search Console. `scripts/check-required-files.mjs` fails the build if it's missing or changed.
