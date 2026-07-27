/**
 * Demo 2: Core Four Tools 真实动效演练
 * 演示：Agent 如何真正使用 read, write, edit, bash 对真实文件和系统发起操作
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// 1. 定义 4 大核心工具的真实实现
export const coreTools = {
  read: (filePath: string): string => {
    if (!fs.existsSync(filePath)) return `错误: 文件 ${filePath} 不存在`;
    return fs.readFileSync(filePath, 'utf-8');
  },

  write: (filePath: string, content: string): string => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, content, 'utf-8');
    return `[成功] 文件 ${filePath} 写入完成 (${content.length} 字节)`;
  },

  edit: (filePath: string, targetText: string, replacementText: string): string => {
    if (!fs.existsSync(filePath)) return `错误: 文件 ${filePath} 不存在`;
    const original = fs.readFileSync(filePath, 'utf-8');
    if (!original.includes(targetText)) return `错误: 未在文件 ${filePath} 中找到匹配文本 "${targetText}"`;
    const updated = original.replace(targetText, replacementText);
    fs.writeFileSync(filePath, updated, 'utf-8');
    return `[成功] 已将 "${targetText}" 替换为 "${replacementText}"`;
  },

  bash: (command: string): string => {
    try {
      const output = execSync(command, { encoding: 'utf-8', timeout: 5000 });
      return output.trim();
    } catch (err: any) {
      return `[执行失败]: ${err.message}`;
    }
  }
};

// 2. 模拟一个 Agent 使用这 4 个真实工具完成“新建文件 -> 替换内容 -> 执行命令”的全过程
async function runRealToolsDemo() {
  const testFile = path.join(__dirname, 'hello-agent.txt');

  console.log('==================================================');
  console.log('🚀 [Demo 2 实战] Agent 真实工具调用演练');
  console.log('==================================================\n');

  // 动作 1: Agent 使用 write 工具新建文件
  console.log('👉 【步骤 1】Agent 决定调用 `write` 创建测试文件...');
  const res1 = coreTools.write(testFile, 'Hello, World!\nThis is a test line.');
  console.log(`> 工具输出: ${res1}\n`);

  // 动作 2: Agent 使用 read 工具查看刚刚创建的文件
  console.log('👉 【步骤 2】Agent 决定调用 `read` 查看该文件内容...');
  const res2 = coreTools.read(testFile);
  console.log(`> 文件读取结果:\n--------------------\n${res2}\n--------------------\n`);

  // 动作 3: Agent 使用 edit 工具把 "World" 替换为 "Pi Agent"
  console.log('👉 【步骤 3】Agent 决定调用 `edit` 局部重构文本...');
  const res3 = coreTools.edit(testFile, 'World', 'Pi Agent');
  console.log(`> 工具输出: ${res3}`);
  console.log(`> 再次读取验证新内容:\n--------------------\n${coreTools.read(testFile)}\n--------------------\n`);

  // 动作 4: Agent 使用 bash 工具运行 Shell 命令
  console.log('👉 【步骤 4】Agent 决定调用 `bash` 运行系统终端命令查看目录...');
  const command = process.platform === 'win32' ? 'dir' : 'ls -l';
  const res4 = coreTools.bash(command);
  console.log(`> 终端命令 (${command}) 返回结果 (截取前200字符):\n${res4.substring(0, 200)}...\n`);

  // 清理临时文件
  if (fs.existsSync(testFile)) fs.unlinkSync(testFile);

  console.log('==================================================');
  console.log('✨ [Demo 2 完成] 4 大工具全部在你的真实本地文件系统中跑通！');
  console.log('==================================================\n');
}

runRealToolsDemo();
