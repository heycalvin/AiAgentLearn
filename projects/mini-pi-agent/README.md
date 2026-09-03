# 🛠️ Mini Pi Agent (零基础手搓智能体实战项目)

欢迎来到 **Mini Pi Agent** 实战演练场！  
这里抛弃了一切臃肿的外部三方框架（如 LangChain、LlamaIndex），用最纯粹、最透明的 TypeScript 原生代码，带你一步步手搓属于你自己的 AI Agent。

> 💡 **小白零门槛承诺**：  
> 本项目的所有 Demo（包括大结局 Demo 5）均原生内置**智能模拟模式**，**无需配置任何 API Key，不用花一分钱，本地安装即可 100% 跑通！**  
> （当然，如果你手头有 DeepSeek / Qwen / OpenAI 的 API Key，也可以通过 `.env` 随时无缝接入真实大模型驱动！）

---

## 🎯 五大渐进式 Demo 清单

| 实战编号 | 演示主题 | 揭秘的核心知识点 | 运行命令 |
| :--- | :--- | :--- | :--- |
| **Demo 1** | [最简 Agent Loop 循环](src/demo1-minimal-loop/index.ts) | 30 行代码看懂 `while(true)`、Think $\to$ Act $\to$ Observe 闭环 | `npm run demo1` |
| **Demo 2** | [Core Four 真实核心工具](src/demo2-tools/index.ts) | 让 Agent 真实操作电脑本地文件的四大金刚：`read`, `write`, `edit`, `bash` | `npm run demo2` |
| **Demo 3** | [Session Tree 会话树](src/demo3-session-tree/index.ts) | 允许 Agent “做错事一键后悔”的分支回溯时光机 | `npm run demo3` |
| **Demo 4** | [Context 上下文剪枝](src/demo4-compression/index.ts) | 巨量终端日志如何“掐头去尾”，防止 Token 撑爆模型 | `npm run demo4` |
| 🌟 **Demo 5** | **[完整手搓 Mini Pi Agent CLI](src/demo5-mini-pi-cli/index.ts)** | **四大器官终极合体**：大脑+手脚+记事本+监工，实弹演练写代码与自动纠错自愈 | `npm run demo5` |

---

## 🚀 快速上手体验

### 1. 安装依赖（仅需执行一次）
```bash
cd projects/mini-pi-agent
npm install
```

### 2. 逐一运行体验

```bash
# 体验 1：看看 Agent 最核心的循环是怎么转圈的
npm run demo1

# 体验 2：看看 Agent 是怎么调用真实磁盘文件的
npm run demo2

# 体验 3：看看 Agent 如何回退撤销失败的分支
npm run demo3

# 体验 4：看看几千行日志是如何被优雅压缩剪枝的
npm run demo4

# 🌟 体验 5 (重头戏)：运行完整的自主编程与自愈修复 Agent！
npm run demo5
```

---

## 🔬 Demo 5 的自主排错自愈全流程

当你运行 `npm run demo5` 时，你会亲眼见证现代 Coding Agent 的完整生命周期：

```mermaid
sequenceDiagram
    autonumber
    participant Agent as 🤖 Mini Pi Agent
    participant Disk as 💻 本地磁盘与终端环境

    Agent->>Disk: 【第 1 步·写代码】write_file 创建 calculator.ts（故意写错一个减号）
    Disk-->>Agent: 写入成功
    
    Agent->>Disk: 【第 2 步·跑测试】bash 执行 npx ts-node 运行单元测试
    Disk-->>Agent: ❌ 捕获到真实报错: add(2,3) 期望 5 但得到 -1 (中段日志自动剪枝)
    
    Note over Agent: 🧠 大脑反思自愈:<br/>发现加法写成了减法，立即调用 edit_file 局部修复！
    
    Agent->>Disk: 【第 3 步·局部修复】edit_file 将 "return a - b;" 精准替换为 "return a + b;"
    Disk-->>Agent: 替换成功
    
    Agent->>Disk: 【第 4 步·再次验证】bash 重新执行单元测试
    Disk-->>Agent: ✅ 捕获到绿色通过: "所有测试通过 (2 passed)"
    
    Note over Agent: 🎯 验收通过，退出循环交付成果！
```

---

## ⚙️ 接入真实大模型（可选进阶）

如果你想要用真实的在线大模型（如 DeepSeek-V3 或 Qwen）来驱动 Agent：
1. 复制 `.env.example` 为 `.env`：
   ```bash
   cp .env.example .env
   ```
2. 在 `.env` 中填入你的密钥与地址：
   ```env
   OPENAI_API_KEY=sk-your-real-api-key
   OPENAI_BASE_URL=https://api.deepseek.com/v1
   ```
3. 重新运行 `npm run demo5`，即可体验真实大模型推理！
