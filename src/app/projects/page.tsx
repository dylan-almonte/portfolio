import Link from "next/link";
import { getAllProjects } from "@/lib/markdown";
import { TerminalWindow } from "@/components/TerminalWindow";
import { BlinkingCursor } from "@/components/BlinkingCursor";

export const metadata = {
  title: "projects // dylan.dev",
  description: "Project case studies and showcase",
};

export default function ProjectsIndex() {
  const projects = getAllProjects();

  return (
    <div className="space-y-6">
      <h1 className="text-xl animate-fade-in-up">
        <span className="text-text-muted">$</span>{" "}
        <span className="text-text-secondary">ls ./projects/</span>
        <BlinkingCursor />
      </h1>

      {projects.length === 0 ? (
        <p className="text-text-muted text-sm animate-fade-in-up delay-2">
          No projects found. Check back later.
        </p>
      ) : (
        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <TerminalWindow title={`${project.slug}.md`}>
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h2 className="text-accent-cyan group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h2>
                    <time className="text-xs text-text-muted whitespace-nowrap">
                      {project.date}
                    </time>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    {project.tags && (
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs border border-border px-2 py-0.5 text-accent-purple rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.repo && (
                      <span className="text-xs text-accent-blue">[repo]</span>
                    )}
                    {project.live && (
                      <span className="text-xs text-terminal-green">[live]</span>
                    )}
                  </div>
                </Link>
              </TerminalWindow>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
