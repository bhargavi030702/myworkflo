---
title: "Customer Statement Transformer"
date: "2026-09-11"
week: "Week 8"
tags: ["Python", "Pandas", "Excel Automation", "Data Pipelines"]
github: "https://github.com/bhargavi030702/excel-statement-combiner"
---

### The Problem
Customer statements arrived as dozens of separate `.xlsx` workbooks, each holding
multiple sheets. Every file placed its customer name, GST registration number and
statement period in a **different row**, with the real transaction table starting
somewhere below the junk. Consolidating them was a full day of manual copy-paste
— and a full day of transcription risk on live financial data.

### Delivered Impact
- **A full day of manual work reduced to 30 seconds.**
- **10,000+ rows transformed in a single run.**
- **40+ sheets consolidated** into one clean master table.
- **Zero transcription errors** — the header block is parsed, never retyped.

### How It Works
Rather than hard-coding row indexes that break on the next file, the parser
**searches by position**. Each sheet is read raw with `header=None`, then scanned:
the customer name is the first non-empty text cell in column A, the GST number is
the first column-A cell containing `GST`, and the table begins at the first row
carrying `Riya Booking No.` or `Posting Date`.

```python
# Locate the real header row instead of assuming one
for idx, row in df.iterrows():
    joined = " ".join(str(v) for v in row.values)
    if "Riya Booking No." in joined or "Posting Date" in joined:
        header_row = idx
        break
```

Every extracted row is then tagged with its source Customer Name, GST Reg. No. and
Statement Period, so the consolidated table stays fully traceable back to its
origin workbook.

### Engineering Decisions
A sheet with no recognisable header row is **skipped with a message, not an
exception** — one malformed sheet must never abort a 40-sheet run. Dates are
written as `dd-mmm-yy` so Excel cannot silently re-interpret them, column widths
are auto-sized via `len(str(x))` to survive `NaN` values, and Excel lock files
(`~$...`) are filtered out of the input glob.

### Deployment
Shipped as a **double-clickable `Run_Combiner.bat`** — drop files into
`Input_Excel_Files/`, double-click, open the result. No terminal, no Python
knowledge, no setup. The team uses it without ever seeing a line of code.
