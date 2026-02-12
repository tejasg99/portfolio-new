import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { PERSONAL_INFO } from "@/lib/constants"

export function About() {
    return (
        <SectionWrapper id="about" className="relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Left Column - Heading */}
                <div>
                    <SectionHeading
                        label="About Me"
                        title="Crafting digital"
                        titleHighlight="experiences"
                    />

                    {/* Decorative element */}
                    <div className="mt-8 hidden lg:block">
                        <div className="relative h-64 w-64">
                            <div className="absolute inset-0 rounded-3xl border border-(--color-border) bg-linear-to-br from-card to-transparent" />
                            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-2xl border border-primary/20 bg-primary/5" />
                            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl border border-accent/20 bg-accent/5" />
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                    <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                        <p className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-linear-to-b before:from-muted before:to-purple/70">
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

                    {/* Quick facts */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {[
                            { label: "Location", value: PERSONAL_INFO.location },
                            { label: "Focus", value: "Full Stack" },
                            { label: "Experienced in", value: "Full stack, mobile" },
                            { label: "Status", value: "Available" },
                        ].map((fact) => (
                            <div
                                key={fact.label}
                                className="rounded-xl border border-(--color-border) bg-card p-4 transition-all duration-300 hover:border-primary/30"
                            >
                                <p className="text-xs uppercase tracking-wider text-foreground-secondary">
                                    {fact.label}
                                </p>
                                <p className="mt-1 font-semibold text-foreground">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-6 border-t border-(--color-border) pt-16 md:grid-cols-4">
                {[
                    { value: "5+", label: "Projects Completed" },
                    { value: "5+", label: "Technologies" },
                    { value: "100%", label: "Dedication" },
                    { value: "100%", label: "Eagerness to learn" },
                ].map((stat) => (
                    <div key={stat.label} className="group text-center">
                        <p
                            className={`text-4xl font-bold text-gradient transition-all duration-300 group-hover:text-glow-primary md:text-5xl`}
                        >
                            {stat.value}
                        </p>
                        <p className="mt-2 text-sm text-foreground-secondary">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}