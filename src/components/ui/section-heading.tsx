import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    label: string;
    title: string;
    titleHighlight?: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    label,
    title,
    titleHighlight,
    description,
    align = "left",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "space-y-4",
                align === "center" && "text-center",
                className
            )}
        >
            {/* Label with accent color */}
            <div
                className={cn(
                    "inline-flex items-center gap-3",
                    align === "center" && "justify-center"
                )}
            >
                <span className="h-px w-8 bg-linear-to-r from-transparent to-accent" />
                <span className="text-sm font-medium uppercase tracking-widest text-accent">
                    {label}
                </span>
                <span className="h-px w-8 bg-linear-to-l from-transparent to-accent" />
            </div>

            {/* Title with gradient */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                <span className="text-gradient">{title}</span>
                {titleHighlight && (
                    <>
                        <br />
                        <span className="text-foreground-secondary">
                            {titleHighlight}
                        </span>
                    </>
                )}
            </h2>

            {/* Description */}
            {description && (
                <p
                    className={cn(
                        "text-lg text-foreground-muted",
                        align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}