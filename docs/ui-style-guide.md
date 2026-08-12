# xuan.z UI 设计风格规范

> 本文档是 `xuan.z 的个人笔记` 的视觉基准。后续新增页面、组件、插画、学习路线、文章专题页，优先遵循本文档，而不是套用通用 SaaS / Dashboard / Vercel Docs 风格。

---

## 1. 一句话定义

**Warm Paper · Digital Garden · Notebook Editorial**

这是一个带有「纸张、手帐、知识花园」气质的个人技术博客：

- 有个人笔记感，而不是企业官网感；
- 有知识整理感，而不是后台管理感；
- 有适量插画和手作元素，但不是卡通网站；
- 有内容型博客的克制排版，但不是冷冰冰的黑白文档站；
- 技术是内容主体，视觉负责营造“边学边做、顺手记下来”的氛围。

核心感觉：**温暖、安静、自然、轻手作、可阅读、有个人气质。**

---

## 2. 当前网站的视觉基因

### 2.1 主视觉关键词

1. 暖米白纸张背景
2. 鼠尾草绿作为品牌色
3. 浅棕 / 沙色作为纸张与分隔色
4. 宋体 / Serif 负责正文与说明文字
5. 楷体 / 手写感 Serif 负责品牌与大标题
6. Sans Serif 负责导航、标签、数字、技术信息
7. 轻插画：植物、纸张、笔记本、代码卡片、知识结构
8. 柔和圆角，而不是极端大圆角
9. 低对比边框与极轻阴影
10. 大面积留白，页面不追求信息铺满

### 2.2 风格不是这些

本站 **不是**：

- SaaS Dashboard
- AI 产品后台
- Vercel / Linear 式纯黑白极简站
- GitBook / API Docs 式文档站
- 科幻蓝紫渐变 AI 官网
- 游戏化学习地图
- 大量玻璃拟态
- Bento Grid 首页
- 卡片堆满整个页面的课程平台

只要一个设计第一眼像“后台”或“在线课程平台”，就应该重新设计。

---

## 3. Design Tokens

当前项目以 `src/styles/global.css` 中的变量为基准。

### 3.1 色彩

```css
--paper: #f8f4eb;
--paper-deep: #f2ecdf;
--paper-card: rgba(255, 253, 248, 0.86);

--ink: #292821;
--ink-soft: #666254;
--ink-faint: #8a8578;

--sage: #68795a;
--sage-dark: #536447;
--sage-soft: #e9efe2;

--line: #ded4c2;
--line-soft: #e8e0d2;

--sky: #eaf2f6;
--sand: #f5ead8;
--lavender: #eee9f2;
```

### 3.2 色彩使用原则

#### Paper

`#f8f4eb` 是整个站的视觉基础，不要随意替换为纯白 `#ffffff`。

页面应该让人联想到：

- 纸张
- 笔记本
- 阅读页
- 安静的桌面

而不是浏览器默认白底。

#### Sage Green

鼠尾草绿是本站最重要的强调色，用于：

- 品牌图标
- 当前导航
- 小图标
- 链接 Hover
- 轻量标签
- 当前学习状态
- 少量按钮
- 植物插画

不要大面积铺满绿色。

#### Soft Colors

`sky / sand / lavender / sage-soft` 只作为轻柔分类辅助色。

规则：

> 色彩负责“区分”，不是负责“抢眼”。

饱和度必须低，背景色必须接近纸张。

### 3.3 禁用颜色模式

避免：

- 电光蓝
- 高饱和紫色
- 蓝紫渐变
- 纯黑大面积背景
- Neon Cyan
- 高饱和绿色
- 红橙黄大面积组合

技术主题并不意味着必须使用“AI 蓝”。

---

## 4. 字体体系

当前站不是单一字体，而是三套字体承担不同角色。

### 4.1 Body Serif

```css
--body-font: ui-serif, "Songti SC", "STSong", "Noto Serif CJK SC", serif;
```

用途：

- 正文
- 描述
- 引言
- 笔记文字
- 卡片辅助说明

作用：制造“阅读 / 书页 / 笔记”的感觉。

### 4.2 UI Sans

```css
--ui-font: Inter, ui-sans-serif, system-ui, -apple-system,
  "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
```

用途：

- 导航
- 标签
- 数字
- 日期
- 英文技术名词
- Button
- 状态

作用：保持技术页面的现代感和清晰度。

