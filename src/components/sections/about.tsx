import { SectionWrapper } from "@/components/ui/section-wrapper";

export function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left Column - Heading */}
                <div className="space-y-4">
                    <p className="text-sm font-medium uppercase tracking-widest text-(--color-amber-glow)">
                        About Me
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Crafting digital
                        <br />
                        <span className="text-muted-foreground">
                            experiences
                        </span>
                    </h2>
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p>
                        I&apos;m a full stack developer passionate about building applications
                        that are not only functional but also delightful to use. With
                        expertise spanning from React and Next.js on the frontend to Node.js
                        and databases on the backend, I bring ideas to life.
                    </p>
                    <p>
                        My journey in development has led me through various technologies,
                        from building responsive web applications to crafting mobile
                        experiences with React Native. I believe in writing clean,
                        maintainable code that scales.
                    </p>
                    <p>
                        When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                        contributing to open source, or diving deep into the latest in the
                        web development ecosystem.
                    </p>
                </div>
            </div>

            {/* Stats - Optional */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4">
                {[
                    { value: "5+", label: "Projects Completed" },
                    { value: "5+", label: "Technologies" },
                    { value: "100%", label: "Dedication" },
                    { value: "100%", label: "Eagerness to learn"},
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-3xl font-bold text-(--color-foreground) md:text-4xl">
                            {stat.value}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}