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

export type Note = {
  title: string;
  date: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: '01｜向量数据库究竟在解决什么问题？',
    excerpt: '先不急着看 HNSW。先从 SQL 和关键词检索讲起，看看什么时候真的需要“按语义找东西”。',
    date: '2026-08-11',
    href: '/articles/vector-database-01',
    cover: '/assets/article-vector-db.svg'
  },
  {
    title: 'RAG 实战笔记：切分、召回、重排和评估',
    excerpt: '把我做 RAG 时最常反复调的几步记下来：文档怎么切、候选怎么召回、什么时候重排，以及效果怎么验。',
    date: '2026-08-08',
    href: '/articles/rag-practice',
    cover: '/assets/article-rag.svg'
  },
  {
    title: '用 FastAPI + React 做一个小工具',
    excerpt: '从一个小想法开始，把接口、页面、部署和上线后改过的东西都记下来。',
    date: '2026-08-04',
    href: '/articles/fastapi-react-product',
    cover: '/assets/article-fastapi.svg'
  }
];

export const learningPath: LearningStep[] = [
  {
    index: '01',
    title: 'Agent 基础能力',
    description: 'Agent、Framework、Design Patterns、Tool Use、Agentic RAG 与可信 Agent。',
    tone: 'sage',
    icon: 'agent'
  },
  {
    index: '02',
    title: '推理 · 规划 · 协作',
    description: '继续学习 Planning、Multi-Agent、Metacognition 与生产化基础。',
    tone: 'sky',
    icon: 'prompt'
  },
  {
    index: '03',
    title: 'Agent 系统架构',
    description: '深入 Protocol、Context Engineering、Memory 与 Agent 编排实践。',
    tone: 'sand',
    icon: 'rag'
  },
  {
    index: '04',
    title: '生产 · 部署 · 安全',
    description: 'Computer Use、部署扩展、本地 Agent 与生产安全设计。',
    tone: 'lavender',
    icon: 'build'
  }
];

export const projects: Project[] = [
  {
    title: 'AI 知识助手',
    description: '拿 RAG + Agent 做的知识问答项目。主要拿它试切分、检索、引用追溯和 Agent 调工具这些做法。',
    date: '2026-08-09',
    cover: '/assets/project-ai-assistant.svg',
    tags: ['RAG', 'Agent', 'FastAPI', 'Next.js']
  },
  {
    title: '个人笔记（本网站）',
    description: '这个站也是边做边改。用 Astro 搭，学到什么就补什么，顺便把自己没讲清楚的地方重新理一遍。',
    date: '2026-08-11',
    cover: '/assets/project-digital-garden.svg',
    tags: ['Astro', 'MDX', 'GitHub Pages']
  }
];

export const notes: Note[] = [
  {
    title: '「小明打了小红」是怎么变成一个向量的？',
    date: '08-12',
    href: '/notes/xiaoming-sentence-vector'
  },
  {
    title: 'LLM 的上下文长度与注意力机制小记',
    date: '08-11',
    href: '/articles/'
  },
  {
    title: 'Temperature 调高以后，模型到底变了什么？',
    date: '08-09',
    href: '/articles/'
  },
  {
    title: '向量数据库选型笔记（Milvus / Qdrant）',
    date: '08-06',
    href: '/articles/'
  },
  {
    title: '在 macOS / Windows 上管理多个开发环境',
    date: '08-02',
    href: '/articles/'
  }
];
