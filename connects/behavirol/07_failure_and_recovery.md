# Behavioral: Tell me about a time you failed or made a mistake

**Common phrasings:**
- "Tell me about a time things didn't go as planned."
- "Describe a mistake you made and what you learned."
- "Tell me about a setback and how you recovered."

---

## STAR Answer (Primary — P0 Bug Missing PProd Fix)

**Situation:**
During a BHL (Bug Bash / Hot Loop) week on the Power Automate Process Mining team, a P0 issue emerged: users were completely unable to create a process. This was a critical, customer-facing bug that needed immediate resolution.

**Task:**
Find the root cause, fix it, and get it deployed as quickly as possible.

**Action:**
- Identified the root cause by tracking a failing Playwright test — it pointed to a missing call to Dataverse during process creation.
- Wrote and merged the fix into the main branch quickly.
- The fix was tested and confirmed working in the main environment.

**What went wrong:**
- I merged the PR into main but did not apply the fix to the Pre-Production (PProd) environment.
- PProd was still broken, meaning the fix hadn't reached customers through that path.

**Recovery:**
- Caught the gap during verification and escalated immediately.
- Learned that for P0 fixes, the correct process is to raise a **QFE (Quick Fix Engineering)** request, which ensures the fix is applied across all relevant environments (main, PProd, Prod) in a controlled manner — not just merged to main.
- Documented this as an explicit learning item and shared it with the team.

**Result:**
- PProd was eventually fixed through the right process.
- My manager appreciated the transparency in calling out the mistake and the learning: *"He has established himself as a dependable engineer, delivering features with robustness. Additionally, he has effectively handled several time-critical bugs, resolving them promptly and efficiently."*

---

## Alternate Example — Windows Container for AKS (Sep 2022)

**Situation:** While containerizing services for AKS deployment for the first time, I initially used Windows containers — which caused the worker service to fail repeatedly.

**Root cause:** Should have started with Linux containers from the beginning, which is the standard for AKS.

**Learning:** Always check the container OS compatibility with the target orchestration platform first. I've since defaulted to Linux containers and verify OS SKU requirements upfront (which later influenced the Azure Policies I wrote to enforce Azure Linux SKUs at subscription level).

---

## Alternate Example — Missed Cross-Team Sync (May 2022)

While working on the Cosmos DB access layer independently, I later discovered that Gaurav's team had been working on a very similar implementation. Connecting with them earlier would have saved time and avoided duplication.

**Learning:** Before starting a new technical workstream, proactively ask "who else might be working on something adjacent to this?"
