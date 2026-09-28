---
title: "PDF Invoice Renamer"
date: "2026-09-21"
week: "Week 10"
tags: ["Node.js", "pdf.js", "Browser-Only Processing", "Vercel", "Document Automation"]
github: "https://github.com/bhargavi030702/pdf-invoice-renamer"
---

### The Problem
Invoices arrive under names that say nothing about them — `TAX INVOICE__2.pdf`,
a booking reference, a mail client's hash. Accounts files and matches invoices
**by the number printed inside them**, so every file had to be opened, read and
renamed by hand before any real work could start. On a folder of hundreds that
is an afternoon of opening PDFs, and a mistyped name is a lost invoice.

### Delivered Impact
- **~10 hours of manual renaming saved every week.**
- **316 of 330 ERP invoices renamed, zero wrong.** The 14 it left alone are blank
  templates with no number printed on them at all.
- **136 of 141 airline documents read.** The 5 misses are covering e-mails and an
  e-ticket — none of them an invoice.
- **Originals never touched** — every run only ever makes copies.

### How It Works
Two readers, tried in order. First, the **thirteen airline parsers** from the
GST Invoice Extractor, carried over unchanged: for those layouts they know
exactly where the number sits, even when flattening the page has split its
heading across three lines. Everything else goes to a **general reader** that
works down a list of headings — "Invoice No", "Bill No", "Credit Note No" and
the rest — and looks beside each one and on the line below it.

The hard part was not finding a value under a heading, it was knowing when the
value found is **not** an invoice number. Every rule below is a case that turned
up in a real file:

```js
// A GST number. Fifteen characters in a fixed shape, and every
// Indian invoice prints at least two of them.
if (/^\d{2}[A-Z]{5}\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]$/i.test(value)) return true;

// A PAN. Ten characters, under a heading of its own.
if (/^[A-Z]{5}\d{4}[A-Z]$/i.test(value)) return true;
```

Dates, amounts and the first word of the next field are thrown out the same way.

### Engineering Decisions
**The tool never guesses.** A file it cannot read keeps its name and is listed in
the report with the reason — a wrongly named invoice is worse than one left
alone, because nobody notices it.

Invoice numbers are not always legal file names. `GST/2026/0041` holds slashes
that Windows would read as folders, and Windows silently drops a trailing dot —
quietly turning two different numbers into one file. Names are made safe, the
report always shows **both** the number as printed and the name used, and a
second file claiming the same name gets `(2)` rather than overwriting the first.
Files that carry several documents — an invoice with its credit note — are named
after the first, with the others listed beside it.

### Deployment
Two ways to run it, sharing **one set of readers**. A `run.bat` for whole
folders on the desktop, and a **browser version on Vercel**: drop files on the
page, get a zip back. There is no server behind it — the invoices are read by
JavaScript inside the tab, so live client data never leaves the machine, and a
strict Content-Security-Policy keeps the page from loading anything but its own
files.
