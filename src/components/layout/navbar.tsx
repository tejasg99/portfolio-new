"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            setIsVisible(window.scrollY > heroHeight * 0.5);

            const sections = SECTIONS.map((s) => s.id);
            for (const sectionId of [...sections].reverse()) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-700",
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0"
                )}
            >
                <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between rounded-2xl border border-(--color-border) bg-background/80 px-4 py-3 backdrop-blur-xl sm:px-6">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="group relative flex items-center gap-2 text-lg font-bold tracking-tight transition-all duration-300"
                        >
                            <span className="text-gradient">TG</span>
                            {/* Glow on hover */}
                            <span className="absolute -inset-2 -z-10 rounded-xl bg-primary/0 blur-md transition-all duration-300 group-hover:bg-primary/20" />
                        </button>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden items-center gap-1 md:flex">
                            {SECTIONS.slice(1).map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className={cn(
                                            "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                                            activeSection === section.id
                                                ? "text-foreground"
                                                : "text-foreground-secondary hover:text-foreground"
                                        )}
                                    >
                                        {section.label}
                                        {/* Active indicator */}
                                        <span
                                            className={cn(
                                                "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-linear-to-r from-primary to-primary-light transition-all duration-300",
                                                activeSection === section.id
                                                    ? "w-4 opacity-100"
                                                    : "w-0 opacity-0"
                                            )}
                                        />
                                        {/* Hover background */}
                                        <span
                                            className={cn(
                                                "absolute inset-0 -z-10 rounded-lg bg-(--color-muted) opacity-0 transition-opacity duration-300",
                                                activeSection !== section.id && "hover:opacity-100"
                                            )}
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group relative overflow-hidden rounded-full bg-linear-to-r from-primary to-primary-light p-px transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(110,123,255,0.6)]"
                            >
                                <span className="relative flex items-center gap-2 rounded-full bg-background px-5 py-2 text-sm font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white cursor-pointer">
                                    <span>Let&apos;s Talk</span>
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-background transition-transform duration-300 group-hover:translate-x-0.5">
                                        <svg
                                            className="h-3 w-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-card transition-all duration-300 hover:border-primary/50 hover:bg-(--color-muted) md:hidden"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <span className="sr-only">
                                {isMobileMenuOpen ? "Close menu" : "Open menu"}
                            </span>
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5 text-foreground" />
                            ) : (
                                <Menu className="h-5 w-5 text-foreground" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 md:hidden",
                    isMobileMenuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                )}
            >
                {/* Spotlight effect in mobile menu */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-150 -translate-x-1/2 -translate-y-1/2">
                    <div
                        className="h-full w-full"
                        style={{
                            background:
                                "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(110, 123, 255, 0.15) 0%, transparent 70%)",
                        }}
                    />
                </div>

                {/* Mobile Menu Content */}
                <div
                    className={cn(
                        "flex h-full flex-col items-center justify-center transition-all duration-500 delay-100",
                        isMobileMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-8 opacity-0"
                    )}
                >
                    <nav className="flex flex-col items-center gap-2">
                        {SECTIONS.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                    "group relative px-6 py-4 text-2xl font-medium transition-all duration-300",
                                    activeSection === section.id
                                        ? "text-foreground"
                                        : "text-foreground-secondary"
                                )}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                                }}
                            >
                                <span className="relative z-10">{section.label}</span>
                                {/* Active/Hover indicator */}
                                <span
                                    className={cn(
                                        "absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-linear-to-b from-primary to-primary-light transition-all duration-300",
                                        activeSection === section.id
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-50"
                                    )}
                                />
                            </button>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-8">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="flex items-center gap-3 rounded-full bg-linear-to-r from-primary to-primary-light px-8 py-4 text-lg font-medium text-white shadow-[0_0_30px_-5px_rgba(110,123,255,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(110,123,255,0.7)]"
                        >
                            Let&apos;s Talk
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-background">
                                <svg
                                    className="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Social Links in Mobile Menu */}
                    <div className="mt-12 flex gap-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-secondary transition-colors duration-300 hover:text-accent"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-secondary transition-colors duration-300 hover:text-accent"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}