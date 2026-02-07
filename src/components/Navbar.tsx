"use client";

import { usePathname } from "next/navigation";
import { FuzzyFinder } from "@/components/FuzzyFinder";

export function Navbar() {
  const pathname = usePathname();

  // Show current path as a breadcrumb
  const currentLabel =
    pathname === "/"
      ? "~"
      : pathname.slice(1).split("/")[0];

  return (
    <nav className="border-b border-border backdrop-blur-sm bg-bg-primary/80 sticky top-0 z-20 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-text-muted select-none">
            visitor@dylan.dev:
          </span>
          <span className="text-accent-cyan">
            <span className="text-text-muted">./</span>
            {currentLabel}
          </span>
        </div>
        <FuzzyFinder />
      </div>
    </nav>
  );
}
