import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { bigStatementContent } from "@/content/home";

export function BigStatement() {
  return (
    <Section className="py-24 bg-primary text-primary-foreground min-h-[550px] flex items-center">
      <Container className="text-center space-y-6">
        <div className="space-y-2">
          {bigStatementContent.lines.map((line) => (
            <p key={line} className="text-display-xl">
              {line.toUpperCase()}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}

