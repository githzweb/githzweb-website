import type { Metadata } from "next";

import { FinalCta } from "@/components/FinalCta";
import { Button, Container, Label, WhatsAppIcon } from "@/components/ui";
import { SERVICES } from "@/content/services";
import { hasWhatsApp, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Services & Prices: Business Websites, Catalogues, Google Setup",
  description:
    "Business websites from RM900, catalogue websites from RM1,800, website moves from RM1,200, Google setup from RM350 and monthly care from RM150. Fixed prices agreed before work starts.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Container className="pt-[72px] pb-12 md:pt-28 md:pb-16">
        <Label>Services &amp; prices</Label>
        <h1 className="h max-w-[960px] text-[clamp(34px,5.4vw,60px)]">
          Clear prices, agreed before I start.{" "}
          <span className="text-muted">
            Every price here is a starting point. You get the exact figure in writing after a free WhatsApp chat.
          </span>
        </h1>
        <nav aria-label="Services on this page" className="mt-8 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-line px-3.5 py-2 text-sm text-muted transition-colors hover:border-muted hover:text-fg"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </Container>

      {SERVICES.map((s, i) => (
        <div key={s.slug} id={s.slug} className="scroll-mt-20 border-t border-line py-14 md:py-[72px]">
          <Container>
            <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-[18px] gap-y-1.5">
              <span className="cond text-[clamp(22px,3vw,32px)] text-dim">{i + 1}.</span>
              <h2 className="cond text-[clamp(34px,5.4vw,64px)]">
                {s.name}
                {s.isNew ? (
                  <span className="ml-2.5 rounded-full border border-line px-2 py-0.5 align-middle font-sans text-xs tracking-normal normal-case text-muted">
                    New
                  </span>
                ) : null}
              </h2>
              <p className="col-start-2 mt-1.5 max-w-[640px] text-lg text-muted">{s.short}</p>
              <p className="col-start-2 mt-3.5 font-head text-[22px] font-semibold tracking-[-0.02em]">
                {s.price}
                {s.priceNote ? <small className="ml-1.5 font-sans text-sm font-normal text-muted">{s.priceNote}</small> : null}
              </p>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-[1fr_1.3fr_1fr] md:gap-10 md:pl-[calc(18px+1.6em)]">
              <div>
                <h3 className="mb-3 text-[13px] font-medium text-muted">Who it&rsquo;s for</h3>
                <p className="text-[15px] text-body">{s.forWho}</p>
              </div>
              <div>
                <h3 className="mb-3 text-[13px] font-medium text-muted">What&rsquo;s included</h3>
                <ul className="text-[15px] text-body">
                  {s.includes.map((x) => (
                    <li key={x} className="border-b border-dashed border-line py-2 first:pt-0">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-[13px] font-medium text-muted">What you provide</h3>
                <ul className="text-[15px] text-body">
                  {s.youProvide.map((x) => (
                    <li key={x} className="border-b border-dashed border-line py-2 first:pt-0">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-2.5 md:pl-[calc(18px+1.6em)]">
              {hasWhatsApp ? (
                <Button href={waLink(`Hi Githan, I'd like to ask about: ${s.name}`)} className="h-[42px] px-[18px] text-sm">
                  <WhatsAppIcon /> Ask on WhatsApp
                </Button>
              ) : null}
              <Button href={`/contact?service=${s.slug}#form`} variant="secondary" className="h-[42px] px-[18px] text-sm">
                Send an enquiry
              </Button>
              {s.demo ? (
                <a
                  href={s.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[42px] items-center px-1.5 text-sm text-muted hover:text-fg"
                >
                  {s.demo.label} ↗
                </a>
              ) : null}
            </div>
          </Container>
        </div>
      ))}

      <FinalCta
        title="Not sure which one you need?"
        text="Tell me what your business does and what's not working. I'll suggest the simplest option, even if that's the cheapest one."
      />
    </>
  );
}
