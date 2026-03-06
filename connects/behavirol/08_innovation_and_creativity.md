# Behavioral: Tell me about a time you came up with a creative or innovative solution

**Common phrasings:**
- "Tell me about a time you solved a problem in an unexpected way."
- "Describe a situation where you had to think outside the box."
- "Give an example of innovation you drove."

---

## STAR Answer (Primary — KQL-to-Cipher-Text Conversion for Copilot)

**Situation:**
Our Copilot system internally used cipher-based KQL queries, which are more structured and easier for the LLM to generate correctly. However, customers who wanted to provide example queries had to write them in cipher format — a syntax most people are unfamiliar with. This created a major usability barrier for registering high-quality examples.

**Task:**
Find a way to let customers continue writing examples in standard KQL (which they already knew) while Copilot still operated on cipher-based queries internally.

**Action:**
- Designed and implemented an automatic **KQL-to-cipher-text converter** that runs server-side when a customer registers a KQL example.
- The conversion happens transparently — customers write standard KQL, the system stores and uses the cipher equivalent.
- This meant zero learning curve for customers and no degradation of Copilot's query quality.

**Result:**
- Customers could use their existing KQL knowledge without any changes.
- Copilot continued to benefit from structured cipher-based inputs.
- This was called out as an impactful feature: *"Customers can continue using their existing KQL without needing to learn new cipher-based queries."*

---

## Alternate Example — ADX Graph Query vs Azure Digital Twin (Apr 2023)

**Situation:** The team was using Azure Digital Twin (ADT) to represent graph relationships, but there were concerns about performance and cost. The hypothesis was that ADX might be able to handle graph queries directly, which would allow us to eliminate ADT.

**Action:** Built a POC to mimic hops (graph traversal) directly in ADX. Compared query performance on data stored in ADX vs cold data (ADLS) — wrote scripts to test various query patterns.

**Result:** ADX was **5–6x faster** than the ADT-based approach. I wrote a one-pager summarizing findings. This directly led to the architectural decision to remove ADT entirely — the innovation in questioning the existing design unlocked a major performance and cost improvement.

---

## Alternate Example — Entity Decomposition for Copilot Accuracy (Nov 2024)

**Problem:** Copilot struggled when it needed to segregate a single entity into multiple parts and apply filters across them.

**Creative solution:** Rather than changing the prompt, I tried "decomposing" the entity — creating a derived, simplified entity used only for Copilot calls, with fewer fields and clearer boundaries.

**Result:** Achieved similar accuracy with **50% fewer instructions** (6 vs 12) and **3 examples instead of 8** — a significant reduction in complexity and token usage.
