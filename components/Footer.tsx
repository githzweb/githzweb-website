import Link from "next/link";

import { NAV, SITE } from "@/content/site";

import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-extrabold">
            githz<span className="text-lime">web</span>
          </p>
          <p className="mt-3 max-w-sm text-fog">{SITE.tagline}</p>
          <p className="label mt-6">{SITE.location}</p>
        </div>
        <div>
          <p className="label mb-4">Pages</p>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-fog hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-4">Contact</p>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-fog hover:text-paper">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-fog hover:text-paper">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-fog hover:text-paper">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-wrap justify-between gap-4 border-t border-line py-6 text-sm text-fog">
        <p>&copy; {new Date().getFullYear()} githzweb</p>
        <p className="font-mono text-xs uppercase tracking-widest">Built in-house · Next.js · Netlify</p>
      </Container>
    </footer>
  );
}
