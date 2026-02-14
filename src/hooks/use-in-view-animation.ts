"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

// MarginType error fix
type RootMargin =
    | `${number}px`
    | `${number}px ${number}px`
    | `${number}px ${number}px ${number}px`
    | `${number}px ${number}px ${number}px ${number}px`;

interface UseInViewAnimationOptions {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: RootMargin;
}

export function useInViewAnimation(options: UseInViewAnimationOptions = {}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: options.once ?? true,
        amount: options.amount ?? 0.2,
        margin: options.margin ?? "0px 0px -100px 0px",
    });

    return { ref, isInView };
}