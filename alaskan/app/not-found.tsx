import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center bg-[var(--color-section-light)]">
      <Container className="text-center space-y-4">
        <h1 className="text-display-xl text-foreground">404</h1>
        <p className="text-sm text-[color:var(--text-secondary)]">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </Container>
    </Section>
  );
}

