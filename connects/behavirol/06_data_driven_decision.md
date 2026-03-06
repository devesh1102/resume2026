# Behavioral: Tell me about a time you used data to drive a decision

**Common phrasings:**
- "Tell me about a time you made a decision backed by data or analysis."
- "Describe a time your analysis changed the direction of a project."
- "How do you approach making technical decisions?"

---

## STAR Answer (Primary — Performance Benchmarking → ADT Removal)

**Situation:**
Our Smart Knowledge Graph solution used three main storage layers: Azure Digital Twin (ADT), Azure Data Explorer (ADX), and Cosmos DB. There was ongoing debate about which resources were actually necessary and which were adding cost and latency without proportional benefit. ADT in particular was expensive but had been part of the original design.

**Task:**
Perform rigorous benchmarking across all resources for both ingestion and consumption, and use those findings to make a concrete architectural recommendation.

**Action:**
- Built a comprehensive benchmarking framework in Python that tested ingestion and consumption APIs against ADT, ADX, and Cosmos across different load profiles.
- Measured when performance of each resource peaked, what the cost implications were, and where bottlenecks emerged.
- Ran tests with parallel API calls to simulate real customer load, measuring latency distributions.
- Authored a comprehensive document summarizing all findings, with cost breakdowns and performance comparisons.
- Separately, ran a POC comparing ADX query performance vs ADX + cold data (ADLS): **ADX was 5–6x faster**.
- Also authored a separate Markdown document comparing cost of storing ~50 million rows in ADLS vs ADX, which showed ADX external tables stored in ADLS were an inefficient pattern.

**Result:**
- Benchmarking results directly drove the **decision to remove Azure Digital Twin** from the architecture — the data showed it was the most expensive resource and a bottleneck, not a value-add.
- ADX external tables in ADLS were eliminated as a result of the cost analysis.
- These two decisions, both driven by my analysis, significantly reduced customer cloud costs and improved performance.
- Manager: *"Decision made to remove ADT based on findings."*

---

## Key Insight to Mention
> "I wrote the benchmarking in Python with parallel calls to get statistically meaningful latency numbers — not just single-run comparisons. I also made sure to document everything so the decision had a paper trail the team could refer back to."
