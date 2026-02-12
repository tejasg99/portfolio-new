import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="relative">
            <SectionHeading
                label="Featured Work"
                title="Selected Projects"
                description="A showcase of projects that demonstrate my skills and passion for building great software."
            />

            <div className="mt-16 space-y-8">
                {PROJECTS.map((project, index) => (
                    <Card
                        key={project.id}
                        variant="glow"
                        className="group relative"
                    >
                        {/* Cursor glow effect */}
                        <GlowEffect color="mixed" />

                        {/* Card reflection */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-primary/5 to-transparent" />

                        <div className="relative grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10">
                            {/* Image Container */}
                            <div
                                className={`relative aspect-video overflow-hidden rounded-xl bg-background-secondary ${index % 2 === 1 ? "md:order-2" : ""
                                    }`}
                            >
                                {/* Gradient placeholder */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-purple/10 to-primary-dark/10" />

                                {/* Grid pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(110,123,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(110,123,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px]" />

                                {/* Project number */}
                                <div className="absolute bottom-4 right-4 text-6xl font-bold text-primary/10">
                                    0{project.id}
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="flex gap-4">
                                        <Button variant="default" size="sm" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Placeholder text */}
                                <div className="flex h-full w-full items-center justify-center text-foreground-tertiary transition-transform duration-700 group-hover:scale-105">
                                    Project Preview
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center space-y-5">
                                {/* Project indicator */}
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-accent">
                                        Project 0{project.id}
                                    </span>
                                    <span className="h-px flex-1 bg-linear-to-r from-accent/50 to-transparent" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-gradient md:text-3xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-foreground-muted">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="primary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Mobile Links */}
                                <div className="flex gap-4 pt-2 md:hidden">
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
                                </div>
                            </div>
                        </div>

                        {/* Bottom gradient line */}
                        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </Card>
                ))}
            </div>

            {/* View more */}
            <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg">
                    View All Projects
                </Button>
            </div>
        </SectionWrapper>
    );
}