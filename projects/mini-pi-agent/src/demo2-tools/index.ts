/**
 * Demo 2: Core Four Tools（基础工具实现）
 * 演示 read, write, edit, bash 四大工具的核心逻辑
 */

import * as fs from 'fs';
import { execSync } from 'child_process';

export const coreTools = {
  read: (filePath: string): string => {
    if (!fs.existsSync(filePath)) return `错误: 文件 ${filePath} 不存在`;
    return fs.readFileSync(filePath, 'utf-8');
  },

  write: (filePath: string, content: string): string => {
    fs.writeFileSync(filePath, content, 'utf-8');
    return `成功写入文件 ${filePath}`;
  },

  edit: (filePath: string, targetText: string, replacementText: string): string => {
    if (!fs.existsSync(filePath)) return `错误: 文件 ${filePath} 不存在`;
    const original = fs.readFileSync(filePath, 'utf-8');
    if (!original.includes(targetText)) return `错误: 未找到匹配内容`;
    const updated = original.replace(targetText, replacementText);
    fs.writeFileSync(filePath, updated, 'utf-8');
    return `成功替换 ${filePath} 中的指定内容`;
  },

  bash: (command: string): string => {
    try {
      const output = execSync(command, { encoding: 'utf-8', timeout: 10000 });
      return output;
    } catch (err: any) {
      return `命令执行失败: ${err.message}`;
    }
  }
};

console.log('[Demo 2] Core Tools 模块加载成功。已注册: read, write, edit, bash');
