import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-primary-foreground shadow-sm hover:bg-[#a01414]",
                secondary:
                    "bg-secondary text-white shadow-sm hover:bg-[#2a1d1d]",
                outline:
                    "border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-black",
                ghost:
                    "text-white hover:bg-white/10",
            },
            size: {
                sm: "h-8 px-4 text-xs",
                md: "h-10 px-6",
                lg: "h-11 px-8 text-sm",
                xl: "h-12 px-9 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";