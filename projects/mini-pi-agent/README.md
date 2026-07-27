# Mini Pi Agent (手搓 Agent 实战项目)

这是一个教学导向的迷你 AI Agent 实现，通过 4 个渐进式 Demo 揭示 Pi Agent 及现代 Coding Agent 的底层思想。

## 项目 Demo 列表

1. **`npm run demo1`**：[Demo 1: Minimal Loop](src/demo1-minimal-loop/index.ts) - 最简 ReAct 循环。
2. **`npm run demo2`**：[Demo 2: Tools Integration](src/demo2-tools/index.ts) - 基础工具调用 (`read`/`write`/`edit`/`bash`)。
3. **`npm run demo3`**：[Demo 3: Session Tree](src/demo3-session-tree/index.ts) - 会话树与状态回退机制。
4. **`npm run demo4`**：[Demo 4: Context Compression](src/demo4-compression/index.ts) - Token 上下文压缩与日志剪枝。

## 运行方式

```bash
# 1. 安装依赖
npm install

# 2. 拷贝并配置环境变量
cp .env.example .env

# 3. 运行任意 Demo
npm run demo1
```
