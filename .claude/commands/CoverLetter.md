You are helping Devesh Kumar write a targeted, half-page cover letter for a job application.

## About Devesh Kumar

**Current role:** Software Engineer II at Microsoft India (Jul 2021 – Present), based in Hyderabad.
**Education:** IIT Bombay — B.Tech + M.Tech in Electrical Engineering, Minor in CS (2016–2021), CGPA 8.49/10.

**Key skills:** C#, Python, TypeScript, SQL, KQL, Bicep | Azure OpenAI, Azure Data Explorer, Cosmos DB, Event Hub, Redis, AKS | .NET 8, React, Fluent UI, Docker, Kafka, Playwright | IaC, Managed Identity, VNet/Private Endpoints, RAG, Threat Modeling.

**Contact:** devesh1102@gmail.com | +91 9308716025 | linkedin.com/in/devesh-kumar | github.com/devesh1102 | Hyderabad, India

---

## Task

The user will provide a job posting and company name. If either is missing, ask before proceeding.

### Step 1 — Research

Read the following files to gather rich, specific material before writing:
- `C:\Users\deveshkumar\Downloads\resume_2026\connects\devesh_resume.html`
- All connect review files: `C:\Users\deveshkumar\Downloads\resume_2026\connects\01_oct_2021.md` through `09_oct_2025.md`

Mine them for the 3–4 experiences with the strongest overlap with the job posting. Prefer items with concrete metrics, customer names, or first-in-team moments.

### Step 2 — Write the cover letter HTML

Write a cover letter that is **~half a page** (3 tight paragraphs, no filler). Use this structure:

**Paragraph 1 — Hook + intent (~2 sentences)**
State the role and company. Connect Devesh's current work/mission to the company's mission in one genuine sentence. No generic "I am excited to apply" opener.

**Paragraph 2 — Strongest 2–3 achievements tailored to the role (~4–6 sentences)**
Pick the most relevant work from the connects/resume. Be specific: metrics, tech, outcomes. Bold the key numbers/outcomes with `<strong>`.

**Paragraph 3 — Close (~2 sentences)**
Brief forward-looking line. Thank them and express interest in a conversation.

Use today's date: **March 29, 2026**

Use this exact HTML template (preserve all CSS, only change the content areas):

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Devesh Kumar - Cover Letter - COMPANY_NAME</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Calibri', 'Arial', sans-serif;
    font-size: 11pt;
    color: #1a1a1a;
    background: #fff;
    line-height: 1.6;
  }
  .page {
    width: 8.5in;
    min-height: 11in;
    margin: 0 auto;
    padding: 0.75in 0.85in 0.75in 0.85in;
    background: #fff;
  }
  .header {
    border-bottom: 2px solid #0f2d4a;
    padding-bottom: 14px;
    margin-bottom: 28px;
  }
  .name {
    font-size: 22pt;
    font-weight: 700;
    color: #0f2d4a;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }
  .contact-row {
    font-size: 9pt;
    color: #555;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  .contact-row span { white-space: nowrap; }
  .date-line {
    font-size: 10.5pt;
    color: #444;
    margin-bottom: 20px;
  }
  .recipient {
    margin-bottom: 24px;
    font-size: 10.5pt;
    color: #222;
  }
  .salutation {
    margin-bottom: 18px;
    font-size: 11pt;
    font-weight: 600;
    color: #0f2d4a;
  }
  p {
    margin-bottom: 16px;
    font-size: 10.8pt;
    color: #222;
    text-align: justify;
  }
  .closing {
    margin-top: 28px;
    font-size: 10.8pt;
    color: #222;
  }
  .closing-name {
    margin-top: 10px;
    font-size: 11pt;
    font-weight: 700;
    color: #0f2d4a;
  }
  strong { color: #0f2d4a; }
  @page { size: letter; margin: 0; }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { width: 100%; }
  }
</style>
</head>
<body>
<div class="page">

  <div class="header">
    <div class="name">Devesh Kumar</div>
    <div class="contact-row">
      <span>Hyderabad, India</span>
      <span>devesh1102@gmail.com</span>
      <span>+91 9308716025</span>
      <span>linkedin.com/in/devesh-kumar</span>
      <span>github.com/devesh1102</span>
    </div>
    <div style="font-size:10pt;color:#0f2d4a;font-style:italic;margin-top:6px;">Software Engineer II — Microsoft India | Power Automate</div>
  </div>

  <div class="date-line">March 29, 2026</div>

  <div class="recipient">
    Hiring Team<br>
    COMPANY_NAME
  </div>

  <div class="salutation">Dear Hiring Team,</div>

  <!-- PARAGRAPH 1 -->
  <p>...</p>

  <!-- PARAGRAPH 2 -->
  <p>...</p>

  <!-- PARAGRAPH 3 -->
  <p>...</p>

  <div class="closing">
    Sincerely,
    <div class="closing-name">Devesh Kumar</div>
  </div>

</div>
</body>
</html>
```

### Step 3 — Save the HTML

Use the Write tool to save the completed HTML to:
`C:\Users\deveshkumar\Downloads\resume_2026\coverletter\<CompanyName>_cover_letter.html`

Where `<CompanyName>` is the company name with spaces replaced by underscores (e.g. `Google_cover_letter.html`).

### Step 4 — Generate the PDF

Run this command using the Bash tool:
```
cd /c/Users/deveshkumar/Downloads/resume_2026/connects && node gen_cover_letter.js "../coverletter/<CompanyName>_cover_letter.html" "../coverletter/<CompanyName>.pdf"
```

### Step 5 — Confirm

Tell the user:
- The PDF has been saved to `coverletter/<CompanyName>.pdf`
- The source HTML is at `coverletter/<CompanyName>_cover_letter.html` (editable if they want tweaks)
