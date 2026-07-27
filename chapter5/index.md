# 第5章 配套实验

## 先看目标

第5章的实验，重点是让 Agent 进入代码世界。

你要练的是：

- 读懂项目
- 找到要改的地方
- 做出修改
- 跑测试验证

## 最小实践

先写一个“会改文件”的小脚本。

```javascript
// edit-demo.js
const fs = require("fs");

const path = "./note.txt";
const oldText = fs.existsSync(path) ? fs.readFileSync(path, "utf8") : "";
const newText = oldText + "\n这是一条新修改。";

fs.writeFileSync(path, newText, "utf8");
console.log("文件已更新");
```

运行命令：

```powershell
node .\edit-demo.js
```

再验证文件内容：

```powershell
Get-Content .\note.txt
```

## 你要观察什么

- 它能不能看懂文件结构
- 它会不会改错文件
- 它会不会漏掉测试
- 它能不能根据报错继续修

## 推荐练习方式

1. 先让 Agent 看一个小项目
2. 让它解释结构
3. 再让它改一个很小的功能
4. 跑测试
5. 再修一次错误

## 再进一步

你可以模拟一个“修 bug”的流程。

```javascript
function add(a, b) {
  return a + b;
}

function testAdd() {
  if (add(1, 2) !== 3) {
    throw new Error("add() 出错了");
  }
  console.log("测试通过");
}

testAdd();
```

运行命令：

```powershell
node .\edit-demo.js
```

## 常见问题

- 只会写代码，不会验证
- 改动太大
- 没有理解依赖关系
- 只看表面，没看真实结果

## 完成标准

如果 Agent 能完成一个小修改，并且知道怎么验证结果，就说明它开始像一个真正的 Coding Agent 了。

## 记住一句话

会看项目、会改项目、会验证项目，才算像样的 Coding Agent。
