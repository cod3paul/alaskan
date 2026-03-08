import Link from "next/link";
import { heroContent } from "@/content/home";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function HeroSection() {
    return (
        <section className="relative min-h-[80vh] overflow-hidden bg-secondary text-primary-foreground flex items-center">

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={heroContent.image.src}
                    alt="family eating dumplings"
                    className="h-full w-full object-cover object-[center_10%]"
                />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* Content */}
            <div className="relative w-full">
                <Container className="flex flex-col items-center text-center gap-8 py-24">

                    {/* Badge */}
                    {/*<div className="inline-flex items-center gap-3 rounded-full border border-primary/50 bg-secondary/60 px-4 py-2 text-xs font-display uppercase tracking-[0.2em]">*/}
                    {/*    <span className="h-2 w-2 rounded-full bg-primary" />*/}
                    {/*    {heroContent.badge}*/}
                    {/*</div>*/}

                    {/* Heading */}
                    <div className="space-y-6 max-w-3xl">
                        <h1 className="text-display-xl text-primary-foreground">
                            {heroContent.heading.line1.toUpperCase()}
                            <br />
                            {heroContent.heading.line2.toUpperCase()}{" "}
                            <span className="text-primary">
                {heroContent.heading.highlight.toUpperCase()}
              </span>
                        </h1>

                        <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
                            {heroContent.description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="xl" variant="primary">
                            <Link href="/products">{heroContent.primaryCta}</Link>
                        </Button>

                        <Button asChild size="xl" variant="outline">
                            <Link href="/where-to-buy">{heroContent.secondaryCta}</Link>
                        </Button>
                    </div>

                </Container>
            </div>

        </section>
    );
}