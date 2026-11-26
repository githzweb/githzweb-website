import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-5 md:px-10 ${className}`}>{children}</div>;
}

/** Small plain section label, e.g. "Recent work". */
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mb-4 text-sm text-muted ${className}`}>{children}</p>;
}

/** A section with a top divider and the standard vertical spacing. */
export function Section({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line py-[88px] md:py-[120px] ${className}`}>
      {children}
    </section>
  );
}

const external = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-lime text-onlime hover:brightness-95"
      : "border border-line text-fg hover:border-muted hover:bg-panel";
  const props = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const cls = `inline-flex h-12 items-center gap-2.5 rounded-full px-[22px] text-[15px] font-medium transition-colors duration-200 ${styles} ${className}`;
  if (external(href)) {
    return (
      <a href={href} {...props} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Screenshot in a simple browser frame showing the real address. */
export function BrowserFrame({ address, children, className = "" }: { address: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[14px] border border-line bg-panel ${className}`}>
      <div className="flex h-10 items-center border-b border-line px-3.5">
        <span className="mx-auto max-w-[320px] flex-1 truncate rounded-md bg-chip px-2.5 py-0.5 text-center text-xs text-muted">
          {address}
        </span>
      </div>
      {children}
    </div>
  );
}

export function WhatsAppIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42a9.37 9.37 0 0 1 9.42 9.43c0 5.2-4.23 9.42-9.42 9.42Zm8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.07c0 2 .52 3.95 1.52 5.66L.62 23.25l5.65-1.48a11.3 11.3 0 0 0 5.78 1.47h.01c6.24 0 11.33-5.08 11.33-11.32 0-3.03-1.18-5.87-3.32-8.01Z" />
    </svg>
  );
}
