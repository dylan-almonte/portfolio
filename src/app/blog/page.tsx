import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { TerminalWindow } from "@/components/TerminalWindow";
import { BlinkingCursor } from "@/components/BlinkingCursor";

export const metadata = {
  title: "blog // dylan.dev",
  description: "Blog posts and writings",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-xl animate-fade-in-up">
        <span className="text-text-muted">$</span>{" "}
        <span className="text-text-secondary">ls ./blog/</span>
        <BlinkingCursor />
      </h1>

      {posts.length === 0 ? (
        <p className="text-text-muted text-sm animate-fade-in-up delay-2">
          No posts found. Check back later.
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <TerminalWindow title={`${post.slug}.md`}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h2 className="text-accent-cyan group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h2>
                    <time className="text-xs text-text-muted whitespace-nowrap">
                      {post.date}
                    </time>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {post.description}
                  </p>
                  {post.tags && (
                    <div className="flex gap-2 mt-2">
                      {post.tags.map((tag) => (
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
