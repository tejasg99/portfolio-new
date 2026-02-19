# Portfolio - Full Stack Developer

A modern, animated portfolio website built with Next.js 16, featuring a futuristic dark theme with smooth animations and premium UI/UX.

## ✨ Features

- **Modern Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion for scroll-triggered reveals, micro-interactions, and parallax effects, Lenis for smooth scroll
- **Premium Dark Theme**: Futuristic design with electric blue-purple accents and neon green highlights
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Accessibility**: Reduced motion support, semantic HTML, keyboard navigation
- **Performance**: Optimized for Core Web Vitals with smooth 60fps animations

## 🎨 Design Features

- Vertical radial spotlight gradients
- Glassmorphism cards with subtle reflections
- Magnetic button interactions
- Brand-colored skill icons with dynamic glows
- Animated timeline with scroll-based reveals
- Particle effects and floating elements

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4, CSS Variables |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide React, react-icons |
| UI Components | shadcn/ui (customized) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/tejasg99/portfolio-new.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open http://localhost:3000 to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```
 
## 📁 Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles & CSS variables
│   └── icon.png            # favicon
├── components/
│   ├── layout/             # Navbar, smooth scroll provider
│   ├── motion/             # Reusable animation components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   └── ui/                 # UI components (Button, Card, etc.)
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, constants, configs
└── types/                  # TypeScript type definitions
```

## 🎯 Sections
- Hero - Full-viewport intro with animated spotlight and CTA
- About - Personal introduction with stats and quick facts
- Skills - Technology grid with brand-colored icons
- Projects - Featured work with hover interactions
- Experience - Animated timeline of work history
- Contact - Call-to-action with social links

## ⚙️ Customization
### Personal Information
Edit src/lib/constants.ts to update:
- Name, title, tagline
- Contact information
- Skills list
- Projects
- Work experience

### Theme Colors
Modify CSS variables in src/app/globals.css:
- Primary colors (blue-purple)
- Accent color (neon green)
- Background shades
- Text colors

### Adding Skills
- Add skill config in src/lib/skill-data.ts
- Import icon from react-icons
- Add to SKILLS array in src/lib/constants.ts

## ♿ Accessibility
- Respects prefers-reduced-motion
- Semantic HTML structure
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance