# Selected Work — Automation Engineering

An editorial-style work tracker and developer profile documenting an automation
engineering internship at Riya Travel: the workflows built, the pipelines
shipped, and the hours they gave back.

**Live:** [myworkflo.netlify.app](https://myworkflo.netlify.app/)

## Delivered Impact

| Metric | Figure |
|---|---|
| Hours saved | 183 |
| Projects delivered | 5 |
| Lines of code | 2,950+ |
| Rows transformed in one run | 10,000+ |

### Latest — Customer Statement Transformer

Dozens of customer statement workbooks, each with its own irregular header
block, consolidated into a single clean master table.

- **A full day of manual work reduced to 30 seconds**
- **10,000+ rows transformed in a single run**
- **40+ sheets consolidated** into one output file
- Shipped as a double-clickable `.bat` — no terminal, no Python setup

Repository: [excel-statement-combiner](https://github.com/bhargavi030702/excel-statement-combiner)

## Design

A warm editorial system rather than a dashboard:

- **Palette** — sage green ground, brick red display type, cream and stone for
  the light sections
- **Type** — Archivo grotesque, set tight and uppercase for display; Inter for
  body and meta labels
- **Motion** — slow fades and rises; nothing bounces
- **Structure** — rule-separated rows in place of cards, so the work reads as a
  list rather than a grid

## Content Engine

Each week is a Markdown file in `src/content/logs/`. Frontmatter drives the
listing:

```yaml
---
title: "Customer Statement Transformer"
date: "2026-09-11"
week: "Week 8"
tags: ["Python", "Pandas", "Excel Automation"]
github: "https://github.com/bhargavi030702/excel-statement-combiner"
---
```

`gray-matter` parses the frontmatter, `remark` renders the body to HTML, and the
Select Works list sorts chronologically. Adding a week means adding a file —
no component changes. Supplying `github` renders a "View repository" link on
that entry.

## Stack

React 19 · Next.js 16 · Tailwind CSS 4 · Framer Motion · TypeScript

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Deployment is continuous — every push to `main` triggers a Netlify rebuild.

---
*Bhargavi — BBA in Business Analytics, Automation Engineer Intern*
