# 🤖 AI Agent 零基础通俗学习与实战库 (AiAgentLearn)

欢迎来到 **AiAgentLearn** 知识库！本仓库专为**零基础小白与开发者**打造，抛弃枯燥晦涩的理论黑话，用最接地气的生活比喻和极简代码，带你彻底搞懂 **AI Agent（智能体）** 的底层原理与实战开发。

---

## 🗺️ 学习路线与知识库目录

### 📖 第一部分：通俗原理精讲 (`notes/`)

* **[🌟 学习路线总览与导航 (Roadmap)](notes/00-learning-roadmap.md)**
* **🐣 模块 1：建立直观认知**
  * [01. 什么是 AI Agent？（大模型 vs 智能体）](notes/01-concepts/01-what-is-agent.md)
  * [02. Agent 的四大核心部件（大脑、手脚、记事本、监工）](notes/01-concepts/02-four-components.md)
* **⚙️ 模块 2：搞懂核心运转机制**
  * [01. Agent 是怎么自主干活的？（想-做-看-纠错循环）](notes/02-mechanisms/01-agent-loop.md)
  * [02. 给 Agent 装上手脚（工具调用与 MCP 协议）](notes/02-mechanisms/02-tools-and-mcp.md)
  * [03. 给 Agent 装上记事本（记忆系统与知识库 RAG）](notes/02-mechanisms/03-memory-and-rag.md)
  * [04. 怎样把信息喂给 Agent？（上下文工程与 Token 剪枝）](notes/02-mechanisms/04-context-engineering.md)
* **🚀 模块 3：进阶场景**
  * [01. 像程序员一样修 Bug 的 Coding Agent](notes/03-advanced/01-coding-agent.md)
  * [02. 多 Agent 团队分工协作 (Multi-Agent)](notes/03-advanced/02-multi-agent.md)

---

### 💻 第二部分：手搓 Mini Pi Agent 代码实战 (`projects/`)

* **🛠 Mini Pi Agent (TypeScript 实战)** ([projects/mini-pi-agent](projects/mini-pi-agent))
  * **Demo 1**: [最简 Agent Loop 循环](projects/mini-pi-agent/src/demo1-minimal-loop/index.ts) —— 30 行代码看懂自主闭环
  * **Demo 2**: [Core Four Tools 实现 (read/write/edit/bash)](projects/mini-pi-agent/src/demo2-tools/index.ts) —— 给 Agent 装上四只手脚
  * **Demo 3**: [Session Tree 状态回溯与分支](projects/mini-pi-agent/src/demo3-session-tree/index.ts) —— 允许 Agent 后悔的时光机
  * **Demo 4**: [Token 剪枝与上下文压缩策略](projects/mini-pi-agent/src/demo4-compression/index.ts) —— 让 Agent 长久对话不糊涂

---

## 🚀 快速上手运行

```bash
# 1. 进入实战项目
cd projects/mini-pi-agent

# 2. 安装依赖
npm install

# 3. 运行 Demo 1 体验 Agent 闭环
npm run demo1
```