### 4.3 Hand / Kai

```css
--hand-font: "STKaiti", "KaiTi", "Kaiti SC", "FangSong", serif;
```

用途：

- `xuan.z 的个人笔记`
- Hero 大标题
- Section 标题
- 少量具有“手帐标题”意味的文字

不要把整页正文都使用楷体。

### 4.4 字体层级原则

推荐组合：

```text
品牌 / Hero        → Hand Font
栏目标题           → Hand Font
正文 / 描述        → Body Serif
导航 / 标签 / 数字 → UI Sans
技术关键词         → UI Sans
```

这套混排是本站辨识度的重要来源，后续页面必须继承。

---

## 5. 页面背景与质感

背景不是纯色，而是非常轻的“纸张层次”。

当前逻辑：

- 暖米白基础色
- 很弱的白色径向光斑
- 近乎不可见的水平细纹

原则：

> 用户应该感受到“纸张”，但不能明显看到“纹理素材”。

禁止使用：

- 明显牛皮纸纹理
- 噪点过重
- 仿旧污渍
- 撕纸边缘铺满页面
- 大面积网格背景

---

## 6. 布局系统

### 6.1 页面宽度

当前主容器：

```css
--shell: min(1280px, calc(100vw - 80px));
```

桌面端使用宽内容容器，但内容本身不要全部铺满。

### 6.2 留白

本站依赖留白建立质感。

优先级：

```text
留白 > 分割线 > 卡片背景 > 阴影
```

不要因为“页面空”就主动增加：

- 数据卡
- Badge
- 图标
- 小标题
- 装饰线
- Progress Panel

空白本身就是设计元素。

### 6.3 首页结构原则

首页只承担入口，不承担全部信息：

1. Hero
2. 最新文章
3. 学习路径
4. 项目手记
5. 关于 / 联系方式

详细内容进入二级页。

---

## 7. Header 设计

当前 Header 是本站的重要风格锚点。

### 结构

左：

- 叶子图标
- `xuan.z 的个人笔记`
- `写技术，也记项目`

中 / 右：

- 首页
- 学习路径
- 文章
- 项目
- 关于我
- 搜索

### 风格

- 72px 高
- 半透明暖纸背景
- 轻微 backdrop blur
- 底部极浅棕色边线
- 导航 Active 使用鼠尾草绿
- Active 下划线只有约 24px

### 禁止

- 黑色实心 Header
- 大 Logo
- Pill 导航
- 每个导航加 Icon
- 蓝色 Active Tab
- 大面积阴影

---

## 8. Hero 设计语言

Hero 是“个人笔记首页”，不是产品 Landing Page。

### 左侧

- 小型 eyebrow
- 手写 / 楷体大标题
- 2～3 行自然描述
- 最多两个操作按钮
- 一行很轻的近期主题

### 右侧

使用“知识花园”式插画：

- 笔记本
- 代码卡片
- RAG / Agent 等知识元素
- 植物
- 纸张

### 插画要求

插画是：

**editorial notebook illustration**

不是：

- 3D Blender
- AI 机器人
- 霓虹科技球
- Cyberpunk
- SaaS 产品 Mockup

---

## 9. 卡片系统

卡片存在，但不是页面主角。

### 9.1 基础卡片

推荐：

```text
border: 1px solid var(--line)
background: var(--paper-card)
radius: 14–15px
shadow: 极轻
hover: translateY(-2px ~ -3px)
```

### 9.2 阴影

当前主阴影：

```css
0 12px 35px rgba(86, 71, 45, 0.07)
```

默认状态应该更轻。

阴影原则：

> 卡片依靠纸张颜色和边框成立，阴影只在 Hover 或重点元素中出现。

### 9.3 圆角

推荐：

- 主卡片：14–18px
- 小 Icon 容器：8–10px
- Button：10px
- Tag：999px

不要所有元素都做成巨大 24～32px 圆角。

---

## 10. Learning Path 当前视觉语言

首页已有 Learning Path，是后续完整 Agent 学习路线页最重要的参考。

现状特征：

- 4 张安静的浅色纸卡
- `sage / sky / sand / lavender` 四种低饱和色
- 左上角小编号
- 右上角小图标容器
- 标题使用 UI Sans
- 描述使用 Serif
- 卡片有轻微 Hover 上浮
- 不使用粗箭头串联
- 不使用进度 Dashboard

因此完整 Agent 学习路线页面必须看起来像：

