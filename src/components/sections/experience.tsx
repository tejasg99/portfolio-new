"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
    const reducedMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <SectionWrapper id="experience" className="relative">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-background-secondary/30 to-transparent" />

            <MotionWrapper>
                <SectionHeading
                    label="Experience"
                    title="Where I've worked"
                    description="My professional journey and the experiences that shaped my skills."
                />
            </MotionWrapper>

            <div className="mt-16" ref={containerRef}>
                {/* Timeline */}
                <div className="relative">
                    {/* Animated timeline line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-(--color-border) md:left-1/2 md:-translate-x-px">
                        <motion.div
                            className="h-full w-full bg-linear-to-b from-primary via-purple to-primary-light"
                            style={!reducedMotion ? { height: lineHeight } : { height: "100%" }}
                        />
                    </div>

                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, index) => (
                            <ExperienceItem
                                key={exp.id}
                                experience={exp}
                                index={index}
                                reducedMotion={reducedMotion}
                            />
                        ))}
                    </div>

                    {/* Timeline end */}
                    <motion.div
                        className="absolute -bottom-4 left-4 md:left-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative -translate-x-1/2">
                            <motion.div
                                className="h-3 w-3 rounded-full bg-(--color-border)"
                                animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Future indicator */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <p className="text-foreground-tertiary">
                        More experiences coming soon...
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}

interface ExperienceItemProps {
    experience: (typeof EXPERIENCE)[0];
    index: number;
    reducedMotion: boolean;
}

function ExperienceItem({ experience, index, reducedMotion }: ExperienceItemProps) {
    const isEven = index % 2 === 0;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <motion.div
            className="group relative grid gap-6 md:grid-cols-2 md:gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.2,
            }}
        >
            {/* Timeline dot */}
            <div className="absolute left-4 top-0 z-10 md:left-1/2">
                <motion.div
                    className="relative -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: index * 0.2 + 0.3,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    {/* Outer glow ring */}
                    <motion.div
                        className="absolute -inset-3 rounded-full bg-primary/20"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Pulse ring */}
                    <motion.div
                        className="absolute -inset-2 rounded-full border border-primary/30"
                        animate={
                            !reducedMotion
                                ? {
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 0, 0.5],
                                }
                                : {}
                        }
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Inner dot */}
                    <motion.div
                        className="relative h-4 w-4 rounded-full border-2 border-primary bg-background"
                        whileHover={{ scale: 1.3, backgroundColor: "var(--color-primary)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                </motion.div>
            </div>

            {/* Date - Desktop */}
            <motion.div
                className={`hidden text-right md:block ${!isEven ? "md:order-2 md:pl-12 md:text-left" : "md:pr-12"
                    }`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.span
                    className="inline-flex items-center gap-2 text-lg font-semibold text-primary-light"
                    whileHover={!reducedMotion ? { x: isEven ? -5 : 5 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                </motion.span>
            </motion.div>

            {/* Content */}
            <motion.div
                className={`pl-12 md:pl-0 ${!isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Mobile date */}
                <motion.span
                    variants={itemVariants}
                    className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary-light md:hidden"
                >
                    <Calendar className="h-3 w-3" />
                    {experience.period}
                </motion.span>

                <motion.div
                    className="relative space-y-4 rounded-2xl border border-(--color-border) bg-card p-6 transition-all duration-500"
                    whileHover={
                        !reducedMotion
                            ? {
                                borderColor: "rgba(110, 123, 255, 0.3)",
                                boxShadow: "0 0 40px -10px rgba(110, 123, 255, 0.3)",
                                y: -5,
                            }
                            : {}
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    {/* Corner glow */}
                    <motion.div
                        className="pointer-events-none absolute -right-px -top-px h-20 w-20 rounded-bl-2xl bg-linear-to-bl from-primary/10 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />

                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-foreground">
                            {experience.title}
                        </h3>
                        <motion.div
                            className={`mt-1 flex items-center gap-2 text-accent ${!isEven ? "md:justify-end" : ""
                                }`}
                            whileHover={!reducedMotion ? { x: isEven ? 5 : -5 } : {}}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{experience.company}</span>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-foreground-muted"
                    >
                        {experience.description}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className={`flex flex-wrap gap-2 ${!isEven ? "md:justify-end" : ""
                            }`}
                    >
                        {experience.technologies.map((tech, techIndex) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.5 + techIndex * 0.05,
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={!reducedMotion ? { scale: 1.05, y: -2 } : {}}
                            >
                                <Badge variant="gradient">{tech}</Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}