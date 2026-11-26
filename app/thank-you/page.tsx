import type { Metadata } from "next";

import { Button, Container, Label, WhatsAppIcon } from "@/components/ui";
import { hasWhatsApp, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Thanks, I got your message",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <Container className="py-28 md:py-40">
      <Label>Enquiry sent</Label>
      <h1 className="h max-w-3xl text-[clamp(36px,5.4vw,60px)]">
        Got it, thank you. <span className="text-muted">I&rsquo;ll read your message and reply with next steps.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">If it&rsquo;s urgent, WhatsApp is faster.</p>
      <div className="mt-9 flex flex-wrap gap-3">
        {hasWhatsApp ? (
          <Button href={waLink("Hi Githan, I just sent the enquiry form.")}>
            <WhatsAppIcon /> WhatsApp me
          </Button>
        ) : null}
        <Button href="/work/gns-commercial" variant={hasWhatsApp ? "secondary" : "primary"}>
          See the GNS project
        </Button>
      </div>
    </Container>
  );
}