> “首页 Learning Path 的自然展开版”

而不是另一个独立设计系统。

---

## 11. Agent 学习路线页专用规范

这是后续重做 `/learning/` 页面时必须遵守的部分。

### 11.1 页面定位

它不是“课程后台”。

它应该像一本：

**Agent 学习手帐目录 / Knowledge Garden Index**

### 11.2 顶部

复用现有普通内容页语言：

```text
Learn

Agent 学习路线

一段自然的中文说明……
```

不要使用：

- 60px 黑色英文大标题占满首屏
- Dashboard 数据统计
- 右侧 Course Info SaaS Card
- 大 Progress Bar
- GitHub 大按钮

课程来源可作为一行很轻的注记：

```text
参考 · Microsoft AI Agents for Beginners
```

### 11.3 18 个 Topic 的展示方式

推荐采用 **4 个“笔记章节”**，每个章节内部再放 Topic。

每个阶段可以是一张“大纸页区域”，而不是每一个 Topic 都是一张独立大卡。

示意：

```text
01  Foundations                         🌱
    Agent 基础能力
    ─────────────────────────

    01  Agent Introduction
        什么是 Agent

    02  Agent Framework
        Model / Tool / State / Workflow

    03  Agentic Design Patterns
        ……
```

阶段之间可以使用轻微不同的纸张色：

- Foundations → sage soft
- Reasoning → sky
- Architecture → sand
- Production → lavender

但每一区域只能“轻染色”，不要变成彩色 Dashboard。

### 11.4 路线感

路线感来自：

- 编号
- 阅读顺序
- 章节关系
- 小型竖线 / 手绘线
- 当前项的鼠尾草绿标记

而不是：

- S 型粗箭头
- 游戏地图
- 18 个节点连线
- 大面积 Flowchart

### 11.5 当前学习状态

状态应非常轻：

```text
07  Planning                   正在学习
```

或一个鼠尾草绿小圆点。

不要：

- 6 / 18 大数字卡
- 蓝色 Progress Bar
- “Learning Progress” Dashboard

### 11.6 可以加入的手帐元素

少量使用：

- 胶带
- 手绘下划线
- 小叶子
- 铅笔线
- 便签角
- 手写编号

每个视口最多 1～2 种手帐装饰，不要同时全部使用。

---

## 12. Section 标题

Section Title 应该像笔记章节，而不是 SaaS 模块标题。

典型组合：

- 小图标
- 楷体 / 手写感中文标题
- 右侧极轻文字链接

例：

```text
🌿 学习路径                         查看完整路径 →
```

不要：

```text
LEARNING ROADMAP
Power up your AI skills
[Explore]
```

---

## 13. Button 与链接

### Primary Button

- 鼠尾草绿色
- 轻微渐变允许存在
- 10px 左右圆角
- 不要胶囊形
- 不要巨大尺寸

### Secondary Button

- 半透明纸张底
- 浅棕边框
- 棕灰文字

### 普通链接

优先使用纯文字 + `→`。

本站鼓励“文字链接”，而不是所有入口都按钮化。

---

## 14. Icon 风格

Icon 应满足：

- 线性
- 简单
- 小尺寸
- 低存在感

优先自然 / 知识主题：

- Leaf
- Search
- Book
- Folder
- Code
- Node / Network

不要使用：

- 彩色 3D Icon
- Emoji 大图标墙
- 每一项都配不同图标

---

## 15. 插画规范

### 15.1 插画角色

插画负责提供“个人手帐感”。

视觉词：

- warm editorial illustration
- notebook
- paper cards
- botanical details
- muted sage green
- warm cream
- soft pencil / ink line
- subtle watercolor / gouache

### 15.2 Agent 主题插画

Agent 不画机器人。

优先画：

- 笔记页上的节点网络
- 小工具卡片
- 检索 / 记忆 / Planning 的纸面示意
- 代码片段 + 便签
- 植物与知识结构结合

### 15.3 禁止

- humanoid robot
- glowing AI brain
- neon circuits
- purple/blue hologram
- sci-fi dashboard
- 3D isometric SaaS illustration

---

## 16. Interaction / Motion

动效非常轻。

允许：

- 卡片 Hover 上移 2–3px
- 阴影略增强
- 链接颜色变为 sage-dark
- 导航下划线展开
- 箭头水平移动 2–4px

不要：

