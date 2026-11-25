import { Button, Container, Label } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 md:py-40">
      <Label>Error 404</Label>
      <h1 className="font-display mt-6 text-5xl leading-[0.98] font-extrabold md:text-7xl">
        Out of stock. <span className="text-fog">This page doesn&rsquo;t exist.</span>
      </h1>
      <div className="mt-9">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
