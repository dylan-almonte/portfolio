"use client";

import { useEffect, useState, Children, type ReactNode } from "react";

interface CLITypewriterProps {
  children: ReactNode;
  lineDelay?: number;
}

export function CLITypewriter({ children, lineDelay = 50 }: CLITypewriterProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const childArray = Children.toArray(children);

  useEffect(() => {
    if (visibleCount >= childArray.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, lineDelay);
    return () => clearTimeout(timer);
  }, [visibleCount, childArray.length, lineDelay]);

  return (
    <>
      {childArray.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.15s ease-out, transform 0.15s ease-out",
          }}
        >
          {child}
        </div>
      ))}
    </>
  );
}
