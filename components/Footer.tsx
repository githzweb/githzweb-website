import Link from "next/link";

import { NAV, SITE } from "@/content/site";

import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-head text-base font-semibold text-fg">githzweb</p>
          <p className="mt-1">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-fg">
              {item.label}
            </Link>
          ))}
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            LinkedIn
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            GitHub
          </a>
        </nav>
      </Container>
      <Container className="flex flex-wrap justify-between gap-3 border-t border-line py-6 text-[13px] text-dim">
        <p>
          &copy; {new Date().getFullYear()} githzweb · Githan Raj · {SITE.location}
        </p>
        <a href={`mailto:${SITE.email}`} className="hover:text-fg">
          {SITE.email}
        </a>
      </Container>
    </footer>
  );
}
