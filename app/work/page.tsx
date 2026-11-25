import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FinalCta } from "@/components/FinalCta";
import { Container, Label } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites built by githzweb, including the GNS Commercial Equipment catalogue (323 products).",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Container className="pt-16 pb-10 md:pt-24">
        <Label>Work</Label>
        <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.98] font-extrabold md:text-[80px]">
          Real projects. <span className="text-fog">Real products.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fog">
          We&rsquo;re a young studio, so the list is short, and every project on it is real and live.
        </p>
      </Container>

      <Container className="grid gap-5 py-10 md:grid-cols-2">
        <Link
          href="/work/gns-commercial"
          className="group overflow-hidden rounded-[24px] border border-line bg-panel transition-colors hover:border-lime/60 md:col-span-2 md:grid md:grid-cols-[1.2fr_1fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-ink md:aspect-auto md:min-h-[440px]">
            <Image
              src="/work/gns/home.png"
              alt="GNS Commercial Equipment homepage"
              fill
              sizes="(min-width: 768px) 660px, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
            <div>
              <p className="font-mono text-xs tracking-widest text-fog">CASE 01 · NOV 2026</p>
              <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">GNS Commercial Equipment</h2>
              <p className="mt-3 text-fog">
                Catalogue website for a commercial kitchen equipment supplier in Johor Bahru: 323 products, search,
                filters and WhatsApp enquiries.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Catalogue website", "Migration from Framer", "Google setup"].map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fog">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-semibold text-lime">
              Read the case study{" "}
              <span aria-hidden className="arrow inline-block">
                &rarr;
              </span>
            </p>
          </div>
        </Link>

        <div className="flex min-h-[220px] flex-col justify-center rounded-[24px] border border-dashed border-line p-8 md:col-span-2">
          <p className="font-mono text-xs tracking-widest text-fog">CASE 02</p>
          <p className="font-display mt-3 text-2xl font-bold">This spot is for your business.</p>
          <p className="mt-2 max-w-lg text-fog">
            Have a big product list and a site that doesn&rsquo;t show it off? Let&rsquo;s talk.
          </p>
        </div>
      </Container>

      <FinalCta />
    </>
  );
}
