/**
 * Demo 1: Minimal Agent Loop（最简自治循环示例）
 * 演示：Goal -> LLM Thought -> Action -> Observation Loop 的代码骨架
 */

interface Message {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
}

// 模拟简易 Agent Loop 流程
async function runMinimalAgentLoop(userGoal: string) {
  console.log(`[Agent] 收到目标: "${userGoal}"`);
  
  const history: Message[] = [
    { role: 'system', content: '你是一个极简 AI Agent 助手。' },
    { role: 'user', content: userGoal }
  ];

  let isComplete = false;
  let step = 0;

  while (!isComplete && step < 5) {
    step++;
    console.log(`\n--- 循环 Step ${step} ---`);
    
    // 1. 思考与决策（此处用伪代码模拟 LLM 返回）
    console.log('[Agent] 思考中...');
    
    if (step === 1) {
      console.log('[Agent] 决定调用工具: read_file("src/app.ts")');
      // 模拟工具执行
      const observation = '文件内容: const a = 1;';
      console.log(`[Observation] 工具结果: ${observation}`);
      history.push({ role: 'tool', content: observation });
    } else {
      console.log('[Agent] 任务完成，输出最终回答。');
      isComplete = true;
    }
  }

  console.log('\n[Agent] 自治循环结束。');
}

runMinimalAgentLoop('查看 src/app.ts 的内容并告诉我');
