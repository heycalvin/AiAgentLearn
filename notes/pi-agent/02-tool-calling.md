# 02 - Tool Calling（工具调用与双手机制详解）

## 一、 Core Four Tools（四大基础工具哲学）

Pi Agent 的核心哲学是**“极简与组合”**。不同于某些内置几十种复杂 API 的框架，Pi Agent 仅仅依赖 4 个极其基础的原子工具即可完成复杂的软件工程任务：

| 工具 | 原生实现逻辑 (Node.js) | 大模型使用场景 |
| :--- | :--- | :--- |
| **`read`** | `fs.readFileSync(path)` | 查看代码文件、读取配置、检查日志 |
| **`write`** | `fs.writeFileSync(path, content)` | 创建新文件、重写配置、生成新模块 |
| **`edit`** | `fs.readFileSync` + `replace` + `writeFileSync` | 局部精准修改代码、修 Bug、重构函数 |
| **`bash`** | `child_process.execSync(command)` | 执行编译 `tsc`、跑单元测试 `npm test`、查看 git 状态 |

---

## 二、 工具调用的完整生命周期

```text
[1. 定义阶段] Schema 声明 (JSON Schema)
      ↓
[2. 推理阶段] LLM 输出结构化 JSON { toolName: "edit", args: { ... } }
      ↓
[3. 校验阶段] 本地框架解析 JSON，进行路径防翻墙与 Zod 参数校验
      ↓
[4. 执行阶段] 调用 Node.js API 或系统终端 Shell
      ↓
[5. 捕获阶段] 收集 stdout / stderr / 报错堆栈
      ↓
[6. 反馈阶段] 封装为 Observation 填回大模型 Context
```

---

## 三、 为什么 `edit` 比 `write` 更适合代码重构？

* **`write`（全量覆盖）**：对于 1000 行的文件，哪怕只改 1 个变量名，`write` 也需要大模型重新生成整 1000 行代码。这极其消耗 Token，且容易在生成过程中遗漏原有代码。
* **`edit`（局部替换）**：只需要大模型指定 `targetText`（原代码片段）和 `replacementText`（新代码片段）。框架在本地执行精准替换。节省 95% 以上的 Token。

---

## 四、 工具调用的错误自愈机制（Self-Correction）

如果工具执行失败（例如 `read` 找不到文件，或 `bash` 跑测试报错）：
1. 框架**绝不崩溃退出**，而是把错误信息封装为普通的 Observation：
   ```text
   Observation: [错误] 文件 src/user.ts 不存在，请检查路径是否正确。
   ```
2. 大模型在下一轮思考时看到这个报错，会主动触发自愈推导：`“啊，路径写错了，那我先用 bash('dir src') 查一下实际文件列表。”`
