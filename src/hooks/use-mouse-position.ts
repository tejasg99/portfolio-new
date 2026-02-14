"use client";

import { useState, useEffect, RefObject } from "react";

interface MousePosition {
    x: number;
    y: number;
    normalizedX: number;
    normalizedY: number;
}

export function useMousePosition(containerRef?: RefObject<HTMLElement>) {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
        normalizedX: 0,
        normalizedY: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef?.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const normalizedX = (x / rect.width - 0.5) * 2;
                const normalizedY = (y / rect.height - 0.5) * 2;
                setMousePosition({ x, y, normalizedX, normalizedY });
            } else {
                const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
                const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                    normalizedX,
                    normalizedY,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [containerRef]);

    return mousePosition;
}