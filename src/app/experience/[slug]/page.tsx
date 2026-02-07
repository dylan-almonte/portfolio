import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllExperiences, getExperienceBySlug } from "@/lib/markdown";
import { renderMarkdown } from "@/lib/renderMarkdown";
import { TerminalWindow } from "@/components/TerminalWindow";

export async function generateStaticParams() {
  const experiences = getAllExperiences();
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) return { title: "Not Found" };
  return {
    title: `${exp.title} // dylan.dev`,
    description: exp.description,
  };
}

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);

  if (!exp) notFound();

  const htmlContent = await renderMarkdown(exp.content);

  return (
    <div className="space-y-6 animate-fade-in-up">
      <Link
        href="/experience"
        className="text-sm text-text-muted hover:text-accent-cyan transition-colors"
      >
        <span className="text-text-muted">$</span> cd ../experience/{slug}
      </Link>

      <TerminalWindow title={`${slug}.md`}>
        <header className="mb-6 pb-4 border-b border-border">
          <h1 className="text-2xl text-accent-cyan mb-2">
            {exp.company}
          </h1>
          <p className="text-sm text-text-secondary">{exp.role}</p>
          <div className="flex items-center gap-4 text-xs text-text-muted mt-2">
            <span>{exp.location}</span>
            <time>{exp.date}</time>
            {exp.tags && (
              <div className="flex gap-2">
                {exp.tags.map((tag) => (
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
        </header>
        <article
          className="prose prose-invert max-w-none text-sm"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </TerminalWindow>
    </div>
  );
}
