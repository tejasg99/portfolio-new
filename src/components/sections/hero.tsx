"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { MagneticWrapper } from "@/components/motion/magnetic-wrapper";
import { Sparkles } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const mousePosition = useMousePosition(containerRef);
    const reducedMotion = useReducedMotion();

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const check = () => {
            setIsTouchDevice(
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia("(pointer: coarse)").matches
            );
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    const shouldAnimateMouse = !reducedMotion && !isTouchDevice;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-6"
        >
            {/* ========== SPOTLIGHT BACKGROUND ========== */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    overflow: "hidden",
                    clipPath: "inset(0)",
                    contain: "paint layout",
                }}
            >
                {/* Primary spotlight */}
                <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4"
                    style={{
                        width: "clamp(600px, 100vw, 1200px)",
                        height: "clamp(400px, 80vh, 800px)",
                    }}
                >
                    <motion.div
                        className="h-full w-full"
                        style={{
                            willChange: shouldAnimateMouse ? "transform" : "auto",
                            background: `
                                radial-gradient(ellipse 60% 50% at 50% 0%, rgba(110, 123, 255, 0.35) 0%, transparent 60%),
                                radial-gradient(ellipse 80% 60% at 50% 0%, rgba(78, 95, 209, 0.25) 0%, transparent 50%),
                                radial-gradient(ellipse 100% 70% at 50% 0%, rgba(63, 77, 158, 0.15) 0%, transparent 40%)
                            `,
                        }}
                        animate={
                            shouldAnimateMouse
                                ? {
                                    x: mousePosition.normalizedX * 20,
                                    y: mousePosition.normalizedY * 10,
                                }
                                : { x: 0, y: 0 }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 30,
                        }}
                    />
                </div>

                {/*  Secondary purple hint */}
                <div
                    className="absolute left-1/4 top-1/4"
                    style={{
                        width: "clamp(200px, 30vw, 400px)",
                        height: "clamp(200px, 30vw, 400px)",
                    }}
                >
                    <motion.div
                        className="h-full w-full rounded-full opacity-20 blur-3xl"
                        style={{
                            willChange: shouldAnimateMouse ? "transform" : "auto",
                            background:
                                "radial-gradient(circle, rgba(90, 62, 255, 0.4) 0%, transparent 70%)",
                        }}
                        animate={
                            shouldAnimateMouse
                                ? {
                                    x: mousePosition.normalizedX * -30,
                                    y: mousePosition.normalizedY * -30,
                                }
                                : { x: 0, y: 0 }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 30,
                            damping: 30,
                        }}
                    />
                </div>

                {/* Tertiary glow */}
                <div
                    className="absolute right-1/4 top-1/3"
                    style={{
                        width: "clamp(150px, 25vw, 300px)",
                        height: "clamp(150px, 25vw, 300px)",
                    }}
                >
                    <motion.div
                        className="h-full w-full rounded-full opacity-15 blur-3xl"
                        style={{
                            willChange: shouldAnimateMouse ? "transform" : "auto",
                            background:
                                "radial-gradient(circle, rgba(110, 123, 255, 0.5) 0%, transparent 70%)",
                        }}
                        animate={
                            shouldAnimateMouse
                                ? {
                                    x: mousePosition.normalizedX * 40,
                                    y: mousePosition.normalizedY * 40,
                                }
                                : { x: 0, y: 0 }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 30,
                            damping: 30,
                        }}
                    />
                </div>

                {/* Animated orbs */}
                <motion.div
                    className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-primary"
                    style={{ willChange: "transform, opacity" }}
                    animate={
                        !reducedMotion
                            ? { y: [0, -20, 0], opacity: [0.5, 1, 0.5] }
                            : {}
                    }
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent"
                    style={{ willChange: "transform, opacity" }}
                    animate={
                        !reducedMotion
                            ? { y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }
                            : {}
                    }
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute left-[20%] bottom-[30%] h-1 w-1 rounded-full bg-purple"
                    style={{ willChange: "transform, opacity" }}
                    animate={
                        !reducedMotion
                            ? { y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }
                            : {}
                    }
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            {/* ========== GRID PATTERN ========== */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(110,123,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(110,123,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

            {/* ========== MAIN CONTENT ========== */}
            <motion.div
                ref={containerRef}
                className="relative z-10 flex flex-col items-center text-center"
                style={!reducedMotion ? { opacity, scale, y } : {}}
            >
                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-card/80 px-4 py-2 backdrop-blur-sm"
                            whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                            }}
                        >
                            <motion.span
                                animate={
                                    !reducedMotion
                                        ? { rotate: [0, 15, -15, 0] }
                                        : {}
                                }
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                }}
                            >
                                <Sparkles className="h-4 w-4 text-accent" />
                            </motion.span>
                            <span className="text-sm text-foreground-muted">
                                Available for opportunities
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Name */}
                    <motion.div variants={titleVariants} className="space-y-2">
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                            <motion.span
                                className="text-gradient inline-block"
                                whileHover={
                                    !reducedMotion ? { scale: 1.02 } : {}
                                }
                            >
                                {PERSONAL_INFO.name.split(" ")[0]}
                            </motion.span>
                            <span className="text-foreground">
                                {" "}
                                {PERSONAL_INFO.name
                                    .split(" ")
                                    .slice(1)
                                    .join(" ")}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl font-medium text-foreground-muted sm:text-2xl md:text-3xl"
                    >
                        {PERSONAL_INFO.title}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-xl text-base text-foreground-secondary sm:text-lg"
                    >
                        {PERSONAL_INFO.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center"
                    >
                        <MagneticWrapper strength={0.2}>
                            <Button
                                variant="primary"
                                size="lg"
                                className="min-w-45"
                                onClick={() => {
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                View My Work
                            </Button>
                        </MagneticWrapper>
                        <MagneticWrapper strength={0.2}>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="min-w-45"
                                onClick={() => {
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Get in Touch
                            </Button>
                        </MagneticWrapper>
                    </motion.div>
                </motion.div>

                {isTouchDevice ?
                    <div className="flex flex-col items-center text-foreground-secondary mt-10">
                        <span className="text-xs uppercase tracking-widest opacity-60">
                            Scroll to explore
                        </span>
                    </div>
                    :
                    <motion.div
                        className="absolute -bottom-35 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <motion.div
                            className="flex flex-col items-center gap-3 text-foreground-secondary"
                            animate={!reducedMotion ? { y: [0, 8, 0] } : {}}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <span className="text-xs uppercase tracking-widest opacity-60">
                                Scroll to explore
                            </span>
                            <div className="relative h-14 w-7 rounded-full border border-(--color-border) bg-card/50 p-1.5">
                                <motion.div
                                    className="h-2.5 w-full rounded-full bg-linear-to-b from-primary to-primary-light"
                                    animate={
                                        !reducedMotion ? { y: [0, 24, 0] } : {}
                                    }
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                }


            </motion.div>
        </section>
    );
}