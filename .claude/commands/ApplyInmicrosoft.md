You are helping Devesh Kumar write a short Teams introduction message to send to a hiring manager at Microsoft.

## About Devesh Kumar

**Current role:** Software Engineer II at Microsoft India (Jul 2021 – Present), based in Hyderabad.
**Education:** IIT Bombay — B.Tech + M.Tech in Electrical Engineering, Minor in CS (2016–2021), CGPA 8.49/10.

**Key skills:** C#, Python, TypeScript, SQL, KQL, Bicep | Azure OpenAI, Azure Data Explorer, Cosmos DB, Event Hub, Redis, AKS | .NET 8, React, Fluent UI, Docker, Kafka, Playwright | IaC, Managed Identity, VNet/Private Endpoints, RAG, Threat Modeling.

**Experience highlights:**
- **Manufacturing Data Platform & Knowledge Graph (Jul 2021 – Oct 2023):** Cut IoT node ingestion 39% and relationship ingestion 54% for 330k nodes/450k relationships on ADX. Built multi-hop graph query APIs. Secured infra with VNet, private endpoints, managed identity. Bicep IaC for one-click deployments (98% success rate).
- **AI Copilot & Manufacturing Agent (Nov 2023 – May 2025):** Lifted Copilot query accuracy from 40% → 75%+ via RAG + KQL-to-Cypher pipeline. First team across MCI to ship Azure OpenAI Assistant API in production — demoed at HMI 2025 for Rolls Royce. Certified MCI Threat Model reviewer.
- **Power Automate Process Mining (May 2025 – Present):** Built OCPM overview page, edge-filter panel with infinite scroll, and 5 analytics widgets (React, Fluent UI, TypeScript) showcased at PPCC 2025. Authored Playwright E2E test suites.
- **CME Group (Quant Research Intern, 2019):** PCA on interest rate curves, margin risk stress-testing.

---

## Tone & Style Reference

Match the voice and structure of this example message Devesh has written:

> Hi, I'm a software engineer with 4.5 years of experience at Microsoft, currently working on the Power Automate team. I have full-stack experience, including designing and building the Process Mining Overview page in Power Automate with React on the frontend, and designing and managing APIs on the backend.
> I came across your posting for the SDE role https://careerhub.microsoft.com/careerhub/explore/jobs/1970393556824802?domain=microsoft.com&profile_type=employee and I'm interested in learning more. Please let me know if we can arrange a call to discuss further.

Key traits to replicate: direct, no fluff, leads with tenure + current team, names one concrete thing he built, states interest clearly, ends with a simple ask. **Use the careerhub job URL format** shown above (not careers.microsoft.com).

---

## Task

The user will provide a job posting description. If the **Job ID** was NOT provided, ask for it now before proceeding.

Once you have both the job description and the job ID:

1. **Read the connects folder first.** Use the Read tool to go through the files in `C:\Users\deveshkumar\Downloads\resume_2026\connects\` — specifically the numbered connect review files (`01_oct_2021.md` through `09_oct_2025.md`). These contain richer detail about Devesh's work than the summary above. Mine them for specific achievements, metrics, projects, or technologies that are relevant to the job posting.

2. Read the posting carefully and identify the 2–3 skills or experiences from Devesh's background (resume + connects) that are the strongest match.
3. Write a **Teams introduction message** (≤ 100 words, conversational but professional) that Devesh can paste directly into Teams to reach the hiring manager. It should:
   - Open with a natural greeting (Hi [name] / Hi there)
   - Mention he is an SWE II at Microsoft India interested in the role
   - Highlight the 2–3 most relevant skills/experiences matched to the posting
   - Include the job link: `https://careerhub.microsoft.com/careerhub/explore/jobs/<JOB_ID>?domain=microsoft.com&profile_type=employee`
   - Close with a brief ask (happy to connect / open to a quick chat)
4. Save the message to a txt file using the Write tool:
   - Path: `C:\Users\deveshkumar\Downloads\resume_2026\msg\<CompanyName>_<JobID>.txt`
   - `<CompanyName>` = company name with spaces replaced by underscores (e.g. `Microsoft`)
   - `<JobID>` = the numeric job ID only (e.g. `1970393556851794`)
   - File contents = the message text only, nothing else

5. Output the message text in the chat, then confirm the file was saved with its path.

Keep it under 100 words. Natural, not salesy.
