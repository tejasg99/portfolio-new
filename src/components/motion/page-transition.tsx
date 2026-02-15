"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface PageTransitionProps {
    children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const reducedMotion = useReducedMotion();

    if (reducedMotion) {
        return <>{children}</>;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}