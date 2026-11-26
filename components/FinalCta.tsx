import { hasWhatsApp, SITE, waLink } from "@/content/site";

import { Button, Container, Section, WhatsAppIcon } from "./ui";

export function FinalCta({
  title = "Tell me about your business.",
  text = "What you do, and what you want the website to do for you. I usually reply the same day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section>
      <Container>
        <h2 className="h text-[clamp(40px,7vw,88px)]">{title}</h2>
        <p className="mt-[18px] max-w-[560px] text-lg text-muted">{text}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          {hasWhatsApp ? (
            <Button href={waLink()}>
              <WhatsAppIcon /> WhatsApp {SITE.whatsappDisplay}
            </Button>
          ) : null}
          <Button href="/contact#form" variant="secondary">
            Send a message
          </Button>
        </div>
      </Container>
    </Section>
  );
}
