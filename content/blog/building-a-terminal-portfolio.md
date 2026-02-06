---
title: "Building a Terminal Portfolio"
date: "2025-01-20"
description: "Why I built my portfolio to look like a terminal, and the tech behind it."
tags: ["nextjs", "design", "typescript"]
---

## The Idea

I wanted my portfolio to feel like **home** — and for me, home is a terminal window with green text on a black background.

## The Stack

- **Next.js** with the App Router for file-based routing and static generation
- **Bun** as the runtime and package manager
- **Tailwind CSS** for rapid, utility-first styling
- **gray-matter** + **remark** for parsing Markdown content

## Design Decisions

The retro aesthetic isn't just for looks. It signals to visitors that this is a developer's space. Every design choice reinforces that:

1. **Monospace font** — Fira Code everywhere
2. **Command prompt navigation** — the navbar looks like a shell
3. **Terminal windows** — content is wrapped in window-like containers with traffic light buttons
4. **Scanline overlay** — a subtle CRT effect layered over the whole page

## Takeaway

Sometimes the best portfolio is the one that shows who you are before anyone reads a word.
