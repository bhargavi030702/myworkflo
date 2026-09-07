---
title: "Backend Engine & Data Aggregation"
date: "2026-06-29"
week: "Week 2"
tags: ["Google Apps Script", "JavaScript", "Backend"]
github: "https://github.com/bhargavi030702/myworkflo"
---
**What I Built**
To power the beautiful dashboard I designed in Week 1, I wrote a massive 800+ line Google Apps Script (`updateDirectSummary`) to act as the backend data processing engine.

**Key Accomplishments**
- **Complex Data Aggregation & Two-Way Sync:** Wrote custom logic to aggregate and filter a staggering 9,090 rows of raw data from the live Outstanding Report and collections sheets. Engineered a two-way sync mechanism to process this massive dataset and map financial metrics accurately across 14 specific regions and 4 zones without timing out.
- **Aggressive Date Parsing:** Built a robust `parseDateAggressive()` function to normalize messy date formats (Excel serial numbers, Google Sheets date objects, DD/MM/YYYY, YYYY-MM-DD) into standard JavaScript Date objects.
- **Rolling 5-Day Window:** Implemented logic to automatically calculate and bucket dues and collections into a rolling 5-day window relative to the current date.
- **Automated Formatting Engine:** Instead of relying on manual spreadsheet formatting, the script dynamically calculates background colors, font weights, and conditional formatting rules for every cell in the summary matrix using a predefined JSON palette.
- **Safe State Reset:** Handled the complexities of merged cells and column groupings by building a safe teardown and rebuild process that doesn't break the sheet structure.
