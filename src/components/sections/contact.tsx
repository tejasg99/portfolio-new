import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <div className="flex flex-col items-center text-center">
                {/* Background Glow */}
                <div className="pointer-events-none absolute -z-10 h-100 w-100 rounded-full bg-linear-to-r from-(--color-amber-glow)/10 via-(--color-rose-glow)/10 to-(--color-purple-glow)/10 blur-3xl" />

                <div className="space-y-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-(--color-amber-glow)">
                        Get in Touch
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Let&apos;s work together
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                        I&apos;m currently open to new opportunities and interesting projects.
                        Whether you have a question or just want to say hi, feel free to
                        reach out!
                    </p>

                    <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            className="min-w-45 bg-(--color-foreground) text-background hover:bg-(--color-foreground)/90"
                            asChild
                        >
                            <a href={`mailto:${PERSONAL_INFO.email}`}>Send Email</a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="min-w-45 border-border bg-transparent hover:bg-muted"
                            asChild
                        >
                            <a
                                href={PERSONAL_INFO.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Profile
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 w-full border-t border-border pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a
                                href={PERSONAL_INFO.github}
                                className="transition-colors hover:text-(--color-foreground)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href={PERSONAL_INFO.linkedin}
                                className="transition-colors hover:text-(--color-foreground)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}