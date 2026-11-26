import type { Metadata } from "next";

import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";
import { Button, Container, Label, PriceTag, WhatsAppIcon } from "@/components/ui";
import { SERVICES } from "@/content/services";
import { SITE, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Services & Prices: Catalogue Websites, Rebuilds, SEO",
  description:
    "Catalogue websites from RM1,800, website rebuilds from RM1,200, Google & SEO setup from RM350, and monthly care from RM150. Malaysian suppliers and distributors.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": SERVICES.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.short,
      provider: { "@type": "ProfessionalService", name: "githzweb", url: SITE.url },
      areaServed: { "@type": "Country", name: "Malaysia" },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <Container className="relative pt-16 pb-16 md:pt-24 md:pb-20">
          <Label>Services & prices</Label>
          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.98] font-extrabold md:text-[80px]">
            Clear prices. <span className="text-fog">No surprises.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fog">
            Every price is a starting point. The final quote depends on how many products you have and which features
            you need, and you get it in writing after a free WhatsApp chat.
          </p>
          <nav aria-label="Services on this page" className="mt-10 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-line px-4 py-2 font-mono text-xs tracking-wider uppercase text-fog transition-colors hover:border-lime hover:text-lime"
              >
                {s.code} · {s.name}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Container className="space-y-5 py-10">
        {SERVICES.map((s) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              className={`group scroll-mt-24 rounded-[24px] border p-7 md:p-10 ${
                s.featured ? "border-lime/50 bg-panel" : "border-line"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-widest text-fog">
                    {s.code}
                    {s.featured ? <span className="ml-2 text-lime">· MAIN SERVICE</span> : null}
                    {s.isNew ? <span className="ml-2 text-lime">· NEW</span> : null}
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-bold md:text-5xl">{s.name}</h2>
                  <p className="mt-3 max-w-2xl text-fog md:text-lg">{s.short}</p>
                </div>
                <PriceTag price={s.price} note={s.priceNote} />
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-3">
                <div>
                  <p className="label mb-3">Who it&rsquo;s for</p>
                  <p className="text-paper/90">{s.forWho}</p>
                </div>
                <div>
                  <p className="label mb-3">What&rsquo;s included</p>
                  <ul className="space-y-2">
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-3 text-paper/90">
                        <span className="font-mono text-lime">+</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label mb-3">What you provide</p>
                  <ul className="space-y-2">
                    {s.youProvide.map((x) => (
                      <li key={x} className="flex gap-3 text-fog">
                        <span className="font-mono">&ndash;</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-7">
                <Button href={waLink(`Hi githzweb, I'm interested in: ${s.name}.`)}>
                  <WhatsAppIcon className="h-4 w-4" /> Ask about this
                </Button>
                <Button href={`/contact?service=${s.slug}`} variant="secondary">
                  Send an enquiry
                </Button>
                <a
                  href={s.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-3 py-3 text-[15px] font-semibold text-lime hover:underline"
                >
                  {s.demo.label}
                  <span aria-hidden className="arrow">
                    &#8599;
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
        <p className="pt-4 text-sm text-fog">
          Prices in Malaysian Ringgit. Domain names and paid third-party tools (if any are needed) are quoted
          separately, and we always try free options first.
        </p>
      </Container>

      <FinalCta />
    </>
  );
}
