---
title: "Terminal Portfolio"
date: "2025-01-20"
description: "A retro terminal-themed developer portfolio built with Next.js and Tailwind."
tags: ["nextjs", "tailwind", "typescript"]
repo: "https://github.com/dylan-almonte/portfolio"
live: "https://dylan.dev"
---

## Overview

A personal developer portfolio with a retro IDE/terminal aesthetic. Built with Next.js 14+, Bun, TypeScript, and Tailwind CSS.

## Features

- **Retro terminal UI** with scanline effects, blinking cursors, and monospace fonts
- **Markdown-powered content** — blog posts and project case studies authored as `.md` files
- **Static generation** for fast page loads
- **Responsive design** that maintains the terminal vibe on mobile

## Technical Details

Content is sourced from local Markdown files using `gray-matter` for frontmatter parsing and `remark` for HTML rendering. The Tailwind Typography plugin handles prose styling with custom terminal-green color overrides.

The terminal window component wraps content in a macOS-style window frame with traffic light buttons, adding to the retro aesthetic.

## Lessons Learned

- Tailwind CSS v4's CSS-based configuration is a nice improvement
- Next.js App Router + static generation makes content sites trivial
- Sometimes the simplest tech stack is the best one
