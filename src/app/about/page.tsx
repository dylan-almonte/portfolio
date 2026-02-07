"use client";

import { TerminalWindow } from "@/components/TerminalWindow";
import { BlinkingCursor } from "@/components/BlinkingCursor";
import { CLITypewriter } from "@/components/CLITypewriter";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <CLITypewriter>
        <h1 className="text-xl">
          <span className="text-text-muted">$</span>{" "}
          <span className="text-text-secondary">cat ./about</span>
          <BlinkingCursor />
        </h1>

        {/* whoami */}
        <section className="space-y-3">
          <div className="text-sm">
            <p>
              <span className="text-text-muted">$</span>{" "}
              <span className="text-text-secondary">whoami --verbose</span>
            </p>
          </div>
          <TerminalWindow title="whoami">
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-accent-cyan font-semibold">Dylan Cabahug-Almonte</span>
              </p>
              <p className="text-text-secondary leading-relaxed">
                Software engineer and computer engineering student at Carnegie Mellon University.
                Passionate about building high-quality software, from full-stack web applications
                to systems-level tools. I enjoy working at the intersection of software and hardware,
                and I&apos;m always looking for new challenges to tackle.
              </p>
            </div>
          </TerminalWindow>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <div className="text-sm">
            <p>
              <span className="text-text-muted">$</span>{" "}
              <span className="text-text-secondary">cat /etc/education</span>
            </p>
          </div>
          <TerminalWindow title="education.conf">
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-accent-cyan font-semibold">Carnegie Mellon University</p>
                <p className="text-text-secondary">B.S. Electrical & Computer Engineering</p>
                <p className="text-text-secondary">Minor in Machine Learning</p>
                <p className="text-text-muted text-xs">Expected Graduation: May 2027</p>
              </div>
              <div>
                <p className="text-accent-purple text-xs mb-1">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Introduction to Computer Systems",
                    "Data Structures & Algorithms",
                    "Computer Architecture",
                    "Signal Processing",
                    "Machine Learning",
                    "Software Engineering",
                  ].map((course) => (
                    <span
                      key={course}
                      className="text-xs border border-border px-2 py-0.5 text-text-secondary rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* Contact */}
        <section className="space-y-3">
          <div className="text-sm">
            <p>
              <span className="text-text-muted">$</span>{" "}
              <span className="text-text-secondary">cat ~/.contact</span>
            </p>
          </div>
          <TerminalWindow title=".contact">
            <div className="space-y-2 text-sm font-mono">
              <p>
                <span className="text-accent-amber">EMAIL</span>
                <span className="text-text-muted">=</span>
                <a href="mailto:dylancan@andrew.cmu.edu" className="text-accent-blue hover:text-accent-cyan transition-colors">
                  dylancan@andrew.cmu.edu
                </a>
              </p>
              <p>
                <span className="text-accent-amber">LINKEDIN</span>
                <span className="text-text-muted">=</span>
                <a
                  href="https://linkedin.com/in/dylan-canfield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-cyan transition-colors"
                >
                  linkedin.com/in/dylan-canfield
                </a>
              </p>
              <p>
                <span className="text-accent-amber">GITHUB</span>
                <span className="text-text-muted">=</span>
                <a
                  href="https://github.com/dylancanfield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-cyan transition-colors"
                >
                  github.com/dylancanfield
                </a>
              </p>
            </div>
          </TerminalWindow>
        </section>
      </CLITypewriter>
    </div>
  );
}
