import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextGradientProps {
    children: ReactNode;
    className?: string;
    variant?: "warm" | "amber" | "rose" | "purple";
}

export function TextGradient({
    children,
    className,
    variant = "warm",
}: TextGradientProps) {
    const variants = {
        warm: "from-[var(--color-amber-glow)] via-[var(--color-rose-glow)] to-[var(--color-purple-glow)]",
        amber: "from-[var(--color-amber-glow)] to-[var(--color-rose-glow)]",
        rose: "from-[var(--color-rose-glow)] to-[var(--color-purple-glow)]",
        purple: "from-[var(--color-purple-glow)] to-[var(--color-amber-glow)]",
    };

    return (
        <span
            className={cn(
                "bg-linear-to-r bg-clip-text text-transparent",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}