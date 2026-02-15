"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
    once?: boolean;
    amount?: number;
}

export function MotionWrapper({
    children,
    variants,
    className,
    delay = 0,
    once = true,
    amount = 0.2,
    ...props
}: MotionWrapperProps) {
    const { ref, isInView } = useInViewAnimation({ once, amount });
    const reducedMotion = useReducedMotion();

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay,
            },
        },
    };

    if (reducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants || defaultVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}