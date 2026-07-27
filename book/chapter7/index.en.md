# Chapter 7 Model Post-Training

## The main idea

This chapter says:

**Turn the experience collected while the Agent runs into abilities that the model itself can learn.**

The earlier chapters focused more on system design.

This chapter takes the next step: write experience back into the model parameters.

## What post-training means

Post-training is simple to understand:

**Start with a base model, then keep training it on task data.**

That makes the model better at the behavior you want.

Common goals include:

- following instructions better
- using tools better
- matching task style
- making fewer common mistakes

## Why Agents are a good source of training data

When an Agent runs in real use, it creates valuable signals:

- what the user asked
- how the model reasoned
- which tools it used
- where it failed
- whether the final result was good

All of that can become training material.

So the Agent system is not only an application layer.
It is also a data source.

## What SFT is

`SFT` can be understood as:

**teaching the model by showing it the right answer pattern.**

For example:

- how to respond
- how to call a tool
- how to format output

If the examples are good, the model learns good behavior more easily.

## What reinforcement learning is

Reinforcement learning can be understood as:

**not giving the model the answer directly, but telling it which behavior is better.**

It is closer to learning by trial and error.

That is useful in Agent work because many tasks do not have one exact answer, but they do have better and worse ways to act.

## Learning from trajectories

When the Agent runs, it produces trajectories.

A trajectory includes:

- what the task was
- how the model thought
- which tools it used
- whether it succeeded

Those traces can be turned into training data so the model learns better steps.

## Data quality matters

Post-training is not just “feed in all logs”.

Bad data teaches bad habits.

So we need to:

- remove low-quality samples
- keep high-value samples
- filter wrong trajectories
- separate success from failure cases

## What gets trained

Post-training usually does not only train knowledge.

It often trains:

- instruction following
- tool use
- reasoning steps
- output style
- safety behavior

In other words, it trains the way the model works.

## Challenges in this chapter

Post-training has several hard problems:

- labeling data is expensive
- reward design is hard
- the training goal may not perfectly match the real task
- optimizing one metric too hard can create side effects

That is why evaluation design matters before training.

## A simple example

If the model often forgets a key parameter before calling a tool, you can collect those failures.

Then you can train with better examples.

After that, the model is more likely to follow the correct steps next time.

## What you should remember

The experience of the Agent should not stay in logs forever.

It should be cleaned, selected, trained on, and turned into the model’s own ability.

## One sentence to remember

The goal of post-training is to turn good system experience into real model capability.
