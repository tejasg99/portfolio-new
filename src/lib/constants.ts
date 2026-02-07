export const SECTIONS = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
] as const;

export const PERSONAL_INFO = {
    name: "Tejas Gawade",
    title: "Full Stack Developer",
    tagline: "Building digital experiences that matter",
    email: "tgawade092@gmail.com",
    github: "https://github.com/tejasg99",
    linkedin: "https://www.linkedin.com/in/tejas-gawade-97t",
    location: "Pune, Maharashtra, India",
};

export const SKILLS = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Expo", category: "Mobile" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of the project and its impact.",
        longDescription: "More detailed description goes here.",
        tags: ["Next.js", "TypeScript", "MongoDB"],
        image: "/projects/project-1.jpg",
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Project Two",
        description: "Another amazing project description.",
        longDescription: "More detailed description goes here.",
        tags: ["React Native", "Expo", "TypeScript"],
        image: "/projects/project-2.jpg",
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Project Three",
        description: "Third project with great features.",
        longDescription: "More detailed description goes here.",
        tags: ["React", "Node.js", "PostgreSQL"],
        image: "/projects/project-3.jpg",
        link: "#",
        github: "#",
    },
];

export const EXPERIENCE = [
    {
        id: 1,
        title: "Web Development Intern",
        company: "Jabsz Studios",
        period: "August 1 2025 - December 15 2025",
        description: "Developed mobile applications using React Native and Expo.",
        technologies: ["React Native", "Expo", "TypeScript", "Android Studio"],
    },
];