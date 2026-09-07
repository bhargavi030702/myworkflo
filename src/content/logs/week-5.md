---
title: "HR Automation: Resume Parsing Engine"
date: "2026-07-20"
week: "Week 5"
tags: ["Python", "Data Extraction", "NLP", "HR Tech"]
---

### Project Scope
As the company scales, the HR department receives hundreds of resumes manually submitted in various formats (PDF, DOCX). Manually parsing through these documents to extract key contact information and candidate data was creating a massive operational bottleneck. 

I engineered a **Python-based Resume Parsing Engine** designed to automate this exact workflow. 

### Implementation Details
The script automatically monitors a local directory (`Drop_Resumes_Here`) and processes batches of incoming resumes. 

Using native Python libraries and regex pattern matching, the engine successfully extracts:
- **Email Addresses**
- **Phone Numbers**
- **Full Text / Unstructured Data**

Once the extraction is complete, the structured data is automatically dumped into a clean, unified CSV format inside the `Extracted_Output` directory for the HR team to immediately use. Processed resumes are then archived to prevent duplicate processing.

### Technical Challenges
Dealing with completely unstructured data across different file formats required robust error handling. I had to ensure the script could gracefully fall back if a PDF was corrupted, and ensure the Regex patterns for global phone numbers were flexible enough to catch multiple formats.

<br>
*(Currently expanding the NLP logic to automatically extract Candidate Names and Technical Skills from the unstructured text blocks!)*
