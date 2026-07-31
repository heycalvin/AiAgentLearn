# AI Agent 学习与实战知识库 (AiAgentLearn)

欢迎来到 **AiAgentLearn** 知识库！本仓库旨在帮助开发者全方位掌握 AI Agent（智能体）的底层原理、系统架构与实战开发。

---

## 📂 仓库目录导航

### 1. 📖 理论与读书笔记 (`notes/`)

* **《深入理解 AI Agent》通俗笔记** ([notes/ai-agent-book](notes/ai-agent-book))
  * [引言](notes/ai-agent-book/book/introduction/index.md)
  * [第 1 章 Agent 基础知识](notes/ai-agent-book/book/chapter1/index.md)
  * [第 2 章 上下文工程](notes/ai-agent-book/book/chapter2/index.md)
  * [第 3 章 用户记忆和知识库](notes/ai-agent-book/book/chapter3/index.md)
  * [第 4 章 工具](notes/ai-agent-book/book/chapter4/index.md)
  * [第 5 章 Coding Agent 与代码生成](notes/ai-agent-book/book/chapter5/index.md)
  * [第 6 章 Agent 的评估](notes/ai-agent-book/book/chapter6/index.md)
  * [第 7 章 模型后训练](notes/ai-agent-book/book/chapter7/index.md)
  * [第 8 章 Agent 的持续进化](notes/ai-agent-book/book/chapter8/index.md)
  * [第 9 章 多模态与实时交互](notes/ai-agent-book/book/chapter9/index.md)
  * [第 10 章 多 Agent 协作](notes/ai-agent-book/book/chapter10/index.md)
  * [配套实验笔记](notes/ai-agent-book/lab/)

* **⚡ 手搓 Pi Agent 原理解析** ([notes/pi-agent](notes/pi-agent))
  * [01. Agent Loop（自治循环原理）](notes/pi-agent/01-agent-loop.md)
  * [02. Tool Calling（工具调用与执行机制）](notes/pi-agent/02-tool-calling.md)
  * [03. Session Tree（会话树与历史回退）](notes/pi-agent/03-session-tree.md)
  * [04. Context Compression（上下文压缩与剪枝）](notes/pi-agent/04-context-pruning.md)
  * [05. Pi Config Skills 速查（18 个 Skill 用途）](notes/pi-agent/05-pi-config-skills.md)

---

### 2. 💻 代码实战与 Demo (`projects/`)

* **🛠 Mini Pi Agent (TypeScript 实战)** ([projects/mini-pi-agent](projects/mini-pi-agent))
  * **Demo 1**: [最简 Agent Loop](projects/mini-pi-agent/src/demo1-minimal-loop/index.ts)
  * **Demo 2**: [Core Four Tools 实现 (read/write/edit/bash)](projects/mini-pi-agent/src/demo2-tools/index.ts)
  * **Demo 3**: [Session Tree 状态回溯与分支](projects/mini-pi-agent/src/demo3-session-tree/index.ts)
  * **Demo 4**: [Token 剪枝与上下文压缩策略](projects/mini-pi-agent/src/demo4-compression/index.ts)

---

## 🚀 快速开始

```bash
# 克隆仓库
git clone <your-repo-url>
cd AiAgentLearn

# 体验手搓 Mini Pi Agent
cd projects/mini-pi-agent
npm install
npm run demo1
```
