import { cn } from "@/lib/utils";

interface DividerProps {
    className?: string;
    variant?: "default" | "gradient" | "glow";
}

export function Divider({ className, variant = "default" }: DividerProps) {
    const variants = {
        default: "bg-[var(--color-border)]",
        gradient:
            "bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent",
        glow: "bg-gradient-to-r from-transparent via-[var(--color-amber-glow)]/50 to-transparent",
    };

    return (
        <div
            className={cn("h-px w-full", variants[variant], className)}
            role="separator"
        />
    );
}