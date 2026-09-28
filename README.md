# Selected Work — Automation Engineering

An editorial-style work tracker and developer profile documenting an automation
engineering internship at Riya Travel: the workflows built, the pipelines
shipped, and the hours they gave back.

**Live:** [myworkflo.vercel.app](https://myworkflo.vercel.app/)

## Delivered Impact

| Metric | Figure |
|---|---|
| Hours saved | 255 |
| Projects completed | 8 |
| Lines of code | 9,750+ |
| Rows transformed in one run | 10,000+ |

### Latest — ERP Invoice PDF Downloader

Invoice PDFs pulled from the ERP's report server in bulk, instead of clicking
Print Invoice on each one by hand.

- **~20 hours of one-at-a-time downloading saved every week**
- **331 invoice PDFs downloaded**, each named by its invoice number
- **About 20–30 minutes for 500**, running unattended
- Every download checked to be a real PDF; failures listed with a reason
- Read-only, no new permissions, password never written to disk
- PowerShell only — nothing to install

Repository: [erp-retail](https://github.com/bhargavi030702/erp-retail)

### Week 10 — PDF Invoice Renamer

Reads the invoice number printed inside each file and names the file after it.

- **~10 hours of manual renaming saved every week**
- **316 of 330 ERP invoices renamed, zero wrong** — the 14 skipped have no
  number printed on them
- **Thirteen airline layouts** plus a general reader for any other invoice
- Never guesses: an unreadable file keeps its name and is reported
- Desktop `.bat` for whole folders, and a browser version on Vercel that
  uploads nothing

Repository: [pdf-invoice-renamer](https://github.com/bhargavi030702/pdf-invoice-renamer)

### Week 9 — Airline GST Invoice Extractor

1,255 airline tax invoices across four airlines, read and reconciled without
anyone keying a figure by hand.

- **~42 hours of manual keying reduced to 16 seconds**
- **1,185 invoices read and verified**, every one balancing exactly
- **Thirteen airline layouts** now parsed, from the original four — Air India,
  Air India Express, IndiGo, Emirates
- Reads HTML invoices saved from e-mail as well as PDFs
- Scans with no text are set aside for manual entry, never guessed at
- Shipped as one bundled file and a `.bat` — Node.js only, no install, no network

Repository: [gst-invoice-to-excel](https://github.com/bhargavi030702/gst-invoice-to-excel)

### Week 8 — Customer Statement Transformer

Dozens of customer statement workbooks, each with its own irregular header
block, consolidated into a single clean master table.

- **A full day of manual work reduced to 30 seconds**
- **10,000+ rows transformed in a single run**
- **40+ sheets consolidated** into one output file
- Shipped as a double-clickable `.bat` — no terminal, no Python setup

Repository: [excel-statement-combiner](https://github.com/bhargavi030702/excel-statement-combiner)

## Design

A warm editorial system rather than a dashboard:

- **Palette** — monochrome: near-black ground with light grey display type,
  paper and stone for the light sections
- **Type** — Archivo grotesque, set tight and uppercase for display; Inter for
  body and meta labels
- **Robot** — an inline-SVG companion in Systems Running whose pupils track
  the cursor, which blinks on a randomised timer and waves when clicked,
  beside a terminal typing out the real delivered numbers
- **Motion** — a load curtain, letter-by-letter masked reveals, scroll-linked
  parallax, an infinite ticker band and an ink-wipe row hover. Everything
  honours `prefers-reduced-motion`: the curtain and parallax are skipped
  entirely and content renders statically
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

Deployment is continuous — every push to `main` triggers a Vercel rebuild.

---
*Bhargavi — BBA in Business Analytics, Automation Engineer Intern*
