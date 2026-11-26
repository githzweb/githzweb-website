// Services and starting prices. Every price is a starting point; the exact quote is agreed in writing.

export type Service = {
  slug: string;
  name: string;
  short: string;
  /** Price shown big, e.g. "from RM900" or "Ask for a quote". */
  price: string;
  priceNote?: string;
  forWho: string;
  includes: string[];
  youProvide: string[];
  isNew?: boolean;
  /** Live demo on the Demo Hardware Co. site (a fictional shop githzweb built to show its services). */
  demo?: { href: string; label: string };
};

export const DEMO_SITE = "https://demo-hardware-githzweb.pages.dev";

export const SERVICES: Service[] = [
  {
    slug: "business-website",
    name: "Business website",
    short:
      "A proper website for cafés, salons, workshops and shops: what you do, your prices or menu, photos, opening hours and a map.",
    price: "from RM900",
    forWho:
      "Small businesses that only have a Facebook page or Google listing, or an old site that looks out of date on a phone.",
    includes: [
      "Up to 5 pages, built for phones first",
      "WhatsApp button on every page",
      "Menu, price list or services page",
      "Map, opening hours and Google Business Profile help",
      "Change text and photos yourself",
    ],
    youProvide: ["Your logo, photos and prices", "What you want customers to do (call, WhatsApp, visit)"],
    isNew: true,
  },
  {
    slug: "catalogue-websites",
    demo: { href: `${DEMO_SITE}/`, label: "Try the demo catalogue" },
    name: "Catalogue website",
    short: "Your full product list online: searchable, filterable, with a WhatsApp enquiry button on every product.",
    price: "from RM1,800",
    forWho:
      "Suppliers, distributors and shops with 100+ products who sell through WhatsApp, Shopee or Lazada and want customers to find the right item fast.",
    includes: [
      "Product catalogue with categories, search and filters",
      "A page for every product with “Ask on WhatsApp”",
      "Products imported from your Excel, PDF or old website",
      "Add and edit products yourself, no coding",
      "Contact form and basic Google setup",
    ],
    youProvide: ["Your product list (any format)", "Product photos, if you have them", "Logo and contact details"],
  },
  {
    slug: "rebuilds",
    demo: { href: `${DEMO_SITE}/rebuild`, label: "See a before & after" },
    name: "Move your old website",
    short:
      "Move off Wix, Framer or an old WordPress site to a fast site you own, with your content and products copied over automatically.",
    price: "from RM1,200",
    forWho: "Businesses whose current site is slow, hard to update, or costs too much every month.",
    includes: [
      "Content and products moved over automatically",
      "Faster pages on modern hosting",
      "Old links redirected so you keep your Google ranking",
      "Same domain, no downtime on switch-over",
    ],
    youProvide: ["Access to your current site", "Domain login (I'll guide you)"],
  },
  {
    slug: "google-seo",
    demo: { href: `${DEMO_SITE}/seo-report`, label: "See a sample SEO audit" },
    name: "Google setup",
    short: "Show up on Google, and look right when someone shares your link on WhatsApp.",
    price: "from RM350",
    forWho: "Any business site that doesn't show up on Google, or shows a blank preview when shared.",
    includes: [
      "Google Search Console and sitemap",
      "Help with your Google Business Profile",
      "Proper page titles, descriptions and share previews",
      "Structured data for your products and business",
    ],
    youProvide: ["Your website address", "Access to your Google account (you log in, I guide)"],
  },
  {
    slug: "website-care",
    demo: { href: `${DEMO_SITE}/care-report`, label: "See a sample care report" },
    name: "Monthly care",
    short:
      "Send me changes on WhatsApp and I make them. I also keep the site online and backed up, and send a short report each month.",
    price: "from RM150",
    priceNote: "/month",
    forWho: "Owners who want the site kept up to date without hiring an IT person.",
    includes: [
      "Hosting and uptime checks",
      "Product and price updates (an agreed amount each month)",
      "Small text and photo changes",
      "Backups and a short monthly report",
    ],
    youProvide: ["Your update requests by WhatsApp or email"],
  },
  {
    slug: "ai-automation",
    demo: { href: `${DEMO_SITE}/tools`, label: "Try the automation tools" },
    name: "Automation",
    short: "Software that does the repetitive work: enquiry replies, product data clean-up, quotes and follow-ups.",
    price: "Ask for a quote",
    forWho:
      "Teams spending hours on copy-paste work: updating product lists, answering the same questions, or chasing quotes.",
    includes: [
      "WhatsApp and enquiry auto-replies",
      "Product data clean-up and bulk import (Excel/PDF → website, Shopee or Lazada)",
      "Office workflows: quotes, invoices, Google Sheets, follow-up emails",
    ],
    youProvide: ["A short walk-through of the task you want automated"],
    isNew: true,
  },
];
