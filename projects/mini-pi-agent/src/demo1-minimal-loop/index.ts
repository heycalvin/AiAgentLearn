/**
 * Demo 1: Minimal Agent Loop（最简自治循环示例 - 升级版）
 * 演示：Goal -> LLM Thought -> Action -> Observation Loop
 */

interface Message {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
}

// 模拟大模型的“思考与决策”函数（根据输入的 history 决定下一步）
function simulateLLMThought(history: Message[]) {
  const lastMessage = history[history.length - 1];

  console.log('[LLM 大脑] 正在分析当前历史上下文...');
  console.log(`[LLM 大脑] 收到上一条信息 (${lastMessage.role}): "${lastMessage.content}"`);

  // 1. 如果用户刚刚提出了需求，且还没有调过工具
  if (lastMessage.role === 'user') {
    console.log('[LLM 推理] 结论：我不知道文件内容，必须先调用 read_file 工具！');
    return {
      type: 'tool_call',
      toolName: 'read_file',
      args: { path: 'src/app.ts' }
    };
  }

  // 2. 如果收到的是工具返回的结果 (Observation)
  if (lastMessage.role === 'tool') {
    console.log('[LLM 推理] 结论：我已经拿到了工具返回的文件内容，不需要再调工具了，可以直接回答用户！');
    return {
      type: 'finish',
      answer: `我已经帮你查看了文件，内容是：${lastMessage.content}`
    };
  }

  return { type: 'finish', answer: '无更多操作' };
}

// Agent 主循环
async function runMinimalAgentLoop(userGoal: string) {
  console.log(`\n========================================`);
  console.log(`[Agent 启动] 收到用户目标: "${userGoal}"`);
  console.log(`========================================`);

  const history: Message[] = [
    { role: 'system', content: '你是一个极简 AI Agent 助手。' },
    { role: 'user', content: userGoal }
  ];

  let isComplete = false;
  let step = 0;

  // Agent 核心 while 循环
  while (!isComplete && step < 5) {
    step++;
    console.log(`\n>>> 【循环 Step ${step}】 <<<`);

    // 1. 调用 LLM 决策（思考）
    const decision = simulateLLMThought(history);

    // 2. 根据决策执行动作
    if (decision.type === 'tool_call') {
      console.log(`\n[Agent 动作] 执行工具: ${decision.toolName}(${JSON.stringify(decision.args)})`);
      
      // 模拟工具真实返回结果
      const observation = 'const a = 1;';
      console.log(`[Agent 观察] 工具返回结果 (Observation): "${observation}"`);

      // 3. 把观察结果存入 history（供下一轮 LLM 思考）
      history.push({ role: 'tool', content: observation });

    } else if (decision.type === 'finish') {
      console.log(`\n[Agent 最终回答]: "${decision.answer}"`);
      isComplete = true; // 退出 while 循环
    }
  }

  console.log('\n========================================');
  console.log('[Agent 结束] 自治循环完成！');
  console.log('========================================\n');
}

// 启动测试
runMinimalAgentLoop('查看 src/app.ts 的内容并告诉我');
