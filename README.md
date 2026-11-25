# githzweb website

The company website for **githzweb**: fast catalogue websites for Malaysian suppliers and distributors.

**Live:** https://githzweb.netlify.app

## What's in it
- **Home:** a live demo catalogue search that types and filters by itself (visitors can type too), services with "from RM" price tags, process, featured work, an interactive About section (3D tilt photo card, tabs, timeline) and FAQ
- **Services:** five services with starting prices and pre-filled WhatsApp/enquiry buttons
- **Case study:** [GNS Commercial Equipment](https://www.gnscommercial.my), 323 products moved from Framer into a searchable Next.js + Sanity catalogue
- **Contact:** Netlify Forms enquiry form (honeypot spam protection) and WhatsApp click-to-chat
- **SEO:** per-page metadata, sitemap, robots, JSON-LD (ProfessionalService, Person, Service, FAQPage), generated share-preview image

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
