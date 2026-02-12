"use client";

import { cn } from "@/lib/utils";

interface FloatingShapesProps {
    className?: string;
}

export function FloatingShapes({ className }: FloatingShapesProps) {
    return (
        <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
            {/* Shape 1 */}
            <div
                className="absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-amber-glow/5 blur-3xl"
                style={{
                    animation: "float 20s ease-in-out infinite",
                }}
            />

            {/* Shape 2 */}
            <div
                className="absolute -right-20 top-1/3 h-60 w-60 rounded-full bg-purple-glow/5 blur-3xl"
                style={{
                    animation: "float 25s ease-in-out infinite reverse",
                }}
            />

            {/* Shape 3 */}
            <div
                className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-rose-glow/5 blur-3xl"
                style={{
                    animation: "float 18s ease-in-out infinite",
                    animationDelay: "-5s",
                }}
            />

            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
      `}</style>
        </div>
    );
}