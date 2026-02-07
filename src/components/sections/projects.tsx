import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PROJECTS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
    return (
        <SectionWrapper id="projects">
            <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-widest text-(--color-amber-glow)">
                    Featured Work
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Selected Projects
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    A showcase of projects that demonstrate my skills and passion for
                    building great software.
                </p>
            </div>

            <div className="mt-16 space-y-8">
                {PROJECTS.map((project, index) => (
                    <Card
                        key={project.id}
                        className="group relative overflow-hidden border-border bg-card transition-all hover:border-(--color-amber-glow)/50"
                    >
                        <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
                            {/* Image Placeholder */}
                            <div
                                className={`aspect-video overflow-hidden rounded-lg bg-muted ${index % 2 === 1 ? "md:order-2" : ""
                                    }`}
                            >
                                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                                    Project Image
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-(--color-foreground)">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-muted-foreground">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="bg-muted text-muted-foreground"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={project.link}
                                        className="text-sm font-medium text-(--color-foreground) underline-offset-4 hover:underline"
                                    >
                                        View Project →
                                    </a>
                                    <a
                                        href={project.github}
                                        className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}