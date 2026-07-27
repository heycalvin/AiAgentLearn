# Chapter 3 User Memory and Knowledge Base

## The main idea

This chapter covers two big things:

1. helping the Agent remember the user
2. helping the Agent use outside knowledge

You can think of it like this:

- user memory = remember who you are and what you like
- knowledge base = remember what the world or a domain knows

Together, they make the Agent feel much more helpful.

## Why this chapter matters

The previous chapter focused on context inside one conversation.

This chapter goes further:

- how does the Agent remember after the chat ends?
- how does it avoid starting from zero every time?
- how does it find useful facts when the data gets large?

So this chapter is about long-term memory and knowledge retrieval.

## Part 1. User memory

### 1. Memory is not just chat logs

Real memory should not store every line exactly as the user said it.

It should:

- keep the useful facts
- turn scattered text into stable information
- make the result easy to search later

For example, if the user says:

“I like window seats, and I am vegetarian.”

The system should remember two facts:

- seat preference: window
- meal preference: vegetarian

### 2. What makes memory “good”

The book evaluates memory in three levels:

- **basic recall**: can it remember one clear fact correctly?
- **multi-session retrieval**: can it pull together facts from different chats?
- **proactive service**: can it notice a problem and help before the user asks?

This matters because memory is not only about saving data.

It is also about finding the right data and using it well.

### 3. Memory layers

The chapter separates memory into layers:

- **trajectory**: the full record of the current run or conversation
- **long-term memory**: stable facts across sessions
- **business state**: the current task stage, such as waiting for confirmation

You can think of it like this:

- trajectory = log
- long-term memory = archive
- business state = task progress

### 4. Four storage formats

The chapter then shows four ways to store memory.

#### Simple Notes

The simplest form.

Each memory is one small fact, like:

- the user email address
- the user likes a window seat

It is cheap and easy, but it loses relationships between facts.

#### Enhanced Notes

This keeps a fuller paragraph of context.

It preserves more meaning, but it is more repetitive and harder to update.

#### JSON Cards

This is a more structured format.

It uses fields like:

- `work.position.title`
- `personal.contact.email`

It is easier to update, but it can be too rigid for complex facts.

#### Advanced JSON Cards

This is a more mature version.

It stores not only the fact, but also:

- background
- who the person is
- the relationship to the user
- time information

That helps resolve ambiguity much better.

### 5. Memory as code

The chapter also introduces a more advanced direction:

- store memory as executable code

The basic idea is:

- use Python objects to hold user state
- use Python functions to encode rules
- let memory be something the system can compute with directly

This makes tasks like counting trips, checking conflicts, or enforcing constraints much easier.

### 6. Memory inside parameters

The chapter also talks about pushing memory deeper into the model itself.

You do not need to remember every technical name.

The key idea is simple:

**memory can move from external text toward internal structure.**

### 7. Cognitive science ideas

The chapter uses human memory as inspiration:

- **episodic memory**: specific events
- **semantic memory**: stable facts and knowledge
- **procedural memory**: repeated ways of doing things

In Agent terms:

- episodic memory = a specific trip booking conversation
- semantic memory = the user is vegetarian
- procedural memory = the repeated workflow for booking flights

This is useful because memory should be designed by purpose, not by one single format.

### 8. Framework examples

The book gives two examples:

- **Mem0**: a general memory pipeline focused on extract, compare, and update
- **Memobase**: a user-profile plus event-memory design

They show that there is no single perfect memory system.

The right choice depends on the use case.

### 9. Memory compression and cleanup

If memory keeps growing forever, it becomes messy and expensive.

So the system needs to:

- keep important memories
- merge similar ones
- remove low-value ones
- summarize repeated patterns

This is similar to how humans remember less detail over time and keep the important parts.

### 10. Privacy protection

Memory can contain sensitive data:

- email addresses
- phone numbers
- medical information
- payment or travel details

So the system needs redaction, access control, and safe logging.

## Part 2. Knowledge base and RAG

### 1. What RAG is

RAG can be understood simply as:

**retrieve information first, then let the model answer.**

The usual flow is:

1. split documents into chunks
2. turn chunks into searchable representations
3. retrieve the relevant ones
4. put them into context
5. let the model generate the answer

### 2. Why RAG is needed

Models do not know everything.

A knowledge base helps with:

- company policies
- product docs
- laws and regulations
- updated web content

### 3. Chunking

Chunking means cutting large documents into smaller pieces.

That helps retrieval, but there is a tradeoff:

- too small, and context gets lost
- too large, and retrieval gets noisy

So chunking is a balancing act.

### 4. Dense, sparse, and hybrid retrieval

The chapter explains three common retrieval styles.

#### Dense retrieval

Focuses on semantic similarity.

Good when the wording is different but the meaning is similar.

#### Sparse retrieval

Focuses on keyword matching.

Good when exact terms matter.

#### Hybrid retrieval

Combines both.

This is often the safest practical choice.

### 5. Retrieve first, then answer

A standard RAG system works like this:

- search for relevant passages
- inject them into the context
- let the model answer from that evidence

This lets the model use knowledge it did not see during training.

### 6. Multimodal information extraction

Knowledge is not only text.

It can also live in:

- charts
- PDFs
- images
- audio

The chapter compares three approaches:

- native multimodal processing
- extract to text first
- use tools for deeper analysis when needed

The main tradeoff is always the same:

**fidelity vs cost**

### 7. Beyond flat text

Simple chunking is not enough.

The chapter also talks about better ways to organize knowledge:

- structured indexing
- graph-based knowledge
- file-system-like organization
- knowledge governance and freshness

The goal is simple:

**make knowledge easier to find and easier to maintain.**

### 8. Knowledge governance

Knowledge bases are not one-time builds.

They need to handle:

- updates
- versioning
- stale content
- permissions

If old and new policy docs are mixed together, the model can easily answer with contradictions.

### 9. Agentic RAG

This is an important step up.

Traditional RAG is:

- user asks
- system retrieves once
- model answers

Agentic RAG is more like a researcher:

- think about the problem
- search
- check whether the answer is enough
- search again if needed
- then answer

This turns retrieval into an active tool, not just a background step.

### 10. Context-aware retrieval

Sometimes the problem is not the retriever.

The problem is that the chunk lost too much context.

For example, the line “Okay, book this one” means nothing without the surrounding conversation.

So the better approach is to add context before retrieval and make each chunk more understandable.

### 11. Extracting deep knowledge

The last part of the chapter goes even further:

- not only retrieve documents
- but also discover deeper knowledge from structured data

This turns a knowledge base into a knowledge understanding system.

## The final message

The chapter’s strongest conclusion is:

**The best long-term memory is not one technique. It is structured memory plus precise retrieval working together.**

You can remember it like this:

- structured memory gives the overview
- RAG gives the details
- together they make the Agent more useful and more proactive

## One sentence to remember

Memory helps the Agent remember you, knowledge helps it know more, and smarter retrieval makes both of them usable.
