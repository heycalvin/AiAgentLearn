# 第10章 配套实验

## 先看目标

第10章的实验，重点是让多个 Agent 一起工作。

你要观察的不是“有没有很多 Agent”，而是“它们合作得好不好”。

## 你要观察什么

- 角色分得清不清楚
- 信息传递顺不顺
- 会不会重复劳动
- 会不会互相冲突
- 任务有没有按时结束

## 最小实践

先写一个简单的多 Agent 流水线。

```javascript
// multi-agent-demo.js
function planner(task) {
  return {
    task,
    steps: ["收集资料", "整理内容", "检查结果"],
  };
}

function executor(plan) {
  return plan.steps.map((step) => `已完成：${step}`);
}

function reviewer(results) {
  return results.every((item) => item.includes("已完成"));
}

const plan = planner("写市场分析");
const results = executor(plan);
const ok = reviewer(results);

console.log(plan);
console.log(results);
console.log("review =", ok);
```

运行命令：

```powershell
node .\multi-agent-demo.js
```

## 推荐练习方式

1. 先定义几个角色
2. 让每个角色只做一件事
3. 让它们传递中间结果
4. 再让一个 Agent 汇总
5. 最后检查协作是否顺畅

## 再加一步

你可以让一个 Agent 负责总结：

```javascript
function coordinator(results) {
  return {
    summary: results.join(" | "),
    status: "done",
  };
}

const results2 = [
  "已完成：收集资料",
  "已完成：整理内容",
  "已完成：检查结果",
];

console.log(coordinator(results2));
```

## 常见问题

- 角色不清楚
- 结果重复
- 一直讨论不结束
- 最后答案不一致

## 完成标准

如果多个 Agent 能按分工完成一个复杂任务，并且结果能顺利汇总，就说明你已经理解多 Agent 协作了。

## 记住一句话

多 Agent 不是堆人数，而是做清楚分工和协作。
