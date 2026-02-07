"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = [
  { path: "/", label: "~", description: "home" },
  { path: "/about", label: "about", description: "about me" },
  { path: "/experience", label: "experience", description: "work experience" },
  { path: "/blog", label: "blog", description: "blog posts" },
  { path: "/projects", label: "projects", description: "project showcase" },
];

function fuzzyMatch(query: string, text: string): { matches: boolean; score: number } {
  if (!query) return { matches: true, score: 0 };
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  let qi = 0;
  let score = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      score += ti === 0 || t[ti - 1] === " " ? 2 : 1;
      qi++;
    }
  }
  return { matches: qi === q.length, score };
}

function highlightMatch(text: string, query: string) {
  if (!query) return <span>{text}</span>;
  const q = query.toLowerCase();
  const result: React.ReactNode[] = [];
  let qi = 0;
  for (let i = 0; i < text.length; i++) {
    if (qi < q.length && text[i].toLowerCase() === q[qi]) {
      result.push(
        <span key={i} className="text-accent-cyan font-semibold">
          {text[i]}
        </span>
      );
      qi++;
    } else {
      result.push(<span key={i}>{text[i]}</span>);
    }
  }
  return <>{result}</>;
}

export function FuzzyFinder() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = ROUTES.map((route) => {
    const labelMatch = fuzzyMatch(query, route.label);
    const descMatch = fuzzyMatch(query, route.description);
    const best = labelMatch.score >= descMatch.score ? labelMatch : descMatch;
    return { ...route, ...best };
  })
    .filter((r) => r.matches)
    .sort((a, b) => b.score - a.score);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setQuery("");
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  // Global keyboard shortcut: Ctrl+K or Cmd+K to open
  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, [isOpen]);

  const navigate = useCallback(
    (path: string) => {
      setIsOpen(false);
      setQuery("");
      router.push(path);
    },
    [router]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        navigate(filtered[selectedIndex].path);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search trigger / input */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-200 text-sm cursor-pointer"
      >
        <span className="text-accent-cyan">{">"}</span>
        <span className="text-text-muted">
          {isOpen ? "" : "navigate..."}
        </span>
        <kbd className="hidden sm:inline text-[10px] text-text-muted border border-border rounded px-1 py-0.5 ml-2">
          ⌘K
        </kbd>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-72 sm:w-80 border border-border rounded-lg bg-bg-secondary shadow-2xl shadow-black/50 overflow-hidden z-50">
          {/* Search input */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
            <span className="text-accent-cyan text-sm">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="fuzzy find..."
              className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none font-mono"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="animate-blink text-accent-cyan text-sm">█</span>
          </div>

          {/* Results */}
          <div className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-4 text-center text-text-muted text-sm">
                no matches found
              </div>
            ) : (
              filtered.map((route, i) => {
                const isActive = route.path === pathname;
                const isSelected = i === selectedIndex;
                return (
                  <button
                    key={route.path}
                    onClick={() => navigate(route.path)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors duration-75 cursor-pointer ${
                      isSelected
                        ? "bg-bg-card-hover"
                        : "hover:bg-bg-card"
                    }`}
                  >
                    <span
                      className={`w-3 text-xs ${
                        isSelected ? "text-accent-cyan" : "text-transparent"
                      }`}
                    >
                      {">"}
                    </span>
                    <span className={isActive ? "text-accent-cyan" : "text-text-primary"}>
                      {highlightMatch(route.label, query)}
                    </span>
                    <span className="text-text-muted text-xs ml-auto">
                      {route.path}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer hints */}
          <div className="border-t border-border px-3 py-1.5 flex gap-3 text-[10px] text-text-muted">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
            <span>esc close</span>
          </div>
        </div>
      )}
    </div>
  );
}
