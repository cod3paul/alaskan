import Link from "next/link";
import { retailCtaContent } from "@/content/home";
import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

export function RetailCta() {
  return (
    <Section className="relative bg-secondary text-primary-foreground">
      <Container className="text-center space-y-6">
        <h2 className="text-display-lg uppercase">
          {retailCtaContent.heading.text}{" "}
          <span className="text-primary">
            {retailCtaContent.heading.highlight}
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-300">
            Reliable supply. Strong margins. A product customers keep coming back for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/contact">{retailCtaContent.primaryCta}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <a href={retailCtaContent.sellSheetPath} download>
              {retailCtaContent.secondaryCta}
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

