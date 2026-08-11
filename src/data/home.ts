export type Article = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  cover: string;
};

export type LearningStep = {
  index: string;
  title: string;
  description: string;
  tone: 'sage' | 'sky' | 'sand' | 'lavender';
  icon: 'agent' | 'prompt' | 'rag' | 'build';
};

export type Project = {
  title: string;
  description: string;
  date: string;
  cover: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    title: '01｜向量数据库究竟在解决什么问题？',
    excerpt: '先不学 HNSW，从 SQL、关键词检索一路推导到语义检索，理解 Vector DB 为什么出现。',
    date: '2026-08-11',
    href: '/articles/vector-database-01',
    cover: '/assets/article-vector-db.svg'
  },
  {
    title: 'RAG 实战笔记：构建可落地的知识问答系统',
    excerpt: '从索引构建到检索优化，再到效果评估，一步步搭建自己的 RAG 系统。',
    date: '2026-08-08',
    href: '/articles/rag-practice',
    cover: '/assets/article-rag.svg'
  },
  {
    title: '用 FastAPI + React 做一个小而美的产品',
    excerpt: '全栈开发记录：设计、实现、部署与上线后的迭代思考。',
    date: '2026-08-04',
    href: '/articles/fastapi-react-product',
    cover: '/assets/article-fastapi.svg'
  }
];

export const learningPath: LearningStep[] = [
  {
    index: '01',
    title: 'Agent',
    description: '理解智能体的核心概念、架构与常见实现模式。',
    tone: 'sage',
    icon: 'agent'
  },
  {
    index: '02',
    title: 'Prompt',
    description: '掌握提示词设计方法，提升模型理解与输出质量。',
    tone: 'sky',
    icon: 'prompt'
  },
  {
    index: '03',
    title: 'RAG',
    description: '学习检索增强生成，构建知识驱动的问答系统。',
    tone: 'sand',
    icon: 'rag'
  },
  {
    index: '04',
    title: '工程实践',
    description: '将想法落地为产品，从代码到部署形成完整闭环。',
    tone: 'lavender',
    icon: 'build'
  }
];

export const projects: Project[] = [
  {
    title: 'AI 知识助手：你的随身问答伙伴',
    description: '基于 RAG + Agent 的知识问答应用，支持文档上传、多轮对话与来源追溯。',
    date: '2026-08-09',
    cover: '/assets/project-ai-assistant.svg',
    tags: ['RAG', 'Agent', 'FastAPI', 'Next.js']
  },
  {
    title: '个人数字花园（本网站）',
    description: '书写与沉淀的个人知识库与博客，记录、连接，并让知识持续生长。',
    date: '2026-08-11',
    cover: '/assets/project-digital-garden.svg',
    tags: ['Astro', 'MDX', 'Vercel']
  }
];

export const notes = [
  ['LLM 的上下文长度与注意力机制小记', '08-11'],
  ['为什么温度参数会影响模型创造力', '08-09'],
  ['向量数据库选型笔记（Milvus / Qdrant）', '08-06'],
  ['在 macOS / Windows 上管理多个开发环境', '08-02']
] as const;
