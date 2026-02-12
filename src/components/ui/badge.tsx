import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-muted)] text-[var(--color-foreground-secondary)]",
        secondary:
          "bg-[var(--color-background-secondary)] text-[var(--color-foreground-muted)] border border-[var(--color-border)]",
        outline:
          "border border-[var(--color-border)] text-[var(--color-foreground-secondary)] bg-transparent",
        // Primary glow badge
        primary:
          "bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20",
        // Accent neon green badge
        accent:
          "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20",
        // Gradient badge
        gradient:
          "bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-purple)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };