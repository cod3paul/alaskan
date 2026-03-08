import { contactPageContent } from "@/content/contact";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <>
      <Section className="bg-primary text-primary-foreground pt-24 pb-12 md:pt-28">
        <Container>
          <h1 className="text-display-xl">
            {contactPageContent.hero.heading.text}{" "}
            <span className="text-primary-foreground/80">
              {contactPageContent.hero.heading.highlight}
            </span>
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}

