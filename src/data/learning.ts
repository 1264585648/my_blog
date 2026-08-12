export type LearningStatus = 'todo' | 'current' | 'done';

export type LearningTopic = {
  index: string;
  title: string;
  zh: string;
  description: string;
  href?: string;
  status?: LearningStatus;
};

export type LearningPhase = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  topics: LearningTopic[];
};

export const learningPhases: LearningPhase[] = [
  {
    index: '01',
    eyebrow: 'FOUNDATIONS',
    title: 'Agent 基础能力',
    description: '理解 Agent 的基本组成、设计方式、工具调用和知识增强。',
    topics: [
      { index: '01', title: 'Agent Introduction', zh: '什么是 Agent', description: '先弄清 Agent 与普通 LLM 应用、Chatbot 的差别。', href: '/articles/agent-introduction/', status: 'current' },
      { index: '02', title: 'Agent Framework', zh: 'Agent 框架', description: '理解 Model、Tool、State、Workflow 的基本关系。' },
      { index: '03', title: 'Agentic Design Patterns', zh: 'Agent 设计模式', description: '理解 Agent 系统中常见的设计模式。' },
      { index: '04', title: 'Tool Use', zh: '工具调用', description: '学习 Function Calling、API 与 Tool Design。' },
      { index: '05', title: 'Agentic RAG', zh: 'Agentic RAG', description: '让 Agent 主动检索、选择和使用外部知识。' },
      { index: '06', title: 'Trustworthy Agents', zh: '可信 Agent', description: '理解 Guardrails、安全与 Human-in-the-loop。' }
    ]
  },
  {
    index: '02',
    eyebrow: 'REASONING & COLLABORATION',
    title: '推理 · 规划 · 协作',
    description: '让 Agent 从简单工具调用，进化到任务规划、协作和自我改进。',
    note: '先把基础打牢，再往上走。',
    topics: [
      { index: '07', title: 'Planning', zh: '任务规划', description: '让 Agent 学会拆解并执行复杂任务。' },
      { index: '08', title: 'Multi-Agent', zh: '多 Agent', description: '理解 Agent 之间的分工、协作与编排。' },
      { index: '09', title: 'Metacognition', zh: '反思与自检', description: '让 Agent 评估自己的行为和结果，持续改进。' },
      { index: '10', title: 'Production', zh: '生产化 Agent', description: '关注 Evaluation、Observability、Cost 与 Latency。' }
    ]
  },
  {
    index: '03',
    eyebrow: 'AGENT ARCHITECTURE',
    title: 'Agent 系统架构',
    description: '理解 Protocol、Context、Memory 与 Agent 编排体系。',
    topics: [
      { index: '11', title: 'Agent Protocols', zh: 'Agent 协议', description: '理解 MCP / A2A / NLWeb 等 Agent 协作协议。' },
      { index: '12', title: 'Context Engineering', zh: '上下文工程', description: '学习 Context 选择、压缩、隔离与管理。' },
      { index: '13', title: 'Agent Memory', zh: 'Agent 记忆', description: '短期记忆、长期记忆与跨会话信息。' },
      { index: '14', title: 'Agent Framework Practice', zh: 'Agent 框架实战', description: '通过 Workflow、State 与 Orchestration 完成工程实践。' }
    ]
  },
  {
    index: '04',
    eyebrow: 'PRODUCTION & SECURITY',
    title: '生产 · 部署 · 安全',
    description: '进入真实 Agent 系统的部署、扩展、本地运行和安全设计。',
    topics: [
      { index: '15', title: 'Computer Use Agent', zh: '计算机操作 Agent', description: '浏览器、UI 操作与 Computer Use。' },
      { index: '16', title: 'Deployment & Scaling', zh: '部署与扩展', description: 'Model Routing、Caching、Scaling 与 Evaluation Gate。' },
      { index: '17', title: 'Local Agent', zh: '本地 Agent', description: 'Local Model、Local RAG、Local MCP。' },
      { index: '18', title: 'Agent Security', zh: 'Agent 安全', description: 'Audit、Action Logging、权限与防篡改。' }
    ]
  }
];
