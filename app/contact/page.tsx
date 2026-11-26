import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { Container, Label, WhatsAppIcon } from "@/components/ui";
import { hasWhatsApp, SITE, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "WhatsApp or email Githan Raj (githzweb) about a business website, catalogue website, website move or Google setup. Based in Johor Bahru, working across Malaysia.",
  alternates: { canonical: "/contact" },
};

const LINKS = [
  { href: `mailto:${SITE.email}`, k: "Email", v: SITE.email },
  { href: SITE.linkedin, k: "LinkedIn", v: "Githan Raj" },
  { href: SITE.github, k: "GitHub", v: "githzweb" },
];

export default function ContactPage() {
  return (
    <Container className="grid items-start gap-14 pt-[72px] pb-24 lg:grid-cols-[1fr_1.05fr] lg:gap-[72px] lg:pt-28 lg:pb-32">
      <div>
        <Label>Contact</Label>
        <h1 className="h text-[clamp(36px,5vw,58px)]">Let&rsquo;s talk about your business.</h1>
        <p className="mt-[22px] max-w-[520px] text-lg text-muted">
          The quickest way is WhatsApp. Prefer writing it all down? Use the form and I&rsquo;ll reply with a plan and a
          price, usually the same day.
        </p>

        <div className="mt-9 flex max-w-[520px] items-center gap-4 rounded-2xl border border-line bg-panel p-4">
          <Image
            src="/img/githan-raj.jpg"
            alt="Githan Raj"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover object-[50%_20%]"
          />
          <div>
            <p className="font-medium">You&rsquo;ll be talking to Githan</p>
            <p className="text-sm text-muted">Githan Raj · founder &amp; developer, githzweb</p>
          </div>
        </div>

        {hasWhatsApp ? (
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 flex h-[60px] max-w-[520px] items-center justify-between rounded-full bg-lime px-[22px] text-[17px] font-medium text-onlime transition hover:brightness-95"
          >
            <span className="flex items-center gap-2.5">
              <WhatsAppIcon /> WhatsApp {SITE.whatsappDisplay}
            </span>
            <span aria-hidden>→</span>
          </a>
        ) : null}

        <ul className="mt-3.5 max-w-[520px] border-t border-line">
          {LINKS.map((l) => (
            <li key={l.k}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between border-b border-line px-0.5 py-4 text-[15px]"
              >
                <span className="text-sm text-muted">{l.k}</span>
                <b className="font-medium group-hover:underline group-hover:underline-offset-4">{l.v} ↗</b>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">Based in Johor Bahru. Working with businesses across Malaysia.</p>
      </div>

      <div id="form" className="scroll-mt-24 rounded-[20px] border border-line bg-panel px-[22px] py-7 md:p-9">
        <h2 className="font-head text-2xl font-semibold tracking-[-0.02em]">Project enquiry</h2>
        <p className="mt-1.5 text-[15px] text-muted">A few details so I can reply with something useful.</p>
        <Suspense fallback={<div className="min-h-[640px]" />}>
          <ContactForm />
        </Suspense>
      </div>
    </Container>
  );
}
