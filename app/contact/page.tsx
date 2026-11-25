import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { Container, Label, WhatsAppIcon } from "@/components/ui";
import { hasWhatsApp, SITE, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "WhatsApp or email githzweb about a catalogue website, rebuild, SEO setup or AI automation. Based in Johor Bahru, working across Malaysia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container className="grid gap-14 pt-16 pb-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:pt-24">
      <div>
        <Label>Contact</Label>
        <h1 className="font-display mt-6 text-5xl leading-[0.98] font-extrabold md:text-7xl">
          Let&rsquo;s talk <span className="text-lime">products.</span>
        </h1>
        <p className="mt-6 text-lg text-fog">
          The quickest way is WhatsApp. Prefer writing it all down? Use the form and we&rsquo;ll reply with a plan
          and a price.
        </p>

        <div className="mt-10 flex items-center gap-4 rounded-[20px] border border-line bg-panel p-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-lime">
            <Image src="/img/githan-raj.jpg" alt="Githan Raj" fill sizes="64px" className="object-cover object-top" />
          </div>
          <div>
            <p className="font-semibold">You&rsquo;ll be talking to Githan</p>
            <p className="text-sm text-fog">Githan Raj · founder & lead developer</p>
          </div>
        </div>

        <ul className="mt-8 space-y-3">
          {hasWhatsApp ? (
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-lime px-5 py-4 font-semibold text-ink"
              >
                <span className="flex items-center gap-3">
                  <WhatsAppIcon /> WhatsApp {SITE.whatsappDisplay}
                </span>
                <span aria-hidden className="arrow">
                  &rarr;
                </span>
              </a>
            </li>
          ) : null}
          {[
            { href: `mailto:${SITE.email}`, k: "Email", v: SITE.email },
            { href: SITE.linkedin, k: "LinkedIn", v: "Githan Raj" },
            { href: SITE.github, k: "GitHub", v: "githzweb" },
          ].map((l) => (
            <li key={l.k}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between rounded-2xl border border-line px-5 py-4 transition-colors hover:border-lime"
              >
                <span className="label">{l.k}</span>
                <span className="flex items-center gap-2">
                  {l.v}
                  <span aria-hidden className="arrow text-fog">
                    &#8599;
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="label mt-8">{SITE.location} · working across Malaysia</p>
      </div>

      <div className="rounded-[24px] border border-line bg-panel p-6 md:p-10">
        <p className="label mb-6">Project enquiry</p>
        <Suspense fallback={<div className="min-h-[640px]" />}>
          <ContactForm />
        </Suspense>
      </div>
    </Container>
  );
}
