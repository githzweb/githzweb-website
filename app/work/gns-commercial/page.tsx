import type { Metadata } from "next";
import Image from "next/image";

import { FinalCta } from "@/components/FinalCta";
import { BrowserFrame, Button, Container, Label, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "GNS Commercial Equipment: Catalogue Website Case Study",
  description:
    "How Githan Raj moved GNS Commercial Equipment's catalogue off Framer into a searchable Next.js website: 335 products, WhatsApp enquiries on every product, three branches. Johor Bahru.",
  alternates: { canonical: "/work/gns-commercial" },
  openGraph: { images: ["/work/gns/home.png"] },
};

const FACTS = [
  ["Client", "GNS Commercial Equipment"],
  ["Industry", "Commercial kitchen & retail equipment"],
  ["Location", "Johor Bahru, with branches in Singapore and Kuala Lumpur"],
  ["Launched", "November 2026"],
  ["Built with", "Next.js · Sanity CMS · Netlify"],
];

// Live counts from the GNS site's CMS, 27 Nov 2026.
const COLLECTIONS = [
  ["Food processing equipment", 176],
  ["Stainless steel equipment", 73],
  ["Commercial refrigerators", 56],
  ["Racking systems", 15],
  ["Ice makers", 15],
] as const;

const BUILT = [
  {
    t: "Automatic product import",
    d: "A script read all 323 original products from the old Framer site (names, models, photos, categories) and loaded them into the new CMS. Nothing was retyped by hand.",
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
    t: "The team edits it themselves",
    d: "Products, photos and branch details are managed in Sanity Studio. A new 12-model ice machine range went live without any code changes.",
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
  const max = Math.max(...COLLECTIONS.map(([, n]) => n));
  return (
    <>
      <Container className="pt-[72px] md:pt-28">
        <Label>Case study · GNS Commercial Equipment</Label>
        <h1 className="h max-w-[980px] text-[clamp(34px,5.4vw,60px)]">
          {total} products, searchable in one place.{" "}
          <span className="text-muted">
            GNS supplies commercial kitchen and retail equipment from Johor Bahru. Their catalogue lived on a Framer
            site, so I rebuilt it as a proper catalogue customers can search and enquire from in a tap.
          </span>
        </h1>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="https://www.gnscommercial.my">Visit gnscommercial.my ↗</Button>
          <Button href="https://github.com/githzweb/gns-commercial-website" variant="secondary">
            See the code on GitHub ↗
          </Button>
        </div>
        <BrowserFrame address="gnscommercial.my" className="mt-14">
          <Image
            src="/work/gns/home.png"
            alt="GNS Commercial Equipment homepage on desktop"
            width={1440}
            height={900}
            sizes="(min-width: 1180px) 1100px, 100vw"
            className="h-auto w-full"
            priority
          />
        </BrowserFrame>
      </Container>

      <Section className="mt-[88px] md:mt-[120px]">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <dl className="h-fit border-t border-line text-[15px] lg:sticky lg:top-24">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-3 border-b border-line py-3">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div>
            <Label>The starting point</Label>
            <h2 className="h text-[clamp(28px,4vw,44px)]">A big catalogue on a design tool.</h2>
            <p className="mt-5 text-body md:text-lg">
              GNS had over 300 products on a Framer site that I built during my internship. Framer is great for
              good-looking pages, but a catalogue that size needs real search, filters, and an easy way for staff to
              keep products up to date. Customers also needed a faster way to ask about a specific model.
            </p>
            <h3 className="mt-12 mb-4 text-sm text-muted">Products by collection, today</h3>
            <ul className="space-y-3">
              {COLLECTIONS.map(([name, n]) => (
                <li key={name}>
                  <div className="flex justify-between text-sm">
                    <span>{name}</span>
                    <span className="text-muted">{n}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
                    <div className="h-full rounded-full bg-fg" style={{ width: `${(n / max) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">Total: {total} products</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Label>What I built</Label>
          <h2 className="h max-w-[820px] text-[clamp(28px,4vw,44px)]">
            Everything a buyer needs to find a product and ask about it.
          </h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 md:gap-x-[72px] md:gap-y-12">
            {BUILT.map((b) => (
              <div key={b.t}>
                <h3 className="font-head text-xl font-semibold tracking-[-0.015em]">{b.t}</h3>
                <p className="mt-2 max-w-[480px] text-body">{b.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Label>Screens</Label>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_0.42fr]">
            <figure>
              <BrowserFrame address="gnscommercial.my/shop">
                <Image src="/work/gns/shop.png" alt="Catalogue page with search box and collection filters" width={1440} height={900} sizes="(min-width: 768px) 480px, 100vw" className="h-auto w-full" />
              </BrowserFrame>
              <figcaption className="mt-3 text-sm text-muted">Catalogue with search and filters</figcaption>
            </figure>
            <figure>
              <BrowserFrame address="gnscommercial.my/shop/…">
                <Image src="/work/gns/product.png" alt="Product page with Ask on WhatsApp button" width={1440} height={900} sizes="(min-width: 768px) 480px, 100vw" className="h-auto w-full" />
              </BrowserFrame>
              <figcaption className="mt-3 text-sm text-muted">Product page with WhatsApp enquiry</figcaption>
            </figure>
            <figure className="mx-auto w-2/3 md:w-full">
              <div className="overflow-hidden rounded-[18px] border-4 border-[#1c1c1f]">
                <Image src="/work/gns/product-phone.jpg" alt="Product page on a phone" width={359} height={777} sizes="(min-width: 768px) 200px, 60vw" className="h-auto w-full" />
              </div>
              <figcaption className="mt-3 text-sm text-muted">On a phone</figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Label>Where it is now</Label>
          <p className="max-w-3xl text-lg text-body md:text-xl">
            The site is live at{" "}
            <a href="https://www.gnscommercial.my" target="_blank" rel="noopener noreferrer" className="text-fg underline underline-offset-4">
              gnscommercial.my
            </a>{" "}
            on its own domain and verified on Google Search Console. It now also lists GNS&rsquo;s three branches in
            Johor Bahru, Singapore and Kuala Lumpur. I look after the site and its updates.
          </p>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
