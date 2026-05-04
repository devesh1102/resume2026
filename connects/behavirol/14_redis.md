# Redis — Technical Talking Point

## How you used Redis at Microsoft

Redis was used as a low-latency metadata store in the vectorization pipeline for the AI Copilot service. It sat between the vectorization compute layer (Azure OpenAI embeddings) and the query-time retrieval layer (Copilot prompt generation).

**The pattern you built:**
Event Hub → Function App → Azure OpenAI (generate embedding) → Redis (store embedding + metadata) → Copilot service (read at query time for similarity search)

---

## Script (use this if an interviewer asks about Redis)

> "I used Redis as a low-latency cache and metadata store in the vectorization pipeline of our AI Copilot system. After Azure OpenAI generated embeddings for entity and schema metadata, we stored them in Redis so the Copilot service could retrieve them with sub-millisecond latency at query time during similarity search — avoiding a round-trip to the database on every user query. The pipeline was fully decoupled from main ingestion using a dedicated Event Hub, so vectorization load never impacted data throughput."

---

## Two specific instances

**1. Schema and Entity Metadata Store (Jan 2024)**
- After ingestion, selected entities were vectorized concurrently via a dedicated pipeline
- Azure OpenAI generated embeddings for entity metadata and relationship schemas
- Embeddings and associated metadata stored in Redis (Azure Cache for Redis)
- Copilot service read from Redis at query time for low-latency similarity search
- This replaced a slower background job that ran on a fixed schedule, making vectorization real-time

**2. Throughput Isolation (Jan 2024)**
- Redis acted as the fast read layer so the Copilot service never had to query Cosmos DB or ADX during prompt construction
- Combined with the decoupled Event Hub channel, this ensured the AI layer was fully independent from the core data platform — no shared resource contention

---

## Redis concepts you can speak to

- **Cache-aside pattern** — app checks Redis first, falls back to source if miss
- **Key-value storage** — entity ID / schema name as key, embedding vector + metadata as value
- **TTL / expiry** — stale embeddings can be expired and refreshed on re-ingestion
- **Low-latency reads** — sub-millisecond retrieval vs. Cosmos DB (~5–10ms) for hot metadata
- **Azure Cache for Redis** — managed, secured via VNet + Private Endpoints + Managed Identity

---

## What to be upfront about

You used Redis as a **managed cache/store (Azure Cache for Redis)**, not as a self-hosted Redis cluster. You have not used Redis Streams, Redis Search (vector search), or Redis as a primary database. If a role requires Redis Cluster ops or Redis-native vector search (RediSearch), flag it — your use was application-level caching and metadata storage.
