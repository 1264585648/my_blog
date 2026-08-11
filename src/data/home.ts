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
    excerpt: '先不急着看 HNSW。先从 SQL 和关键词检索讲起，看看什么时候真的需要“按语义找东西”。',
    date: '2026-08-11',
    href: '/articles/vector-database-01',
    cover: '/assets/article-vector-db.svg'
  },
  {
    title: 'RAG 实战笔记：构建可落地的知识问答系统',
    excerpt: '记录我做 RAG 时碰到的几个关键问题：怎么切、怎么搜、怎么重排，以及最后怎么判断效果到底好不好。',
    date: '2026-08-08',
    href: '/articles/rag-practice',
    cover: '/assets/article-rag.svg'
  },
  {
    title: '用 FastAPI + React 做一个小而美的产品',
    excerpt: '从一个小想法开始，把前后端、部署和上线后的修改过程都记下来。',
    date: '2026-08-04',
    href: '/articles/fastapi-react-product',
    cover: '/assets/article-fastapi.svg'
  }
];

export const learningPath: LearningStep[] = [
  {
    index: '01',
    title: 'Agent',
    description: '从 Function Calling 开始，把工具调用、Planning、Memory 这些东西一点点补齐。',
    tone: 'sage',
    icon: 'agent'
  },
  {
    index: '02',
    title: 'Prompt',
    description: '记一些真正用过的写法，也顺便弄清楚上下文、参数和提示词为什么会影响结果。',
    tone: 'sky',
    icon: 'prompt'
  },
  {
    index: '03',
    title: 'RAG',
    description: '从切分、召回到重排和评估，边做知识库边把不懂的地方补上。',
    tone: 'sand',
    icon: 'rag'
  },
  {
    index: '04',
    title: '工程实践',
    description: 'Java、后端、数据采集、部署。最后还是要把东西做出来、跑起来。',
    tone: 'lavender',
    icon: 'build'
  }
];

export const projects: Project[] = [
  {
    title: 'AI 知识助手',
    description: '拿 RAG + Agent 做的知识问答项目，支持文档上传、多轮对话和来源追溯，主要用来试各种检索和 Agent 做法。',
    date: '2026-08-09',
    cover: '/assets/project-ai-assistant.svg',
    tags: ['RAG', 'Agent', 'FastAPI', 'Next.js']
  },
  {
    title: '个人笔记（本网站）',
    description: '这个网站本身也是个小项目。用 Astro 搭，学到什么就补什么，顺便练习怎么把技术内容讲清楚。',
    date: '2026-08-11',
    cover: '/assets/project-digital-garden.svg',
    tags: ['Astro', 'MDX', 'GitHub Pages']
  }
];

export const notes = [
  ['LLM 的上下文长度与注意力机制小记', '08-11'],
  ['为什么温度参数会影响模型创造力', '08-09'],
  ['向量数据库选型笔记（Milvus / Qdrant）', '08-06'],
  ['在 macOS / Windows 上管理多个开发环境', '08-02']
] as const;
