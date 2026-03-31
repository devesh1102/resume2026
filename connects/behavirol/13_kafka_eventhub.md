# Kafka / Azure Event Hub — Technical Talking Point

## How to explain Event Hub on your resume when asked about Kafka

**The pattern you built:**
IoT device data → Azure Event Hub (partitioned log) → Azure Function App (consumer/trigger)

This is architecturally identical to the Kafka producer-consumer model:
- Event Hub = Kafka Topic (partitioned, append-only log, ordered delivery per partition)
- Azure Function App binding = Kafka Consumer Group (each instance processes assigned partitions)
- At-least-once delivery, offset management — same guarantees as Kafka

---

## Script (use this if an interviewer asks about Kafka)

> "I used Azure Event Hub, which implements the same partitioned log model as Kafka and exposes a native Kafka-compatible endpoint. In the manufacturing data platform, IoT device streams landed in Event Hub, and Azure Function Apps consumed those events to trigger the ingestion pipeline — the same producer-consumer pattern at the core of Kafka. I have hands-on experience with partitioning, consumer group behaviour, offset checkpointing, and at-least-once delivery from that work."

---

## Two specific instances

**1. IoT Data Ingestion Trigger (Jul 2021 – Oct 2023)**
- Events from factory IoT devices (OPC-UA data) landed in Azure Event Hub
- Azure Function App was bound to the Event Hub as a consumer trigger
- Function processed each event batch and wrote to Azure Data Explorer
- Pattern: producer (device/IoT pipeline) → Event Hub → Function App consumer

**2. Real-time Vectorization Pipeline (Jan 2024)**
- Introduced a dedicated Event Hub solely for vectorization — fully decoupled from main ingestion
- Function App consumed vectorization events and called Azure OpenAI (via Managed Identity) to generate embeddings
- Results stored in Redis for low-latency retrieval by the Copilot service
- Decoupling was deliberate: prevented vectorization load from affecting ingestion throughput

---

## What to be upfront about

You have NOT operated a raw Kafka cluster (brokers, Zookeeper/KRaft, Kafka Connect, Kafka Streams). If a role specifically requires cluster ops or stream processing with Kafka Streams/ksqlDB, flag it honestly. For application-level usage — producers, consumers, partitioning, at-least-once delivery — your Event Hub experience maps directly.
