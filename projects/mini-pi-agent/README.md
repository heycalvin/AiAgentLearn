# Mini Pi Agent (手搓 Agent 实战项目)

这是一个教学导向的迷你 AI Agent 实现，通过 4 个渐进式 Demo 揭示 Pi Agent 及现代 Coding Agent 的底层思想。

> 💡 **零门槛说明**：本项目的 Demo 1 ~ Demo 4 采用模拟逻辑（Mock Loop）拆解核心流程，**不需要配置任何真实 API Key** 即可直接运行调试！

## 项目 Demo 列表

1. **`npm run demo1`**：[Demo 1: Minimal Loop](src/demo1-minimal-loop/index.ts) - 最简 ReAct 循环。
2. **`npm run demo2`**：[Demo 2: Tools Integration](src/demo2-tools/index.ts) - 基础工具调用 (`read`/`write`/`edit`/`bash`)。
3. **`npm run demo3`**：[Demo 3: Session Tree](src/demo3-session-tree/index.ts) - 会话树与状态回退机制。
4. **`npm run demo4`**：[Demo 4: Context Compression](src/demo4-compression/index.ts) - Token 上下文压缩与日志剪枝。

## 运行方式

```bash
# 1. 进入项目目录并安装依赖
cd projects/mini-pi-agent
npm install

# 2. 直接运行任意 Demo（无需 API Key）
npm run demo1
```

*(注：如需未来接入真实大模型 API，可参考 [.env.example](.env.example) 配置文件)*
