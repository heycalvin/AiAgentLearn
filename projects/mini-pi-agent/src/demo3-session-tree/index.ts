/**
 * Demo 3: Session Tree（会话树节点与状态回退演练）
 * 演示：Agent 如何在尝试失败后撤销（Undo），并开启新分支重新尝试
 */

export interface TreeNode {
  id: string;
  parentId: string | null;
  role: 'user' | 'assistant' | 'tool';
  content: string;
  children: string[];
}

export class SessionTree {
  private nodes: Map<string, TreeNode> = new Map();
  private currentHeadId: string | null = null;

  addNode(role: 'user' | 'assistant' | 'tool', content: string): string {
    const id = `node_${this.nodes.size + 1}_${role}`;
    const newNode: TreeNode = {
      id,
      parentId: this.currentHeadId,
      role,
      content,
      children: []
    };

    if (this.currentHeadId && this.nodes.has(this.currentHeadId)) {
      this.nodes.get(this.currentHeadId)!.children.push(id);
    }

    this.nodes.set(id, newNode);
    this.currentHeadId = id;
    return id;
  }

  // 沿父关系链往回追溯，形成当前主线的对话历史
  getHistory(): TreeNode[] {
    const history: TreeNode[] = [];
    let curr = this.currentHeadId;
    while (curr && this.nodes.has(curr)) {
      const node = this.nodes.get(curr)!;
      history.unshift(node);
      curr = node.parentId;
    }
    return history;
  }

  // 关键功能：切换游标到历史某个指定节点（撤销 / 探索新分支）
  checkout(nodeId: string) {
    if (this.nodes.has(nodeId)) {
      this.currentHeadId = nodeId;
      console.log(`\n🔀 [SessionTree 游标切换] 已从当前节点撤销/跳转回历史节点: -> "${nodeId}"`);
    } else {
      console.log(`错误: 节点 ${nodeId} 不存在`);
    }
  }

  // 打印当前游标主线上的历史记录
  printCurrentMainline() {
    const history = this.getHistory();
    console.log(`\n=== 当前主线对话历史 (共 ${history.length} 个节点) ===`);
    history.forEach((node, i) => {
      console.log(` [${i + 1}] ID: ${node.id} | Role: ${node.role} | 内容: "${node.content}"`);
    });
    console.log('==================================================\n');
  }
}

// 模拟场景演练
async function runSessionTreeDemo() {
  const tree = new SessionTree();

  console.log('==================================================');
  console.log('🚀 [Demo 3 实战] 会话树分支与状态回退演练');
  console.log('==================================================');

  // 1. 用户提问
  const n1 = tree.addNode('user', '请帮我写一个高效计算斐波那契数列的函数');
  
  // 2. 尝试路线 A（递归算法 - 失败）
  console.log('\n📍 路线 A：Agent 尝试使用【暴力递归】算法...');
  tree.addNode('assistant', '我为你写了一个递归算法 fib(n) = fib(n-1) + fib(n-2)');
  tree.addNode('tool', '[错误]: 执行测试超满 10 秒，计算 fib(50) 发生栈溢出，尝试失败！');

  tree.printCurrentMainline();

  // 3. Agent 发现路线 A 走不通，撤销回初始提问节点 (n1)
  console.log('❌ 【路线 A 失败】：发现性能极差，Agent 决定撤销（Undo），切回起点重新尝试新方案！');
  tree.checkout(n1);

  // 4. 开启路线 B（动态规划 - 成功）
  console.log('\n📍 路线 B（新分支）：Agent 尝试使用【动态规划迭代】算法...');
  tree.addNode('assistant', '改用动态规划数组迭代法，时间复杂度 O(n)');
  tree.addNode('tool', '[成功]: 测试通过！计算 fib(50) 仅用时 2ms！');

  tree.printCurrentMainline();

  console.log('✨ [总结] 会话树让 Agent 可以自由撤销错误的修改，开启新分支尝试，而不会被之前错误的尝试污染上下文！\n');
}

runSessionTreeDemo();
