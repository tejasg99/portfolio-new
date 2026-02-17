"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { SkillIcon } from "@/components/ui/skill-icon";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { getSkillConfig } from "@/lib/skill-data";
import { useRef, useState } from "react";

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
                {SKILLS.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                        <SkillCard skill={skill} reducedMotion={reducedMotion} />
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

interface SkillCardProps {
    skill: { name: string; category: string };
    reducedMotion: boolean;
}

function SkillCard({ skill, reducedMotion }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const config = getSkillConfig(skill.name);

    return (
        <motion.div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={!reducedMotion ? { y: -5 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            <Card
                variant="glow"
                hover={false}
                className="group relative cursor-default overflow-hidden p-6"
                style={{
                    borderColor: isHovered ? `${config.color}30` : undefined,
                    boxShadow: isHovered ? `0 0 40px -10px ${config.glowColor}` : undefined,
                }}
            >
                {/* Cursor-following glow with brand color */}
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${config.glowColor} 0%, transparent 70%)`,
                    }}
                    animate={{ opacity: isHovered ? 0.15 : 0 }}
                />

                {/* Top gradient reflection with brand color */}
                <motion.div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
                    style={{
                        background: `linear-gradient(to bottom, ${config.bgColor}, transparent)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                <motion.div
                    className="relative flex items-center gap-4"
                    animate={!reducedMotion && isHovered ? { x: 5 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <SkillIcon name={skill.name} category={skill.category} showGlow={isHovered} />
                    <div>
                        <motion.h3
                            className="font-semibold transition-colors duration-300"
                            style={{
                                color: isHovered ? config.color : "var(--color-foreground)",
                            }}
                        >
                            {skill.name}
                        </motion.h3>
                        <p className="text-sm text-foreground-secondary">
                            {skill.category}
                        </p>
                    </div>
                </motion.div>

                {/* Corner accent glow with brand color */}
                <motion.div
                    className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rounded-tl-3xl"
                    style={{
                        background: `linear-gradient(to top left, ${config.bgColor}, transparent)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Bottom border accent */}
                <motion.div
                    className="absolute bottom-0 left-0 h-px w-full"
                    style={{
                        background: `linear-gradient(to right, transparent, ${config.color}50, transparent)`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
            </Card>
        </motion.div>
    );
}