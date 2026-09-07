---
title: "Serverless PDF Extraction Portal"
date: "2026-08-30"
week: "Week 7"
tags: ["Next.js", "React", "Serverless", "Netlify"]
github: "https://github.com/bhargavi030702/pdf-web-extractor"
---

### Project Scope
After successfully building the local Node.js scraper, the team needed a way to use it without dealing with the command line. I migrated the extraction logic into a full-stack **Next.js web application**, complete with a drag-and-drop user interface.

### Implementation Details
The web app is deployed entirely on the cloud using **Netlify**. 

I integrated a React Dropzone frontend where team members can easily drag and drop their PDF tickets. Once uploaded, the files are passed to a Netlify Serverless Function (`/api/upload`) which dynamically parses the PDF buffers in memory, matches the ticketing patterns, and automatically streams a compiled Excel (`.xlsx`) sheet back to the user's browser. 

This fundamentally eliminated the barrier to entry, allowing any non-technical staff member to securely extract structured data from their tickets on any device!
