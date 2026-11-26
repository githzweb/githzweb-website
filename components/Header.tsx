import Image from "next/image";
import Link from "next/link";

import { NAV } from "@/content/site";

import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[var(--headbg)] backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-head text-lg font-semibold tracking-[-0.02em]" aria-label="githzweb home">
          githzweb
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-muted md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="flex items-center gap-2.5 rounded-full border border-line bg-panel py-[5px] pr-3.5 pl-[5px] text-[13px] transition-colors hover:border-muted"
          >
            <Image
              src="/img/githan-raj.jpg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover object-[50%_20%]"
            />
            <span aria-hidden className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_18%,transparent)]" />
            <span className="hidden sm:inline">Taking new projects</span>
            <span className="sm:hidden">Available</span>
          </Link>
          <details className="relative md:hidden">
            <summary
              aria-label="Menu"
              className="grid h-[38px] w-[38px] cursor-pointer list-none place-items-center rounded-full border border-line bg-panel [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden className="h-[17px] w-[17px]">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-12 flex w-48 flex-col rounded-2xl border border-line bg-panel p-2 shadow-xl"
            >
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2.5 hover:bg-chip">
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
