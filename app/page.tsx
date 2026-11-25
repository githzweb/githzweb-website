import Image from "next/image";
import Link from "next/link";

import { FinalCta } from "@/components/FinalCta";
import { HeroSearch } from "@/components/HeroSearch";
import { AboutGithan } from "@/components/AboutGithan";
import { Reveal } from "@/components/Reveal";
import { Button, Container, Label, PriceTag, WhatsAppIcon } from "@/components/ui";
import { SERVICES } from "@/content/services";
import { SITE, waLink } from "@/content/site";

const PROBLEMS = [
  {
    n: "A",
    title: "Customers can't find your products.",
    body: "They scroll a 40-page PDF, give up, and WhatsApp a competitor whose stock they could actually see.",
  },
  {
    n: "B",
    title: "Your catalogue lives in Excel.",
    body: "Prices and models change, but the website (if there is one) was last updated two years ago.",
  },
  {
    n: "C",
    title: "Your site is slow or stuck.",
    body: "Built on Framer, Wix or WordPress by someone who's gone. Every change is a favour or an invoice.",
  },
];

const STEPS = [
  { n: "01", title: "WhatsApp chat", body: "Tell us what you sell and how customers buy. Free, no obligation." },
  { n: "02", title: "Quote & plan", body: "A fixed price and a simple plan of pages, features and timeline." },
  { n: "03", title: "Build & import", body: "We build the site and import your products automatically." },
  { n: "04", title: "Launch & care", body: "Go live on your domain. Optional monthly care keeps it fresh." },
];

