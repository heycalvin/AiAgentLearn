# 05 - Pi Config Skills 速查（来自 realchendahuang/pi-config）

> 来源仓库：[realchendahuang/pi-config](https://github.com/realchendahuang/pi-config)  
> 这份笔记只回答一件事：**这 18 个全局 Skill 各自是干什么的。**

---

## 一、先分清：Plugin vs Skill

| 概念 | 本质 | 作用 |
|------|------|------|
| **Plugin / Extension** | TypeScript 代码 | 给 Pi **加能力**（新工具、拦截事件、改 UI） |
| **Skill** | `SKILL.md` 流程说明 | 教模型 **怎么正确用这些能力**（按需注入上下文） |

可以记成：

- Plugin = 手和眼睛（能做什么）
- Skill = 操作手册（按什么步骤做）

`pi-config` 里很多 Skill 是某个插件包自带的配套说明书，不是另一套独立系统。

---

## 二、18 个 Skill 总表

| # | Skill | 来源包 | 一句话用途 |
|---|-------|--------|------------|
| 1 | `librarian` | pi-web-access | 深挖开源库实现，带 GitHub 永久链接 |
| 2 | `deep-research` | @firstpick/pi-skill-deep-research | 两阶段严谨调研，适合高 stakes 研究 |
| 3 | `chrome-devtools` | 自定义（~/.agents/skills/） | 教模型用 Chrome DevTools MCP 调网页 |
| 4 | `playwright-browser` | pi-playwright | 教模型用 Playwright 做浏览器自动化 |
| 5 | `context-mode` | context-mode | 总说明书：如何把大输出放进沙箱省 token |
| 6 | `ctx-search` | context-mode | 在知识库里全文检索 |
| 7 | `ctx-index` | context-mode | 把文档/网页/会话编入索引 |
| 8 | `ctx-stats` | context-mode | 查看知识库/上下文使用统计 |
| 9 | `ctx-purge` | context-mode | 清理无用索引数据 |
| 10 | `ctx-insight` | context-mode | 从已有上下文提炼洞察 |
| 11 | `ctx-doctor` | context-mode | 检查/修复 context-mode 状态 |
| 12 | `ctx-upgrade` | context-mode | 升级/迁移 context-mode 数据或配置 |
| 13 | `pi-lens-ast-grep` | pi-lens | 用 ast-grep 做结构化搜索/替换 |
| 14 | `pi-lens-lsp-navigation` | pi-lens | 用 LSP 做跳转与诊断导航 |
| 15 | `pi-lens-write-ast-grep-rule` | pi-lens | 编写自定义 ast-grep 规则 |
| 16 | `pi-lens-write-tree-sitter-rule` | pi-lens | 编写 tree-sitter 语法规则 |
| 17 | `pi-subagents` | pi-subagents | 教模型如何编排子代理 |
| 18 | `adapt-ghostty-theme-to-pi` | @victor-software-house/pi-curated-themes | 把 Ghostty 主题迁移成 Pi 主题 |

---

## 三、按使用场景分组详解

### 1. 研究 / 上网查资料

#### `librarian`
- **场景**：你想搞懂某个开源库“内部怎么实现的”
- **做什么**：按研究流程去查源码、文档，并尽量给出可追溯的 GitHub 链接
- **不是什么**：不是普通网页搜索按钮，而是“库研究”工作流

#### `deep-research`
- **场景**：需要多源证据、事实核查的严肃调研
- **做什么**：两阶段研究（收集 → 校验/结构化），强调 schema / policy 约束
- **适合**：技术选型对比、竞品分析、不能靠“模型记忆瞎编”的问题

#### `chrome-devtools`
- **场景**：调试真实网页（DOM、网络、性能、截图）
- **做什么**：告诉模型如何调用 Chrome DevTools MCP 的那套工具
- **依赖**：本机要配好 `chrome-devtools` MCP server

---

### 2. 浏览器自动化

#### `playwright-browser`
- **场景**：打开浏览器点页面、填表、截图、看 console/network
- **做什么**：规范 Playwright 工具的使用步骤与注意点
- **对比**：
  - `chrome-devtools` 更偏“调试现有 Chrome 页面”
  - `playwright-browser` 更偏“自动化驱动浏览器完成流程”

---

### 3. 上下文节省与知识库（context-mode 八件套）

这是 `pi-config` 里最“省 token”的一组。

#### `context-mode`（总入口）
- **核心思想**：大日志、大 diff、大网页不要整份塞进模型上下文
- **做法**：先放进沙箱用代码处理，只把摘要/结论返回给模型
- **体感**：分析很多文件时，上下文占用可以从上百 KB 掉到几 KB 级

#### `ctx-index`
- 建立/更新索引：文档、网页、历史会话等先入库

#### `ctx-search`
- 需要时再检索，而不是每次把资料全塞 prompt

#### `ctx-stats`
- 看索引规模、占用、健康度等统计

#### `ctx-purge`
- 删掉过期/无用数据，防止知识库越积越脏

#### `ctx-insight`
- 对已有材料做归纳提炼（不是裸搜）

#### `ctx-doctor`
- 出问题时做诊断修复（索引异常、配置异常等）

#### `ctx-upgrade`
- 版本升级或数据/配置迁移时用

**记忆口诀**：

```
先 index 入库 → search 按需取 → insight 做总结
出问题 doctor → 太脏了 purge → 升级走 upgrade
日常总原则看 context-mode
```

---

### 4. 代码智能（pi-lens 四件套）

#### `pi-lens-ast-grep`
- 用 AST 级别规则搜索/替换代码
- 比纯文本 `grep` 更准（懂语法结构，不只是字符串）

#### `pi-lens-lsp-navigation`
- 走 LSP：跳定义、查引用、看诊断
- 接近 IDE 里“Go to Definition / Find References”的体验

#### `pi-lens-write-ast-grep-rule`
- 当你要沉淀项目专属代码模式时，教你写 ast-grep 规则

#### `pi-lens-write-tree-sitter-rule`
- 教你写 tree-sitter 相关规则（语法/结构层面的检查或提取）

**什么时候会用到这组**：
- 大规模重构（函数改名、API 迁移）
- 按语法结构找“所有 useEffect 且依赖写错的地方”
- 改完代码先看类型诊断再提交

---

### 5. 多 Agent 协作

#### `pi-subagents`
- **场景**：任务太大，一个代理又研究又写又 review 容易糊
- **做什么**：教模型如何把任务派给子代理
- **常见模式**：
  - **single**：一个子代理独立干一件事
  - **chain**：流水线（研究 → 实现 → review）
  - **parallel**：同类任务并行
  - **async**：后台跑，完成再通知
  - **forked-context**：从父会话 fork 出独立上下文，避免污染主会话

---

### 6. 主题小工具

#### `adapt-ghostty-theme-to-pi`
- 把 Ghostty 终端主题转换成 Pi 能用的主题格式
- 偏审美/体验，不影响 Agent 推理能力

---

## 四、和 Skill 配套、但本身不是 Skill 的能力

这些在 `pi-config` 里很重要，但属于 **插件/MCP**，不要和 Skill 混淆：

| 名称 | 类型 | 干什么 |
|------|------|--------|
| `pi-subagents` | 插件 | 真正提供子代理工具与运行时 |
| `context-mode` | 插件 | 真正提供沙箱与知识库能力 |
| `pi-lens` | 插件 | 真正提供 AST/LSP 等工具 |
| `pi-web-access` | 插件 | 网页搜索、抓取内容 |
| `pi-playwright` | 插件 | Playwright 自动化运行时 |
| `pi-hermes-memory` | 插件 | 跨会话记忆 |
| `pi-goal` / `pi-plan-mode` | 插件 | 目标驱动 / 只读计划模式 |
| `context7` | MCP | 拉第三方库最新文档 |
| `chrome-devtools` | MCP | 远程控制 Chrome 调试 |

关系可以看成：

```text
插件/MCP 提供工具  ──►  Skill 教模型何时、按何流程调用这些工具
```

---

## 五、按学习优先级怎么记

如果你在学 Agent，不建议 18 个平均用力。建议按“概念价值”看：

### P0（最值得先理解）
1. **context-mode 系列** → 上下文工程、省 token、外部记忆
2. **pi-subagents** → 多 Agent 协作
3. **pi-lens 系列** → Coding Agent 如何“结构化理解代码”
4. **librarian / deep-research** → 检索增强与研究型工作流

### P1（工程实用）
5. **playwright-browser / chrome-devtools** → 浏览器工具调用
6. 与 git/PR、todo、statusline 相关的插件（多为插件而非 skill）

### P2（体验向）
7. **adapt-ghostty-theme-to-pi** → 主题迁移

这和本仓库 `notes/ai-agent-book` 的对应关系大致是：

| Skill 组 | 更贴近哪章 |
|----------|------------|
| context-mode | 第 2 章 上下文工程、第 3 章 记忆和知识库 |
| pi-lens | 第 5 章 Coding Agent |
| pi-subagents | 第 10 章 多 Agent 协作 |
| librarian / deep-research / browser | 第 4 章 工具 |

---

## 六、一句话总览

`pi-config` 的 18 个 Skill，本质上是在教 Pi：

1. **怎么省上下文**（context-mode）
2. **怎么看懂并改好代码**（pi-lens）
3. **怎么拆给多个代理**（pi-subagents）
4. **怎么上网研究/操作浏览器**（librarian、deep-research、playwright、chrome-devtools）
5. **怎么把终端主题迁过来**（adapt-ghostty-theme-to-pi）

它们不是模型参数，也不是新模型；  
它们是 **可复用的过程知识**，让同一个底层 Agent Loop 在不同任务上表现得更稳、更专业。
