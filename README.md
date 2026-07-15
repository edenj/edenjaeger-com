# edenjaeger.com

Personal site built with [Astro](https://astro.build). Static output, hosted
on Render.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Structure

```
src/pages/index.astro        Home — intro + 5 most recent posts
src/pages/about.astro        About / resume (fill in the TODO)
src/pages/blog/              Blog list + post pages
src/pages/ff/index.astro     Fantasy football landing page (unlinked, noindex)
src/content/blog/*.md        Blog posts — one markdown file per post
src/layouts/Base.astro       Shared layout (header, nav, footer)
src/styles/global.css        All styling
```

## Writing a post

Add a markdown file to `src/content/blog/`:

```markdown
---
title: My post title
description: Optional one-line summary (used in RSS + meta tags)
pubDate: 2026-07-20
---

Post body in markdown.
```

`draft: true` hides a post. The filename becomes the URL slug
(`my-post.md` → `/blog/my-post/`).

## Deploying to Render

1. Push this repo to GitHub.
2. Render Dashboard → **New → Static Site** → connect the repo.
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Once live at `*.onrender.com`, go to Settings → Custom Domains and add
   `edenjaeger.com` and `www.edenjaeger.com`, then add the DNS records Render
   shows you at your domain registrar. TLS is automatic.

Every push to the default branch triggers a deploy.

## Later

- Point the Dynasty Score link in `src/pages/ff/index.astro` at the live app
  (e.g. `dynasty.edenjaeger.com`, added as a custom domain on that service).
- Obsidian notes: add a second content collection (e.g. `src/content/notes/`)
  and copy/sync selected vault files into it.
