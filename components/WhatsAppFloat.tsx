import Link from "next/link";

import { hasWhatsApp, waLink } from "@/content/site";

import { WhatsAppIcon } from "./ui";

/** Floating WhatsApp button on phones. Hidden until a number is set in content/site.ts. */
export function WhatsAppFloat() {
  if (!hasWhatsApp) return null;
  return (
    <Link
      href={waLink()}
      aria-label="Chat with githzweb on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg transition-transform hover:scale-105 md:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  );
}
