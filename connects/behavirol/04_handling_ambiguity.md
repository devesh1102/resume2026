# Behavioral: Tell me about a time you navigated ambiguity

**Common phrasings:**
- "Tell me about a time you had to make decisions with incomplete information."
- "How do you handle situations where requirements aren't clear?"
- "Describe a time you worked on something with no clear roadmap."

---

## STAR Answer (Primary — Copilot Assistant POC → Production)

**Situation:**
In late 2024, there was no clear plan for how to bring Azure OpenAI's Assistant API capabilities into our manufacturing data platform. The PM team had interest but no concrete spec. There was a high-stakes deadline: the HMI 2025 trade show where a Rolls Royce demo would need to showcase the feature. No one had done this across any MCI team before.

**Task:**
Proactively figure out what was feasible, build a working proof of concept, and then drive it to production — all while the requirements were still being shaped by PMs.

**Action:**
- Started with independent POC work on Azure OpenAI Assistant API — explored conversation threading, file search, and how to adapt our manufacturing data model for assistant queries.
- Collaborated directly with the PM (Ashutosh) to translate business goals (show assistant-based Q&A on factory data) into a concrete implementation plan targeting April 2025.
- Built a filtering layer to extract relevant data subsets before sending to the assistant — this was a critical architectural decision I made to reduce hallucinations and cost, since sending the full dataset was not viable.
- Created 5 ADX materialized views (downtime, actual/scheduled production, actual/scheduled consumption) to make data fetching deterministic and reduce traversal complexity.
- Worked with the Rolls Royce team on their specific P0 questions and created custom assistant functions accordingly.

**Result:**
- Assistant accuracy exceeded **75% on the bakery dataset**.
- Feature was successfully **showcased at HMI 2025** — first ever assistant feature shipped by any team across MCI.
- Manager: *"His contributions played an important role in lighting up assistant API integration capabilities for Manufacturing factory operations agent."*

---

## Key Insight to Mention
> "When facing ambiguity, I try to timebox a POC to gather concrete data, then align with PMs and stakeholders on a narrowed-down plan. I also flag gaps early — in this case I should have aligned on V3 pipeline integration with the assistant earlier, which I noted as a learning."
