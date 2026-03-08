"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "../utils";

export function SiteHeader() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 40);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";
    const isTransparent = isHome && !scrolled;

    return (
        <>
            <header
                className={cn(
                    "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
                    isTransparent ? "bg-transparent" : "bg-secondary backdrop-blur-md"
                )}
            >
                <div className="section-padding flex h-16 items-center justify-between md:h-20">
                    <Link
                        href="/"
                        className="font-display text-xl uppercase tracking-tight text-white md:text-2xl"
                    >
                        {siteConfig.name}
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        <NavigationMenu.Root>
                            <NavigationMenu.List className="flex items-center gap-8">
                                {mainNav.map((item) => {
                                    const active = pathname === item.href;

                                    return (
                                        <NavigationMenu.Item key={item.href}>
                                            <NavigationMenu.Link asChild>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "font-display text-xs uppercase tracking-[0.2em] transition-colors text-white",
                                                        active ? "opacity-100" : "opacity-80 hover:opacity-100"
                                                    )}
                                                >
                                                    {item.label}
                                                </Link>
                                            </NavigationMenu.Link>
                                        </NavigationMenu.Item>
                                    );
                                })}
                            </NavigationMenu.List>
                        </NavigationMenu.Root>
                    </nav>

                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </header>
            {!isHome && <div className="h-[64px] h-lg-[80px]" />}
        </>
    );
}

function MobileNav() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button
                    type="button"
                    aria-label="Open navigation"
                    className="inline-flex items-center justify-center rounded-full p-2 text-white"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-secondary/95" />
                <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-secondary">
                    <button
                        type="button"
                        aria-label="Close navigation"
                        onClick={() => setOpen(false)}
                        className="absolute right-6 top-6 text-white"
                    >
                        <X className="h-7 w-7" />
                    </button>

                    <div className="flex flex-col items-center gap-6">
                        {mainNav.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "font-display text-2xl uppercase tracking-[0.2em] text-white transition-opacity",
                                        active ? "opacity-100" : "opacity-80 hover:opacity-100"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}