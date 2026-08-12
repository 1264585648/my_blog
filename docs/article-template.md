# 技术学习文章：统一视觉，不统一结构

这套文章系统不是“所有文章都必须照着同一个目录写”的固定模板。

它真正要统一的是：

> **Design System + Article Components + Reading Experience**

而不是：

> **固定章节顺序 + 固定模块数量 + 固定叙事方式**

一句话原则：

> **统一 Design System，不统一 Article Structure；组件复用，叙事自由。**

---

## 1. 为什么不能把模板当成硬约束

不同类型的技术文章，最适合的理解路径并不一样。

如果为了“套模板”强行加入本章目标、对比卡、思考卡、流程图、代码块、复盘、自检和延伸阅读，反而会让文章像标准化教材或课程后台，而不是自然的个人技术笔记。

因此，`LearningArticleLayout.astro` 的定位是：

> **文章视觉骨架 + 可选内容组件容器**

而不是固定文章结构。

---

## 2. 必须统一的部分

必须统一的是网站的视觉基因和基础阅读体验：

- 暖米白纸张背景
- 鼠尾草绿主强调色
- Serif / Sans / Kai 字体分工
- 正文阅读宽度
- 章节留白
- 边框与圆角
- 代码块视觉
- 图解视觉
- 链接与导航视觉
- 移动端阅读体验

大部分学习文章建议保留基础页面结构：

```text
Site Header
↓
Back / Breadcrumb
↓
Article Hero
↓
Article Body
↓
Previous / Next
```

其中 Hero 也可以根据文章类型适度简化。

---

## 3. 按需选择的模块

以下模块都是“工具箱”，不是必选项：

- Table of Contents
- Learning Goals
- Think / 思考一下
- Note / 补充说明
- Key Idea / 核心结论
- Comparison / 对比
- Process / Flow
- Architecture Diagram
- Code Block
- Step / 步骤
- Definition / 概念定义
- Chapter Review
- Self Check
- Further Reading

选择原则：

> **这个模块是否真的降低理解成本？**

如果答案是否定的，就不要加。

---

## 4. 先确定文章类型，再确定结构

### 概念型文章

适合：什么是 Agent、什么是 RAG、什么是 Embedding、什么是 Context Engineering。

```text
真实问题
↓
为什么原来的方式不够
↓
核心概念 / 定义
↓
和相近概念的边界
↓
核心运行机制
↓
什么时候使用
↓
最小示例 / 最小模型
↓
总结
```

优先组件：Comparison、Diagram / Flow、Key Idea、Definition。

### 原理型文章

适合：Embedding 怎么工作、向量相似度、HNSW、Transformer Attention。

```text
问题
↓
直觉解释
↓
原理推导
↓
图解
↓
必要数学
↓
最小实验
↓
实验结果
↓
回到核心结论
```

优先组件：Diagram、Formula / 推导、Code、Experiment Result、Note。

### 工程实践型文章

适合：实现一个 Tool、构建一个最小 Agent、接入 MCP、构建 RAG Pipeline。

```text
要做什么
↓
最终效果
↓
项目结构
↓
Step 1
↓
Code
↓
Step 2
↓
Code
↓
运行结果
↓
踩坑 / Debug
↓
完整实现
```

优先组件：Steps、Code Block、Result、Pitfall / Note。

### 源码阅读型文章

适合：LangGraph 源码、Agent Framework 调用链、Java 框架源码。

```text
先看整体架构
↓
调用入口
↓
主调用链
↓
核心类 / 核心方法
↓
数据如何流动
↓
关键源码
↓
断点 / 调试位置
↓
总结
```

优先组件：Architecture Diagram、Call Chain、Code、Source Map。

### 对比 / 选型型文章

适合：Workflow vs Agent、LangGraph vs OpenAI Agents SDK、Milvus vs Qdrant。

```text
为什么要比较
↓
比较维度
↓
核心差异
↓
典型场景
↓
Trade-off
↓
选择建议
```

优先组件：Comparison、Table、Scenario、Key Idea。

---

## 5. 写文章前先回答一个问题

在决定目录前，先写一句：

> **读者现在不理解什么？我要沿着什么路径让他真正理解？**

再反推章节顺序。

不要先看模板里有什么模块，再想办法把内容填进去。

---

## 6. 推荐叙事原则

技术文章优先使用：

```text
问题 → 直觉 → 边界 → 原理 → 示例 → 结论
```

但不是每篇都必须完整出现。

真正重要的是：

1. 每一节都回答一个明确问题。
2. 下一节自然来自上一节留下的问题。
3. 图解只在关系、流程、结构难以用一句话说清楚时出现。
4. 代码只在能验证观点或帮助迁移时出现。
5. 卡片只用于真正需要强调的内容。
6. 不为了页面“丰富”而增加模块。

---

## 7. 页面密度原则

正式文章不应该像“模板组件展示页”。

如果同一篇文章连续出现目标卡、对比卡、思考卡、流程卡、代码卡、步骤卡、复盘卡、自检卡，需要重新检查：是不是在展示 UI，而不是讲知识。

推荐：

> **正文是主体，组件负责关键节点。**

---

## 8. `LearningArticleLayout` 的使用方式

文件：

- `src/layouts/LearningArticleLayout.astro`
- `src/styles/article.css`
- `src/components/ArticleToc.astro`

它提供统一视觉能力，但 Props 均按需使用：

- 不需要目录：不传 `tocItems`
- 不需要目标：不传 `goals`
- 不需要自检：不传 `selfCheckItems`
- 不需要延伸阅读：不传 `readings`
- 不需要复盘卡：不传 `reviewItems`

正文内部的 `.article-think`、`.article-compare`、`.article-flow`、`.article-code`、`.article-steps` 等也全部按需使用。

---

## 9. 正式文章检查清单

- [ ] 文章结构是由知识本身决定，而不是由模板决定的吗？
- [ ] 每一个组件都有明确教学价值吗？
- [ ] 删除某张卡片后，理解是否会明显变差？如果不会，考虑删除。
- [ ] 正文是否仍然是页面主体？
- [ ] 是否有自然的“为什么 → 所以 → 接下来”的叙事链？
- [ ] 是否避免把文章写成组件 Demo？
- [ ] 是否仍然保持统一的 Warm Paper / Digital Garden 视觉语言？
- [ ] 手机端是否可以自然连续阅读？

---

## 10. 最终原则

> **先设计理解路径，再选择文章组件。**

> **统一视觉语言，不统一内容结构。**

> **组件复用，叙事自由。**

> **阅读体验优先于模板完整度。**
