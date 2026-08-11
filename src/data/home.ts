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
    title: 'Agent',
    description: '从 Function Calling 起步，再补 Planning、Memory 和多工具协作。',
    tone: 'sage',
    icon: 'agent'
  },
  {
    index: '02',
    title: 'Prompt',
    description: '只记真正用过的写法，顺便弄清上下文和参数为什么会影响结果。',
    tone: 'sky',
    icon: 'prompt'
  },
  {
    index: '03',
    title: 'RAG',
    description: '从切分、召回到重排和评估，边做知识库边把问题拆清楚。',
    tone: 'sand',
    icon: 'rag'
  },
  {
    index: '04',
    title: '工程实践',
    description: 'Java、后端、采集和部署，把学到的东西做成真的能跑的项目。',
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

export const notes = [
  ['LLM 的上下文长度与注意力机制小记', '08-11'],
  ['Temperature 调高以后，模型到底变了什么？', '08-09'],
  ['向量数据库选型笔记（Milvus / Qdrant）', '08-06'],
  ['在 macOS / Windows 上管理多个开发环境', '08-02']
] as const;
