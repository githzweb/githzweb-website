import type { Metadata } from "next";
import { Anton, Inter, Inter_Tight } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE } from "@/content/site";

import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["500", "600"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "githzweb | Websites for Malaysian Small Businesses, by Githan Raj",
    template: "%s | githzweb",
  },
  description:
    "Githan Raj builds fast websites for Malaysian small businesses in Johor Bahru and across Malaysia: business websites, product catalogues and Google setup, with every enquiry going to your WhatsApp.",
  applicationName: "githzweb",
  keywords: [
    "web developer Johor Bahru",
    "website for small business Malaysia",
    "catalogue website Malaysia",
    "business website Johor",
    "website rebuild Malaysia",
  ],
  // Share preview (WhatsApp, Telegram, Facebook…): a real screenshot of the homepage hero.
  // Re-take it with a headless browser at 1200x630 if the hero changes.
  openGraph: {
    siteName: "githzweb",
    locale: "en_MY",
    type: "website",
    images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "githzweb homepage: I build websites for Malaysian small businesses" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-home.jpg"] },
};

// Sets the theme before the first paint: saved choice first, otherwise the device setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${anton.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-onlime"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
