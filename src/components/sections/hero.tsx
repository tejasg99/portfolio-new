"use client"
import { SectionWrapper } from "../ui/section-wrapper";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <SectionWrapper
            id="hero"
            fullHeight
            className="flex items-center justify-center"
        >
            <div className="relative flex flex-col items-center text-center">
                {/* Background Glow - Placeholder for animated glow */}
                <div className="pointer-events-none absolute -z-10 h-125 w-125 rounded-full bg-linear-to-r from-(--color-amber-glow)/20 via-(--color-rose-glow)/20 to-(--color-purple-glow)/20 blur-3xl" />

                {/* Main content */}
                <div className="space-y-6">
                    {/* Greeting */}
                    <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Hello, I&apos;m
                    </p>

                    {/* Name */}
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        <span className="bg-linear-to-r from-(--color-foreground) via-(--color-foreground) to-muted-foreground bg-clip-text text-transparent">
                            {PERSONAL_INFO.name}
                        </span>
                    </h1>

                    {/* Title */}
                    <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
                        {PERSONAL_INFO.title}
                    </h2>

                    {/* Tagline */}
                    <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
                        {PERSONAL_INFO.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            className="min-w-40 bg-(--color-foreground) text-background hover:bg-(--color-foreground)/90"
                            onClick={() => {
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            View Work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="min-w-40 border-border bg-transparent hover:bg-muted"
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-40 left-1/2 -translate-x-1/2">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="h-12 w-6 rounded-full border border-border p-1">
                            <div className="h-full w-full rounded-full bg-muted-foreground" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}