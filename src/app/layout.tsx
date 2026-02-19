import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#05070F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Tejas Gawade | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "React Native",
    "Node.js",
  ],
  authors: [{ name: "Tejas Gawade" }],
  openGraph: {
    title: "Tejas Gawade | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, React Native, TypeScript, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}