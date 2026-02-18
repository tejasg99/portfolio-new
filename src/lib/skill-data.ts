// Skill configuration with brand colors
export interface SkillConfig {
    name: string;
    category: string;
    color: string;
    bgColor: string;
    glowColor: string;
}

export const SKILL_CONFIGS: Record<string, SkillConfig> = {
    "Next.js": {
        name: "Next.js",
        category: "Frontend",
        color: "#FFFFFF",
        bgColor: "rgba(255, 255, 255, 0.1)",
        glowColor: "rgba(255, 255, 255, 0.4)",
    },
    "React": {
        name: "React",
        category: "Frontend",
        color: "#61DAFB",
        bgColor: "rgba(97, 218, 251, 0.1)",
        glowColor: "rgba(97, 218, 251, 0.4)",
    },
    "TypeScript": {
        name: "TypeScript",
        category: "Language",
        color: "#3178C6",
        bgColor: "rgba(49, 120, 198, 0.1)",
        glowColor: "rgba(49, 120, 198, 0.4)",
    },
    "Javascript": {
        name: "Javascript",
        category: "Language",
        color: "#F7DF1E",
        bgColor: "rgba(247, 223, 30, 0.1)",
        glowColor: "rgba(247, 223, 30, 0.4)",
    },
    "React Native": {
        name: "React Native",
        category: "Mobile",
        color: "#61DAFB",
        bgColor: "rgba(97, 218, 251, 0.1)",
        glowColor: "rgba(97, 218, 251, 0.4)",
    },
    "Node.js": {
        name: "Node.js",
        category: "Backend",
        color: "#539E43",
        bgColor: "rgba(83, 158, 67, 0.1)",
        glowColor: "rgba(83, 158, 67, 0.4)",
    },
    "MongoDB": {
        name: "MongoDB",
        category: "Database",
        color: "#47A248",
        bgColor: "rgba(71, 162, 72, 0.1)",
        glowColor: "rgba(71, 162, 72, 0.4)",
    },
    "PostgreSQL": {
        name: "PostgreSQL",
        category: "Database",
        color: "#4169E1",
        bgColor: "rgba(65, 105, 225, 0.1)",
        glowColor: "rgba(65, 105, 225, 0.4)",
    },
    "Expo": {
        name: "Expo",
        category: "Mobile",
        color: "#747482",
        bgColor: "rgba(172, 172, 176, 0.1)",
        glowColor: "rgba(172, 172, 176, 0.3)",
    },
    "Tailwind CSS": {
        name: "Tailwind CSS",
        category: "Styling",
        color: "#06B6D4",
        bgColor: "rgba(6, 182, 212, 0.1)",
        glowColor: "rgba(6, 182, 212, 0.4)",
    },
    "Git": {
        name: "Git",
        category: "Tools",
        color: "#F05032",
        bgColor: "rgba(240, 80, 50, 0.1)",
        glowColor: "rgba(240, 80, 50, 0.4)",
    },
    "Python": {
        name: "Python",
        category: "Language",
        color: "#3776AB",
        bgColor: "rgba(55, 118, 171, 0.1)",
        glowColor: "rgba(55, 118, 171, 0.4)",
    },
    "Vercel": {
        name: "Vercel",
        category: "Deployment",
        color: "#FFFFFF",
        bgColor: "rgba(255, 255, 255, 0.1)",
        glowColor: "rgba(255, 255, 255, 0.3)",
    },
    "Prisma": {
        name: "Prisma",
        category: "ORM",
        color: "#2D3748",
        bgColor: "rgba(45, 55, 72, 0.2)",
        glowColor: "rgba(45, 55, 72, 0.4)",
    },
    "Mongoose": {
        name: "Mongoose",
        category: "ODM",
        color: "#880000",
        bgColor: "rgba(136, 0, 0, 0.1)",
        glowColor: "rgba(136, 0, 0, 0.4)",
    },
    "Android Studio": {
        name: "Android Studio",
        category: "Tools",
        color: "#3DDC84",
        bgColor: "rgba(61, 220, 132, 0.1)",
        glowColor: "rgba(61, 220, 132, 0.4)",
    },
    "Express": {
        name: "Express",
        category: "Backend",
        color: "#C4C4C4",
        bgColor: "rgba(196, 196, 196, 0.1)",
        glowColor: "rgba(196, 196, 196, 0.5)",
    },
    "C++": {
        name: "C++",
        category: "Language",
        color: "#00599C",
        bgColor: "rgba(0, 89, 156, 0.1)",
        glowColor: "rgba(0, 89, 156, 0.4)",
    },
    "Vite": {
        name: "Vite",
        category: "Tools",
        color: "#646CFF",
        bgColor: "rgba(100, 108, 255, 0.1)",
        glowColor: "rgba(100, 108, 255, 0.4)",
    },
    "Visual Studio Code": {
        name: "Visual Studio Code",
        category: "Tools",
        color: "#007ACC",
        bgColor: "rgba(0, 122, 204, 0.1)",
        glowColor: "rgba(0, 122, 204, 0.4)",
    },
};

// Get config with fallback
export function getSkillConfig(skillName: string): SkillConfig {
    return (
        SKILL_CONFIGS[skillName] || {
            name: skillName,
            category: "Other",
            color: "#A3FF12", // Default accent color
            bgColor: "rgba(163, 255, 18, 0.1)",
            glowColor: "rgba(163, 255, 18, 0.4)",
        }
    );
}