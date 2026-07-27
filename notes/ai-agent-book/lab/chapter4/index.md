# 第4章 配套实验

## 先看目标

第4章的实验，重点是让 Agent 学会调用工具。

你要看的不是工具本身有多炫，而是 Agent 会不会：

- 选对工具
- 传对参数
- 看懂返回结果
- 出错后继续处理

## 最小实践

先做一个假的工具注册表。

```javascript
// tool-demo.js
const tools = {
  weather(city) {
    return `${city} 今天晴，25°C`;
  },
  calc(a, b) {
    return a + b;
  },
};

function callTool(name, args) {
  if (!tools[name]) {
    return `没有这个工具：${name}`;
  }
  return tools[name](...args);
}

console.log(callTool("weather", ["北京"]));
console.log(callTool("calc", [3, 5]));
```

运行命令：

```powershell
node .\tool-demo.js
```

## 你要观察什么

- 工具接口是否清楚
- 参数是否容易传错
- 返回值是否稳定
- 失败时会不会卡住
- 多个工具能不能串起来

## 推荐练习方式

1. 先接一个最简单的工具
2. 让 Agent 调一次
3. 再加第二个工具
4. 让它把结果接起来
5. 再试一次失败场景

## 串联工具

你还可以把工具接起来。

```javascript
function summarizeWeather(text) {
  return `天气摘要：${text}`;
}

const weatherText = callTool("weather", ["上海"]);
console.log(summarizeWeather(weatherText));
```

如果要模拟失败场景，可以这样写：

```javascript
console.log(callTool("unknown", []));
```

## 常见问题

- 工具名字不清楚
- 输入格式太复杂
- 返回结果太乱
- 没有失败处理

## 完成标准

如果 Agent 能稳定调用工具，并且把工具结果用起来，就说明这章实验基本掌握了。

## 记住一句话

工具接得好，Agent 才真的能办事。
