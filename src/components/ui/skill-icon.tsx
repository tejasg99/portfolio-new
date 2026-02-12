// import {
//     Layers,
//     Smartphone,
//     Database,
//     Server,
//     Code2,
//     Braces,
//     Globe,
//     Cpu,
//     GitBranch
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
//     "Next.js": Globe,
//     React: Layers,
//     TypeScript: Braces,
//     "React Native": Smartphone,
//     "Node.js": Server,
//     MongoDB: Database,
//     PostgreSQL: Database,
//     Expo: Smartphone,
//     Git: GitBranch,
//     default: Code2,
// };

// const colorMap: Record<string, string> = {
//     Frontend: "text-[var(--color-amber-glow)] bg-[var(--color-amber-glow)]/10",
//     Backend: "text-[var(--color-green-glow)] bg-[var(--color-green-glow)]/10",
//     Database: "text-[var(--color-purple-glow)] bg-[var(--color-purple-glow)]/10",
//     Language: "text-[var(--color-rose-glow)] bg-[var(--color-rose-glow)]/10",
//     Mobile: "text-[var(--color-amber-glow)] bg-[var(--color-amber-glow)]/10",
//     default: "text-[var(--color-foreground)] bg-[var(--color-muted)]",
// };

// interface SkillIconProps {
//     name: string;
//     category: string;
//     className?: string;
// }

// export function SkillIcon({ name, category, className }: SkillIconProps) {
//     const Icon = iconMap[name] || iconMap.default;
//     const colorClass = colorMap[category] || colorMap.default;

//     return (
//         <div
//             className={cn(
//                 "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
//                 colorClass,
//                 className
//             )}
//         >
//             <Icon className="h-6 w-6" />
//         </div>
//     );
// }

import {
    Layers,
    Smartphone,
    Database,
    Server,
    Code2,
    Braces,
    Globe,
    Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "Next.js": Globe,
    React: Layers,
    TypeScript: Braces,
    "React Native": Smartphone,
    "Node.js": Server,
    MongoDB: Database,
    PostgreSQL: Database,
    Expo: Smartphone,
    default: Code2,
};

// All icons use the accent green color
interface SkillIconProps {
    name: string;
    category: string;
    className?: string;
}

export function SkillIcon({ name, category, className }: SkillIconProps) {
    const Icon = iconMap[name] || iconMap.default;

    return (
        <div
            className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/15 group-hover:shadow-[0_0_20px_-5px_rgba(163,255,18,0.4)]",
                className
            )}
        >
            <Icon className="h-6 w-6" />
        </div>
    );
}