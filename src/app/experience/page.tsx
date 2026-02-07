"use client";

import { TerminalWindow } from "@/components/TerminalWindow";
import { BlinkingCursor } from "@/components/BlinkingCursor";
import { CLITypewriter } from "@/components/CLITypewriter";

const experiences = [
  {
    company: "Capital One",
    role: "Software Engineer Intern, EPTech",
    location: "McLean, VA",
    date: "June 2025 — August 2025",
    bullets: [
      "Developed internal tooling and platform features for enterprise productivity engineering",
      "Built full-stack applications using modern web technologies and cloud services",
      "Collaborated with cross-functional teams to deliver high-impact features on tight timelines",
    ],
  },
  {
    company: "Ansys Inc.",
    role: "Software Development Engineer Intern, Mechanical Team",
    location: "Canonsburg, PA",
    date: "January 2025 — April 2025",
    bullets: [
      "Contributed to the development of simulation software on the Mechanical team",
      "Implemented features and bug fixes in a large-scale C++ and Python codebase",
      "Worked within Agile sprints to ship production-quality code for engineering simulation tools",
    ],
  },
];

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL", "HTML/CSS"],
  Frameworks: ["React", "Next.js", "Node.js", "Flask", "Express"],
  Tools: ["Git", "Docker", "AWS", "Linux", "PostgreSQL", "MongoDB"],
};

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <CLITypewriter>
        <h1 className="text-xl">
          <span className="text-text-muted">$</span>{" "}
          <span className="text-text-secondary">cat ./experience</span>
          <BlinkingCursor />
        </h1>

        {/* Work Experience */}
        <section className="space-y-4">
          <h2 className="text-sm text-accent-purple">
            <span className="text-text-muted"># </span>Work Experience
          </h2>
          {experiences.map((exp) => (
            <TerminalWindow key={exp.company} title={`${exp.company.toLowerCase().replace(/\s+/g, "-")}.log`}>
              <div className="space-y-2 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-accent-cyan font-semibold">{exp.company}</h3>
                  <span className="text-text-muted text-xs whitespace-nowrap">{exp.date}</span>
                </div>
                <p className="text-text-secondary">{exp.role}</p>
                <p className="text-text-muted text-xs">{exp.location}</p>
                <ul className="space-y-1 mt-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-text-primary flex gap-2">
                      <span className="text-terminal-green shrink-0">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TerminalWindow>
          ))}
        </section>

        {/* Skills */}
        <section className="space-y-3">
          <div className="text-sm">
            <p>
              <span className="text-text-muted">$</span>{" "}
              <span className="text-text-secondary">env | grep SKILLS</span>
            </p>
          </div>
          <TerminalWindow title="env">
            <div className="space-y-2 text-sm font-mono">
              {Object.entries(skills).map(([category, items]) => (
                <p key={category}>
                  <span className="text-accent-amber">{category.toUpperCase()}</span>
                  <span className="text-text-muted">=</span>
                  <span className="text-text-primary">{items.join(", ")}</span>
                </p>
              ))}
            </div>
          </TerminalWindow>
        </section>
      </CLITypewriter>
    </div>
  );
}
