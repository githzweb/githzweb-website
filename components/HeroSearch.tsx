"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Made-up demo products. They show what a catalogue site does, not a real client's stock.
const DEMO = [
  { sku: "CH-200", name: "1-door upright chiller 200L", cat: "Refrigeration" },
  { sku: "CH-400", name: "2-door display chiller 400L", cat: "Refrigeration" },
  { sku: "FZ-300", name: "Chest freezer 300L", cat: "Refrigeration" },
  { sku: "SS-120", name: "Stainless steel work table 120cm", cat: "Stainless steel" },
  { sku: "SS-SNK", name: "Double-bowl stainless sink", cat: "Stainless steel" },
  { sku: "RK-HD5", name: "Heavy-duty storage rack, 5 tier", cat: "Racking" },
  { sku: "RK-GD2", name: "Gondola rack, double-sided", cat: "Racking" },
  { sku: "FP-MX20", name: "Planetary mixer 20L", cat: "Food processing" },
];

const WORDS = ["chiller", "rack", "stainless", "mixer"];

function Shape({ cat }: { cat: string }) {
  // Simple line drawings so the demo needs no photos.
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  if (cat === "Refrigeration")
    return (
      <svg viewBox="0 0 40 40" className="h-9 w-9">
        <rect x="11" y="4" width="18" height="32" rx="2" {...common} />
        <path d="M11 14h18M25 8v3M25 18v6" {...common} />
      </svg>
    );
  if (cat === "Racking")
    return (
      <svg viewBox="0 0 40 40" className="h-9 w-9">
        <path d="M8 4v32M32 4v32M8 10h24M8 19h24M8 28h24" {...common} />
      </svg>
    );
  if (cat === "Stainless steel")
    return (
      <svg viewBox="0 0 40 40" className="h-9 w-9">
        <path d="M4 14h32M7 14v20M33 14v20M7 26h26" {...common} />
      </svg>
    );
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9">
      <path d="M12 6h16l-2 14H14z M10 20h20v6H10z M14 26v8M26 26v8" {...common} />
    </svg>
  );
}

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [demo, setDemo] = useState(true);
  const timers = useRef<number[]>([]);

  // Type a few searches by itself until the visitor clicks into the box.
  useEffect(() => {
    if (!demo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // No typing animation: just show one finished search.
      const id = window.setTimeout(() => setQuery("chiller"), 0);
      return () => clearTimeout(id);
    }
    let t = 600;
    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
    const run = () => {
      WORDS.forEach((word) => {
        for (let i = 1; i <= word.length; i++) {
          const part = word.slice(0, i);
          at((t += 110), () => setQuery(part));
        }
        t += 1900;
        for (let i = word.length - 1; i >= 0; i--) {
          const part = word.slice(0, i);
          at((t += 45), () => setQuery(part));
        }
        t += 350;
      });
      at(t, () => {
        t = 0;
        run();
      });
    };
    run();
    const list = timers.current;
    return () => {
      list.forEach(clearTimeout);
      timers.current = [];
    };
  }, [demo]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEMO;
    return DEMO.filter((p) => `${p.name} ${p.cat} ${p.sku}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(closest-side,rgb(212_255_58/0.12),transparent)]" />
      <div className="relative rounded-[22px] border border-line bg-panel p-4 shadow-2xl md:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <span className="label !text-[10px]">Demo catalogue · try it</span>
        </div>

        <label className="flex items-center gap-3 rounded-full border border-line bg-ink px-4 py-3 focus-within:border-lime">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-fog" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className="sr-only">Search the demo catalogue</span>
          <input
            value={query}
            onFocus={() => {
              if (demo) {
                setDemo(false);
                setQuery("");
              }
            }}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or model…"
            className="w-full bg-transparent text-[15px] text-paper outline-none placeholder:text-fog"
          />
          {demo ? <span aria-hidden className="caret -ml-3 h-5 w-[2px] bg-lime" /> : null}
        </label>

        <p className="label mt-4 mb-3 !text-[10px]" aria-live="polite">
          {results.length} of {DEMO.length} products
        </p>

        <ul className="grid min-h-[268px] grid-cols-2 content-start gap-2.5">
          {results.slice(0, 4).map((p) => (
            <li key={p.sku} className="rounded-2xl border border-line bg-ink p-3">
              <div className="mb-2 flex items-start justify-between text-fog">
                <Shape cat={p.cat} />
                <span className="font-mono text-[10px] tracking-wider">{p.sku}</span>
              </div>
              <p className="label !text-[9px]">{p.cat}</p>
              <p className="mt-1 text-[13px] leading-snug font-medium">{p.name}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-lime">
                Ask on WhatsApp <span aria-hidden>&rarr;</span>
              </p>
            </li>
          ))}
          {results.length === 0 ? (
            <li className="col-span-2 rounded-2xl border border-dashed border-line p-6 text-center text-sm text-fog">
              No match. Try &ldquo;chiller&rdquo; or &ldquo;rack&rdquo;.
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
