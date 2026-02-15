"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { SkillIcon } from "@/components/ui/skill-icon";
import { GlowEffect } from "@/components/ui/glow-effect";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Skills() {
    const reducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <SectionWrapper id="skills" className="relative">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background-secondary/50 via-transparent to-transparent" />

            <MotionWrapper>
                <SectionHeading
                    label="Skills & Tools"
                    title="Technologies I work with"
                    description="A curated selection of technologies and tools I use to bring ideas to life."
                    align="center"
                />
            </MotionWrapper>

            <motion.div
                className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {SKILLS.map((skill, index) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                        <Card
                            variant="glow"
                            hover={false}
                            className="group relative cursor-default p-6"
                        >
                            {/* Cursor-following glow */}
                            <GlowEffect color="primary" />

                            {/* Blue gradient reflection on top */}
                            <motion.div
                                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-primary/5 to-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className="relative flex items-center gap-4"
                                whileHover={!reducedMotion ? { x: 5 } : {}}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <SkillIcon name={skill.name} category={skill.category} />
                                <div>
                                    <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-foreground-secondary">
                                        {skill.category}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Corner accent glow */}
                            <motion.div
                                className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rounded-tl-3xl bg-linear-to-tl from-primary/10 to-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* Additional note */}
            <MotionWrapper delay={0.5}>
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <p className="text-sm text-foreground-tertiary">
                        ...and always learning more
                    </p>
                </motion.div>
            </MotionWrapper>
        </SectionWrapper>
    );
}