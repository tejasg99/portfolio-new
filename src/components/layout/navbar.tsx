"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { MagneticWrapper } from "@/components/motion/magnetic-wrapper";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const reducedMotion = useReducedMotion();

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

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut" as const,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "easeIn" as const,
            },
        },
    };

    const mobileNavItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05 + 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        }),
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <>
            <motion.header
                className="fixed left-0 right-0 top-0 z-50"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={navVariants}
            >
                <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                    <motion.div
                        className="flex items-center justify-between rounded-2xl border border-(--color-border) bg-background/80 px-4 py-3 backdrop-blur-xl sm:px-6"
                        initial={{ backdropFilter: "blur(0px)" }}
                        animate={{ backdropFilter: "blur(20px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Logo */}
                        <MagneticWrapper strength={0.2}>
                            <motion.button
                                onClick={() => scrollToSection("hero")}
                                className="group relative flex items-center gap-2 text-lg font-bold tracking-tight"
                                whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                            >
                                <span className="text-gradient">TG</span>
                            </motion.button>
                        </MagneticWrapper>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden items-center gap-1 md:flex">
                            {SECTIONS.slice(1).map((section) => (
                                <li key={section.id}>
                                    <motion.button
                                        onClick={() => scrollToSection(section.id)}
                                        className={cn(
                                            "relative px-4 py-2 text-sm font-medium transition-colors",
                                            activeSection === section.id
                                                ? "text-foreground"
                                                : "text-foreground-secondary hover:text-foreground"
                                        )}
                                        whileHover={!reducedMotion ? { y: -2 } : {}}
                                        whileTap={!reducedMotion ? { y: 0 } : {}}
                                    >
                                        {section.label}
                                        {/* Active indicator */}
                                        <AnimatePresence>
                                            {activeSection === section.id && (
                                                <motion.span
                                                    className="absolute bottom-0 left-1/2 h-0.5 rounded-full bg-linear-to-r from-primary to-primary-light"
                                                    initial={{ width: 0, x: "-50%" }}
                                                    animate={{ width: 16, x: "-50%" }}
                                                    exit={{ width: 0, x: "-50%" }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:block">
                            <MagneticWrapper strength={0.15}>
                                <motion.button
                                    onClick={() => scrollToSection("contact")}
                                    className="group relative overflow-hidden rounded-full bg-linear-to-r from-primary to-primary-light p-px"
                                    whileHover={
                                        !reducedMotion
                                            ? {
                                                boxShadow: "0 0 25px -5px rgba(110, 123, 255, 0.6)",
                                            }
                                            : {}
                                    }
                                    whileTap={!reducedMotion ? { scale: 0.98 } : {}}
                                >
                                    <span className="relative flex items-center gap-2 rounded-full bg-background px-5 py-2 text-sm font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                                        <span>Let&apos;s Talk</span>
                                        <motion.span
                                            className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-background"
                                            whileHover={!reducedMotion ? { x: 3 } : {}}
                                        >
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
                                        </motion.span>
                                    </span>
                                </motion.button>
                            </MagneticWrapper>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-border) bg-card md:hidden"
                            whileHover={
                                !reducedMotion
                                    ? {
                                        borderColor: "rgba(110, 123, 255, 0.5)",
                                        backgroundColor: "var(--color-muted)",
                                    }
                                    : {}
                            }
                            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-5 w-5 text-foreground" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-5 w-5 text-foreground" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Spotlight effect */}
                        <motion.div
                            className="pointer-events-none absolute left-1/2 top-0 h-100 w-150 -translate-x-1/2 -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            <div
                                className="h-full w-full"
                                style={{
                                    background:
                                        "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(110, 123, 255, 0.15) 0%, transparent 70%)",
                                }}
                            />
                        </motion.div>

                        {/* Mobile Menu Content */}
                        <div className="flex h-full flex-col items-center justify-center">
                            <nav className="flex flex-col items-center gap-2">
                                {SECTIONS.map((section, index) => (
                                    <motion.button
                                        key={section.id}
                                        custom={index}
                                        variants={mobileNavItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onClick={() => scrollToSection(section.id)}
                                        className={cn(
                                            "group relative px-6 py-4 text-2xl font-medium",
                                            activeSection === section.id
                                                ? "text-foreground"
                                                : "text-foreground-secondary"
                                        )}
                                        whileHover={!reducedMotion ? { x: 10 } : {}}
                                        whileTap={!reducedMotion ? { scale: 0.98 } : {}}
                                    >
                                        <span className="relative z-10">{section.label}</span>
                                        <motion.span
                                            className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-linear-to-b from-primary to-primary-light"
                                            initial={{ opacity: 0, scaleY: 0 }}
                                            animate={{
                                                opacity: activeSection === section.id ? 1 : 0,
                                                scaleY: activeSection === section.id ? 1 : 0,
                                            }}
                                            whileHover={{ opacity: 0.5, scaleY: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Mobile CTA */}
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <motion.button
                                    onClick={() => scrollToSection("contact")}
                                    className="flex items-center gap-3 rounded-full bg-linear-to-r from-primary to-primary-light px-8 py-4 text-lg font-medium text-white shadow-[0_0_30px_-5px_rgba(110,123,255,0.5)]"
                                    whileHover={
                                        !reducedMotion
                                            ? {
                                                boxShadow: "0 0 40px -5px rgba(110, 123, 255, 0.7)",
                                                scale: 1.02,
                                            }
                                            : {}
                                    }
                                    whileTap={!reducedMotion ? { scale: 0.98 } : {}}
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
                                </motion.button>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                className="mt-12 flex gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {["GitHub", "LinkedIn"].map((link, index) => (
                                    <motion.a
                                        key={link}
                                        href={link === "GitHub" ? "https://github.com" : "https://linkedin.com"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground-secondary transition-colors hover:text-accent"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                        whileHover={!reducedMotion ? { y: -3 } : {}}
                                    >
                                        {link}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}