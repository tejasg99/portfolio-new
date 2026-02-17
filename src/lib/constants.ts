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
    tagline: "Crafting seamless digital experiences from frontend to backend",
    email: "tgawade092@gmail.com",
    github: "https://github.com/tejasg99",
    linkedin: "https://www.linkedin.com/in/tejas-gawade-97t",
    location: "Pune, Maharashtra, India",
};

export const SKILLS = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling"},
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Framework"},
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },    
    { name: "TypeScript", category: "Language" },
    { name: "Javascript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "C++", category: "Language" },
    { name: "Git", category: "Version Control"},
    { name: "Vite", category: "Build Tool"},
    { name: "React Native", category: "Mobile" },
    { name: "Expo", category: "Mobile Framework" },
    { name: "Visual Studio Code", category: "IDE" },
    { name: "Android Studio", category: "IDE" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "OneLink",
        description: "A modern, secure platform for sharing content through unique, shareable links. Whether you need to share a quick text note, a code snippet with syntax highlighting, upload a file, or create a link-in-bio page - OneLink handles it all with a clean, minimalist interface.",
        longDescription: "More detailed description goes here.",
        tags: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind"],
        image: "/Project_1.png",
        link: "https://onelink-new.vercel.app/",
        github: "https://github.com/tejasg99/onelink",
        featured: true,
    },
    {
        id: 2,
        title: "StreamTube",
        description: "A video-sharing platform, providing users with a responsive interface to interact with features like video streaming, playlists, subscriptions, likes, and channel analytics.",
        longDescription: "More detailed description goes here.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        image: "/Project_2.png",
        link: "https://visitstreamtube.vercel.app/",
        github: "https://github.com/tejasg99/StreamTube-frontend",
        featured: true,
    },
];

export const EXPERIENCE = [
    {
        id: 1,
        title: "Web Development Intern",
        company: "Jabsz Studios",
        period: "August 1 2025 - December 15 2025",
        description: "Developed and maintained mobile applications using React Native and Expo. Collaborated with the team to implement new features and optimize app performance. Gained hands-on experience with TypeScript and Android Studio for testing and debugging.",
        technologies: ["React Native", "Expo", "TypeScript", "Android Studio"],
        highlights: [
            "Built and shipped production-ready mobile features",
            "Improved app performance by optimizing component rendering",
            "Collaborated with team mates to implement pixel-perfect UI",
        ],
    },
];