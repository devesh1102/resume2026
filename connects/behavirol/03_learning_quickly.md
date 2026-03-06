# Behavioral: Tell me about a time you had to learn something new quickly

**Common phrasings:**
- "Tell me about a time you were thrown into an unfamiliar domain."
- "How do you ramp up on a new technology or codebase?"
- "Describe a time you had to quickly upskill."

---

## STAR Answer (Primary — Copilot stream switch)

**Situation:**
In late 2023, our team needed someone to pick up Copilot V3 pipeline work at a critical juncture — the existing Copilot accuracy was around 40% and the team needed to get it ready for Public Preview. I had been working on the data platform/infrastructure side (ADX, ingestion, Bicep) and had no prior experience with LLM pipelines, prompt engineering, or KQL-based Copilot architectures.

**Task:**
Switch streams within a very short timeframe, understand the Copilot Python pipeline end to end, and deliver meaningful accuracy improvements before the release deadline.

**Action:**
- Spent time deeply understanding the existing Copilot V3 codebase — how instructions, examples, and aliases flowed into prompts.
- Explored multiple approaches independently: keyword injection into instructions, breaking instructions into sub-instructions, and graph-based query generation to reduce token usage.
- Identified that Copilot was failing to typecast columns in generated KQL, causing query failures — added automatic typecast injection based on DTDL column definitions.
- Implemented KQL-to-cipher-text conversion so customers could write standard KQL while Copilot internally handled cipher-based queries.
- Added retry logic that propagated previous validation errors into the next prompt to help Copilot self-correct.

**Result:**
- Copilot accuracy improved from **40% to 75%+** — consistently above 75% on a regular basis.
- Delivered within the required timeline with minimal guidance.
- Manager feedback: *"Switch streams for accepting copilot work and delivering within a very short time."* and *"Devesh's velocity in delivery and his quick turnaround time in bringing tasks to completion with quality is top-notch."*

---

## Alternate Example — Frontend / React (Power Automate)

**Situation:** Moved to the Power Automate Process Mining team in 2025, which was primarily a frontend React/TypeScript/Fluent UI codebase — very different from the backend C#/.NET work I had been doing for 3+ years.

**Action:** Ramped up on React, Fluent UI, and Playwright testing by diving into the existing codebase; started contributing within weeks. Built the full OCPM overview page, edge filter panel, and 5 chart widgets.

**Result:** Manager noted: *"The way he ramped up on learning FE development, React and Fluent, to the way he progressed in supporting other developers in FE design and work, unblocking them and guiding them towards completion is highly commendable."*
