"use client"

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Primary - Gradient blue-purple pill button
        default:
          "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white rounded-full shadow-[0_0_20px_-5px_rgba(110,123,255,0.5)] hover:shadow-[0_0_30px_-5px_rgba(110,123,255,0.7)] hover:brightness-110",

        // Primary with stronger glow
        primary:
          "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white rounded-full shadow-[0_0_25px_-5px_rgba(110,123,255,0.6)] hover:shadow-[0_0_40px_-5px_rgba(110,123,255,0.8)] hover:brightness-110",

        // Secondary - Dark translucent with green accent border
        secondary:
          "bg-[var(--color-background-secondary)]/80 text-[var(--color-foreground)] rounded-full border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/60 hover:shadow-[0_0_20px_-5px_rgba(163,255,18,0.3)] hover:bg-[var(--color-background-secondary)]",

        // Outline - Subtle border
        outline:
          "bg-transparent text-[var(--color-foreground)] rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5",

        // Ghost - No background
        ghost:
          "text-[var(--color-foreground-muted)] rounded-xl hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]/50",

        // Accent - Neon green
        accent:
          "bg-[var(--color-accent)] text-[var(--color-background)] rounded-full font-semibold shadow-[0_0_25px_-5px_rgba(163,255,18,0.5)] hover:shadow-[0_0_35px_-5px_rgba(163,255,18,0.7)] hover:brightness-110",

        // Glass - Glassmorphism style
        glass:
          "glass text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-card)]/90 hover:border-[var(--color-primary)]/30",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base font-semibold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const reducedMotion = useReducedMotion();

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    if (reducedMotion) {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };