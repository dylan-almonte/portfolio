import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { renderMarkdown } from "@/lib/renderMarkdown";
import { TerminalWindow } from "@/components/TerminalWindow";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} // dylan.dev`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const htmlContent = await renderMarkdown(post.content);

  return (
    <div className="space-y-6">
      <Link
        href="/blog"
        className="text-sm text-terminal-green-dim hover:text-terminal-green transition-colors"
      >
        <span className="text-terminal-green-dim">$</span> cd ../blog/
      </Link>

      <TerminalWindow title={`${slug}.md`}>
        <header className="mb-6 pb-4 border-b border-terminal-gray">
          <h1 className="text-2xl text-terminal-green-bright mb-2">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-terminal-green-dim">
            <time>{post.date}</time>
            {post.tags && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-terminal-gray px-2 py-0.5 text-terminal-amber"
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
