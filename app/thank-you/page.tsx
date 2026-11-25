import type { Metadata } from "next";

import { Button, Container, Label, WhatsAppIcon } from "@/components/ui";
import { hasWhatsApp, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Thanks, we got your message",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <Container className="py-28 md:py-40">
      <Label>Enquiry sent</Label>
      <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[0.98] font-extrabold md:text-7xl">
        Got it. <span className="text-lime">Thank you.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-fog">
        Githan will read your message and reply with next steps. If it&rsquo;s urgent, WhatsApp is faster.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        {hasWhatsApp ? (
          <Button href={waLink("Hi githzweb, I just sent the enquiry form.")}>
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
          </Button>
        ) : null}
        <Button href="/work/gns-commercial" variant={hasWhatsApp ? "secondary" : "primary"}>
          See the GNS project
        </Button>
      </div>
    </Container>
  );
}
