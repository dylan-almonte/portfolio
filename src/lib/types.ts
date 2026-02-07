export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

export interface ProjectFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  repo?: string;
  live?: string;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export interface ExperienceFrontmatter {
  title: string;
  company: string;
  role: string;
  location: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface Experience extends ExperienceFrontmatter {
  slug: string;
  content: string;
}
