---
title: "Ticketing PDF Scraper & Excel Exporter"
date: "2026-08-15"
week: "Week 6"
tags: ["Node.js", "PDF Extraction", "Excel Data"]
github: "https://github.com/bhargavi030702/pdf-scraper-tool"
---

### Project Scope
Processing travel agency PDF tickets manually is incredibly time-consuming. I built an automated Node.js tool that recursively scans directories of PDF tickets, extracts the crucial client information, and outputs a nicely formatted `.xlsx` Excel sheet.

### Implementation Details
The script automatically monitors a local `pdfs/` directory. By running a simple `npm start` command, it parses every file and looks for specific patterns. 

Currently, the tool accurately extracts:
- **Passenger Name**
- **Basic Fare**
- **Ticket Number**
- **Baggage Allowance**

All extracted data is instantly aggregated and saved into an `output/clients.xlsx` master sheet. This eliminates the need for manual data entry and drastically reduces human error when compiling daily ticketing reports.
