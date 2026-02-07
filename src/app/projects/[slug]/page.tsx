import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/markdown";
import { renderMarkdown } from "@/lib/renderMarkdown";
import { TerminalWindow } from "@/components/TerminalWindow";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} // dylan.dev`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const htmlContent = await renderMarkdown(project.content);

  return (
    <div className="space-y-6 animate-fade-in-up">
      <Link
        href="/projects"
        className="text-sm text-text-muted hover:text-accent-cyan transition-colors"
      >
        <span className="text-text-muted">$</span> cd ../projects/{slug}
      </Link>

      <TerminalWindow title={`${slug}.md`}>
        <header className="mb-6 pb-4 border-b border-border">
          <h1 className="text-2xl text-accent-cyan mb-2">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <time>{project.date}</time>
            {project.tags && (
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2 py-0.5 text-accent-purple rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-3 text-xs">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-accent-cyan transition-colors"
              >
                [source code]
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-green hover:text-accent-cyan transition-colors"
              >
                [live demo]
              </a>
            )}
          </div>
        </header>
        <article
          className="prose prose-invert max-w-none text-sm"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </TerminalWindow>
    </div>
  );
}
