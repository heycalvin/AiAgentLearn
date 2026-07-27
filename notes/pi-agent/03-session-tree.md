# 03 - Session Tree（会话树与历史管理）

## 为什么需要会话树？

传统的对话窗口是线性数组（Array）。一旦 Agent 改错了代码或走入了死胡同，简单的线性历史无法支持“撤销到步骤 3 并尝试另一种解法”。

会话树（Session Tree）将对话建模为一棵树：
* **节点 (Node)**：包含单次 Turn（User Prompt、Model Thought、Tool Result）。
* **父子关系 (Parent-Child)**：记录状态派生关系。
* **分支 (Branching)**：随时回退到历史父节点，衍生出新的尝试分支。

```text
[Root: 用户初始需求]
   └── [Step 1: 读文件]
        └── [Step 2: 方案 A 修改代码 (失败)]
        └── [Step 2': 方案 B 修改代码 (成功)] 👈 撤销并分支
```
