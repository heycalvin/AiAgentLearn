# 02 - Tool Calling（工具调用与执行）

## Core Four Tools（四大核心工具）

Pi Agent 的核心哲学是**极简与组合**。它仅提供 4 个基础工具：

| 工具名称 | 功能描述 | 典型场景 |
| :--- | :--- | :--- |
| `read` | 读取文件内容 | 查看代码结构、配置文件、报错位置 |
| `write` | 创建或重写文件 | 创建新模块、生成测试文件 |
| `edit` | 精准替换代码片段 | 修复 bug、局部重构、添加函数 |
| `bash` | 执行终端 Shell 命令 | 运行 `npm test`、`git status`、`tsc` |

## 工具调用工作原理

1. **Schema 申明**：通过 JSON Schema 描述每个工具的入参和作用。
2. **LLM 响应解析**：解析模型返回的 `tool_calls`（例如 `name: "edit", arguments: { path: "src/app.ts", ... }`）。
3. **安全校验与执行**：本地捕获指令，校验路径权限后在本地 Runtime 运行。
4. **结果回传**：将工具执行的 `stdout` / `stderr` / 文件内容作为 Observation 反馈给大模型。
