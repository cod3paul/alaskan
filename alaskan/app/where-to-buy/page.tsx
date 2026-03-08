import { whereToBuyContent } from "@/content/where-to-buy";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhereToBuyPage() {
  return (
    <>
      <Section className="bg-primary text-primary-foreground pt-24 pb-12 md:pt-28">
        <Container>
          <h1 className="text-display-xl">
              Our retail partners
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-16">
            {whereToBuyContent.retailers.map((retailer) => (
              <article
                key={retailer.name}
                className="flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-[var(--color-border-subtle)] bg-white px-4 py-6 text-center"
              >
                <img
                  src={retailer.logo}
                  alt={retailer.name}
                  className="mb-3 max-h-[60px] w-full object-contain"
                  loading="lazy"
                />
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-foreground">
                  {retailer.name}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl bg-secondary px-8 py-10 text-center text-primary-foreground">
            <h3 className="text-display-md mb-3">
              {whereToBuyContent.retail.heading}
            </h3>
            <p className="mb-6 text-sm text-primary-foreground/75">
              {whereToBuyContent.retail.description}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">{whereToBuyContent.retail.cta}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

