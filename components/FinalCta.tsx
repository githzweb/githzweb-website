import Link from "next/link";

import { waLink } from "@/content/site";

import { Container, WhatsAppIcon } from "./ui";

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-lime p-8 text-ink md:p-14">
          <p className="font-mono text-xs tracking-widest uppercase">{"// Next step"}</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] font-extrabold md:text-6xl">
            Tell us about your product list.
          </h2>
          <p className="mt-4 max-w-xl text-ink/75 md:text-lg">
            How many products, where they live now, how customers buy. We&rsquo;ll reply with a plan and a price.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={waLink("Hi githzweb, here's a bit about my product list:")}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-paper"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us{" "}
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 font-semibold hover:bg-ink/5"
            >
              Send the form{" "}
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
