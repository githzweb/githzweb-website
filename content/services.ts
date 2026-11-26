// Services and starting prices. These must match docs/PLAN.md section 5.

export type Service = {
  code: string;
  slug: string;
  name: string;
  short: string;
  price: string;
  priceNote?: string;
  forWho: string;
  includes: string[];
  youProvide: string[];
  isNew?: boolean;
  featured?: boolean;
  /** Live demo on the Demo Hardware Co. site (a fictional shop githzweb built to show its services). */
  demo: { href: string; label: string };
};

export const DEMO_SITE = "https://demo-hardware-githzweb.pages.dev";

export const SERVICES: Service[] = [
  {
    code: "SVC-01",
    slug: "catalogue-websites",
    demo: { href: `${DEMO_SITE}/`, label: "Try the demo catalogue" },
    name: "Catalogue websites",
    short: "Your full product list online: searchable, filterable, with a WhatsApp enquiry button on every product.",
    price: "from RM1,800",
    forWho:
      "Suppliers and distributors with 100+ products who sell through WhatsApp, Shopee or Lazada and want customers to find the right item fast.",
    includes: [
      "Product catalogue with categories, search and filters",
      "A page for every product with “Ask on WhatsApp”",
      "Products imported from your Excel, PDF or old website",
      "Edit products yourself, no coding",
      "Contact form, mobile-first design, basic Google setup",
    ],
    youProvide: ["Your product list (any format)", "Product photos, if you have them", "Logo and contact details"],
    featured: true,
  },
  {
    code: "SVC-02",
    slug: "rebuilds",
    demo: { href: `${DEMO_SITE}/rebuild`, label: "See the before & after" },
    name: "Website rebuild & migration",
    short: "Move off Framer, Wix or WordPress to a fast site you own, with your content and products copied over automatically.",
    price: "from RM1,200",
    forWho: "Businesses whose current site is slow, hard to update, or costs too much every month.",
    includes: [
      "Content and products moved over automatically",
      "Faster pages on modern hosting",
      "Old links redirected so Google rankings aren't lost",
      "Same domain, no downtime on switch-over",
    ],
    youProvide: ["Access to your current site", "Domain login (we guide you)"],
  },
  {
    code: "SVC-03",
    slug: "google-seo",
    demo: { href: `${DEMO_SITE}/seo-report`, label: "See a sample SEO audit" },
    name: "Google & SEO setup",
    short: "Get found on Google: Search Console, sitemap, share previews and the basics done properly.",
    price: "from RM350",
    forWho: "Any business site that doesn't show up on Google, or shows up badly when shared on WhatsApp.",
    includes: [
      "Google Search Console and sitemap",
      "Help with your Google Business Profile",
      "Page titles, descriptions and share-preview images",
      "Structured data (JSON-LD) for products and business info",
    ],
    youProvide: ["Your website address", "Access to your Google account (you log in, we guide)"],
  },
  {
    code: "SVC-04",
    slug: "website-care",
    demo: { href: `${DEMO_SITE}/care-report`, label: "See a sample care report" },
    name: "Monthly website care",
    short: "We look after the site so you don't have to: updates, product changes, backups, and a monthly report.",
    price: "from RM150",
    priceNote: "/month",
    forWho: "Owners who want the site kept up to date without hiring an IT person.",
    includes: [
      "Hosting and uptime check",
      "Product and price updates (agreed amount per month)",
      "Small text and image changes",
      "Backups and a short monthly report",
    ],
    youProvide: ["Your update requests by WhatsApp or email"],
  },
  {
    code: "SVC-05",
    slug: "ai-automation",
    demo: { href: `${DEMO_SITE}/tools`, label: "Try the automation tools" },
    name: "AI automation",
    short: "Let software do the repetitive work: enquiry replies, product data clean-up, quotes and follow-ups.",
    price: "Ask for a quote",
    forWho: "Teams spending hours on copy-paste work, like updating product lists, answering the same questions, or chasing quotes.",
    includes: [
      "WhatsApp and enquiry auto-replies, lead capture",
      "Product data clean-up and bulk import (Excel/PDF → website, Shopee or Lazada)",
      "Office workflows: quotes, invoices, Google Sheets, follow-up emails",
    ],
    youProvide: ["A short walk-through of the task you want automated"],
    isNew: true,
  },
];
