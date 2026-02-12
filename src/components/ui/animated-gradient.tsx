"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
    className?: string;
    variant?: "hero" | "section" | "card";
}

export function AnimatedGradient({
    className,
    variant = "hero",
}: AnimatedGradientProps) {
    const variants = {
        hero: "h-[800px] w-[800px] opacity-30",
        section: "h-[500px] w-[500px] opacity-25",
        card: "h-[250px] w-[250px] opacity-20",
    };

    return (
        <div
            className={cn(
                "pointer-events-none absolute rounded-full blur-3xl",
                "bg-[conic-gradient(from_0deg,var(--color-primary),var(--color-purple),var(--color-primary-light),var(--color-primary))]",
                "animate-[spin_30s_linear_infinite]",
                variants[variant],
                className
            )}
        />
    );
}