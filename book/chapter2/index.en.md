# Chapter 2 Context Engineering

## The main idea

This chapter says something very important:

**An Agent is not only as smart as its model. It is also as good as its context.**

Context engineering asks:

> What information should we give the model, in what order, and in what format, so it can do the task well?

## What context means

Context is more than chat history.

It often includes:

- the user’s current question
- earlier messages
- system rules
- tool descriptions
- task state
- memory
- external data

You can think of context as the model’s working desk.

If the desk is clear, the model works better.

## Why this chapter matters

Many people think Agent quality mostly depends on model power.

But in practice:

- a strong model can still fail with bad context
- a smaller model can do well with good context
- context quality often decides the real upper bound

So context engineering is one of the most important parts of Agent design.

## What context looks like in the API

The chapter explains the message structure used in model APIs.

The common roles are:

- `system`: rules written by the developer
- `user`: the user’s input
- `assistant`: the model’s output
- `tool`: the result of a tool call

You can think of this as a structured work log.

The model does not magically remember everything.
It understands the task through these messages.

## What KV Cache is

The chapter also explains `KV Cache`.

The simple idea is:

**The model saves earlier computation so it does not need to recalculate everything every time.**

That saves time and cost.

But there is an important rule:

**Do not keep changing the prefix.**

If you keep editing the system prompt, even with small changes like a time stamp, the cache may fail and the model becomes slower.

## What prompt engineering does

Prompt engineering is about improving the `system prompt`.

It tries to make the model understand:

- who it is
- what rules it must follow
- what the output should look like
- how it should complete the task

You can think of the system prompt as an employee handbook.

If the handbook is clear, the employee knows what to do.

## What Skills are

When the number of tasks grows, one huge prompt becomes messy.

So the chapter introduces `Skills`.

Skills are small ability packages that are loaded only when needed.

This helps:

- save tokens
- reduce noise
- keep context cleaner

## Agent status bar

The chapter also introduces the `Agent Status Bar`.

Its job is to keep dynamic state visible inside the context, such as:

- task progress
- what is already done
- what is still missing
- the current environment state

This helps the Agent avoid forgetting where it is in the task.

## Context compression

As tasks get longer, context grows too much.

So we also need compression.

Compression is not just “make it shorter”.

It means:

- keep the important parts
- remove repeated parts
- turn messy content into a denser summary

The goal is not smaller text for its own sake.
The goal is to keep the right information.

## A simple example

Imagine you are fixing a bug in code.

If the context only says “fix the bug”, the model may not do well.

But if you also give it:

- which file is broken
- what error happened
- what rules must not be broken
- what has already been tried

then the model has a much better chance of doing the job correctly.

That is the value of context engineering.

## What you should remember

Context is not background decoration.

It is part of the Agent’s ability.

**What the model sees is often more important than how powerful the model is.**

## One sentence to remember

Context engineering is not about stuffing in more information. It is about giving the model the right information in the right way.
