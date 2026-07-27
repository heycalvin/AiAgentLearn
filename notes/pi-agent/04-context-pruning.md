# 04 - Context Compression（上下文压缩与剪枝）

## 上下文瓶颈

随着 Agent 跑的时间越来越长，历史对话和工具输出（如大段的终端 log、文件内容）会迅速消耗 Token 上下文窗口。

## 压缩策略

1. **Short System Prompt**：Keep initial system instructions under 1000 tokens.
2. **Tool Result Pruning**：旧工具调用的巨幅日志（如 `cat large_file.log`）在几轮迭代后，被替换为简短摘要。
3. **Rolling Summary**：定期对早期的轮次进行 Summarize 总结，保持最新上下文轻量高效。
