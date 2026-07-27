# 第8章 配套实验

## 先看目标

第8章的实验，重点是让 Agent 学会持续变好。

你要练的是一个循环：

反馈 -> 更新 -> 再测试 -> 再改进

## 最小实践

先做一个反馈文件。

```json
{
  "last_task": "查退款规则",
  "result": "失败",
  "reason": "知识库没有命中",
  "fix": "补充退款文档"
}
```

写一个小脚本，把失败记录追加进去。

```javascript
// feedback-demo.js
const fs = require("fs");

const log = {
  task: "查退款规则",
  result: "失败",
  reason: "知识库没有命中",
  fix: "补充退款文档",
  time: new Date().toISOString(),
};

fs.appendFileSync("./feedback.jsonl", JSON.stringify(log) + "\n", "utf8");
console.log("反馈已记录");
```

运行命令：

```powershell
node .\feedback-demo.js
```

## 你要观察什么

- 反馈从哪里来
- 哪些规则需要更新
- 哪些记忆需要补充
- 哪些工具需要调整
- 系统有没有越来越稳

## 推荐练习方式

1. 先记录一次失败
2. 找出失败原因
3. 修改规则或记忆
4. 再跑一次同类任务
5. 看是否真的更好

## 更新一个简单规则

```javascript
const rules = {
  replyStyle: "short",
  retryTimes: 2,
  rememberPreference: true,
};

rules.retryTimes = 3;
console.log(rules);
```

这就是“先小改，再验证”的思路。

## 常见问题

- 只改一处，没看整体
- 反馈太少
- 更新后没有复测
- 进化方向不清楚

## 完成标准

如果你能让系统根据反馈做出下一轮改进，就说明你理解了持续进化。

## 记住一句话

持续进化，就是不断修正自己。
