# githzweb design rules

Every page follows this file. If something here changes, update this file first.

## Idea: "the catalogue"
githzweb sells catalogue websites, so the site itself is styled like a well-made product catalogue:
- Each service is a **catalogue item**, with a mono code (`SVC-01`), a name, a short spec list and a **price tag** ("from RM1,800").
- Small **mono labels** sit above headings (`// 01 · SERVICES`), like the spec labels on a product sheet.
- **Hero:** a working mini product search. It types "chiller" by itself and the demo grid filters live, so visitors see exactly what we build in 3 seconds. Visitors can also type into it themselves. This is the site's one hero animation.

References (study the feel, never copy): linear.app (dark, crisp hierarchy), vercel.com (type and grid discipline), a printed industrial parts catalogue (codes, specs, price tags).

## Colour
| Token | Value | Use |
|---|---|---|
| `ink` | `#0B0B0C` | page background |
| `panel` | `#141416` | cards, panels |
| `line` | `#26262A` | borders, dividers |
| `fog` | `#8A8A93` | secondary text |
| `paper` | `#F2F1EC` | main text (warm off-white, not pure white) |
| `lime` | `#D4FF3A` | the one accent: primary buttons, price tags, focus rings, highlights |
| `wa` | `#25D366` | WhatsApp icon only |

Rules: one accent only. Lime text only on dark backgrounds; buttons use dark text on lime. No gradients except a very faint radial lime glow behind the hero and the photo card.

## Type
- **Display:** Bricolage Grotesque (Google, via `next/font`), weight 700–800, tight tracking (-0.03em). Headlines are big: up to 96px on desktop, 44px on phone.
- **Body:** Geist, 16–18px, line-height 1.6.
- **Labels, codes, prices:** Geist Mono, uppercase, 11–13px, wide tracking.

## Layout
- 12-column grid, max width 1200px, side padding 20px (phone) / 32px (desktop).
- Section spacing 96–144px desktop, 64–80px phone.
- Asymmetric layouts are encouraged (big headline left, small detail right). Don't put three identical cards in a row in every section.
- Corners: 14px on cards, 999px on pills and buttons. Borders are 1px `line`. No heavy shadows.

## Components
- **Buttons:** primary = lime background with ink text; secondary = 1px `line` border with paper text. Both are pill-shaped with an arrow that slides 4px on hover.
- **Price tag:** mono text on a lime background, slightly angled (-2deg), with a small hole dot, like a real swing tag.
- **Spec list:** mono key, then dotted leader line, then value.

## Motion
- 150–250ms ease-out for hover states. Sections reveal on scroll (fade plus 12px rise) only once each.
- About section: a tilt card (max 8deg) and drifting chips.
- `prefers-reduced-motion`: turn off the typing demo, tilt, drifting and reveals, and show the final state.

## Never
Purple or blue gradients, glassmorphism, glowing blobs, emoji icons, stock photos, fake dashboards, fake logos, testimonials or stats, and the words "elevate", "seamless", "unlock", "cutting-edge", "next-level" or "revolutionize".
