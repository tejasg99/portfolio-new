"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";

export function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after scrolling past hero section
            const heroHeight = window.innerHeight;
            setIsVisible(window.scrollY > heroHeight * 0.5);

            // Update active section based on scroll position
            const sections = SECTIONS.map((s) => s.id);
            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
            )}
        >
            <nav className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-background/80 px-6 py-3 backdrop-blur-xl">
                    {/* Logo / Name */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
                    >
                        TG
                    </button>

                    {/* Navigation Links */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {SECTIONS.slice(1).map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors",
                                        activeSection === section.id
                                            ? "text-(--color-foreground)"
                                            : "text-muted-foreground hover:text-(--color-foreground)"
                                    )}
                                >
                                    {section.label}
                                    {activeSection === section.id && (
                                        <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-(--color-amber-glow)" />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button - Placeholder */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden">
                        <span className="sr-only">Open menu</span>
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}