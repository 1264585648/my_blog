export type VectorDatabaseSeriesArticle = {
  index: string;
  title: string;
  focus: string;
  href?: string;
  status: 'published' | 'planned';
};

export const vectorDatabaseSeries: VectorDatabaseSeriesArticle[] = [
  {
    index: '01',
    title: '向量数据库究竟在解决什么问题？',
    focus: '从 SQL、关键词检索推导到语义检索，先建立 Vector DB 的问题意识。',
    href: '/articles/vector-database-01',
    status: 'published'
  },
  {
    index: '02',
    title: '从 Token 到 Vector：一句话到底是怎么被模型变成向量的？',
    focus: '从 Token、Parameter、Embedding 到 Attention、Pooling，用「小明打了小红」走完整个文本向量化过程。',
    href: '/articles/vector-database-02',
    status: 'published'
  },
  {
    index: '03',
    title: '手写第一版向量检索：Flat Search 与 Top K',
    focus: '用最朴素的暴力扫描做出可工作的 Vector Search，理解基线性能。',
    status: 'planned'
  },
  {
    index: '04',
    title: '为什么需要 ANN：Recall、Latency 与 Memory 的权衡',
    focus: '从百万向量扫描的成本出发，理解近似最近邻索引为什么出现。',
    status: 'planned'
  },
  {
    index: '05',
    title: 'IVF：先分桶，再少搜一点',
    focus: '从聚类、倒排桶到 nprobe，亲手实现一个简化版 IVF。',
    status: 'planned'
  },
  {
    index: '06',
    title: 'HNSW：为什么一张图能把搜索变快？',
    focus: '从小世界图、分层导航到 efSearch / M，理解 HNSW 的核心机制。',
    status: 'planned'
  },
  {
    index: '07',
    title: '从算法到数据库：存储、持久化、更新与删除',
    focus: '把“索引算法”扩展成真正的数据库能力，理解 segment、持久化和增量更新。',
    status: 'planned'
  },
  {
    index: '08',
    title: 'Metadata Filter、Hybrid Search 与 Rerank',
    focus: '把向量搜索放进真实业务：过滤、关键词 + 向量混搜，以及重排。',
    status: 'planned'
  },
  {
    index: '09',
    title: '最终实践：做一个 Mini Vector DB 并接入 RAG',
    focus: '串起存储、索引、查询、评测和 RAG，形成一个可以运行和 benchmark 的项目。',
    status: 'planned'
  }
];
