"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

import { SITE, waLink } from "@/content/site";

import { Reveal } from "./Reveal";
import { Label, WhatsAppIcon } from "./ui";

const CHIPS = [
  { text: "Lead developer", pos: "-left-3 top-8 lg:-left-8", delay: "0s" },
  { text: "Johor Bahru", pos: "-right-2 top-1/3 lg:-right-8", delay: "1.5s" },
  { text: "SE @ UMPSA", pos: "-left-2 top-[56%] lg:-left-10", delay: "3s" },
  { text: "323 products shipped", pos: "-right-3 -bottom-4 lg:-right-6", delay: "4.5s", lime: true },
];

const TABS = [
  {
    id: "build",
    label: "Build",
    title: "I turn messy product lists into websites people can search.",
    body: [
      "Most suppliers I talk to have their catalogue in a PDF, an Excel file, or an old site nobody can update. I move all of it into a fast website with search, filters and a WhatsApp button on every product.",
      "I build with Next.js, Sanity and Netlify, and use AI (Claude Code) to do the slow parts, like importing hundreds of products, so clients get more for their budget.",
    ],
    specs: [
      ["Stack", "Next.js · Sanity · Netlify"],
      ["Speciality", "Big product catalogues"],
      ["Latest", "gnscommercial.my"],
    ],
  },
  {
    id: "learn",
    label: "Education",
    title: "Studying software engineering while building real projects.",
    body: [
      "I finished my Diploma in Computer Science at UMPSA and I'm now doing a Bachelor of Software Engineering there. What I learn in class goes straight into client work, and the client work makes the classes make sense.",
    ],
    specs: [
      ["Diploma", "Computer Science, UMPSA (2023–2026)"],
      ["Degree", "Software Engineering, UMPSA (2026–2029)"],
      ["Also", "Java, PHP, SQL, Python, Figma"],
    ],
  },
  {
    id: "process",
    label: "How I work",
    title: "Clear scope, clear price, no surprises.",
    body: [
      "Every project starts with a short call to understand your products and how your customers buy. You get a written quote and plan before any work begins, regular progress updates during the build, and a walkthrough at handover.",
    ],
    specs: [
      ["Quote", "Fixed price, in writing"],
      ["Updates", "Progress shared each week"],
      ["Handover", "Walkthrough + edit guide"],
    ],
  },
] as const;

const TIMELINE = [
  { when: "2025", what: "Laptop technician, Via Global", note: "Diagnosed and repaired 10–30 laptops a week." },
  {
    when: "Mar–Aug 2026",
    what: "Web developer intern, GNS Commercial Equipment",
    note: "Built their Framer site with 300+ products and managed their Shopee and Lazada listings.",
  },
  {
    when: "Nov 2026",
    what: "Rebuilt GNS as a full catalogue website",
    note: "Next.js + Sanity, 323 products imported automatically. Live at gnscommercial.my.",
  },
  { when: "Nov 2026", what: "Started githzweb", note: "Catalogue websites for Malaysian suppliers and distributors." },
];

export function AboutGithan() {
  const card = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("build");
  const active = TABS.find((t) => t.id === tab)!;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = card.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  }
  function onLeave() {
    const el = card.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[1200px] gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8">
        {/* Photo card */}
        <div className="relative mx-auto w-full max-w-[400px] [perspective:1000px]">
          <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-[radial-gradient(closest-side,rgb(212_255_58/0.16),transparent)]" />
          <div
            ref={card}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="relative aspect-[704/913] overflow-hidden rounded-[28px] border border-line bg-panel transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
          >
            <Image
              src="/img/githan-raj.jpg"
              alt="Githan Raj, founder and lead developer at githzweb"
              fill
              sizes="(min-width: 768px) 400px, 90vw"
              className="object-cover"
              priority={false}
            />
            {/* moving light sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
              style={{
                background:
                  "radial-gradient(circle at var(--gx,50%) var(--gy,30%), rgb(255 255 255 / 0.35), transparent 45%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
              <p className="font-display text-2xl font-bold">Githan Raj</p>
              <p className="label mt-1 !text-paper/70">Founder & lead developer</p>
            </div>
          </div>

          {CHIPS.map((c) => (
            <span
              key={c.text}
              className={`chip-drift absolute ${c.pos} z-10 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider shadow-lg ${
                c.lime ? "border-lime bg-lime text-ink" : "border-line bg-panel/95 text-paper"
              }`}
              style={{ animationDelay: c.delay }}
            >
              {c.text}
            </span>
          ))}
        </div>

        {/* Story */}
        <div>
          <Label n="04">About</Label>
          <h2 className="font-display mt-4 text-4xl leading-[1.05] font-extrabold md:text-6xl">
            Githan Raj.
            <br />
            <span className="text-fog">The developer who</span> <span className="text-lime">builds your site.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-fog">
            I founded githzweb and lead every build. When you contact us, you speak directly with the person who
            plans, builds and supports your website. No sales team, no middleman.
          </p>

          <div role="tablist" aria-label="About Githan" className="mt-10 inline-flex rounded-full border border-line bg-panel p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="about-panel"
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  tab === t.id ? "bg-lime text-ink" : "text-fog hover:text-paper"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            id="about-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            key={active.id}
            className="mt-6 min-h-[260px] animate-[fadein_300ms_ease-out]"
          >
            <h3 className="text-xl font-semibold">{active.title}</h3>
            {active.body.map((p) => (
              <p key={p} className="mt-3 max-w-xl text-fog">
                {p}
              </p>
            ))}
            <dl className="mt-6 max-w-xl space-y-2.5 font-mono text-[13px]">
              {active.specs.map(([k, v]) => (
                <div key={k} className="spec-row">
                  <dt className="uppercase tracking-wider text-fog">{k}</dt>
                  <span className="dots" aria-hidden />
                  <dd className="text-right text-paper">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              { href: waLink("Hi Githan, I saw your website and want to ask about a project."), label: "WhatsApp", wa: true },
              { href: SITE.linkedin, label: "LinkedIn" },
              { href: SITE.github, label: "GitHub" },
              { href: `mailto:${SITE.email}`, label: "Email" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-lime hover:text-lime"
              >
                {l.wa ? <WhatsAppIcon className="h-4 w-4" /> : null}
                {l.label}
                <span aria-hidden className="arrow">
                  &#8599;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-24 w-full max-w-[1200px] px-5 md:px-8">
        <p className="label mb-8">The road so far</p>
        <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-0 md:right-0 md:top-[7px] md:bottom-auto md:h-px md:w-auto" />
          {TIMELINE.map((t, i) => (
            <li key={t.what} className="relative pl-8 md:pl-0 md:pt-8">
              <span
                aria-hidden
                className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 md:top-0 ${
                  i === TIMELINE.length - 1 ? "border-lime bg-lime" : "border-line bg-ink"
                }`}
              />
              <Reveal delay={i * 120}>
                <p className="font-mono text-xs tracking-wider text-lime uppercase">{t.when}</p>
                <p className="mt-2 font-semibold">{t.what}</p>
                <p className="mt-1.5 text-sm text-fog">{t.note}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
