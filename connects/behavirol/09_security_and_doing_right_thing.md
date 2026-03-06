# Behavioral: Tell me about a time you prioritized security / did the right thing

**Common phrasings:**
- "Tell me about a time you made a decision that was right but difficult."
- "Describe a time you identified and addressed a security risk."
- "Tell me about a time you pushed back to maintain quality or compliance."

---

## STAR Answer (Primary — Virtual Network + Managed Identity Overhaul)

**Situation:**
Our manufacturing data platform stored sensitive customer IoT data across multiple Azure resources (Cosmos DB, ADX, Redis, Storage). All of these were accessible via public endpoints with connection strings / access keys. This was a significant security risk — any leaked key would expose customer data, and the architecture didn't meet S360 compliance requirements.

**Task:**
Redesign the network and authentication architecture to eliminate all public access and key-based authentication, replacing them with private networking and managed identity.

**Action:**
- Moved all resources containing user data behind a **virtual network** — no outside connections possible.
- Created **private DNS zones and private endpoints** for every resource so they could communicate securely within the VNet.
- Divided the VNet into subnets by resource type for network segmentation.
- Created managed private endpoints to allow Azure Data Explorer to access other resources.
- Eliminated all **List Keys API** calls — updated every service to use **managed identity** credentials instead of connection strings (Cosmos, Redis, ADX).
- Made Redis inaccessible from public internet — all access via VNet only.
- Wrote and enforced **Azure Policies** at subscription level to deny AKS resources that didn't meet OS SKU requirements (S360 compliance for Azure Linux).

**Result:**
- Achieved full S360 compliance.
- Zero leaked credentials risk — no keys stored anywhere in the codebase or config.
- Manager: *"The virtual network and private endpoints implementation were great enhancements to improve the solution's security."*
- Also received recognition for removing **1,152 code warnings** (many were null-reference risks) and configuring warnings-as-errors to prevent future regressions.

---

## Alternate Example — Responsible AI Testing (Nov 2024)

**Situation:** As part of the Responsible AI review for our Copilot system, I was asked to try to find vulnerabilities — essentially red-team the system.

**Action:** Tested jail-breaking scenarios on the system. Discovered that by disabling out-of-the-box examples and registering custom instructions with malicious content, it was possible to manipulate Copilot responses in unintended ways.

**Result:** Reported the vulnerabilities clearly through the RAI Review process. Findings were used to harden the system before Public Preview. This demonstrated that doing the right thing sometimes means actively trying to break your own product before customers do.
