/**
 * Demo 3: Session Tree（会话树节点与状态回退）
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
    const id = `node_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
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

  // 沿父关系链路回溯当前对话流
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

  // 回退游标到指定历史节点（实现 Undo / 分支探索）
  checkout(nodeId: string) {
    if (this.nodes.has(nodeId)) {
      this.currentHeadId = nodeId;
      console.log(`[SessionTree] 已将指针成功切回节点: ${nodeId}`);
    }
  }
}

console.log('[Demo 3] Session Tree 交互结构实现完毕。');
