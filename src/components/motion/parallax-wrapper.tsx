"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ParallaxWrapperProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
    direction?: "up" | "down";
}

export function ParallaxWrapper({
    children,
    className,
    speed = 0.5,
    direction = "up",
}: ParallaxWrapperProps) {
    const ref = useRef(null);
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const multiplier = direction === "up" ? -1 : 1;
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [100 * speed * multiplier, -100 * speed * multiplier]
    );

    if (reducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}