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
    description: '从模型调用、工具使用、Planning、Memory 到可观测性，建立完整智能体知识体系。'
  },
  {
    index: '02',
    title: 'RAG',
    description: '理解检索、切分、召回、重排、生成与评估，关注真实知识问答系统如何落地。'
  },
  {
    index: '03',
    title: 'Vector Database',
    description: '从向量、相似度到 ANN 索引与工程选型，边理解原理边实现一个最小向量数据库。'
  },
  {
    index: '04',
    title: 'Engineering',
    description: 'Java、后端、数据采集、部署与产品工程，把 AI 能力真正接进可运行的软件。'
  }
];

export const projects: Project[] = [
  {
    title: 'Community Lead Gen Agent',
    description: '从社区讨论、成员信息与行为信号中识别潜在客户，把多来源数据采集、标准化、意图识别与 Agent 分析拆成可插拔模块。',
    date: '2026-08-10',
    cover: '/assets/project-community-agent.svg',
    tags: ['Agent', 'Collector', 'Intent', 'Open Source']
  },
  {
    title: 'xuan.z Personal Notes',
    description: '这个网站本身也是一个长期项目：边学习、边实现、边沉淀，让文章、学习路径和项目复盘逐渐连接成个人知识体系。',
    date: '2026-08-11',
    cover: '/assets/project-personal-notes.svg',
    tags: ['Astro', 'Notes', 'Knowledge Garden']
  }
];

export const notes = [
  ['LLM 的上下文长度与注意力机制小记', '08-11'],
  ['为什么温度参数会影响模型创造力', '08-09'],
  ['向量数据库选型笔记（Milvus / Qdrant）', '08-06'],
  ['在 macOS / Windows 上管理多个开发环境', '08-02']
] as const;
