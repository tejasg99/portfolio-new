import { Variants } from "framer-motion";

// Custom easing curves
export const easings = {
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    spring: { type: "spring", stiffness: 300, damping: 30 },
    springSmooth: { type: "spring", stiffness: 200, damping: 25 },
    springBouncy: { type: "spring", stiffness: 400, damping: 20 },
} as const;

// Transition presets
export const transitions = {
    fast: { duration: 0.15, ease: easings.easeOutQuart },
    base: { duration: 0.3, ease: easings.easeOutQuart },
    slow: { duration: 0.5, ease: easings.easeOutExpo },
    slower: { duration: 0.7, ease: easings.easeOutExpo },
    spring: easings.spring,
    springSmooth: easings.springSmooth,
} as const;

// Fade animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transitions.slow,
    },
};

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.slow,
    },
};

export const fadeInDown: Variants = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.slow,
    },
};

export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.slow,
    },
};

export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.slow,
    },
};

// Scale animations
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.slow,
    },
};

export const scaleInBounce: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: easings.springBouncy,
    },
};

// Stagger container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Stagger item
export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.slow,
    },
};

// Blur animations
export const blurIn: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: transitions.slow,
    },
};

// Slide animations
export const slideInFromBottom: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easings.easeOutExpo,
        },
    },
};

export const slideInFromTop: Variants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easings.easeOutExpo,
        },
    },
};

// Line reveal (for decorative lines)
export const lineReveal: Variants = {
    hidden: {
        scaleX: 0,
        originX: 0,
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: easings.easeOutExpo,
        },
    },
};

// Text reveal (character by character)
export const textRevealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            delayChildren: 0.1,
        },
    },
};

export const textRevealChar: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easings.easeOutQuart,
        },
    },
};

// Card hover animations
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.02,
        y: -5,
        transition: easings.springSmooth,
    },
    tap: {
        scale: 0.98,
    },
};

// Button hover animations
export const buttonHover = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
};

// Icon hover animations
export const iconHover = {
    rest: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: easings.springBouncy,
    },
};

// Glow pulse animation
export const glowPulse: Variants = {
    initial: {
        opacity: 0.5,
        scale: 1,
    },
    animate: {
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.05, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Float animation
export const float: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Rotate animation
export const rotate: Variants = {
    initial: { rotate: 0 },
    animate: {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
        },
    },
};