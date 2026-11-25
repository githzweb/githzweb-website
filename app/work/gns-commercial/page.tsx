import type { Metadata } from "next";
import Image from "next/image";

import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";
import { Button, Container, Label } from "@/components/ui";

export const metadata: Metadata = {
  title: "GNS Commercial Equipment: Catalogue Website Case Study",
  description:
    "How githzweb moved 323 products off a Framer site into a searchable Next.js catalogue with WhatsApp enquiries for GNS Commercial Equipment, Johor Bahru.",
  alternates: { canonical: "/work/gns-commercial" },
  openGraph: { images: ["/work/gns/home.png"] },
};

const FACTS = [
  ["Client", "GNS Commercial Equipment"],
  ["Industry", "Commercial kitchen & retail equipment"],
  ["Location", "Johor Bahru, Malaysia"],
  ["Launched", "November 2026"],
  ["Stack", "Next.js · Sanity CMS · Netlify"],
];

const COLLECTIONS = [
  ["Food processing equipment", 179],
  ["Stainless steel equipment", 73],
  ["Commercial refrigerators", 56],
  ["Racking systems", 15],
] as const;

const BUILT = [
  {
    t: "Automatic product import",
    d: "A script read all 323 products from the old Framer site (names, models, photos, categories) and loaded them into the new CMS. Nothing was retyped by hand.",
  },
  {
    t: "Search and filters",
    d: "Customers search by name or model number (e.g. “SC-200L”) and filter by collection and category.",
  },
  {
    t: "Ask on WhatsApp, everywhere",
    d: "Every product page has a WhatsApp button that opens a chat with the product name already filled in.",
  },
  {
    t: "Edit without code",
    d: "Products, details and photos are managed in Sanity Studio: no code needed to add or change a product.",
  },
  {
    t: "Old links kept working",
    d: "Links from the old Framer site redirect to the new pages, so Google and old WhatsApp shares don't break.",
  },
  {
    t: "Found on Google",
    d: "Google Search Console, sitemap, structured data (JSON-LD) and share-preview images, plus a contact form that emails the team.",
  },
];

export default function GnsCaseStudy() {
  const total = COLLECTIONS.reduce((a, [, n]) => a + n, 0);
  return (
    <>
      <Container className="pt-16 md:pt-24">
        <Label>Case study 01</Label>
        <h1 className="font-display mt-6 max-w-5xl text-5xl leading-[0.98] font-extrabold md:text-[80px]">
          323 products, <span className="text-lime">searchable</span> in one place.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fog md:text-xl">
          GNS Commercial Equipment supplies commercial kitchen and retail equipment from Johor Bahru. Their catalogue
          lived on a Framer site. We rebuilt it as a proper catalogue website that customers can search and enquire from
          in a tap.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="https://www.gnscommercial.my">Visit the live site</Button>
          <Button href="https://github.com/githzweb/gns-commercial-website" variant="secondary">
            See the code on GitHub
          </Button>
        </div>
      </Container>

      <Container className="mt-14">
        <div className="relative overflow-hidden rounded-[24px] border border-line bg-panel p-2 md:p-3">
          <Image
            src="/work/gns/home.png"
            alt="GNS Commercial Equipment homepage on desktop"
            width={1440}
            height={900}
            sizes="(min-width: 1200px) 1180px, 100vw"
            className="h-auto w-full rounded-[18px]"
            priority
          />
        </div>
      </Container>

      <Container className="grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-28">
        <dl className="h-fit space-y-3 font-mono text-[13px] md:sticky md:top-24">
          {FACTS.map(([k, v]) => (
            <div key={k} className="spec-row">
              <dt className="uppercase tracking-wider text-fog">{k}</dt>
              <span className="dots" aria-hidden />
              <dd className="text-right">{v}</dd>
            </div>
          ))}
        </dl>
        <div>
          <Label n="01">The starting point</Label>
          <h2 className="font-display mt-4 text-3xl font-extrabold md:text-5xl">A big catalogue on a design tool.</h2>
          <p className="mt-5 text-fog md:text-lg">
            GNS had over 300 products on a Framer site. Framer is great for good-looking pages, but a catalogue that
            size needs real search, filters, and an easy way for staff to keep products up to date. Customers also
            needed a faster way to ask about a specific model.
          </p>
          <p className="label mt-12 mb-4">Products by collection</p>
          <ul className="space-y-3">
            {COLLECTIONS.map(([name, n]) => (
              <li key={name}>
                <div className="flex justify-between text-sm">
                  <span>{name}</span>
                  <span className="font-mono text-fog">{n}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-lime" style={{ width: `${(n / COLLECTIONS[0][1]) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-xs text-fog">TOTAL · {total} PRODUCTS</p>
        </div>
      </Container>

      <section className="border-y border-line bg-panel/40 py-20 md:py-28">
        <Container>
          <Label n="02">What we built</Label>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-extrabold md:text-5xl">
            Everything a buyer needs to find it and ask about it.
          </h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line md:grid-cols-3">
            {BUILT.map((b, i) => (
              <li key={b.t} className="bg-ink">
                <Reveal delay={(i % 3) * 90} className="h-full p-7">
                  <p className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-lg font-semibold">{b.t}</h3>
                  <p className="mt-2 text-sm text-fog">{b.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-20 md:py-28">
        <Label n="03">Screens</Label>
        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_1fr_0.42fr]">
          <figure className="overflow-hidden rounded-[18px] border border-line">
            <Image src="/work/gns/shop.png" alt="Catalogue page with search box and collection filters" width={1440} height={900} sizes="(min-width: 768px) 480px, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-fog">Catalogue · search + filters</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[18px] border border-line">
            <Image src="/work/gns/product.png" alt="Product page with Ask on WhatsApp button" width={1440} height={900} sizes="(min-width: 768px) 480px, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-fog">Product page · WhatsApp enquiry</figcaption>
          </figure>
          <figure className="mx-auto w-2/3 overflow-hidden rounded-[18px] border border-line md:w-full">
            <Image src="/work/gns/product-phone.jpg" alt="Product page on a phone" width={359} height={777} sizes="(min-width: 768px) 200px, 60vw" className="h-auto w-full" />
            <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-fog">On phone</figcaption>
          </figure>
        </div>
      </Container>

      <Container className="pb-8">
        <div className="rounded-[22px] border border-line p-8 md:p-10">
          <Label n="04">Where it is now</Label>
          <p className="mt-4 max-w-3xl text-lg">
            The site is live at{" "}
            <a href="https://www.gnscommercial.my" target="_blank" rel="noopener noreferrer" className="text-lime underline underline-offset-4">
              gnscommercial.my
            </a>{" "}
            on its own domain, verified on Google Search Console. githzweb looks after the site and its product
            updates.
          </p>
        </div>
      </Container>

      <FinalCta />
    </>
  );
}
