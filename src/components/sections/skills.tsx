import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SKILLS } from "@/lib/constants";
import { Card } from "@/components/ui/card";

// Placeholder icons - will be replaced with filled icons
const SkillIcon = () => (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
        <span className="text-lg">⚡</span>
    </div>
);

export function Skills() {
    return (
        <SectionWrapper id="skills" className="bg-muted/30">
            <div className="space-y-4 text-center">
                <p className="text-sm font-medium uppercase tracking-widest text-(--color-amber-glow)">
                    Skills & Tools
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Technologies I work with
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    A curated selection of technologies and tools I use to bring ideas to
                    life.
                </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SKILLS.map((skill) => (
                    <Card
                        key={skill.name}
                        className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:border-(--color-amber-glow)/50"
                    >
                        {/* Background glow on hover - placeholder */}
                        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-(--color-amber-glow)/0 to-(--color-purple-glow)/0 opacity-0 transition-opacity group-hover:opacity-10" />

                        <div className="flex items-center gap-4">
                            <SkillIcon />
                            <div>
                                <h3 className="font-semibold text-(--color-foreground)">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {skill.category}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}