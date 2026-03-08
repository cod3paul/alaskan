"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqItems } from "@/content/faq";
import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { cn } from "../utils";

export function FaqSection() {
  return (
    <Section className="bg-[var(--color-section-light)]">
      <Container className="max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="text-display-lg text-foreground mb-2">
            Frequently asked questions
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)]">
            Straight answers about our products, partners, and program details.
          </p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="space-y-3"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-4 rounded-lg border border-[var(--color-border-subtle)] bg-white px-4 py-3 text-left hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <span className="text-sm font-medium text-foreground">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="text-xs font-display uppercase tracking-[0.2em] text-[color:var(--text-secondary)]"
                >
                  +
                </span>
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.18s_ease-out] data-[state=open]:animate-[accordion-down_0.18s_ease-out]">
                <div className="px-4 pb-4 pt-2 text-sm text-[color:var(--text-secondary)]">
                  {item.answer}
                </div>
              </Accordion.Content>
            </AccordionItem>
          ))}
        </Accordion.Root>
      </Container>
    </Section>
  );
}

function AccordionItem({
  className,
  ...props
}: Accordion.AccordionItemProps & { className?: string }) {
  return (
    <Accordion.Item
      className={cn("overflow-hidden rounded-lg bg-white", className)}
      {...props}
    />
  );
}

