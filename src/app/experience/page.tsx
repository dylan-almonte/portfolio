import Link from "next/link";
import { getAllExperiences } from "@/lib/markdown";
import { TerminalWindow } from "@/components/TerminalWindow";
import { BlinkingCursor } from "@/components/BlinkingCursor";

export const metadata = {
  title: "experience // dylan.dev",
  description: "Work experience and internships",
};

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <div className="space-y-6">
      <h1 className="text-xl animate-fade-in-up">
        <span className="text-text-muted">$</span>{" "}
        <span className="text-text-secondary">ls ./experience/</span>
        <BlinkingCursor />
      </h1>

      {experiences.length === 0 ? (
        <p className="text-text-muted text-sm animate-fade-in-up delay-2">
          No experience entries found. Check back later.
        </p>
      ) : (
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={exp.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <TerminalWindow title={`${exp.slug}.md`}>
                <Link href={`/experience/${exp.slug}`} className="block group">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h2 className="text-accent-cyan group-hover:text-accent-blue transition-colors">
                      {exp.company}
                    </h2>
                    <span className="text-xs text-text-muted whitespace-nowrap">
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{exp.role}</p>
                  <p className="text-xs text-text-muted mt-1">{exp.description}</p>
                  {exp.tags && (
                    <div className="flex gap-2 mt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-border px-2 py-0.5 text-accent-purple rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </TerminalWindow>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
