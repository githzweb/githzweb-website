import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FinalCta } from "@/components/FinalCta";
import { BrowserFrame, Container, Label, Section } from "@/components/ui";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites built by Githan Raj (githzweb), including the GNS Commercial Equipment catalogue (335 products), plus live demos of every service.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const demos = SERVICES.filter((s) => s.demo);
  return (
    <>
      <Container className="pt-[72px] pb-12 md:pt-28 md:pb-16">
        <Label>Work</Label>
        <h1 className="h max-w-[960px] text-[clamp(34px,5.4vw,60px)]">
          One client so far, and it&rsquo;s real.{" "}
          <span className="text-muted">
            I&rsquo;m just starting out, so instead of a long list, here&rsquo;s one project in detail and live demos
            of everything else I offer.
          </span>
        </h1>
      </Container>

      <Section className="!pt-14 md:!pt-[72px]">
        <Container>
          <Link
            href="/work/gns-commercial"
            className="group grid overflow-hidden rounded-[20px] border border-line bg-panel transition-colors hover:border-muted lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-chip lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/work/gns/home.png"
                alt="GNS Commercial Equipment homepage"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
              <div>
                <p className="text-sm text-muted">Johor Bahru · November 2026</p>
                <h2 className="h mt-3 text-3xl md:text-4xl">GNS Commercial Equipment</h2>
                <p className="mt-3 text-body">
                  A catalogue website for a commercial kitchen and retail equipment supplier: 335 products with search,
                  filters and a WhatsApp button on every product.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["Catalogue website", "Moved from Framer", "Google setup"].map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-medium underline underline-offset-4 group-hover:text-accent">Read how I built it →</p>
            </div>
          </Link>
        </Container>
      </Section>

      <Section id="demos">
        <Container>
          <Label>Live demos</Label>
          <h2 className="h max-w-[820px] text-[clamp(28px,4vw,44px)]">
            Try what you&rsquo;d get.{" "}
            <span className="text-muted">
              I built a full website for a made-up supplier, Demo Hardware Co. The company is fictional; the website
              and tools are real.
            </span>
          </h2>
          <ul className="mt-12 border-t border-line">
            {demos.map((s, i) => (
              <li key={s.slug}>
                <a
                  href={s.demo!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[28px_1fr] items-baseline gap-3 border-b border-line py-6 sm:grid-cols-[40px_1fr_auto]"
                >
                  <span className="cond text-xl text-dim">{i + 1}.</span>
                  <span className="cond text-[clamp(22px,3vw,34px)] group-hover:text-accent">{s.name}</span>
                  <span className="col-start-2 text-sm text-muted group-hover:text-fg sm:col-start-auto">
                    {s.demo!.label} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <BrowserFrame address="your-business.com.my" className="mt-12">
            <div className="flex min-h-[180px] flex-col justify-center p-8 md:p-10">
              <p className="h text-2xl md:text-3xl">This spot is for your business.</p>
              <p className="mt-2 max-w-lg text-muted">
                Have a business that deserves a better website? <Link href="/contact" className="text-fg underline underline-offset-4">Let&rsquo;s talk.</Link>
              </p>
            </div>
          </BrowserFrame>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
