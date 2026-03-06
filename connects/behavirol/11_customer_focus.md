# Behavioral: Tell me about a time you went above and beyond for a customer

**Common phrasings:**
- "Tell me about a time you put the customer first."
- "Describe a situation where you had direct customer impact."
- "Give an example of how you handled a customer problem."

---

## STAR Answer (Primary — Parsec Customer Engagement)

**Situation:**
Parsec, a manufacturing software company, wanted to use our MDS Copilot on their TrakSYS dataset. Their data was mapped to our entity model, but Copilot was not accurately answering their P0 and P1 business questions out of the box.

**Task:**
Work directly with the Parsec team to tune the Copilot configuration until all their priority questions were answered correctly, without modifying the core product.

**Action:**
- Analyzed the TrakSYS data mapping and identified where Copilot was going wrong on Parsec-specific questions.
- Modified existing ADX views to better represent Parsec's data structure.
- Added **two custom instructions** and **three targeted examples** specifically for Parsec's query patterns.
- Iterated with the Parsec team until all P0 and P1 questions were answered correctly by Copilot.
- Also wrote an OEE (Overall Equipment Effectiveness) query specifically for Parsec's data — a key manufacturing KPI they needed.

**Result:**
- All P0 and P1 Parsec questions answered correctly by Copilot.
- Parsec was able to successfully onboard onto the product.
- This engagement validated that our instruction/example customization approach worked for real customer data at scale.

---

## Alternate Example — Rolls Royce (HMI 2025)

**Situation:** Rolls Royce needed to demo MDS Copilot Assistant at HMI 2025 — one of the largest manufacturing trade shows globally. The demo had to work reliably on their proprietary data in front of a live audience.

**Action:**
- Assisted with ingesting Rolls Royce's data into the platform.
- Built custom ADX functions tailored to their specific P0 questions.
- Worked with PM to design an end-to-end demo script that showcased assistant effectiveness.
- Rehearsed and hardened the demo to ensure reliability under event conditions.

**Result:** Demo ran successfully at HMI 2025 with a wide MCI audience. Feature was showcased as a flagship capability of the manufacturing platform. Manager: *"This assistant feature was leveraged during Customer Engagements and powered the Rolls Royce HMI demonstration."*

---

## Alternate Example — Bring-Your-Own-Store (Aug–Sep 2023)

**Customer problem:** Customers who already had Azure Storage, Cosmos DB, and Azure Data Explorer didn't want to pay for duplicate resources just to use our platform.

**Action:** Modified Bicep templates to allow customers to bring their own Storage, Cosmos, and ADX instances. Configured existing VNet and private endpoints to read/write to external resources.

**Result:** Customers could reuse their existing cloud infrastructure — directly reducing their deployment cost. This was a customer-driven feature I proactively implemented.
