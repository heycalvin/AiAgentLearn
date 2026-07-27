# 第2章 配套实验

## 先看目标

第2章的实验，重点是观察上下文怎么影响 Agent。

你要练的不是“多塞内容”，而是“把对的信息放对地方”。

## 最小实践

先对比两种上下文写法。

```javascript
// demo.js
function buildPrompt(context, userInput) {
  return [
    `系统规则：${context.system}`,
    `用户偏好：${context.preference}`,
    `当前任务：${context.task}`,
    `用户输入：${userInput}`,
  ].join("\n");
}

const contextA = {
  system: "你是一个客服助手。",
  preference: "回答要简短。",
  task: "帮助用户找退款规则。",
};

console.log(buildPrompt(contextA, "我怎么申请退款？"));
```

运行命令：

```powershell
node .\demo.js
```

## 你要观察什么

- 系统提示词怎么影响输出
- 对话历史加进去后会发生什么
- 信息顺序变了，结果会不会变
- 上下文太长时，模型会不会变慢或变乱

## 推荐练习方式

1. 先用很短的上下文做一次
2. 再加上系统规则
3. 再加上历史对话
4. 再加入任务状态或记忆
5. 对比每一步的输出差异

## 对比实验

把顺序改一下，再看结果。

```javascript
function buildPromptWrong(context, userInput) {
  return [
    `用户输入：${userInput}`,
    `系统规则：${context.system}`,
    `用户偏好：${context.preference}`,
    `当前任务：${context.task}`,
  ].join("\n");
}

console.log(buildPromptWrong(contextA, "我怎么申请退款？"));
```

你会发现，信息顺序会影响模型更容易先注意到什么。

## 常见问题

- 上下文太长
- 规则写得不清楚
- 重要信息放在很后面
- 把无关内容也塞进去

## 完成标准

如果你能看出“加什么信息会更好、删什么信息会更稳”，就说明你开始理解上下文工程了。

## 记住一句话

上下文处理得好，Agent 才会更稳、更准。
