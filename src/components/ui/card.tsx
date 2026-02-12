import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "glow" | "gradient-border" | "spotlight";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default:
      "rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] relative overflow-hidden",
    glass:
      "rounded-2xl glass relative overflow-hidden",
    glow:
      "rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] relative overflow-hidden hover:border-[var(--color-primary)]/30 hover:shadow-[0_0_40px_-10px_rgba(110,123,255,0.3)]",
    "gradient-border":
      "rounded-2xl gradient-border relative overflow-hidden",
    spotlight:
      "rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] relative overflow-hidden corner-glow card-reflection",
  };

  return (
    <div
      ref={ref}
      className={cn(
        variants[variant],
        "transition-all duration-500",
        className
      )}
      {...props}
    />
  );
});
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