# 第7章 配套实验

## 先看目标

第7章的实验，重点是把运行经验变成训练材料。

你要看的不是“训练了多少”，而是“训练后有没有更会做事”。

## 你要观察什么

- 哪些成功案例值得保留
- 哪些失败案例要修正
- 数据质量好不好
- 训练后行为有没有变化

## 最小实践

先整理一份很小的训练数据。

```json
[
  {
    "input": "帮我总结今天的会议",
    "output": "下面是简短总结..."
  },
  {
    "input": "帮我查退款规则",
    "output": "退款规则如下..."
  }
]
```

如果你想把它写成 JSONL，可以这样：

```json
{"input":"帮我总结今天的会议","output":"下面是简短总结..."}
{"input":"帮我查退款规则","output":"退款规则如下..."}
```

再用一个小脚本检查格式：

```python
# check_data.py
import json

with open("train.jsonl", "r", encoding="utf-8") as f:
    for line in f:
        item = json.loads(line)
        print(item["input"], "=>", item["output"])
```

运行命令：

```powershell
python .\check_data.py
```

## 推荐练习方式

1. 收集几条 Agent 运行轨迹
2. 标记成功和失败
3. 整理成示范数据
4. 做一次小训练
5. 再用同样任务测试

## 训练前先清洗

训练前你可以先做一个简单过滤。

```python
samples = [
    {"ok": True, "text": "好的示范"},
    {"ok": False, "text": "错误示范"},
]

clean = [s for s in samples if s["ok"]]
print(clean)
```

这样能避免把坏数据直接喂进去。

## 常见问题

- 数据太乱
- 负面样本没处理好
- 目标和真实任务不一致
- 训练后反而学歪了

## 完成标准

如果训练后的 Agent 在同类任务上更稳、更少犯错，就说明这章的实验方向是对的。

## 记住一句话

训练的目标，是让经验留下来，并变成能力。
