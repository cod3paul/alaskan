import Link from "next/link";
import { footerExplore, footerRetail } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "../ui/container";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-primary-foreground">
            <Container className="">
                <div className="grid gap-12 pt-4 md:grid-cols-3 md:gap-16">
                    <div>
                        <h4 className="mb-5 font-display text-xs uppercase tracking-[0.28em] text-primary">
                            Explore
                        </h4>
                        <nav className="flex flex-col gap-4">
                            {footerExplore.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-base text-white/75 transition-colors hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="mb-5 font-display text-xs uppercase tracking-[0.28em] text-primary">
                            For Retailers
                        </h4>
                        <nav className="flex flex-col gap-4">
                            {footerRetail.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-base text-white/75 transition-colors hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="mb-5 font-display text-xs uppercase tracking-[0.28em] text-primary">
                            Distributor
                        </h4>

                        <div className="space-y-4 text-base leading-7 text-white/75">
                            <p>
                                {siteConfig.distributor.name}
                                <br />
                                {siteConfig.distributor.address}
                                <br />
                                {siteConfig.distributor.suite}, {siteConfig.distributor.city}
                            </p>

                            <a
                                href={siteConfig.distributor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-primary transition-colors hover:text-primary/80"
                            >
                                {siteConfig.distributor.websiteLabel}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pb-6 flex flex-col gap-3 pt-6 text-center">
                    <p className="text-sm text-white/30">
                        © {year} {siteConfig.name}. All rights reserved.  Proudly made in {siteConfig.location}.
                    </p>
                </div>
            </Container>
        </footer>
    );
}