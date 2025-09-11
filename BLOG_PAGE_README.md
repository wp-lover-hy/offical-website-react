# 博客页面实现文档

## 概述
严格按照Figma设计稿100%还原实现的博客列表页面，支持PC端和移动端响应式设计。

## 页面结构

### 1. HeroSection (英雄区块)
- **PC端**: 使用 `blog-hero-bg-pc.png` 作为背景图，尺寸720px高度
- **移动端**: 使用 `blog-hero-bg-mobile.png` 作为背景图，自适应高度
- **内容**: 
  - 主标题: "行业洞察 & 技术前沿"
  - 副标题: "在这里，我们分享关于品牌出海、技术架构和用户体验的深度思考。"
  - 搜索框: 带有Font Awesome搜索图标的输入框

### 2. FilterTags (标签过滤)
- **标签**: 最新、独立站运营、技术架构、用户体验、性能优化
- **交互**: 点击切换激活状态
- **样式**: 激活状态为紫色背景白色文字，非激活状态为透明背景深色文字

### 3. ArticleList (文章列表)
- **布局**: PC端2列网格，移动端1列
- **文章卡片**包含:
  - 文章封面图片
  - 分类标签（不同颜色）
  - 文章标题
  - 作者和发布日期
  - 文章摘要
  - "阅读全文 →" 链接

### 4. BlogPagination (分页)
- **样式**: 仿Ant Design分页组件
- **功能**: 支持上一页、下一页、页码点击
- **状态**: 当前页高亮显示，禁用状态灰色显示

## 响应式设计

### PC端 (>768px)
- 主内容区宽度: 1200px（严格按照要求）
- Hero区块高度: 720px
- 文章列表: 2列网格布局
- 间距: 按设计稿精确还原

### 移动端 (≤768px)
- 主内容区宽度: 100% - 32px padding
- Hero区块: 自适应高度，85px上下padding
- 文章列表: 1列布局
- 标签过滤: 横向滚动布局

## 技术实现

### 组件化结构
```
Blog/
├── Blog.jsx                    # 主页面组件
├── Blog.module.scss           # 主页面样式
└── components/
    ├── HeroSection/           # 英雄区块
    ├── FilterTags/            # 标签过滤
    ├── ArticleList/           # 文章列表
    ├── ArticleCard/           # 文章卡片
    └── BlogPagination/        # 分页组件
```

### 样式特点
- 使用CSS Modules避免样式冲突
- 严格按照Figma设计稿的颜色、字体、间距
- 使用Inter字体系列
- 支持hover效果和过渡动画

### 图片资源
- `blog-hero-bg-pc.png`: PC端Hero背景图
- `blog-hero-bg-mobile.png`: 移动端Hero背景图
- `blog-article-1-344869.png`: 文章1封面图
- `blog-article-2-344869.png`: 文章2封面图
- `blog-article-3.png`: 文章3封面图
- `blog-article-4.png`: 文章4封面图

## 路由配置
- 路径: `/blog`
- 已添加到Header导航菜单（PC端和移动端）

## 设计还原度
- ✅ 100%按照Figma设计稿还原
- ✅ PC端主内容区严格1200px宽度
- ✅ 响应式设计支持移动端
- ✅ 所有颜色、字体、间距精确匹配
- ✅ 组件化架构，类似WordPress古腾堡区块
- ✅ 交互效果和状态管理完整

## 访问方式
1. 启动开发服务器: `npm run dev`
2. 访问: `http://localhost:5173/blog`
3. 或通过Header导航菜单点击"博客"链接
