---
title: "Airline GST Invoice Extractor"
date: "2026-09-16"
week: "Week 9"
tags: ["Node.js", "pdf.js", "ExcelJS", "PDF Parsing", "GST Reconciliation"]
github: "https://github.com/bhargavi030702/gst-invoice-to-excel"
---

### The Problem
1,255 airline tax invoices arrived as PDFs, and every figure on the
reconciliation sheet — taxable value, non-taxable value, IGST, CGST, SGST and
the invoice total — was being **keyed in by hand, one invoice at a time**. Four
airlines, each with its own layout, and three document types among them: tax
invoices, credit notes and debit notes. At roughly two minutes an invoice, a
single batch was over a week of somebody's attention, on live GST data where a
mistyped digit becomes a filing error.

### Delivered Impact
- **~42 hours of manual keying reduced to 16 seconds.**
- **1,185 invoices read and verified**, every one balancing exactly.
- **Four airline layouts** parsed: Air India, Air India Express, IndiGo, Emirates.
- **Zero silent errors** — every row is checked, and anything that fails is
  reported rather than written out as though it were correct.

### How It Works
The trick was not to trust the order text is stored in inside a PDF. It bears no
relation to what a human sees, so a table row arrives scrambled. Instead the
glyphs are regrouped by their **position on the page** — grouped by baseline,
sorted left to right — which turns a table row back into a single line in
reading order.

```js
// Group glyphs by baseline, then sort each row left to right
let row = rows.find((r) => Math.abs(r.y - y) <= LINE_TOLERANCE);
if (!row) rows.push((row = { y, parts: [] }));
row.parts.push({ x, end: x + width, str: item.str });
```

That one decision is why each airline's parser stays a handful of lines. Air
India's amounts row, for instance, is located by anchoring on the "GST %" cell:
five figures belong to its left and four to its right, so the columns identify
themselves no matter how the description text wraps.

### Engineering Decisions
Every invoice satisfies `Taxable + Non Taxable + IGST + CGST + SGST = Total`, so
the tool checks each row against the total **printed on the invoice itself**.
That check is the proof the figures were read correctly, and it is what caught a
debit note whose discount column reduced the non-taxable side rather than the
taxable one.

Roughly a fifth of the PDFs turned out to be **scans — pictures of a page with
no text inside**. Their figures cannot be read by any parser, so they are set
aside on their own sheet with the amounts blank and the file one click away,
rather than guessed at. Being honest about the 70 was worth more than being
approximately right about them.

Every failure carries a stable code, and an unexpected fault writes a crash
report naming the **real source file and line** — the bundle carries an inline
source map, so a stack trace points at `src/parsers/airIndia.js:57` instead of an
offset into a 10 MB build.

### Deployment
Shipped as **one bundled file and a `run.bat`**. Node.js is the only
requirement: no `npm install`, no `node_modules`, no internet. Drop the PDFs in,
double-click, and the output folder opens by itself — carrying the workbook, a
plain-English guide to what is in it, and copies of every scan still needing a
pair of eyes.

### Since Then
The extractor has grown from four airlines to **thirteen** — Akasa, Alliance Air,
British Airways, Malaysia Airlines, Singapore Airlines, SriLankan, and the Air
France, KLM and Lufthansa passage invoices joined the original four. It now reads
**HTML invoices saved from e-mail** as well as PDFs. On the latest run, 158 of 160
documents balanced exactly; the other two were flagged for a person to check
rather than written out as though they were right.
