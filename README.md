# githzweb website

The website for **githzweb**: Githan Raj builds websites for Malaysian small businesses, from simple business sites to full product catalogues, with every enquiry going straight to WhatsApp.

**Live:** https://githzweb.netlify.app

## What's in it
- **Home:** the live GNS site as the hero (real screenshots, not mock-ups), the GNS story, a numbered services accordion with starting prices, About, and how a project runs
- **Services:** six services (business website from RM900, catalogue website from RM1,800, website moves, Google setup, monthly care, automation), each with who it's for, what's included, what the client provides, and a link to a live demo
- **Work:** the [GNS Commercial Equipment](https://www.gnscommercial.my) case study (335 products, 5 collections, 3 branches) and live demos on [Demo Hardware Co.](https://demo-hardware-githzweb.pages.dev)
- **Contact:** Netlify Forms enquiry form (honeypot spam protection), WhatsApp click-to-chat, service pre-selected from the Services page
- **Dark and light themes:** follows the device setting, remembers the visitor's choice, no flash on load
- **SEO:** per-page metadata, sitemap, robots, and a real homepage screenshot as the share preview

## Design
Quiet and personal: Inter Tight headlines, Anton for condensed accents, real work instead of decoration, first-person writing. The rules are in [`docs/DESIGN.md`](docs/DESIGN.md).

## Stack
Next.js 16 (App Router, fully static) · TypeScript · Tailwind CSS 4 · Netlify (free plan). Content lives in `content/` (no CMS needed for a site this size).

## Run locally
```bash
npm install
npm run dev
```
The contact form only submits when deployed on Netlify.

---
Built by [Githan Raj](https://www.linkedin.com/in/githan-raj-7b92b62ba/) · [githzweb](https://github.com/githzweb)
