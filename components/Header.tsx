import Link from "next/link";

import { NAV, waLink } from "@/content/site";

import { Container, WhatsAppIcon } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-[22px] font-extrabold" aria-label="githzweb home">
          githz<span className="text-lime">web</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] text-fog transition-colors hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={waLink()}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-[#e2ff73]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="whitespace-nowrap">WhatsApp<span className="hidden sm:inline"> us</span></span>
          </Link>
          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer rounded-full border border-line px-3 py-2 text-sm [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-12 flex w-48 flex-col rounded-2xl border border-line bg-panel p-2 shadow-xl"
            >
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2.5 hover:bg-line">
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
