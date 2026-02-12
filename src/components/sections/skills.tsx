import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { SkillIcon } from "@/components/ui/skill-icon";
import { GlowEffect } from "@/components/ui/glow-effect";

export function Skills() {
    return (
        <SectionWrapper id="skills" className="relative">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background-secondary/50 via-transparent to-transparent" />

            <SectionHeading
                label="Skills & Tools"
                title="Technologies I work with"
                description="A curated selection of technologies and tools I use to bring ideas to life."
                align="center"
            />

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SKILLS.map((skill, index) => (
                    <Card
                        key={skill.name}
                        variant="glow"
                        className="group relative cursor-default p-6 transition-all duration-500 hover:-translate-y-1"
                    >
                        {/* Cursor-following glow */}
                        <GlowEffect color="primary" />

                        {/* Blue gradient reflection on top */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative flex items-center gap-4">
                            <SkillIcon name={skill.name} category={skill.category} />
                            <div>
                                <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-foreground-secondary">
                                    {skill.category}
                                </p>
                            </div>
                        </div>

                        {/* Corner accent glow */}
                        <div className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rounded-tl-3xl bg-linear-to-tl from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </Card>
                ))}
            </div>

            {/* Additional note */}
            <div className="mt-12 flex justify-center">
                <p className="text-sm text-foreground-tertiary">
                    ...and always learning more
                </p>
            </div>
        </SectionWrapper>
    );
}