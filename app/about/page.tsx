import { aboutPageContent } from "@/content/about";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
    return (
        <>
            <Section className="bg-primary text-primary-foreground pt-24 pb-12 md:pt-28">
                <Container>
                    <h1 className="text-display-xl">About us</h1>
                </Container>
            </Section>

            <Section>
                <Container className="grid gap-12 md:grid-cols-2 items-center">

                    {/* TEXT COLUMN */}
                    <div className="flex flex-col justify-center space-y-8 max-w-2xl">
                        {aboutPageContent.paragraphs.map((p) => (
                            <p
                                key={p}
                                className="text-base leading-relaxed text-foreground/85"
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* IMAGE + QUOTE */}
                    <div className="relative h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-[1.5rem] shadow-sm">

                        <img
                            src={aboutPageContent.image.src}
                            alt={aboutPageContent.image.alt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/65" />

                        {/* quote */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                            <p className="max-w-md font-display text-lg md:text-xl uppercase tracking-[0.2em] text-white leading-relaxed">
                                {aboutPageContent.quote}
                            </p>
                        </div>

                    </div>

                </Container>
            </Section>
        </>
    );
}