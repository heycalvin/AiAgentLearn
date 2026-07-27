# 第9章 配套实验

## 先看目标

第9章的实验，重点是多模态和实时交互。

你要练的是让 Agent 不只看文字，还能处理语音、图片等信息。

## 你要观察什么

- 输入类型有没有变多
- 响应速度快不快
- 能不能中途被打断
- 输出是不是自然
- 多种输入能不能一起工作

## 最小实践

先写一个支持多种输入的分发函数。

```javascript
// multimodal-demo.js
function handleText(text) {
  return `文字输入：${text}`;
}

function handleImage(path) {
  return `图片输入：${path}`;
}

function handleVoice(text) {
  return `语音转写：${text}`;
}

function dispatch(input) {
  if (input.type === "text") return handleText(input.value);
  if (input.type === "image") return handleImage(input.value);
  if (input.type === "voice") return handleVoice(input.value);
  return "不支持的输入类型";
}

console.log(dispatch({ type: "text", value: "帮我总结" }));
console.log(dispatch({ type: "image", value: "./photo.png" }));
```

运行命令：

```powershell
node .\multimodal-demo.js
```

## 推荐练习方式

1. 先做文字输入
2. 再加图片或语音
3. 观察输出差异
4. 再试实时打断
5. 看系统能否继续跟上

## 实时输出

你还可以模拟流式输出：

```javascript
function streamReply(parts) {
  parts.forEach((part, index) => {
    setTimeout(() => {
      console.log(part);
    }, index * 300);
  });
}

streamReply(["我先看图。", "现在提取重点。", "最后给你总结。"]);
```

## 常见问题

- 延迟太高
- 输入之间切换不顺
- 没有流式输出
- 中途插话后乱掉

## 完成标准

如果 Agent 能处理多种输入，并且在实时交互中保持稳定，就说明这章实验有进展了。

## 记住一句话

输入更多样，交互就更自然。
