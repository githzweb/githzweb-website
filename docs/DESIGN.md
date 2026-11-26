# githzweb design rules

Every page follows this file. If something here changes, update this file first.
Redesigned 2026-11-27 (direction "C": quiet like linear.app, personal like portavia.framer.website). The reasons are in `docs/CRITIQUE.md` (local only).

## Idea: "a real person, real work"
githzweb is Githan Raj, a web developer in Johor Bahru who builds websites for Malaysian small businesses. The site should feel like a **trusted local partner**, not a tech startup:
- **Real work first.** The hero shows the live GNS site (real screenshots), not a mock-up or a slogan.
- **One calm sentence** per headline: the main point in full colour, then the rest of the sentence in grey on the same line. No stacked three-word slogans.
- **Personal touches:** the "Taking new projects" pill with Githan's photo in the header, a big condensed "GITHAN RAJ" in About, first-person writing ("I").
- **Restraint:** almost no decoration. The page is mostly type, real screenshots and thin lines.

## Themes
Dark and light, both first-class. On a first visit the site follows the device setting. The toggle in the header switches it, and the choice is saved (`localStorage.theme`). A small inline script in `<head>` sets `data-theme` before paint, so there's no flash.

| Token (Tailwind) | Dark | Light | Use |
|---|---|---|---|
| `bg` | `#0B0B0C` | `#F6F5F1` | page background (light is warm off-white, never pure white) |
| `panel` | `#131315` | `#FFFFFF` | cards, form, browser frames |
| `line` | `#232326` | `#E2E0D8` | borders, dividers |
| `fg` | `#EDEDEE` | `#151516` | main text |
| `body` | `#C9C9CC` | `#3B3B3F` | paragraph text |
| `muted` | `#8B8B90` | `#68686D` | secondary text, the grey half of headlines |
| `dim` | `#5D5D62` | `#9B9BA0` | numbers, captions |
| `accent` | `#D4FF3A` | `#4F6F00` | open accordion titles, the "available" dot (text-safe on each theme) |
| `lime` | `#D4FF3A` | `#D4FF3A` | WhatsApp/primary buttons only, always with dark text (`onlime` #0B0B0C) |

Rules: lime is only for the main call to action (WhatsApp, Send). No gradients, no glows, no blobs. A very subtle grain texture sits over the whole page (opacity 0.07 dark / 0.035 light).

## Type
- **Headlines:** Inter Tight 600, tracking -0.025em, line-height 1.08. Hero up to 64px, section headings up to 44px.
- **Condensed accents:** Anton, uppercase. Used only for service names, the service numbers and the big "GITHAN RAJ".
- **Body:** Inter 16–18px, line-height 1.6.
- No mono labels, no `// 01` codes, no `SVC-01` codes. Section labels are plain small grey text ("Recent work").

## Layout
- Max width 1180px, side padding 20px (phone) / 40px (desktop).
- Sections separated by a 1px line, 88px (phone) / 120px (desktop) padding.
- Screenshots sit in a simple browser frame with the real address (e.g. `gnscommercial.my/shop`), with no fake traffic-light dots.
- Corners: 12–20px on frames and cards, 999px on buttons and pills.

## Components
- **Buttons:** primary = lime with dark text (WhatsApp icon when it opens WhatsApp); secondary = 1px `line` border.
- **Services:** numbered list with big Anton titles; on the home page it's an accordion (`<details>`), and on /services each service has "Who it's for / What's included / What you provide" columns.
- **Header:** logo, nav, theme toggle, "Taking new projects" pill (photo + dot).

## Motion
Almost none: 200ms colour transitions on hover and theme change. **No scroll-reveal fades**, no drifting or typing animations.

## Writing
- First person ("I"), plain English, as if talking to a shop owner.
- Avoid: choppy slogan fragments ("Great stock. Hard to find."), forcing everything into threes, tech words on customer pages (keep Next.js, Sanity etc. to the case study).

## Never
Purple or blue gradients, glassmorphism, glowing blobs, emoji icons, stock photos, fake dashboards, fake logos, testimonials or stats, code-style labels, and the words "elevate", "seamless", "unlock", "cutting-edge", "next-level" or "revolutionize".
