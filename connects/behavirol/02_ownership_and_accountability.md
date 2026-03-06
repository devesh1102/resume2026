# Behavioral: Tell me about a time you showed ownership / went above and beyond

**Common phrasings:**
- "Tell me about a time you took ownership of a problem that wasn't yours."
- "Describe a situation where you showed extreme accountability."
- "Tell me about a time you owned a project end to end."

---

## STAR Answer

**Situation:**
While serving as DRI (Designated Responsible Individual) for our service, I received an escalation that Schaeffler — a key enterprise customer — was facing deployment failures. The issue was at the subscription-permission level, which was outside the normal product scope and not something I had originally built.

**Task:**
As DRI on that rotation, it was my responsibility to resolve the customer issue regardless of where the root cause sat. There was no one else assigned — I had to own it.

**Action:**
- Immediately engaged with the customer and diagnosed that the failure was caused by incorrect permissions at the Azure subscription level.
- Collaborated with a colleague (Shubham) to identify the exact permission gap and apply the fix.
- Stayed engaged until the deployment succeeded and the customer confirmed it was resolved.
- Documented the fix so future DRIs would have a runbook for similar subscription-level issues.

**Result:**
- Schaeffler deployment was unblocked and the customer onboarded successfully.
- The incident reinforced my reputation as a go-to engineer for customer escalations.
- Manager feedback: *"Devesh is extremely high velocity contributor... highly accountable and no matter what delivers the assigned task on time with quality."*

---

## Alternate / Supplementary Example — P0 Bug Fix

**Situation:** During a BHL loop week, a P0 issue emerged where users were completely unable to create a process in Power Automate Process Mining.

**Action:** I identified the root cause through a failing Playwright test, traced it to a missing Dataverse call, fixed the bug, and merged the PR into main.

**Result:** Issue resolved quickly. However, I missed applying the fix in Pre-Production (PProd). I flagged this openly as a learning — next time I would raise a QFE (Quick Fix Engineering) to ensure the fix propagates across all environments. This self-accountability was recognized by my manager.
