import {
    Leaf,
    ShieldCheck,
    Award,
    Snowflake,
    CookingPot,
} from "lucide-react";
import { Section } from "../ui/section";
import { Container } from "../ui/container";

const FEATURES = [
    {
        icon: Leaf,
        title: "Natural Ingredients",
        subtitle: "Real food. No nonsense.",
    },
    {
        icon: ShieldCheck,
        title: "No Preservatives",
        subtitle: "Nothing unnecessary inside.",
    },
    {
        icon: Award,
        title: "Grade A Meat",
        subtitle: "Only quality cuts, always.",
    },
    {
        icon: Snowflake,
        title: "Frozen Fresh",
        subtitle: "Ready whenever you are.",
    },
] as const;

export function TrustStrip() {
    return (
        <Section className="py-8 md:py-10">
            <Container>
                <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={[
                                "flex items-center justify-center md:px-6",
                                index !== FEATURES.length - 1 ? "md:border-r md:border-black/10" : "",
                            ].join(" ")}
                        >
                            <div className="flex items-center gap-4 py-2 text-left">
                                <div className="shrink-0 text-foreground">
                                    <feature.icon className="h-9 w-9 stroke-[1.8]" aria-hidden />
                                </div>

                                <div className="space-y-1">
                                    <p className="font-display text-[18px] leading-none uppercase tracking-tight text-foreground/80">
                                        {feature.title}
                                    </p>
                                    <p className="text-sm font-medium text-primary">
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}