import { Button, Container, Label } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 md:py-40">
      <Label>Error 404</Label>
      <h1 className="h text-[clamp(36px,5.4vw,60px)]">
        This page doesn&rsquo;t exist. <span className="text-muted">It may have moved when the site was redesigned.</span>
      </h1>
      <div className="mt-9">
        <Button href="/">Back to the home page</Button>
      </div>
    </Container>
  );
}
