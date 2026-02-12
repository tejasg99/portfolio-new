"use client"
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";

export function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <SectionWrapper id="contact" className="relative overflow-hidden">
            {/* Background spotlight */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-200 -translate-x-1/2 -translate-y-1/2">
                <div
                    className="h-full w-full"
                    style={{
                        background: `
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(110, 123, 255, 0.2) 0%, transparent 60%),
              radial-gradient(ellipse 70% 60% at 50% 50%, rgba(90, 62, 255, 0.1) 0%, transparent 50%)
            `,
                    }}
                />
            </div>

            {/* Grid pattern */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(110,123,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(110,123,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="max-w-2xl space-y-8">
                    {/* Label */}
                    <div className="inline-flex items-center gap-3">
                        <span className="h-px w-8 bg-linear-to-r from-transparent to-accent" />
                        <span className="text-sm font-medium uppercase tracking-widest text-accent">
                            Get in Touch
                        </span>
                        <span className="h-px w-8 bg-linear-to-l from-transparent to-accent" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="text-gradient">Let&apos;s build something</span>
                        <br />
                        <span className="text-foreground">amazing together</span>
                    </h2>

                    <p className="text-lg text-foreground-muted md:text-xl">
                        I&apos;m currently open to new opportunities and interesting projects.
                        Whether you have a question or just want to say hi, feel free to
                        reach out!
                    </p>

                    {/* Primary CTA */}
                    <div className="pt-4">
                        <Button
                            variant="primary"
                            size="xl"
                            className="group"
                            asChild
                        >
                            <a href={`mailto:${PERSONAL_INFO.email}`}>
                                <Mail className="mr-3 h-5 w-5" />
                                Send me an email
                                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </Button>
                    </div>

                    {/* Secondary links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <Button variant="secondary" size="lg" asChild>
                            <a
                                href={PERSONAL_INFO.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                GitHub
                            </a>
                        </Button>
                        <Button variant="secondary" size="lg" asChild>
                            <a
                                href={PERSONAL_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button variant="ghost" size="lg" asChild>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2 h-5 w-5" />
                                Resume
                            </a>
                        </Button>
                    </div>

                    {/* Email display */}
                    <div className="pt-8">
                        <p className="text-sm text-foreground-secondary">
                            Or reach me directly at
                        </p>
                        <a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="mt-2 inline-block text-lg font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-all duration-300 hover:decoration-primary hover:text-glow-primary"
                        >
                            {PERSONAL_INFO.email}
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-24 w-full border-t border-(--color-border) pt-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        {/* Copyright */}
                        <p className="text-sm text-foreground-secondary">
                            © {currentYear}{" "}
                            <span className="text-foreground">
                                {PERSONAL_INFO.name}
                            </span>
                            . Crafted with care.
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            <a
                                href={PERSONAL_INFO.github}
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-card transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_-5px_rgba(110,123,255,0.4)]"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github className="h-4 w-4 text-foreground-secondary transition-colors group-hover:text-primary-light" />
                            </a>
                            <a
                                href={PERSONAL_INFO.linkedin}
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-card transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_-5px_rgba(110,123,255,0.4)]"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4 text-foreground-secondary transition-colors group-hover:text-primary-light" />
                            </a>
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-card transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_20px_-5px_rgba(163,255,18,0.4)]"
                                aria-label="Email"
                            >
                                <Mail className="h-4 w-4 text-foreground-secondary transition-colors group-hover:text-accent" />
                            </a>
                        </div>

                        {/* Back to top */}
                        <button
                            onClick={() => {
                                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground"
                        >
                            Back to top
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_-5px_rgba(110,123,255,0.4)]">
                                <ArrowUpRight className="h-3 w-3 -rotate-45" />
                            </span>
                        </button>
                    </div>
                </footer>
            </div>
        </SectionWrapper>
    );
}