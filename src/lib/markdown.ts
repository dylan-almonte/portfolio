import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostFrontmatter, Project, ProjectFrontmatter, Experience, ExperienceFrontmatter } from "./types";

const contentDir = path.join(process.cwd(), "content");

function getFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

function parseFile<T>(dir: string, filename: string): { frontmatter: T; slug: string; content: string } {
  const filePath = path.join(dir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.md$/, "");
  return { frontmatter: data as T, slug, content };
}

// Blog posts
export function getAllPosts(): Post[] {
  const dir = path.join(contentDir, "blog");
  const files = getFiles(dir);

  return files
    .map((file) => {
      const { frontmatter, slug, content } = parseFile<PostFrontmatter>(dir, file);
      return { ...frontmatter, slug, content };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const dir = path.join(contentDir, "blog");
  const filename = `${slug}.md`;
  const filePath = path.join(dir, filename);

  if (!fs.existsSync(filePath)) return undefined;

  const { frontmatter, content } = parseFile<PostFrontmatter>(dir, filename);
  return { ...frontmatter, slug, content };
}

// Projects
export function getAllProjects(): Project[] {
  const dir = path.join(contentDir, "projects");
  const files = getFiles(dir);

  return files
    .map((file) => {
      const { frontmatter, slug, content } = parseFile<ProjectFrontmatter>(dir, file);
      return { ...frontmatter, slug, content };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  const dir = path.join(contentDir, "projects");
  const filename = `${slug}.md`;
  const filePath = path.join(dir, filename);

  if (!fs.existsSync(filePath)) return undefined;

  const { frontmatter, content } = parseFile<ProjectFrontmatter>(dir, filename);
  return { ...frontmatter, slug, content };
}

// Experience
export function getAllExperiences(): Experience[] {
  const dir = path.join(contentDir, "experience");
  const files = getFiles(dir);

  return files
    .map((file) => {
      const { frontmatter, slug, content } = parseFile<ExperienceFrontmatter>(dir, file);
      return { ...frontmatter, slug, content };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  const dir = path.join(contentDir, "experience");
  const filename = `${slug}.md`;
  const filePath = path.join(dir, filename);

  if (!fs.existsSync(filePath)) return undefined;

  const { frontmatter, content } = parseFile<ExperienceFrontmatter>(dir, filename);
  return { ...frontmatter, slug, content };
}
