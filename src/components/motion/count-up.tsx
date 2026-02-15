"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CountUpProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export function CountUp({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    className,
}: CountUpProps) {
    const { ref, isInView } = useInViewAnimation({ once: true });
    const reducedMotion = useReducedMotion();

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) =>
        Math.round(current).toString()
    );

    useEffect(() => {
        if (isInView ) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    if (reducedMotion) {
        return (
            <span className={className}>
                {prefix}
                {value}
                {suffix}
            </span>
        );
    }

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}