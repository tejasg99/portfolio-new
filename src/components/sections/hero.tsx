"use client";

import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 50;
            const y = (e.clientY - rect.top - rect.height / 2) / 50;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <SectionWrapper
            id="hero"
            fullHeight
            className="relative flex items-center justify-center overflow-hidden"
        >
            {/* ========== SPOTLIGHT BACKGROUND ========== */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Primary spotlight - centered at top */}
                <div
                    className="absolute left-1/2 top-0 h-200 w-300 -translate-x-1/2 -translate-y-1/4"
                    style={{
                        background: `
              radial-gradient(ellipse 60% 50% at 50% 0%, rgba(110, 123, 255, 0.35) 0%, transparent 60%),
              radial-gradient(ellipse 80% 60% at 50% 0%, rgba(78, 95, 209, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 50% 0%, rgba(63, 77, 158, 0.15) 0%, transparent 40%)
            `,
                        transform: `translate(calc(-50% + ${mousePosition.x * 2}px), calc(-25% + ${mousePosition.y * 2}px))`,
                        transition: "transform 0.3s ease-out",
                    }}
                />

                {/* Secondary purple hint */}
                <div
                    className="absolute left-1/4 top-1/4 h-100 w-100 rounded-full opacity-20 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(90, 62, 255, 0.4) 0%, transparent 70%)",
                        transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`,
                    }}
                />

                {/* Tertiary glow - right side */}
                <div
                    className="absolute right-1/4 top-1/3 h-75 w-75 rounded-full opacity-15 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(110, 123, 255, 0.5) 0%, transparent 70%)",
                        transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)`,
                    }}
                />
            </div>

            {/* ========== GRID PATTERN ========== */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(110,123,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(110,123,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

            {/* ========== MAIN CONTENT ========== */}
            <div
                ref={containerRef}
                className="relative z-10 flex flex-col items-center text-center"
            >
                <div className="space-y-8">
                    {/* Status Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm">
                            <Sparkles className="h-4 w-4 text-accent" />
                            <span className="text-sm text-foreground-muted">
                                Available for opportunities
                            </span>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                            <span className="text-gradient">
                                {PERSONAL_INFO.name.split(" ")[0]}
                            </span>
                            <span className="text-foreground">
                                {" "}
                                {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
                            </span>
                        </h1>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-medium text-foreground-muted sm:text-2xl md:text-3xl">
                        {PERSONAL_INFO.title}
                    </h2>

                    {/* Tagline */}
                    <p className="mx-auto max-w-xl text-base text-foreground-secondary sm:text-lg">
                        {PERSONAL_INFO.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            className="min-w-45"
                            onClick={() => {
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            View My Work
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="min-w-45"
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-30 left-1/2 -translate-x-1/2">
                    <div className="flex flex-col items-center gap-3 text-foreground-secondary">
                        <span className="text-xs uppercase tracking-widest opacity-60">
                            Scroll to explore
                        </span>
                        <div className="relative h-14 w-7 rounded-full border border-(--color-border) bg-card/50 p-1.5">
                            <div className="h-2.5 w-full animate-bounce rounded-full bg-linear-to-b from-primary to-primary-light" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}