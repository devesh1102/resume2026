# Behavioral: Tell me about a time you improved a process or drove efficiency

**Common phrasings:**
- "Tell me about a time you made a team or process significantly more efficient."
- "Describe a time you reduced technical debt or improved code quality."
- "Tell me about a time you implemented something that benefited the whole team."

---

## STAR Answer (Primary — Code Quality Overhaul: Warnings + Coverage Gate)

**Situation:**
The codebase I inherited on the SKG team had accumulated significant technical debt — over **1,152 compiler warnings**, many of which were null-reference risks that could cause silent failures in production. There was also no enforced code coverage gate, meaning new code could be merged without any tests.

**Task:**
Systematically eliminate the warning debt and put in place safeguards to prevent it from accumulating again, while also ensuring new code had meaningful test coverage.

**Action:**
- Went through the codebase methodically and removed all **1,152 warnings** — primarily null-exception risks and unnecessary async keywords.
- Configured all projects to treat **warnings as errors** going forward — any PR introducing a new warning would fail to build.
- Added a **code coverage check to the Azure DevOps pipeline**: PRs automatically fail if L0 (unit test) coverage drops below **70%**.
- Standardized exception handling across the entire codebase to follow HTTPS standards — all exceptions now resolve to a common format with consistent fields.

**Result:**
- Zero net-new warnings introduced since the change (enforced by build).
- Every line of code merged after the gate was introduced has at least 70% test coverage.
- Null errors in production decreased significantly.
- This pattern became an example for other teams in the org.
- Manager: *"Your contributions are commendable, and your work has significantly improved the product quality and efficiency."*

---

## Alternate Example — Register Entities Payload Tool (Jan 2023)

**Situation:** Creating payloads for ~80 inbuilt entities for the knowledge graph was a tedious, error-prone manual process that PMs and developers were spending significant time on.

**Action:** Built a **Register Entities Payload Tool** — a developer utility that auto-generates correct payloads for inbuilt entities.

**Result:** Drastically reduced developer time to create payloads for all 80+ entities. Eliminated human error in payload creation. Also enabled the PM team to independently modify entities and payloads without engineering involvement. Manager: *"The tool you developed for creating payloads for inbuilt entities is impressive. It has greatly reduced developer time and enabled the program manager team to modify payloads and entities frequently while eliminating human errors."*

---

## Alternate Example — Vectorization Decoupling (Jan 2024)

**Problem:** Vectorization of entities was happening as part of the main ingestion flow, blocking throughput and causing timeouts when the OpenAI endpoint was throttled.

**Action:** Introduced a **dedicated Event Hub** solely for vectorization. Completely decoupled the vectorization flow from ingestion — failures or throttling in vectorization no longer impact main ingestion at all. Added retry logic for throttling.

**Result:** Main ingestion flow became more reliable and faster. Vectorization could scale independently without risking data ingestion SLAs.
