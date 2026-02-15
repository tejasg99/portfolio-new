"use client";

import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    once?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
    children,
    className,
    delay = 0,
    once = true,
    as: Component = "span",
}: TextRevealProps) {
    const { ref, isInView } = useInViewAnimation({ once });
    const reducedMotion = useReducedMotion();

    const words = children.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const, // to preserve tuple typing and fix type error
            },
        },
    };

    if (reducedMotion) {
        return <Component className={className}>{children}</Component>;
    }

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={cn("inline-flex flex-wrap", className)}
            style={{ perspective: 1000 }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-[0.25em] inline-block"
                    style={{ transformOrigin: "center bottom" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}