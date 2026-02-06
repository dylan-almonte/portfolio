"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "~" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-terminal-gray px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center gap-6 text-sm">
        <span className="text-terminal-green-dim select-none">
          visitor@dylan.dev:
        </span>
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive
                  ? "text-terminal-green-bright"
                  : "text-terminal-green-dim hover:text-terminal-green"
              }`}
            >
              <span className="text-terminal-green-dim">./</span>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
