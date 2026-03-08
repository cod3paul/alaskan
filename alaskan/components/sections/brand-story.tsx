import Link from "next/link";
import { brandStoryContent } from "@/content/home";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

export function BrandStory() {
    return (
        <section className="relative pt-0 md:pb-28 bg-background overflow-hidden min-h-[550px] flex items-center">
            <div className="absolute inset-0">
                <img
                    src={brandStoryContent.image.src}
                    alt=""
                    className="h-full w-full object-cover opacity-80"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/10 to-transparent"></div>

            {/* Content */}
            <Container className="relative section-padding max-w-3xl mx-auto text-center">
                <div className="space-y-6 text-black">
                    <h2 className="text-display-lg uppercase">
                        {brandStoryContent.heading.text}{" "}
                        <span className="text-primary">
                          {brandStoryContent.heading.highlight}
                        </span>
                    </h2>

                    <div className="space-y-4 text-base text-black">
                        {brandStoryContent.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>

                    <p className="text-base text-black">
                        {brandStoryContent.callout}
                    </p>

                    <Button asChild size="xl">
                        <Link href="/about">{brandStoryContent.cta}</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}