const FAQ = [
  {
    q: "How long does a catalogue website take?",
    a: "Usually 2–4 weeks, depending on how many products you have and how ready your product list is.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The domain, the content and the code are yours. Hosting runs on your own account if you want it that way.",
  },
  {
    q: "Can I update products myself?",
    a: "Yes. Catalogue sites come with an editor where you can add products, change prices and upload photos without coding.",
  },
  {
    q: "Do you work outside Johor?",
    a: "Yes. Everything runs over WhatsApp, email and video calls, so we work with businesses anywhere in Malaysia.",
  },
  {
    q: "What does monthly care cover?",
    a: "Hosting checks, an agreed number of product and price updates, small changes, backups and a short monthly report.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: "githzweb",
        url: SITE.url,
        email: SITE.email,
        description: SITE.tagline,
        areaServed: { "@type": "Country", name: "Malaysia" },
        address: { "@type": "PostalAddress", addressLocality: "Johor Bahru", addressCountry: "MY" },
        founder: { "@id": `${SITE.url}/#githan` },
        sameAs: [SITE.github],
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#githan`,
        name: "Githan Raj",
        jobTitle: "Founder & lead developer",
        image: `${SITE.url}/img/githan-raj.jpg`,
        sameAs: [SITE.linkedin, SITE.github],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const [lead, ...rest] = SERVICES;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <Container className="relative grid items-center gap-14 pt-16 pb-24 md:grid-cols-[1.15fr_0.85fr] md:pt-24 md:pb-32">
          <div>
            <Label>Catalogue websites · Malaysia</Label>
            <h1 className="font-display mt-6 text-[44px] leading-[0.98] font-extrabold sm:text-6xl md:text-[84px]">
              Your whole catalogue. <span className="text-lime">Searchable.</span>{" "}
              <span className="text-fog">One tap to WhatsApp.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-fog md:text-xl">
              We build fast catalogue websites for Malaysian suppliers and distributors, so customers find the right
              product and message you about it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={waLink("Hi githzweb, I'd like a catalogue website.")}>
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </Button>
              <Button href="/work/gns-commercial" variant="secondary">
                See the GNS project
              </Button>
            </div>
          </div>
          <HeroSearch />
        </Container>
      </section>

      {/* Proof strip */}
      <section aria-label="Proof from the GNS project" className="border-y border-line bg-panel/50">
        <Container className="grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4">
          {[
            ["323", "products imported automatically"],
            ["Search + filters", "across every product"],
            ["WhatsApp", "enquiry on each product page"],
            ["Live", "gnscommercial.my"],
          ].map(([big, small]) => (
            <div key={small} className="pr-4">
              <p className="font-display text-2xl font-bold md:text-3xl">{big}</p>
              <p className="mt-1 text-sm text-fog">{small}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Problems */}
      <section className="py-24 md:py-36">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <Reveal>
            <Label n="01">The problem</Label>
            <h2 className="font-display mt-4 text-4xl leading-[1.05] font-extrabold md:text-[56px]">
              Great stock. <br />
              <span className="text-fog">Hard to find.</span>
            </h2>
          </Reveal>
          <ol className="divide-y divide-line border-y border-line">
            {PROBLEMS.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 100} className="grid grid-cols-[48px_1fr] gap-4 py-7">
                  <span className="font-mono text-sm text-lime">{p.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-fog">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label n="02">Services</Label>
              <h2 className="font-display mt-4 text-4xl font-extrabold md:text-[56px]">What we build</h2>
            </div>
            <Link href="/services" className="group text-fog hover:text-paper">
              All services and prices{" "}
              <span aria-hidden className="arrow inline-block">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {/* Lead offer: the big card */}
            <Reveal className="md:col-span-6">
              <Link
                href={`/services#${lead.slug}`}
                className="group grid gap-8 rounded-[22px] border border-line bg-panel p-7 transition-colors hover:border-lime/60 md:grid-cols-[1.2fr_1fr] md:p-10"
              >
                <div>
                  <p className="font-mono text-xs tracking-widest text-fog">{lead.code} · MAIN SERVICE</p>
                  <h3 className="font-display mt-3 text-3xl font-bold md:text-5xl">{lead.name}</h3>
                  <p className="mt-4 max-w-lg text-fog md:text-lg">{lead.short}</p>
                  <div className="mt-7">
                    <PriceTag price={lead.price} />
                  </div>
                </div>
                <ul className="space-y-3 self-end font-mono text-[13px]">
                  {lead.includes.map((x) => (
                    <li key={x} className="flex gap-3 border-b border-line pb-3 text-paper/90">
                      <span className="text-lime">+</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} className={i < 2 ? "md:col-span-3" : "md:col-span-3"}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 rounded-[22px] border border-line p-7 transition-colors hover:border-lime/60 hover:bg-panel"
                >
                  <div>
                    <p className="font-mono text-xs tracking-widest text-fog">
                      {s.code}
                      {s.isNew ? <span className="ml-2 text-lime">· NEW</span> : null}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">{s.name}</h3>
                    <p className="mt-3 text-fog">{s.short}</p>
                  </div>
                  <div>
                    <PriceTag price={s.price} note={s.priceNote} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-36">
        <Container>
          <Label n="03">How it works</Label>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-extrabold md:text-[56px]">
            From product list to live site in four steps.
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.n} className="bg-ink">
                <Reveal delay={i * 100} className="h-full p-7">
                  <p className="font-display text-5xl font-extrabold text-lime/90">{s.n}</p>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-fog">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-12 md:py-20">
        <Container>
          <Link
            href="/work/gns-commercial"
            className="group grid overflow-hidden rounded-[28px] border border-line bg-panel transition-colors hover:border-lime/60 md:grid-cols-[1fr_1.15fr]"
          >
            <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
              <div>
                <Label>Featured work</Label>
                <h2 className="font-display mt-4 text-4xl font-extrabold md:text-5xl">GNS Commercial Equipment</h2>
                <p className="mt-4 text-fog md:text-lg">
                  A commercial kitchen equipment supplier in Johor Bahru. We moved 323 products off their old Framer
                  site into a searchable catalogue with WhatsApp enquiries on every product.
                </p>
              </div>
              <p className="font-semibold text-lime">
                Read the case study{" "}
                <span aria-hidden className="arrow inline-block">
                  &rarr;
                </span>
              </p>
            </div>
            <div className="relative min-h-[280px] overflow-hidden bg-ink md:min-h-[420px]">
              <Image
                src="/work/gns/shop.png"
                alt="GNS Commercial Equipment product catalogue page with search and filters"
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </Container>
      </section>

      <AboutGithan />

      {/* FAQ */}
      <section className="py-12 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <Label n="05">FAQ</Label>
            <h2 className="font-display mt-4 text-4xl font-extrabold md:text-[56px]">Good questions.</h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="font-mono text-lime transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-fog">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
