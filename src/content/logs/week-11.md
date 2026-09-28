---
title: "ERP Invoice PDF Downloader"
date: "2026-09-23"
week: "Week 11"
tags: ["PowerShell", "SSRS", "NTLM", "Bulk Download", "ERP Automation"]
github: "https://github.com/bhargavi030702/erp-retail"
---

### The Problem
Every invoice PDF in the ERP sat behind a **Print Invoice** button — one click,
one wait, one save dialog, one invoice. When a batch of several hundred was
needed, somebody clicked through them one at a time, typing each number and
naming each file by hand.

### Delivered Impact
- **~20 hours of one-at-a-time downloading saved every week.**
- **331 invoice PDFs downloaded** in bulk, each named by its invoice number.
- **About 20–30 minutes for 500**, running unattended.
- **Every download verified** as a real PDF before it is saved.

### How It Works
Print Invoice does not create the PDF itself. It opens a page on a separate
**SQL Server Reporting Services** report server, and the address of that page
carries the invoice number. The tool asks that same server for that same page,
once per number, **signed in as the same person** — the request the browser was
already making, typed directly instead of reached through menus.

A report server that cannot build an invoice still answers, just not with a PDF.
So nothing is trusted until its first four bytes say it is one:

```powershell
if (-not ($bytes[0] -eq 0x25 -and $bytes[1] -eq 0x50 -and
          $bytes[2] -eq 0x44 -and $bytes[3] -eq 0x46)) {
    throw 'the server sent back something that is not a PDF'
}
```

### Engineering Decisions
It **only reads** — it never contacts the ERP, changes nothing and needs no new
permissions. The password is typed each run, held in memory as a secure string
and never written to disk.

A rejected login **stops the run at once** instead of retrying hundreds of times,
so an account can never be locked out. Requests are paced so the report server
is never hammered, and a "fetch just the first one" test proves the login and
the output before a long run begins. Anything that fails lands in
`not-downloaded.csv` with a plain-English reason, and a stopped run **picks up
where it left off** — anything already downloaded is skipped, not fetched twice.

### Deployment
PowerShell only — already on every Windows PC, so **nothing to install**.
Double-click `run.bat` and a small interface opens in the browser, served by a
listener bound to `localhost` so nobody else on the network can reach it. Paste
the invoice numbers, or drop in an ERP spreadsheet export and the tool finds the
invoice-number column by itself.
