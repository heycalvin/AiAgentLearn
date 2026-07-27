# Chapter 4 Tools

## The main idea

This chapter says something simple but very important:

**If an Agent wants to do real work, it needs tools.**

Without tools, an Agent can only talk.
With tools, it can search, compute, write, send, run, and cooperate.

So tools are not extra features. They are the Agent’s hands and feet.

## Why tools matter

No model knows or does everything by itself.

Real tasks often need actions like:

- checking the weather
- searching the web
- reading and writing files
- sending email
- calling APIs
- running code

That is why tools are essential.

## Three kinds of tools

### 1. Perception tools

Perception tools help the Agent see the outside world.

Examples:

- web search
- file reading
- image understanding
- page scraping

They help the Agent understand what is happening now.

### 2. Execution tools

Execution tools help the Agent actually do something.

Examples:

- writing a file
- sending a message
- calling an API
- creating a task
- placing an order

They turn the Agent from a speaker into a worker.

### 3. Collaboration tools

Collaboration tools help the Agent work with people or other Agents.

Examples:

- handing work to another Agent
- asking a human for confirmation
- sharing task state
- exchanging results

Complex work usually needs teamwork.

## What MCP is

One important term in the chapter is `MCP`.

You can think of it as:

**a standard way to connect tools to an Agent.**

It helps the model understand:

- the tool name
- what the tool does
- what inputs it needs
- what output it returns

Standardization makes tools easier to reuse and easier to scale.

## The basic tool-call loop

A typical tool loop looks like this:

1. the Agent understands the task
2. it decides whether a tool is needed
3. it picks the right tool
4. it sends parameters to the tool
5. the tool returns a result
6. the Agent uses that result for the next step

That loop is one of the core patterns of Agent systems.

## Asynchronous Agents

Some tasks are fast, like checking the weather.

Other tasks are slow, like:

- running a large job
- waiting for an external service
- waiting for human approval

In those cases, async behavior matters.

Async means:

- do not block and wait
- submit the task first
- come back later for the result
- keep doing other work in the meantime

That makes the Agent feel much more like a real work system.

## What makes a good tool

A good tool usually has these traits:

- **one clear job**
- **clear inputs**
- **stable outputs**
- **safe failure handling**
- **proper permissions**

If the tool design is messy, the Agent becomes messy too.

## A simple example

Imagine you ask an Agent to check today’s weather and send a summary to a coworker.

It may:

1. use a weather tool
2. summarize the result
3. use a messaging tool to send it

Now the Agent is not just answering.
It is executing a task.

## What you should remember

Tools decide how much of the real world the Agent can touch.

The model thinks.
The tools act.

Together, they make the Agent useful.

## One sentence to remember

Tools turn an Agent from “able to talk” into “able to get things done.”
