# Chapter 10 Multi-Agent Collaboration

## The main idea

This chapter says:

**When one Agent is not enough, let multiple Agents work together.**

It is like a small team.

Each Agent has a different role, and together they solve a complex task.

## Why use multiple Agents

Many tasks are not a good fit for one single Agent doing everything.

Examples:

- research
- planning
- writing
- review
- execution

If one system tries to do all of that alone, it can become messy.

The advantage of multiple Agents is clear division of work.

## Common roles

### 1. Planner

Looks at the main goal, breaks it into steps, and orders the work.

### 2. Executor

Does the actual work, like searching, writing, or calling tools.

### 3. Reviewer

Checks the result and finds mistakes.

### 4. Coordinator

Keeps everyone aligned and decides who should do what next.

This way, each Agent focuses on what it does best.

## Collaboration patterns

The key idea is not “more Agents”, but “how they collaborate”.

Common patterns include:

- **manager-worker**: one Agent controls, others handle subtasks
- **distributed collaboration**: many Agents work in parallel and then combine results
- **discussion-based collaboration**: Agents debate before deciding
- **pipeline workflow**: one Agent passes work to the next

Different tasks need different patterns.

## What matters most in collaboration

### 1. Clear roles

Each Agent should know its job.

### 2. Shared state

Everyone should know where the task currently stands.

### 3. Clear boundaries

Who owns what should be obvious.

### 4. Stop conditions

The system must know when to stop discussing and finish.

## Common failure modes

Multi-Agent systems are not automatically better.

They can fail in several ways:

- looping back and forth
- repeating the same work
- giving inconsistent results
- creating too much communication cost
- unclear ownership

So collaboration systems need control.

## Agent society

The chapter also introduces the bigger idea of an `Agent society`.

You can think of it as:

**many Agents forming a larger work network.**

Some are like different job roles in a company.
Some are like small cooperating teams.

This is powerful, but also more complex.

## A simple example

If you need a market research report, you might split it like this:

- one Agent collects information
- one Agent organizes the data
- one Agent writes the first draft
- one Agent checks for mistakes

Then the results get merged.

## What you should remember

The value of multi-Agent systems is not just “many”.

It is clearer division of labor and more flexible collaboration.

But without roles and boundaries, the system becomes chaotic.

## One sentence to remember

Multi-Agent systems are not about adding more Agents. They are about splitting complex work into clear collaboration relationships.
