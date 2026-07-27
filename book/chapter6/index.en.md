# Chapter 6 Agent Evaluation

## The main idea

This chapter says:

**Do not just feel that an Agent is good. Measure whether it is actually good.**

Evaluation is like a health check for the Agent.

Without evaluation, it is hard to know whether the system really improved or only looks better.

## Why evaluation matters

An Agent is a system that acts.

It is not only one answer.

So you should not only judge how nice the text looks.
You also need to know whether the task was actually completed.

You want to know:

- did it succeed?
- where did it fail?
- does it repeat the same mistake?
- is it stable across tasks?

## What to measure

Common evaluation metrics include:

- **success rate**
- **accuracy**
- **latency**
- **cost**
- **stability**
- **recovery ability**

You need several measures together to get a real picture.

## Offline evaluation

Offline evaluation means testing a fixed set of tasks in a controlled environment.

It helps answer:

- did the new version improve?
- did anything regress?
- which strategy works better?

Offline evaluation is repeatable and easy to compare.

## Online evaluation

Online evaluation means checking performance in the real world with real users.

It is closer to reality, but also more complicated.

Real usage has:

- noise
- changing conditions
- unexpected cases
- user emotion

So online evaluation is harder, but often more valuable.

## The task environment

The environment matters a lot.

If the environment is too easy, the Agent may look strong but fail in practice.

So evaluation should be close to the real task as much as possible.

## Metrics

The chapter warns against using only one number.

It is better to look at several things together:

- did the task finish?
- was the process reasonable?
- were tools used correctly?
- was too much compute wasted?
- was anything unsafe?

That gives a more complete picture.

## Statistical significance

If success rate goes from 80% to 82%, is that real improvement?

Not always.

You also need to ask:

- is the sample large enough?
- is the variation small enough?
- is the result stable?

That is why statistical significance matters.

## How evaluation helps improvement

Evaluation is not the last step.

It is the feedback loop.

Usually the process is:

1. design a task
2. run evaluation
3. inspect failures
4. find the cause
5. improve prompts, tools, context, or the model
6. test again

That is how the system gets better over time.

## A simple example

If a customer support Agent often mixes up refunds and exchanges, evaluation helps expose that issue.

Then you can ask:

- is the prompt unclear?
- is the knowledge base messy?
- is the tool output unclear?
- or is the model just making the wrong guess?

That gives you a real direction for improvement.

## What you should remember

Agents should not be judged by feeling.

To make the system strong, you need to turn “good or bad” into something measurable, comparable, and repeatable.

## One sentence to remember

Without evaluation, there is no reliable improvement.
