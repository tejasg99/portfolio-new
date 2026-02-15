"use client";

import { motion, Variants } from "framer-motion";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerWrapperProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerWrapper({
    children,
    className,
    staggerDelay = 0.1,
    once = true,
}: StaggerWrapperProps) {
    const { ref, isInView } = useInViewAnimation({ once });
    const reducedMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
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
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
    const reducedMotion = useReducedMotion();

    if (reducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div variants={staggerItem} className={className}>
            {children}
        </motion.div>
    );
}