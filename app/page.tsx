import Image from "next/image";
import Link from "next/link";

import { FinalCta } from "@/components/FinalCta";
import { BrowserFrame, Button, Container, Label, Section, WhatsAppIcon } from "@/components/ui";
import { SERVICES } from "@/content/services";
import { hasWhatsApp, SITE, waLink } from "@/content/site";

// Real numbers from the live GNS site (Sanity, 27 Nov 2026).
const GNS_FACTS = [
  ["335", "products online"],
  ["5", "product collections"],
  ["3", "branches, JB · SG · KL"],
  ["0", "products typed by hand"],
];

const TIMELINE = [
  ["2025", "Laptop technician, Via Global"],
  ["Mar–Aug 2026", "Web developer intern, GNS Commercial Equipment"],
  ["Nov 2026", "Rebuilt gnscommercial.my, now looking after it"],
];

const STEPS = [
  {
    t: "You tell me about your business",
    d: "A WhatsApp chat or a short call. What you sell, who your customers are, what's not working now. Free, and no pressure to go ahead.",
  },
  {
    t: "I send a fixed price",
    d: "In writing, with the pages and features listed. If the price changes, it's because you asked for more, never a surprise invoice.",
  },
  {
    t: "You see it before it goes live",
    d: "I send you a link to check on your own phone. We fix what you don't like, then it goes live on your own domain.",
  },
  {
    t: "I stay around",
    d: "You get a short guide to updating the site yourself. If you'd rather not, monthly care means you just WhatsApp me the change.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: one sentence, then the real GNS site */}
      <Container className="pt-[72px] pb-10 md:pt-28 md:pb-14">
        <p className="mb-5 text-sm text-muted">Githan Raj · web developer in Johor Bahru</p>
        <h1 className="h max-w-[980px] text-[clamp(34px,5.6vw,64px)]">
          I build websites for Malaysian small businesses.{" "}
          <span className="text-muted">
            Fast to load, easy for you to update, and every enquiry goes straight to your WhatsApp.
          </span>
        </h1>
        <div className="mt-9 flex flex-wrap gap-3">
          {hasWhatsApp ? (
            <Button href={waLink()}>
              <WhatsAppIcon /> WhatsApp me
            </Button>
          ) : null}
          <Button href="#work" variant="secondary">
            See the GNS website
          </Button>
        </div>

        <div className="relative mt-14">
          <BrowserFrame address="gnscommercial.my/shop">
            <Image
              src="/work/gns/shop.png"
              alt="GNS Commercial Equipment product catalogue with search and filters"
              width={1440}
              height={900}
              sizes="(min-width: 1180px) 1100px, 100vw"
              priority
              className="h-auto w-full"
            />
          </BrowserFrame>
          <div className="absolute right-1 -bottom-7 w-[34%] max-w-[230px] overflow-hidden rounded-[18px] border-4 border-[#1c1c1f] shadow-[var(--shadow)] sm:right-4 sm:-bottom-10 sm:w-[26%] sm:rounded-[26px] sm:border-[6px]">
            <Image
              src="/work/gns/product-phone.jpg"
              alt="GNS product page on a phone with an Ask on WhatsApp button"
              width={359}
              height={777}
              sizes="230px"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-line pt-4 text-sm text-muted">
          <span>GNS Commercial Equipment, Johor Bahru. Live since November 2026.</span>
          <a href="https://www.gnscommercial.my" target="_blank" rel="noopener noreferrer" className="text-fg hover:underline">
            Visit gnscommercial.my ↗
          </a>
        </div>
      </Container>

      {/* Work: the GNS story */}
      <Section id="work">
        <Container>
          <Label>Recent work</Label>
          <h2 className="h max-w-[820px] text-[clamp(28px,4vw,44px)]">
            GNS had 300+ products on a site that couldn&rsquo;t search them.{" "}
            <span className="text-muted">Now customers type a model number and find it in a second.</span>
          </h2>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="max-w-[520px] text-body">
              <p>
                I joined GNS Commercial Equipment as an intern in March 2026 and built their first website on Framer.
                It looked fine, but with over 300 fridges, freezers and kitchen machines, customers couldn&rsquo;t
                search, and every product change meant editing pages by hand.
              </p>
              <p className="mt-[18px]">
                In November I rebuilt it properly. A script copied every product off the old site, so nothing was
                retyped. Customers can now search and filter the whole catalogue, and each product has a button that
                opens WhatsApp with the model already filled in.{" "}
                <strong className="font-medium text-fg">The team adds new products themselves</strong>: a whole new
                ice machine range went up without me touching the code.
              </p>
              <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {GNS_FACTS.map(([n, l]) => (
                  <div key={l} className="bg-bg px-[18px] py-4">
                    <dt className="sr-only">{l}</dt>
                    <dd>
                      <b className="block font-head text-[22px] font-semibold tracking-[-0.02em] text-fg">{n}</b>
                      <small className="text-[13px] text-muted">{l}</small>
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/work/gns-commercial"
                className="mt-6 inline-block text-fg underline underline-offset-4 hover:text-accent"
              >
                Read how I built it →
              </Link>
            </div>
            <BrowserFrame address="gnscommercial.my/shop/…">
              <Image
                src="/work/gns/product.png"
                alt="GNS product page with specifications and an Ask on WhatsApp button"
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </BrowserFrame>
          </div>
        </Container>
      </Section>

      {/* Services: numbered accordion */}
      <Section id="services">
        <Container>
          <Label>What I can build for you</Label>
          <h2 className="h max-w-[820px] text-[clamp(28px,4vw,44px)]">
            Fixed prices, agreed on WhatsApp before I start.{" "}
            <span className="text-muted">These are starting prices; you get the exact figure in writing.</span>
          </h2>
          <div className="mt-12 border-t border-line">
            {SERVICES.map((s, i) => (
              <details key={s.slug} className="svc border-b border-line" open={i === 0}>
                <summary className="grid grid-cols-[28px_1fr] items-baseline gap-3 py-[26px] sm:grid-cols-[40px_1fr_auto]">
                  <span className="cond text-xl text-dim">{i + 1}.</span>
                  <span className="cond svc-title text-[clamp(24px,3.4vw,38px)]">
                    {s.name}
                    {s.isNew ? (
                      <em className="ml-2.5 rounded-full border border-line px-2 py-0.5 align-middle font-sans text-xs not-italic normal-case tracking-normal text-muted">
                        New
                      </em>
                    ) : null}
                  </span>
                  <span className="col-start-2 text-[15px] whitespace-nowrap text-muted sm:col-start-auto">
                    <PriceText price={s.price} note={s.priceNote} />
                  </span>
                </summary>
                <div className="grid max-w-[900px] gap-6 pb-8 pl-10 text-body sm:pl-[52px] md:grid-cols-[1.2fr_1fr]">
                  <p>{s.short}</p>
                  <ul className="text-[15px]">
                    {s.includes.slice(0, 4).map((x) => (
                      <li key={x} className="border-b border-dashed border-line py-1.5">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <Link href="/services" className="mt-7 inline-block text-fg underline underline-offset-4 hover:text-accent">
            Full details for every service →
          </Link>
        </Container>
      </Section>

      {/* About */}
      <Section id="about">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
          <div className="relative aspect-[4/5] max-w-[460px] overflow-hidden rounded-[18px]">
            <Image
              src="/img/githan-raj.jpg"
              alt="Githan Raj, founder of githzweb"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3.5 left-3.5 rounded-full bg-panel/85 px-3 py-1.5 text-[13px] backdrop-blur">
              {SITE.location}
            </span>
          </div>
          <div>
            <Label>Who you&rsquo;ll be talking to</Label>
            <p className="cond text-[clamp(64px,11vw,148px)] leading-[0.9]">
              Githan
              <br />
              Raj
            </p>
            <div className="max-w-[540px] text-body">
              <p className="mt-5">
                I&rsquo;m doing a degree in Software Engineering at UMPSA, after a Diploma in Computer Science there,
                and I run githzweb. There&rsquo;s no sales team: when you WhatsApp, you&rsquo;re talking to the person
                who plans, builds and looks after your site.
              </p>
              <p className="mt-5">
                Before websites I repaired laptops, 10 to 30 a week, so I&rsquo;m used to explaining tech in plain words
                and fixing things properly the first time.
              </p>
            </div>
            <dl className="mt-8 max-w-[540px] border-t border-line">
              {TIMELINE.map(([when, what]) => (
                <div key={when} className="grid grid-cols-[120px_1fr] gap-3 border-b border-line py-3 text-[15px]">
                  <dt className="text-muted">{when}</dt>
                  <dd>{what}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                LinkedIn ↗
              </a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                GitHub ↗
              </a>
              <Link href="/work#demos" className="hover:text-fg">
                Live demos →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <Label>How it works</Label>
          <h2 className="h max-w-[820px] text-[clamp(28px,4vw,44px)]">
            Most projects go from first message to live site in two to four weeks.
          </h2>
          <div className="mt-10 grid gap-7 lg:grid-cols-2 lg:gap-x-[72px] lg:gap-y-12">
            {STEPS.map((s) => (
              <div key={s.t}>
                <h3 className="font-head text-xl font-semibold tracking-[-0.015em]">{s.t}</h3>
                <p className="mt-2 max-w-[480px] text-body">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}

function PriceText({ price, note }: { price: string; note?: string }) {
  const m = price.match(/^from (.+)$/);
  if (!m) return <b className="font-medium text-fg">{price}</b>;
  return (
    <>
      from <b className="font-medium text-fg">{m[1]}</b>
      {note}
    </>
  );
}
