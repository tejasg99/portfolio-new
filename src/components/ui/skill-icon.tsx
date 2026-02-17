"use client";

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiExpo,
    SiTailwindcss,
    SiGit,
    SiPython,
    SiVercel,
    SiPrisma,
    SiAndroidstudio,
    SiExpress,
    SiVite,
    SiCplusplus,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getSkillConfig } from "@/lib/skill-data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    "Next.js": SiNextdotjs,
    React: SiReact,
    TypeScript: SiTypescript,
    Javascript: SiJavascript,
    "React Native": SiReact,
    "Node.js": SiNodedotjs,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Expo: SiExpo,
    "Tailwind CSS": SiTailwindcss,
    Git: SiGit,
    Python: SiPython,
    Vercel: SiVercel,
    Prisma: SiPrisma,
    "Android Studio": SiAndroidstudio,
    Express: SiExpress,
    Vite: SiVite,
    "C++": SiCplusplus,
    "Visual Studio Code": VscVscode,
};

interface SkillIconProps {
    name: string;
    category: string;
    className?: string;
    showGlow?: boolean;
}

export function SkillIcon({ name, category, className, showGlow = true }: SkillIconProps) {
    const reducedMotion = useReducedMotion();
    const config = getSkillConfig(name);
    const Icon = iconMap[name] || Code2;

    return (
        <motion.div
            className={cn(
                "relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                className
            )}
            style={{
                backgroundColor: config.bgColor,
            }}
            whileHover={
                !reducedMotion
                    ? {
                        scale: 1.1,
                        boxShadow: showGlow ? `0 0 25px -5px ${config.glowColor}` : "none",
                    }
                    : {}
            }
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Glow effect behind icon */}
            {showGlow && (
                <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(circle at center, ${config.glowColor} 0%, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                />
            )}

            {/* Icon */}
            <Icon
                className="relative z-10 h-6 w-6"
                style={{ color: config.color }}
            />
        </motion.div>
    );
}