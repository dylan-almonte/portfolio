# Project: Retro Terminal Portfolio
**Goal:** Create a personal developer portfolio with a retro IDE/Terminal aesthetic using Next.js, Bun, and TypeScript.
**Current Phase:** Phase 4 - Deployment

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Runtime:** Bun
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content Source:** Local Markdown files (Obsidian vault export)

## Architecture Notes
- Using `src/` directory structure.
- Blog posts live in `content/blog/`.
- Project case studies live in `content/projects/`.
- `gray-matter` is used for frontmatter parsing.
- Tailwind Typography (`prose`) will handle markdown styling.

## Roadmap & Status

### Phase 1: Setup & Structure [DONE]
- [x] Initialize Next.js with Bun & TypeScript
- [x] Install dependencies (gray-matter, tailwind-typography, remark, remark-html)
- [x] Create folder structure (src/lib, src/components, content/blog, content/projects)
- [x] Clean up default Next.js boilerplate (globals.css, page.tsx)
- [x] Create a basic "Layout" wrapper (Green text on black bg)

### Phase 2: Core Functionality (The "Engine") [DONE]
- [x] Write `src/lib/markdown.ts` to read files from `content/`
- [x] Create TypeScript interfaces for Post and Project data
- [x] Build the Blog Index page (list all posts)
- [x] Build the Single Post page (dynamic routing `[slug]`)
- [x] Build the Projects Index page (list all projects)
- [x] Build the Single Project page (dynamic routing `[slug]`)

### Phase 3: Visuals (The "Vibe") [DONE]
- [x] Install retro font (Fira Code and VT323)
- [x] Create `TerminalWindow` component (top bar with close/minimize buttons)
- [x] Add "Blinking Cursor" animation to headings
- [x] Style the Navbar to look like command prompts
- [x] Add CRT scanline overlay effect

### Phase 4: Deployment
- [ ] Push to GitHub
- [ ] Connect to Vercel

## Current Session Goal
Phases 1-3 complete. Ready for deployment.