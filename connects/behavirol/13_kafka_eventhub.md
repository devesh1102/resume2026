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

## Kafka offsets and delivery semantics

Kafka's delivery semantics — **at-least-once, at-most-once, and exactly-once** — depend primarily on when the consumer records its progress relative to processing a message.

An **offset** is a record's sequential position within a partition. A consumer group normally commits the offset of the **next record it should read**. For example, after successfully processing record 100, it commits offset 101.

### 1. At-least-once delivery

**Core rule:** Process first, then commit the offset.

**Guarantee:** A successfully acknowledged message is not skipped, but a message may be processed more than once.

1. The consumer reads record 100.
2. It performs the business operation, such as writing to a database.
3. After processing succeeds, it commits offset 101.

If the consumer crashes after step 2 but before step 3, Kafka still has the earlier committed position. After restart or rebalance, record 100 is read and processed again. Consumers therefore need **idempotent processing**, commonly implemented with a database uniqueness constraint, an idempotency key, or a transactional inbox.

> Kafka commonly provides at-least-once processing when offsets are committed only after successful processing. Although `enable.auto.commit=true` is the client default, auto-commit is driven by calls to `poll()` and a timer; it is not automatically coordinated with completion of application processing.

### 2. At-most-once delivery

**Core rule:** Commit the offset before processing.

**Guarantee:** A message is processed no more than once, but it may be lost from the application's perspective.

1. The consumer reads record 100.
2. It commits offset 101.
3. It performs the business operation.

If the consumer crashes during step 3, Kafka already considers record 100 consumed. The replacement consumer resumes at offset 101, so record 100 is not retried even though its processing did not complete.

This behavior should be implemented deliberately by committing before processing. A short auto-commit interval alone is not a precise or reliable way to guarantee at-most-once behavior.

### 3. Exactly-once processing

**Core rule:** Make the output and consumed offset visible atomically.

#### Kafka-to-Kafka

Kafka can provide exactly-once semantics when consuming from Kafka, processing, and producing back to Kafka:

1. Begin a producer transaction.
2. Write the output records.
3. Add the consumed offsets with `sendOffsetsToTransaction()`.
4. Commit the transaction.

The output records and offsets either commit together or abort together. Downstream consumers must use `isolation.level=read_committed` to avoid reading aborted transactional records. Kafka Streams provides this model through exactly-once processing mode.

#### Kafka-to-external database

Kafka transactions cannot atomically include an independent database transaction. Practical options are:

- Make the database write idempotent using a message ID and a unique constraint, then commit the Kafka offset after the database transaction succeeds.
- Store the processed result and an inbox/deduplication record in the same database transaction.
- Store the consumer position in the same database transaction as the result only when the application also restores and manages its read position from that database; this replaces normal Kafka group-offset management and requires careful rebalance handling.

For external side effects, the realistic guarantee is usually **at-least-once delivery with effectively-once business outcomes through idempotency**, not native end-to-end Kafka exactly-once semantics.

---

## What to be upfront about

You have NOT operated a raw Kafka cluster (brokers, Zookeeper/KRaft, Kafka Connect, Kafka Streams). If a role specifically requires cluster ops or stream processing with Kafka Streams/ksqlDB, flag it honestly. For application-level usage — producers, consumers, partitioning, at-least-once delivery — your Event Hub experience maps directly.
