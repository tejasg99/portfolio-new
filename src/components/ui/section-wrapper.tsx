import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  fullHeight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6",
        fullHeight ? "min-h-screen" : "py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}