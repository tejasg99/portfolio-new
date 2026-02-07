import { SectionWrapper } from "@/components/ui/section-wrapper";
import { EXPERIENCE } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function Experience() {
    return (
        <SectionWrapper id="experience" className="bg-muted/30">
            <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-widest text-(--color-amber-glow)">
                    Experience
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Where I&apos;ve worked
                </h2>
            </div>

            <div className="mt-16">
                {/* Timeline */}
                <div className="relative space-y-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border md:before:left-1/2">
                    {EXPERIENCE.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative grid gap-8 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:text-right"
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-0 h-3 w-3 -translate-x-1 rounded-full bg-(--color-amber-glow) md:left-1/2 md:-translate-x-1.5" />

                            {/* Content */}
                            <div
                                className={`pl-8 md:pl-0 ${index % 2 === 0
                                    ? "md:pr-12 md:text-right"
                                    : "md:col-start-2 md:pl-12 md:text-left"
                                    }`}
                            >
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-(--color-foreground)">
                                            {exp.title}
                                        </h3>
                                        <p className="text-(--color-amber-glow)">{exp.company}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {exp.period}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {exp.description}
                                    </p>
                                    <div
                                        className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                            }`}
                                    >
                                        {exp.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-muted text-muted-foreground"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}