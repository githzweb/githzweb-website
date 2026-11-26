"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";

import { SERVICES } from "@/content/services";

// Netlify Forms: the same form (same name and fields) is declared in public/__forms.html so Netlify
// detects it at deploy time. Here we post to that static file, as Netlify's Next.js docs describe.
// Field names must stay in sync with public/__forms.html.
const FORM_NAME = "enquiry";

const field =
  "w-full rounded-xl border border-line bg-bg px-3.5 py-3 text-[15px] text-fg outline-none transition-colors placeholder:text-dim focus:border-muted";

function Field({ label, hint, children, full }: { label: string; hint?: string; children: ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-sm font-medium">
        {label} {hint ? <span className="font-normal text-muted">{hint}</span> : null}
      </span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const router = useRouter();
  const fromUrl = useSearchParams().get("service");
  const [service, setService] = useState(
    fromUrl && SERVICES.some((x) => x.slug === fromUrl) ? fromUrl : SERVICES[0].slug,
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
    <form name={FORM_NAME} onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="page" value="" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="mt-7 grid gap-[18px] sm:grid-cols-2">
        <Field label="Your name" hint="*">
          <input name="name" required autoComplete="name" className={field} />
        </Field>
        <Field label="Business name">
          <input name="company" autoComplete="organization" className={field} />
        </Field>
        <Field label="WhatsApp number" hint="*">
          <input name="phone" type="tel" required autoComplete="tel" placeholder="012-345 6789" className={field} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" autoComplete="email" className={field} />
        </Field>
        <Field label="What do you need?">
          <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </Field>
        <Field label="How many products or services?">
          <select name="products" defaultValue="" className={field}>
            <option value="">Choose…</option>
            <option>Under 20</option>
            <option>20–100</option>
            <option>100–500</option>
            <option>500+</option>
          </select>
        </Field>
        <Field label="Current website or Facebook page" hint="(if any)" full>
          <input name="website" type="text" inputMode="url" placeholder="yourbusiness.com.my" className={field} />
        </Field>
        <Field label="Tell me a bit more" hint="*" full>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What does your business do, and what should the website do for you?"
            className={`${field} min-h-[140px] resize-y`}
          />
        </Field>
      </div>

      <div className="mt-[26px] flex flex-wrap items-center gap-3.5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-lime px-[22px] font-medium text-onlime transition hover:brightness-95 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry →"}
        </button>
        {status === "error" ? (
          <p role="alert" className="text-sm text-[#e5484d]">
            Couldn&rsquo;t send. Please try again, or WhatsApp or email me directly.
          </p>
        ) : (
          <small className="text-[13px] text-muted">I reply within one working day.</small>
        )}
      </div>
    </form>
  );
}
