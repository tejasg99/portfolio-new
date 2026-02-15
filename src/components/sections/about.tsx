"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { StaggerWrapper, StaggerItem } from "@/components/motion/stagger-wrapper";
import { CountUp } from "@/components/motion/count-up";
import { ParallaxWrapper } from "@/components/motion/parallax-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { PERSONAL_INFO } from "@/lib/constants";

export function About() {
    const reducedMotion = useReducedMotion();

    const stats = [
        { value: 5, suffix: "+", label: "Projects Completed" },
        { value: 5, suffix: "+", label: "Technologies" },
        { value: 100, suffix: "%", label: "Dedication" },
        { value: 100, suffix: "%", label: "Eagerness to learn" },
    ];

    const facts = [
        { label: "Location", value: PERSONAL_INFO.location },
        { label: "Focus", value: "Full Stack" },
        { label: "Experienced in", value: "Web & Mobile development" },
        { label: "Status", value: "Available" },
    ];

    return (
        <SectionWrapper id="about" className="relative overflow-hidden">
            {/* Background gradient */}
            <ParallaxWrapper speed={0.3} direction="down">
                <div className="pointer-events-none absolute -right-40 top-1/4 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
            </ParallaxWrapper>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Left Column */}
                <div>
                    <MotionWrapper>
                        <SectionHeading
                            label="About Me"
                            title="Crafting digital"
                            titleHighlight="experiences"
                        />
                    </MotionWrapper>

                    {/* Decorative element */}
                    <MotionWrapper delay={0.2} className="mt-8 hidden lg:block">
                        <div className="relative h-64 w-64">
                            <motion.div
                                className="absolute inset-0 rounded-3xl border border-(--color-border) bg-linear-to-br from-card to-transparent"
                                whileHover={!reducedMotion ? { scale: 1.02 } : {}}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                            <motion.div
                                className="absolute -right-4 -top-4 h-32 w-32 rounded-2xl border border-primary/20 bg-primary/5"
                                animate={
                                    !reducedMotion
                                        ? { y: [0, -10, 0], rotate: [0, 2, 0] }
                                        : {}
                                }
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl border border-accent/20 bg-accent/5"
                                animate={
                                    !reducedMotion
                                        ? { y: [0, 10, 0], rotate: [0, -2, 0] }
                                        : {}
                                }
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </div>
                    </MotionWrapper>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <StaggerWrapper className="space-y-6 text-lg leading-relaxed text-foreground-muted">
                        <StaggerItem>
                            <p className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-linear-to-b before:from-primary/20 before:to-purple">
                                I&apos;m a full stack developer passionate about building
                                applications that are not only functional but also delightful to
                                use. With expertise spanning from React and Next.js on the
                                frontend to Node.js and databases on the backend, I bring ideas
                                to life.
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <p>
                                My journey in development has led me through various
                                technologies, from building responsive web applications to
                                crafting mobile experiences with React Native. I believe in
                                writing clean, maintainable code that scales.
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <p>
                                When I&apos;m not coding, you&apos;ll find me exploring new
                                technologies, contributing to open source, or diving deep into
                                the latest in the web development ecosystem or playing musical instruments.
                            </p>
                        </StaggerItem>
                    </StaggerWrapper>

                    {/* Quick facts */}
                    <MotionWrapper delay={0.4}>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {facts.map((fact, index) => (
                                <motion.div
                                    key={fact.label}
                                    className="rounded-xl border border-(--color-border) bg-card p-4 transition-all duration-300 hover:border-primary/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    whileHover={
                                        !reducedMotion ? { y: -2, scale: 1.02 } : {}
                                    }
                                >
                                    <p className="text-xs uppercase tracking-wider text-foreground-secondary">
                                        {fact.label}
                                    </p>
                                    <p className="mt-1 font-semibold text-foreground">
                                        {fact.value}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </MotionWrapper>
                </div>
            </div>

            {/* Stats */}
            <MotionWrapper delay={0.3}>
                <div className="mt-20 grid grid-cols-2 gap-6 border-t border-(--color-border) pt-16 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="group text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <p className="text-4xl font-bold text-gradient transition-all duration-300 group-hover:text-glow-primary md:text-5xl">
                                <CountUp
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    duration={2.5}
                                />
                            </p>
                            <p className="mt-2 text-sm text-foreground-secondary">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </MotionWrapper>
        </SectionWrapper>
    );
}