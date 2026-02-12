import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

export function Experience() {
    return (
        <SectionWrapper id="experience" className="relative">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-background-secondary/30 to-transparent" />

            <SectionHeading
                label="Experience"
                title="Where I've worked"
                description="My professional journey and the experiences that shaped my skills."
            />

            <div className="mt-16">
                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-primary via-(--color-border) to-transparent md:left-1/2 md:-translate-x-px" />

                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="group relative grid gap-6 md:grid-cols-2 md:gap-12"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 top-0 z-10 md:left-1/2">
                                    <div className="relative -translate-x-1/2">
                                        {/* Outer glow ring */}
                                        <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        {/* Inner dot */}
                                        <div className="relative h-4 w-4 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />
                                    </div>
                                </div>

                                {/* Date - Desktop */}
                                <div
                                    className={`hidden text-right md:block ${index % 2 === 1 ? "md:order-2 md:pl-12 md:text-left" : "md:pr-12"
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2 text-lg font-semibold text-primary-light">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-12 md:pl-0 ${index % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"
                                        }`}
                                >
                                    {/* Mobile date */}
                                    <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary-light md:hidden">
                                        {exp.period}
                                    </span>

                                    <div className="space-y-4 rounded-2xl border border-(--color-border) bg-card p-6 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_-10px_rgba(110,123,255,0.3)]">
                                        {/* Corner glow */}
                                        <div className="pointer-events-none absolute -right-px -top-px h-20 w-20 rounded-bl-2xl rounded-tr-2xl bg-linear-to-bl from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">
                                                {exp.title}
                                            </h3>
                                            <div
                                                className={`mt-1 flex items-center gap-2 text-accent ${index % 2 === 1 ? "md:justify-end" : ""
                                                    }`}
                                            >
                                                <Building2 className="h-4 w-4" />
                                                <span className="font-medium">{exp.company}</span>
                                            </div>
                                        </div>

                                        <p className="text-foreground-muted">
                                            {exp.description}
                                        </p>

                                        <div
                                            className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.technologies.map((tech) => (
                                                <Badge key={tech} variant="gradient">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline end */}
                    <div className="absolute -bottom-4 left-4 md:left-1/2">
                        <div className="relative -translate-x-1/2">
                            <div className="h-2 w-2 rounded-full bg-(--color-border)" />
                        </div>
                    </div>
                </div>

                {/* Future indicator */}
                <div className="mt-16 text-center">
                    <p className="text-foreground-tertiary">
                        More experiences coming soon...
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}