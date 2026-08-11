# 首页插画替换清单

当前仓库已经内置轻量 SVG 占位插画，确保页面无需等待素材即可完整运行。后续生成高质量图片后，只需要覆盖同名文件或在数据文件中修改路径即可。

## 1. Hero 主视觉

**目标文件：** `public/assets/hero-garden.webp`

推荐比例：`16:9` 或约 `1500 × 800`

提示词：

> 中文个人技术博客 Hero 插画，暖米白纸张质感、自然浅棕线稿、低饱和鼠尾草绿点缀，手帐与数字花园融合风格。画面包含一本打开的线圈笔记本，标题“今日记录”，四条手写待办；旁边一张方格纸绘制极简 RAG 流程 Query → Retrieval → LLM，并连接 Knowledge Base；右上角一张深色代码卡片，显示简短 Python 代码；前景有 KEEP LEARNING 牛皮纸书签；右下是一页打开的书，手写“知识如花，需要记录、浇灌，才会慢慢生长。”；加入一盆小绿植与一只陶瓷咖啡杯。柔和自然光，纸张、铅笔、水彩混合质感，精致但不杂乱，透明或暖米白背景，不要人物，不要 UI dashboard，不要 3D SaaS 风。

替换方式：生成后放入 `public/assets/hero-garden.webp`，再把 `src/components/Hero.astro` 中的 `/assets/hero-garden.svg` 改成 `.webp`。

## 2. 文章封面：Function Calling Agent

**目标文件：** `public/assets/article-agent.webp`

> 暖米白纸张背景的手绘技术文章封面，一只极简可爱的小型机器人，旁边是 Think → Tool → Observe 的流程节点，低饱和鼠尾草绿与灰蓝配色，细线稿，轻水彩质感，留出标题区域，适合个人技术博客卡片封面，不要 3D，不要复杂 UI。

## 3. 文章封面：RAG

**目标文件：** `public/assets/article-rag.webp`

> 暖色手帐风技术文章封面，纸张上写 RAG，旁边有文档、放大镜、向量点阵和 Knowledge Base 的极简线稿，米白、浅棕、鼠尾草绿配色，水彩与铅笔混合，轻盈留白，适合个人博客文章卡片。

## 4. 文章封面：FastAPI + React

**目标文件：** `public/assets/article-fastapi.webp`

> 暖色个人开发者博客封面，桌面上的深色代码编辑器局部，显示 FastAPI 风格 Python 代码，旁边放一小盆绿植和咖啡杯，背景为米白纸张与浅木色，低饱和，安静自然，像开发者工作笔记，不要炫光，不要后台仪表盘。

## 5. 项目封面：AI 知识助手

**目标文件：** `public/assets/project-ai-assistant.webp`

> 横向项目封面，宁静的海岸灯塔与远山，加入非常克制的知识网络/节点线条叠加，表现“知识导航”概念，低饱和蓝灰和鼠尾草绿，带纸张颗粒感，文艺、克制、技术感，不要赛博朋克。

## 6. 项目封面：个人数字花园

**目标文件：** `public/assets/project-digital-garden.webp`

> 横向个人数字花园项目封面，温暖木质桌面，笔记本电脑显示少量代码，台灯、咖啡、绿植和几本书，午后自然光，米白、浅棕、鼠尾草绿，精致但不杂乱，个人技术博客氛围。

## 7. 头像

**目标文件：** `public/assets/avatar.webp`

如果希望使用真人或自定义形象，建议生成透明背景的半身插画头像，色调保持浅棕、米白、鼠尾草绿。首页当前 SVG 只是占位。
