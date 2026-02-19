"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/motion/magnetic-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export function Contact() {
    const currentYear = new Date().getFullYear();
    const reducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    const socialLinks = [
        {
            href: PERSONAL_INFO.github,
            icon: Github,
            label: "GitHub",
            color: "primary",
        },
        {
            href: PERSONAL_INFO.linkedin,
            icon: Linkedin,
            label: "LinkedIn",
            color: "primary",
        },
        {
            href: `mailto:${PERSONAL_INFO.email}`,
            icon: Mail,
            label: "Email",
            color: "accent",
        },
    ];

    return (
        <SectionWrapper id="contact" className="relative overflow-hidden">
            {/* Background spotlight */}
            <motion.div
                className="pointer-events-none absolute left-1/2 top-0 h-150 w-200 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div
                    className="h-full w-full"
                    style={{
                        background: `
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(110, 123, 255, 0.2) 0%, transparent 60%),
              radial-gradient(ellipse 70% 60% at 50% 50%, rgba(90, 62, 255, 0.1) 0%, transparent 50%)
            `,
                    }}
                />
            </motion.div>

            {/* Animated particles */}
            {!reducedMotion && (
                <>
                    <motion.div
                        className="pointer-events-none absolute left-[20%] top-[20%] h-1 w-1 rounded-full bg-primary"
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="pointer-events-none absolute right-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent"
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    <motion.div
                        className="pointer-events-none absolute left-[30%] bottom-[40%] h-0.5 w-0.5 rounded-full bg-purple"
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </>
            )}

            {/* Grid pattern */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(110,123,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(110,123,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    className="max-w-2xl space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Label */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
                        <motion.span
                            className="h-px w-8 bg-linear-to-r from-transparent to-accent"
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <span className="text-sm font-medium uppercase tracking-widest text-accent">
                            Get in Touch
                        </span>
                        <motion.span
                            className="h-px w-8 bg-linear-to-l from-transparent to-accent"
                            initial={{ scaleX: 0, originX: 1 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                    >
                        <span className="text-gradient">Let&apos;s build something</span>
                        <br />
                        <span className="text-foreground">amazing together</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-foreground-muted md:text-xl"
                    >
                        I&apos;m currently open to new opportunities and interesting projects.
                        Whether you have a question or just want to say hi, feel free to
                        reach out!
                    </motion.p>

                    {/* Primary CTA */}
                    <motion.div variants={itemVariants} className="pt-4">
                        <MagneticWrapper strength={0.15}>
                            <Button variant="primary" size="xl" className="group" asChild>
                                <a href={`mailto:${PERSONAL_INFO.email}`}>
                                    <Mail className="mr-3 h-5 w-5" />
                                    Send me an email
                                    <motion.span
                                        className="ml-2"
                                        animate={!reducedMotion ? { x: [0, 3, 0], y: [0, -3, 0] } : {}}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </motion.span>
                                </a>
                            </Button>
                        </MagneticWrapper>
                    </motion.div>

                    {/* Secondary links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 pt-4"
                    >
                        <MagneticWrapper strength={0.1}>
                            <Button variant="secondary" size="lg" asChild>
                                <a
                                    href={PERSONAL_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="mr-2 h-5 w-5" />
                                    GitHub
                                </a>
                            </Button>
                        </MagneticWrapper>
                        <MagneticWrapper strength={0.1}>
                            <Button variant="secondary" size="lg" asChild>
                                <a
                                    href={PERSONAL_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="mr-2 h-5 w-5" />
                                    LinkedIn
                                </a>
                            </Button>
                        </MagneticWrapper>
                        <MagneticWrapper strength={0.1}>
                            <Button variant="ghost" size="lg" asChild>
                                <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
                                    <FileText className="mr-2 h-5 w-5" />
                                    Resume
                                </a>
                            </Button>
                        </MagneticWrapper>
                    </motion.div>

                    {/* Email display */}
                    <motion.div variants={itemVariants} className="pt-8">
                        <p className="text-sm text-foreground-secondary">
                            Or reach me directly at
                        </p>
                        <motion.a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="mt-2 inline-block text-lg font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-all duration-300 hover:decoration-primary"
                            whileHover={!reducedMotion ? { scale: 1.02 } : {}}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            {PERSONAL_INFO.email}
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    className="mt-24 w-full border-t border-(--color-border) pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        {/* Copyright */}
                        <motion.p
                            className="text-sm text-foreground-secondary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            © {currentYear}{" "}
                            <span className="text-foreground">
                                {PERSONAL_INFO.name}
                            </span>
                            . Crafted with care.
                        </motion.p>

                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link, index) => (
                                <MagneticWrapper key={link.label} strength={0.3}>
                                    <motion.a
                                        href={link.href}
                                        className={`group flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-card transition-all duration-300 ${link.color === "accent"
                                            ? "hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_20px_-5px_rgba(163,255,18,0.4)]"
                                            : "hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_-5px_rgba(110,123,255,0.4)]"
                                            }`}
                                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                        aria-label={link.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                        whileHover={!reducedMotion ? { y: -3 } : {}}
                                    >
                                        <link.icon
                                            className={`h-4 w-4 text-foreground-secondary transition-colors ${link.color === "accent"
                                                ? "group-hover:text-accent"
                                                : "group-hover:text-primary-light"
                                                }`}
                                        />
                                    </motion.a>
                                </MagneticWrapper>
                            ))}
                        </div>

                        {/* Back to top */}
                        <motion.button
                            onClick={() => {
                                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground cursor-pointer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            whileHover={!reducedMotion ? { y: -2 } : {}}
                        >
                            Back to top
                            <motion.span
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-card transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_-5px_rgba(110,123,255,0.4)]"
                                whileHover={!reducedMotion ? { y: -3 } : {}}
                            >
                                <ArrowUpRight className="h-3 w-3 -rotate-45" />
                            </motion.span>
                        </motion.button>
                    </div>
                </motion.footer>
            </div>
        </SectionWrapper>
    );
}