- 页面元素飞入
- 连续浮动
- 大幅 Scale
- 粒子背景
- 滚动视差

必须兼容 `prefers-reduced-motion`。

---

## 17. 响应式原则

### Desktop

- 保持宽松留白
- 卡片可多列
- Hero 左文右图

### Tablet

- 卡片由 4 列降至 2 列
- 缩减装饰

### Mobile

- 单列优先
- 不强行保留复杂路线图
- 阶段与 Topic 改为自然纵向阅读
- 插画缩小或后置
- 不使用横向滚动完成核心阅读

移动端目标：

> 像在手机上阅读一本整理良好的笔记，而不是缩小后的桌面 Dashboard。

---

## 18. 信息密度规则

首页：低密度。

列表页：中低密度。

文章页：以阅读为中心。

学习路线页：中密度，但必须保留明显留白。

判断标准：

如果同一屏幕内出现：

- 6+ 个卡片边框
- 4+ 种强调色
- 3+ 个统计数字
- 5+ 个按钮
- 大量 Badge

则大概率偏离本站风格。

---

## 19. Do / Don't

### Do

- 暖米白背景
- 鼠尾草绿品牌色
- Serif + Sans + Kai 混排
- 大量呼吸空间
- 柔和纸卡
- 手帐式少量装饰
- 植物 / 笔记 / 纸张插画
- 中文自然文案
- 内容优先

### Don't

- 纯白 + 黑字做成 Vercel Clone
- 蓝色作为全站主色
- 大型 Progress Dashboard
- Bento Grid 到处使用
- 18 个 Topic 做成 18 张 SaaS Card
- 高饱和渐变
- 机器人作为 Agent 主视觉
- 每个组件都套边框
- 用视觉噪声填补留白

---

## 20. 新页面设计检查清单

在新增页面或生成高保真图之前逐项检查：

- [ ] 背景是否仍然是暖米白纸张，而非纯白？
- [ ] 鼠尾草绿是否仍然是第一强调色？
- [ ] 是否保留 Serif / Sans / Kai 的字体层级？
- [ ] 页面第一眼像个人技术笔记，而不是 SaaS？
- [ ] 是否保留了足够的空白？
- [ ] 卡片是否真的有必要存在？
- [ ] 卡片颜色是否足够低饱和？
- [ ] 阴影是否足够轻？
- [ ] 是否避免了蓝紫 AI 科技感？
- [ ] 是否避免 Dashboard 指标与 Progress Panel？
- [ ] 插画是否属于纸张 / 植物 / 笔记语言？
- [ ] 新组件能否自然放回当前首页而不显突兀？
- [ ] Mobile 是否仍可自然纵向阅读？

如果最后一个问题答案是“不”，说明新设计已经形成了第二套 UI 系统，应当重做。

---

## 21. 给 AI / 图片生成模型的统一风格前缀

后续要求 AI 设计本站页面时，可在具体页面需求前统一附加：

```text
This page belongs to “xuan.z 的个人笔记”, a warm editorial digital-garden style personal technology blog.

Strictly inherit the existing visual system:
- warm cream paper background (#f8f4eb), never pure white;
- muted sage green (#68795a) as the primary accent;
- warm brown-gray text and borders;
- Chinese Songti/serif for reading copy, KaiTi/handwritten serif for major titles, modern sans-serif only for UI metadata and technical labels;
- subtle paper texture, generous whitespace;
- quiet 14–18px rounded paper cards with thin warm borders and almost invisible shadows;
- muted sage / pale sky / sand / lavender only as soft secondary section colors;
- botanical, notebook, paper-note, code-card visual language;
- personal notebook / digital garden feeling;
- calm, handcrafted, editorial, readable.

Do NOT redesign it as SaaS, dashboard, Vercel/Linear clone, course platform, GitBook docs, Bento UI, futuristic AI interface, neon blue-purple gradient, glassmorphism, or robot-themed website.

Any new section must look like it was designed together with the existing homepage, not imported from another design system.
```

---

## 22. 最终判断标准

未来所有 UI 设计用一句话判断：

> **把这个模块截图单独拿出来，用户是否仍然能感觉它属于“xuan.z 的个人笔记”？**

如果答案依赖 Logo 才能判断，则风格还不够统一。

本站真正需要保持的不是某个具体卡片样式，而是这组气质：

**暖纸张 + 鼠尾草绿 + 书写感字体 + 轻手帐插画 + 内容型博客的克制。**
