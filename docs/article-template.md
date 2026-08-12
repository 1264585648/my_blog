# 通用技术学习文章模板

项目已新增统一学习文章模板，用于 Agent、RAG、Vector Database、Java 等后续学习内容。

## 文件位置

- `src/layouts/LearningArticleLayout.astro`：文章统一布局和固定模块。
- `src/styles/article.css`：文章页统一视觉样式。
- `src/components/ArticleToc.astro`：复用现有文章目录组件。
- `src/pages/articles/template.astro`：可访问的模板预览页，也是最直接的复制示例。

## 页面固定骨架

```text
Site Header
↓
Back Link
↓
Article Hero
  Series / Chapter
  Title
  Subtitle
  Metadata
  Illustration
↓
TOC + Learning Goals
↓
Article Body
  Section
  Think / Note
  Comparison
  Diagram / Flow
  Code
  Key Idea
  Steps
  ...
↓
Chapter Review + Self Check
↓
Further Reading
↓
Previous / Next
```

## Layout Props

`LearningArticleLayout.astro` 支持：

- `title`
- `description`
- `seriesLabel`
- `seriesHref`
- `subtitle`
- `date`
- `readingTime`
- `level`
- `backHref`
- `backLabel`
- `heroImage`
- `heroAlt`
- `tocItems`
- `goals`
- `reviewItems`
- `selfCheckItems`
- `readings`
- `previous`
- `next`

如果不传 `heroImage`，模板会自动使用项目内置的 CSS 笔记本插画占位，因此新文章可以先写内容，后续再替换专属插图。

## 正文可复用 class

### 普通章节

```astro
<section id="section-id" class="article-section">
  <p class="article-section-label">01 · 小节标签</p>
  <h2>章节标题</h2>
  <p>正文……</p>
</section>
```

### 思考卡

```astro
<div class="article-think">
  <strong>思考一下</strong>
  问题……
</div>
```

### 补充说明

```astro
<div class="article-note">
  <strong>补充说明</strong>
  内容……
</div>
```

### 核心结论

```astro
<div class="article-key-idea">
  <strong>核心结论</strong>
  内容……
</div>
```

### 对比模块

```astro
<div class="article-compare">
  <div>
    <h3>A</h3>
    <ul><li>...</li></ul>
  </div>
  <div class="focus">
    <h3>B</h3>
    <ul><li>...</li></ul>
  </div>
</div>
```

### 流程图

```astro
<figure class="article-flow">
  <div class="article-flow-row">
    <div class="article-flow-node">A</div>
    <span class="article-flow-arrow">→</span>
    <div class="article-flow-node">B</div>
  </div>
  <figcaption class="article-caption">图：说明</figcaption>
</figure>
```

### 代码块

```astro
<pre class="article-code" data-language="Java"><code>{code}</code></pre>
```

### 步骤

```astro
<div class="article-steps">
  <div class="article-step">
    <span>01</span>
    <div>
      <h3>步骤标题</h3>
      <p>步骤说明</p>
    </div>
  </div>
</div>
```

## 使用原则

1. 新学习文章优先使用 `LearningArticleLayout`，不要在每个页面重新复制整套 Article CSS。
2. 正文以开放排版为主，不要把所有段落卡片化。
3. 图解只在能降低理解成本时出现。
4. 一篇文章不需要使用所有组件，按内容需要选择。
5. Hero、目录、学习目标、复盘、上下篇导航是推荐的稳定骨架。
6. 风格始终遵循 `docs/ui-style-guide.md`：Warm Paper · Digital Garden · Notebook Editorial。

## 预览

本地开发后访问：

`/articles/template/`

GitHub Pages 部署后对应：

`https://1264585648.github.io/my_blog/articles/template/`
