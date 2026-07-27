# 第3章 配套实验

## 先看目标

第3章的实验，重点是让 Agent 记住用户，并且能从知识库里找资料。

这章要练的是两件事：

- 记住长期信息
- 找到正确知识

## 最小实践

先做一个简单记忆文件。

```json
{
  "user_name": "Alex",
  "preference": {
    "reply_style": "short",
    "seat": "window",
    "diet": "vegetarian"
  }
}
```

然后用一个小脚本读取它。

```javascript
// memory-demo.js
const fs = require("fs");

const memory = JSON.parse(fs.readFileSync("./memory.json", "utf8"));

function getUserPreference(key) {
  return memory.preference[key];
}

console.log("reply_style =", getUserPreference("reply_style"));
```

运行命令：

```powershell
node .\memory-demo.js
```

## 你要观察什么

- 用户偏好怎么保存
- 记忆什么时候更新
- 知识库怎么查
- 检索结果准不准
- 记忆和知识库怎么配合

## 推荐练习方式

1. 先存一条简单记忆
2. 再读出来验证
3. 再加一条新记忆，看会不会覆盖旧内容
4. 准备一份资料库
5. 测试 Agent 能不能从资料里找到正确答案

## 知识库小实验

准备一个简单资料文件。

```md
# refund.md

退款规则：
- 7天内可申请
- 已发货订单需先联系客服
- 活动商品可能不支持退款
```

再写一个最简单的检索函数：

```javascript
function searchDoc(text, keyword) {
  return text.includes(keyword) ? "找到相关内容" : "没有找到";
}

const doc = "退款规则：7天内可申请。已发货订单需先联系客服。";
console.log(searchDoc(doc, "7天内"));
```

## 常见问题

- 记忆存了但找不到
- 资料切分太碎
- 检索结果不相关
- 记忆和知识冲突

## 完成标准

如果 Agent 能记住用户偏好，并且能从知识库里找到正确内容，就说明这章的实验做通了。

## 记住一句话

记忆负责记住人，知识库负责找到知识。
