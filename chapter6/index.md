# 第6章 配套实验

## 先看目标

第6章的实验，重点是给 Agent 做评估。

你要学会把“感觉不错”变成“有证据不错”。

## 你要观察什么

- 任务有没有完成
- 结果对不对
- 出错有多频繁
- 不同版本差多少
- 测试结果稳不稳定

## 最小实践

先做一个简单的评估表。

```javascript
// eval-demo.js
const cases = [
  { task: "总结会议", success: true },
  { task: "查退款规则", success: true },
  { task: "生成代码", success: false },
];

const successCount = cases.filter((c) => c.success).length;
const rate = successCount / cases.length;

console.log("成功率 =", rate);
```

运行命令：

```powershell
node .\eval-demo.js
```

## 推荐练习方式

1. 先准备一组固定任务
2. 设定几个评价标准
3. 跑一次基线版本
4. 跑一次改进版本
5. 对比结果

## 对比版本

你也可以比较两个版本的结果。

```javascript
const v1 = [true, false, true, true];
const v2 = [true, true, true, true];

function successRate(list) {
  return list.filter(Boolean).length / list.length;
}

console.log("v1 =", successRate(v1));
console.log("v2 =", successRate(v2));
```

如果 `v2` 更高，就说明改动可能有效。

## 常见问题

- 只看一个分数
- 任务样本太少
- 任务设计太简单
- 结果波动太大

## 完成标准

如果你能比较两个版本，并说清楚差异在哪里，就说明你开始会做 Agent 评估了。

## 记住一句话

没有评估，优化就没方向。
