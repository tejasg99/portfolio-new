"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub as Github} from "react-icons/fi";
import Image from "next/image";

export function Projects() {
    const reducedMotion = useReducedMotion();

    return (
        <SectionWrapper id="projects" className="relative">
            <MotionWrapper>
                <SectionHeading
                    label="Featured Work"
                    title="Selected Projects"
                    description="A showcase of projects that demonstrate my skills and passion for building great software."
                />
            </MotionWrapper>

            <div className="mt-16 space-y-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        reducedMotion={reducedMotion}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}

interface ProjectCardProps {
    project: (typeof PROJECTS)[0];
    index: number;
    reducedMotion: boolean;
}

function ProjectCard({ project, index, reducedMotion }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

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
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card variant="glow" hover={false} className="group relative overflow-hidden">
                {/* Cursor glow effect */}
                <GlowEffect color="mixed" />

                {/* Card reflection */}
                <motion.div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-primary/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                />

                <div className="relative grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10">
                    {/* Image Container */}
                    <motion.div
                        className={`relative aspect-video overflow-clip rounded-xl bg-background-secondary ${index % 2 === 1 ? "md:order-2" : ""
                            }`}
                        style={!reducedMotion ? { y: imageY, scale: imageScale } : {}}
                    >
                        {project.image ? (
                            <Image
                                fill={true}
                                src={project.image}
                                alt="Project Image"
                            />
                        ) : (
                            <>
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-br from-primary/10 via-purple/10 to-primary-dark/10"
                                    animate={
                                        !reducedMotion
                                            ? {
                                                background: [
                                                    "linear-gradient(135deg, rgba(110,123,255,0.1) 0%, rgba(90,62,255,0.1) 50%, rgba(63,77,158,0.1) 100%)",
                                                    "linear-gradient(135deg, rgba(90,62,255,0.1) 0%, rgba(63,77,158,0.1) 50%, rgba(110,123,255,0.1) 100%)",
                                                    "linear-gradient(135deg, rgba(110,123,255,0.1) 0%, rgba(90,62,255,0.1) 50%, rgba(63,77,158,0.1) 100%)",
                                                ],
                                            }
                                            : {}
                                    }
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Grid pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(110,123,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(110,123,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px]" />
                            </>

                        )}

                        {/* Project number */}
                        <motion.div
                            className="absolute bottom-4 right-4 text-6xl font-bold text-primary/10"
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            0{project.id}
                        </motion.div>

                        {/* Hover overlay project preview */}
                        <motion.div
                            className="absolute inset-0 flex rounded-2xl items-center justify-center bg-background/90 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    y: isHovered ? 0 : 20
                                }}
                                transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-foreground-muted"
                                >
                                    Click on Live demo button to visit the website
                                </motion.span>
                            </motion.div>
                        </motion.div>

                        {/* Shimmer effect on hover */}
                        <motion.div
                            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: isHovered ? "100%" : "-100%" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="flex flex-col justify-center space-y-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Project indicator */}
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <span className="text-sm font-medium text-accent">
                                Project 0{project.id}
                            </span>
                            <motion.span
                                className="h-px flex-1 bg-linear-to-r from-accent/50 to-transparent"
                                initial={{ scaleX: 0, originX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-gradient md:text-3xl">
                                {project.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-foreground-muted">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Tech Tags */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                                <motion.div
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.6 + tagIndex * 0.05,
                                        duration: 0.4,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    whileHover={!reducedMotion ? { scale: 1.05, y: -2 } : {}}
                                >
                                    <Badge variant="primary">{tag}</Badge>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Desktop Links - Always visible below content */}
                        <motion.div
                            variants={itemVariants}
                            className="hidden gap-4 pt-2 md:flex"
                        >
                            <Button variant="default" size="sm" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </a>
                            </Button>
                        </motion.div>

                        {/* Mobile Links */}
                        <motion.div variants={itemVariants} className="flex gap-4 pt-2 md:hidden">
                            <Button variant="default" size="sm" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View Project
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Corner decorations on hover */}
                <motion.div
                    className="pointer-events-none absolute -left-1 -top-1 h-8 w-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="pointer-events-none absolute -bottom-1 -right-1 h-8 w-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </Card>
        </motion.div>
    );
}