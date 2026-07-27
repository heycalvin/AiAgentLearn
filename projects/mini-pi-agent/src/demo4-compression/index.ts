/**
 * Demo 4: Context Compression（上下文剪枝与压缩示例）
 */

export interface Message {
  role: string;
  content: string;
}

export function pruneToolResults(messages: Message[], maxResultLength = 200): Message[] {
  return messages.map(msg => {
    if (msg.role === 'tool' && msg.content.length > maxResultLength) {
      return {
        ...msg,
        content: msg.content.substring(0, maxResultLength) + `\n... [已剪枝: 过滤超出 ${maxResultLength} 字符的冗余输出]`
      };
    }
    return msg;
  });
}

console.log('[Demo 4] Context Pruning 策略加载完成。');
