"use client";

import Link from "next/link";
import { CLITypewriter } from "@/components/CLITypewriter";

export default function Home() {
  return (
    <CLITypewriter>
      {/* ASCII art with gradient */}
      <section>
        <pre className="text-accent-cyan text-xs leading-tight mb-6 opacity-80">
{`
██████╗  ██╗   ██╗ ██╗      █████╗  ██████╗  ██╗
██╔══██╗ ╚██╗ ██╔╝ ██║     ██╔══██╗ ██╔══██╗ ██║
██║  ██║  ╚████╔╝  ██║     ███████║ ██████╔╝ ██║
██║  ██║   ╚██╔╝   ██║     ██╔══██║ ██╔═══╝  ██║
██████╔╝    ██║    ███████╗██║  ██║ ██║      ██║
╚═════╝     ╚═╝    ╚══════╝╚═╝  ╚═╝ ╚═╝      ╚═╝
`}
        </pre>
      </section>

      {/* Welcome message */}
      <section>
        <div className="space-y-3 text-sm">
          <p>
            <span className="text-text-muted">$</span>{" "}
            <span className="text-text-secondary">cat /etc/motd</span>
          </p>
          <p className="text-lg">
            Welcome to{" "}
            <span className="gradient-text font-semibold">dylan.dev</span>
            {" "}&mdash; Developer Portfolio v1.0.0
          </p>
          <p className="text-text-muted text-xs">
            Last login:{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* About */}
      <section>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-text-muted">$</span>{" "}
            <span className="text-text-secondary">whoami</span>
          </p>
          <p className="text-text-primary leading-relaxed">
            Professional Debugger
          </p>
        </div>
      </section>

      {/* Navigation links */}
      <section>
        <div className="space-y-3 text-sm">
          <p>
            <span className="text-text-muted">$</span>{" "}
            <span className="text-text-secondary">ls ./</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300 card-glow"
            >
              <span className="text-terminal-green group-hover:text-accent-cyan transition-colors">about/</span>
            </Link>
            <Link
              href="/experience"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300 card-glow"
            >
              <span className="text-accent-amber group-hover:text-accent-pink transition-colors">experience/</span>
            </Link>
            <Link
              href="/blog"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300 card-glow"
            >
              <span className="text-accent-cyan group-hover:text-accent-blue transition-colors">blog/</span>
            </Link>
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card hover:bg-bg-card-hover hover:border-border-hover transition-all duration-300 card-glow"
            >
              <span className="text-accent-purple group-hover:text-accent-pink transition-colors">projects/</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Status */}
      <section>
        <div className="text-sm">
          <p>
            <span className="text-text-muted">$</span>{" "}
            <span className="text-text-secondary">echo $STATUS</span>
          </p>
          <p className="mt-2 text-terminal-green">
            System Ready...<span className="animate-blink">█</span>
          </p>
        </div>
      </section>
    </CLITypewriter>
  );
}
