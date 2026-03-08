"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { products } from "@/content/products";

export function ProductSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
        loop: false,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const handleSelect = useCallback(() => {
        if (!emblaApi) return;

        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    const handleScrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const handleScrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        handleSelect();
        emblaApi.on("select", handleSelect);
        emblaApi.on("reInit", handleSelect);

        return () => {
            emblaApi.off("select", handleSelect);
            emblaApi.off("reInit", handleSelect);
        };
    }, [emblaApi, handleSelect]);

    return (
        <section className="pb-20">
            <div className="section-padding mx-auto max-w-7xl">
                <div className="relative">
                    {canScrollPrev && (
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-24 bg-gradient-to-r from-background via-background/85 to-transparent md:block">
                            <div className="pointer-events-auto flex h-full items-center justify-start pl-2">
                                <button
                                    type="button"
                                    onClick={handleScrollPrev}
                                    aria-label="Scroll left"
                                    className="
  group
  flex h-11 w-11 items-center justify-center
  rounded-full
  bg-white/80 backdrop-blur-md
  text-foreground
  shadow-md
  transition-all duration-300
  hover:scale-105 hover:bg-white
  active:scale-95
"
                                >
                                    <ChevronLeft
                                        size={18}
                                        className="transition-transform duration-300 group-hover:-translate-x-0.5"
                                    />
                                </button>
                            </div>
                        </div>
                    )}

                    {canScrollNext && (
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-24 bg-gradient-to-l from-background via-background/85 to-transparent md:block">
                            <div className="pointer-events-auto flex h-full items-center justify-end pr-2">
                                <button
                                    type="button"
                                    onClick={handleScrollNext}
                                    aria-label="Scroll right"
                                    className="
  group
  flex h-11 w-11 items-center justify-center
  rounded-full
  bg-white/80 backdrop-blur-md
  text-foreground
  shadow-md
  transition-all duration-300
  hover:scale-105 hover:bg-white
  active:scale-95
"
                                >
                                    <ChevronRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </button>
                            </div>
                        </div>
                    )}

                    <div
                        ref={emblaRef}
                        className="overflow-hidden cursor-grab select-none active:cursor-grabbing"
                    >
                        <div className="flex gap-4 sm:gap-6">
                            {products.map((product) => (
                                <Link
                                    href={`/products#${product.id}`}
                                    key={product.id}
                                    className="group min-w-0 flex-[0_0_82%] sm:flex-[0_0_48%] md:flex-[0_0_320px]"
                                >
                                    <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                                        <img
                                            src={product.image}
                                            alt={`Alaskan Dumplings ${product.name}`}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            loading="lazy"
                                            draggable={false}
                                        />

                                        <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                      <span className="rounded-full bg-primary px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                        View Item
                      </span>
                                        </div>
                                    </div>

                                    <h3 className="mb-2 font-display text-lg font-bold uppercase text-foreground sm:text-xl">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-foreground/75">
                                        {product.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}