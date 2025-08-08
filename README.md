# Jekyll site (Minimal Mistakes) — ready for GitHub Pages

This scaffold uses the Minimal Mistakes theme via `remote_theme`. It is GitHub Pages friendly.

## Quick start (publish on GitHub Pages)

1. Rename the folder to the repository name you want (for a user page it should be `yourusername.github.io`).
2. Replace `url` in `_config.yml` with `https://yourusername.github.io`.
3. Commit all files and push to a new GitHub repository.
4. In GitHub repo settings -> Pages, ensure the source is the `main` branch (or `gh-pages`) and root folder.
5. Wait a minute — your site should be live at `https://yourusername.github.io`.

## How to add a new post

Create a Markdown file in `_posts/` with a filename like:

```
2025-08-08-learning-spanish-day-1.md
```

Example front matter:

```markdown
---
title: "Learning Spanish — Day 1"
date: 2025-08-08
categories: languages
tags: [spanish, learning]
---
Content goes here.
```

## Creating categories

Simply add `categories: <category-name>` in the front matter of a post. The Categories index page will list it automatically.

## Editing About & Contact

- Edit `about.md` for your bio.
- Edit `_config.yml` to change site title, email, and navigation.

