# 第1章 配套实验

## 先看目标

第1章的实验，重点是把最核心的公式跑起来：

`Agent = LLM + 上下文 + 工具`

你不需要一开始就做很复杂的系统。
先把最小版本跑通，再慢慢加功能。

## 最小实践

先做一个最小版 Agent。它不用真的接大模型，先用一个“假模型”理解流程。

```javascript
// demo.js
function agent(input, context, tool) {
  const thought = `我先理解任务：${input}`;
  const action = "use_tool";
  const result = tool(input);

  return {
    thought,
    context,
    action,
    result,
  };
}

function summarize(text) {
  return `总结：${text.slice(0, 8)}...`;
}

console.log(agent("帮我总结今天的会议内容", { tone: "short" }, summarize));
```

运行命令：

```powershell
node .\demo.js
```

## 你要观察什么

- 模型怎么理解任务
- 上下文怎么影响结果
- 工具怎么让 Agent 真正做事
- 没有工具时，Agent 会卡在哪里

## 推荐练习方式

1. 先做一个最简单的 Agent
2. 让它回答一个固定任务
3. 再加一个工具
4. 观察结果有没有变稳
5. 再尝试加一点上下文

## 进阶一点

把上下文改成对象，看看输出会不会更清楚。

```javascript
const context = {
  role: "assistant",
  style: "short",
  userPreference: "先给结论",
};

console.log(agent("帮我总结今天的会议内容", context, summarize));
```

你也可以把 `summarize` 换成别的工具，比如：

- `search`
- `translate`
- `calc`

## 常见问题

- 只会回答，不会行动
- 上下文太乱
- 工具参数不清楚
- 输出看起来对，但其实没有真正执行

## 完成标准

如果你的 Agent 能理解任务、调用工具、并把结果整理出来，就说明这章的实验已经入门成功。

## 记住一句话

实验不是为了炫技，而是为了把“Agent 会做事”真正做出来。
