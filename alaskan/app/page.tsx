import { HeroSection } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { BigStatement } from "@/components/sections/big-statement";
import { BrandStory } from "@/components/sections/brand-story";
import { RetailCta } from "@/components/sections/retail-cta";
import { FaqSection } from "@/components/sections/faq";
import { ProductSlider } from "@/components/sections/products-slider";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <TrustStrip />
            <ProductSlider />
            <BrandStory />

            <RetailCta />
        </>
    );
}

