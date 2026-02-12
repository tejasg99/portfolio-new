"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
    className?: string;
    color?: "primary" | "accent" | "purple" | "mixed";
}

export function GlowEffect({ className, color = "primary" }: GlowEffectProps) {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = glow.parentElement?.getBoundingClientRect();
            if (!rect) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glow.style.setProperty("--glow-x", `${x}px`);
            glow.style.setProperty("--glow-y", `${y}px`);
        };

        const parent = glow.parentElement;
        parent?.addEventListener("mousemove", handleMouseMove);

        return () => {
            parent?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const colors = {
        primary: "from-[var(--color-primary)]/25 to-transparent",
        accent: "from-[var(--color-accent)]/20 to-transparent",
        purple: "from-[var(--color-purple)]/25 to-transparent",
        mixed: "from-[var(--color-primary)]/20 via-[var(--color-purple)]/15 to-transparent",
    };

    return (
        <div
            ref={glowRef}
            className={cn(
                "pointer-events-none absolute h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                colors[color],
                className
            )}
            style={{
                left: "var(--glow-x, 50%)",
                top: "var(--glow-y, 50%)",
            }}
        />
    );
}