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
      <h1 className="text-xl">
        <span className="text-terminal-green-dim">$</span> ls ./projects/
        <BlinkingCursor />
      </h1>

      {projects.length === 0 ? (
        <p className="text-terminal-green-dim text-sm">
          No projects found. Check back later.
        </p>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <TerminalWindow key={project.slug} title={`${project.slug}.md`}>
              <Link href={`/projects/${project.slug}`} className="block group">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h2 className="text-terminal-green-bright group-hover:text-terminal-amber transition-colors">
                    {project.title}
                  </h2>
                  <time className="text-xs text-terminal-green-dim whitespace-nowrap">
                    {project.date}
                  </time>
                </div>
                <p className="text-sm text-terminal-green-dim">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  {project.tags && (
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-terminal-gray px-2 py-0.5 text-terminal-amber"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.repo && (
                    <span className="text-xs text-terminal-green-dim">[repo]</span>
                  )}
                  {project.live && (
                    <span className="text-xs text-terminal-green-dim">[live]</span>
                  )}
                </div>
              </Link>
            </TerminalWindow>
          ))}
        </div>
      )}
    </div>
  );
}
