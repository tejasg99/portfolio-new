"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glow" | "gradient-border" | "spotlight";
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const reducedMotion = useReducedMotion();

    const variants = {
      default:
        "rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] relative overflow-hidden",
      glass: "rounded-2xl glass relative overflow-hidden",
      glow: "rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] relative overflow-hidden hover:border-[var(--color-primary)]/30 hover:shadow-[0_0_40px_-10px_rgba(110,123,255,0.3)]",
      "gradient-border": "rounded-2xl gradient-border relative overflow-hidden",
      spotlight:
        "rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] relative overflow-hidden corner-glow card-reflection",
    };

    const baseClassName = cn(
      variants[variant],
      "transition-all duration-500",
      className
    );

    if (reducedMotion || !hover) {
      return (
        <div ref={ref} className={baseClassName} {...props}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={baseClassName}
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-foreground",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-foreground-secondary", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };