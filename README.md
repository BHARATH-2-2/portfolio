# Bharath N — Portfolio & Blog

A modern, ultra-fast portfolio and blog website built with **Astro v4**, **Tailwind CSS**, **MDX**, and **Framer Motion**.

## ✨ Features

- ⚡ **Ultra-fast performance** — Built with Astro for optimal Lighthouse scores
- 🎨 **Modern UI** — Elegant design with Tailwind CSS v4
- 🌙 **Dark mode** — System preference detection with manual toggle
- ✍️ **MDX blog** — Write posts in Markdown with React components
- 🎭 **Smooth animations** — Framer Motion powered entrance animations
- 📱 **Fully responsive** — Mobile-first design
- 🔍 **SEO optimized** — Open Graph, Twitter Cards, sitemap, and RSS feed
- ♿ **Accessible** — Respects `prefers-reduced-motion`

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`.

## 📁 Project Structure

```
/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/     # Reusable components
│   │   ├── motion/     # Animation components (FadeIn, Stagger)
│   │   ├── Nav.astro   # Navigation header
│   │   ├── Footer.astro
│   │   └── DarkToggle.tsx
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts (MDX)
│   │   ├── projects/   # Project entries (MDX)
│   │   └── config.ts   # Collection schemas
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # Routes
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── projects/
│   │   └── rss.xml.ts  # RSS feed
│   └── styles/
│       └── global.css  # Tailwind imports
└── astro.config.mjs    # Astro configuration
```

## 📝 Adding Content

### Blog Posts

Create a new MDX file in `src/content/blog/`:

```mdx
---
title: My First Post
description: A brief description for SEO and previews
pubDate: 2025-11-05
tags: [astro, web-dev]
heroImage: /images/post-hero.jpg (optional)
---

# Welcome

Write your content in Markdown or use React components.
```

### Projects

Create a new MDX file in `src/content/projects/`:

```mdx
---
title: Amazing Project
description: What this project does
year: 2025
tech: [Astro, React, TypeScript]
link: https://example.com (optional)
repo: https://github.com/user/repo (optional)
cover: /images/project-cover.jpg (optional)
---

## Overview

Detailed project description...
```

## 🎨 Customization

### Updating Site Information

1. **Site URL**: Update `site` in `astro.config.mjs`
2. **Personal Info**: Edit `src/pages/index.astro` hero section
3. **Social Links**: Update `src/components/Footer.astro`
4. **Navigation**: Modify `src/components/Nav.astro`

### Styling

- Tailwind CSS v4 is configured via `@tailwindcss/vite`
- Global styles are in `src/styles/global.css`
- Theme colors can be customized in Tailwind classes

### Animations

Animation components are in `src/components/motion/`:
- `FadeIn.tsx` — Fade-in with optional slide
- `Stagger.tsx` — Staggered children animation

Both respect `prefers-reduced-motion`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Push to GitHub
2. Add new site in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

Any static hosting service that supports Node.js build environments will work. The site builds to static HTML/CSS/JS in the `dist` folder.

## 📊 Performance

This site is optimized for:
- ⚡ Fast initial load (Astro's zero JS by default)
- 🎯 High Lighthouse scores (100/100 achievable)
- 📦 Minimal bundle size (partial hydration)
- 🔄 Smooth animations (Framer Motion)

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

MIT — feel free to use this for your own portfolio.

## 🙏 Credits

Built with:
- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [MDX](https://mdxjs.com)