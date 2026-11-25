"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import { SERVICES } from "@/content/services";

// Netlify Forms: the same form (same name and fields) is declared in public/__forms.html so Netlify
// detects it at deploy time. Here we post to that static file, as Netlify's Next.js docs describe.
const FORM_NAME = "enquiry";

const field =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-paper outline-none transition-colors placeholder:text-fog/70 focus:border-lime";

export function ContactForm() {
  const router = useRouter();
  const fromUrl = useSearchParams().get("service");
  const [service, setService] = useState(
    fromUrl && SERVICES.some((x) => x.slug === fromUrl) ? fromUrl : "catalogue-websites",
  );
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    const data = new FormData(form);
    data.set("page", window.location.pathname + window.location.search);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name={FORM_NAME} onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="page" value="" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label mb-2 block">Your name *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="label mb-2 block">Company</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="label mb-2 block">WhatsApp number *</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="012-345 6789" className={field} />
        </label>
        <label className="block">
          <span className="label mb-2 block">Email</span>
          <input name="email" type="email" autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className="label mb-2 block">Service</span>
          <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </label>
        <label className="block">
          <span className="label mb-2 block">How many products?</span>
          <select name="products" defaultValue="" className={field}>
            <option value="">Choose…</option>
            <option>Under 100</option>
            <option>100–500</option>
            <option>500+</option>
            <option>Not a catalogue project</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="label mb-2 block">Current website (if any)</span>
        <input name="website" type="text" inputMode="url" placeholder="yourcompany.com.my" className={field} />
      </label>
      <label className="block">
        <span className="label mb-2 block">Tell us a bit more *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What do you sell, where is your product list now, and how do customers buy from you?"
          className={field}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition-colors hover:bg-[#e2ff73] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <span aria-hidden className="arrow">
            &rarr;
          </span>
        </button>
        {status === "error" ? (
          <p role="alert" className="text-sm text-[#ff8a7a]">
            Couldn&rsquo;t send. Please try again or email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
