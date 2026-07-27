/**
 * Demo 4: Context Compression（上下文剪枝与压缩演练）
 * 演示：当工具输出了上千行的冗余日志时，Agent 如何进行 Token 剪枝，防止上下文爆掉
 */

export interface Message {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
}

// 模拟上下文剪枝算法
export function compressContext(messages: Message[], maxToolOutputLength = 150): Message[] {
  return messages.map(msg => {
    // 如果是工具返回的结果，并且长度超标，则进行剪枝摘要
    if (msg.role === 'tool' && msg.content.length > maxToolOutputLength) {
      const originalLength = msg.content.length;
      const truncated = msg.content.substring(0, maxToolOutputLength);
      return {
        ...msg,
        content: `${truncated}\n... ✂️ [已自动剪枝: 省略了后续 ${originalLength - maxToolOutputLength} 字符的冗余输出日志]`
      };
    }
    return msg;
  });
}

// 演练场景
async function runCompressionDemo() {
  console.log('==================================================');
  console.log('🚀 [Demo 4 实战] 上下文剪枝与 Token 压缩演练');
  console.log('==================================================\n');

  // 1. 模拟一段包含巨幅终端日志的对话历史
  const hugeLog = Array(50).fill('2026-07-27 INFO [Server] Processing request chunk #998234... OK').join('\n');

  const rawHistory: Message[] = [
    { role: 'system', content: '你是 AI Agent 助手。' },
    { role: 'user', content: '请帮我查看服务器日志是否有异常' },
    { role: 'assistant', content: '正在调用 bash("cat /var/log/server.log")' },
    { role: 'tool', content: hugeLog } // 巨量日志
  ];

  console.log(`👉 【剪枝前】：工具输出的日志长度为 ${hugeLog.length} 字符。`);
  console.log(`   如果直接全量发给大模型，会极大地浪费 Token 费用且容易超出 Context 限制。\n`);

  // 2. 执行上下文剪枝
  const compressedHistory = compressContext(rawHistory, 120);

  console.log(`👉 【剪枝后】：压缩后的上下文消息记录:`);
  console.log('--------------------------------------------------');
  compressedHistory.forEach(msg => {
    console.log(`[${msg.role.toUpperCase()}]: ${msg.content}\n`);
  });
  console.log('--------------------------------------------------');

  console.log('✨ [总结] 上下文剪枝是 Agent 能连续自治运行数小时而不爆 Token 的关键秘密！\n');
}

runCompressionDemo();
