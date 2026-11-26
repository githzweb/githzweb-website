// Company facts and contact details. Change them here only. Every page reads from this file.

export const SITE = {
  name: "githzweb",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://githzweb.netlify.app",
  tagline: "Websites for Malaysian small businesses, built and looked after by Githan Raj.",
  email: "githzweb@gmail.com",
  // WhatsApp number in international format, digits only (010-887 0776 -> 60108870776).
  // If it's ever emptied, every WhatsApp button sends people to the contact page instead.
  whatsapp: "60108870776",
  whatsappDisplay: "010-887 0776",
  linkedin: "https://www.linkedin.com/in/githan-raj-7b92b62ba/",
  github: "https://github.com/githzweb",
  location: "Johor Bahru, Malaysia",
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** WhatsApp click-to-chat link with a pre-filled message, or the contact page if no number is set yet. */
export function waLink(message = "Hi Githan, I'd like to ask about a website.") {
  const digits = SITE.whatsapp.replace(/\D/g, "");
  if (!digits) return "/contact";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsApp = SITE.whatsapp.replace(/\D/g, "").length > 0;
