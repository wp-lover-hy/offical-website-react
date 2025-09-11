# 系统定制服务页面实现说明

## 概述
根据Figma设计稿实现的系统定制服务页面，严格按照设计规范进行开发，采用响应式设计，支持PC和移动端。

## 页面结构

### 1. Hero区块 (HeroSection)
- **功能**: 展示主标题"交付确定性"和副标题
- **设计**: 渐变背景，居中布局
- **响应式**: PC端60px标题，移动端32px标题

### 2. 确定性特性区块 (CertaintyFeatures)
- **功能**: 展示5个确定性特性卡片
- **特性**: 明确的需求边界、透明的开发过程、准时的交付周期、可靠的系统质量、负责到底的态度
- **设计**: 卡片式布局，渐变边框，图标+文字
- **响应式**: PC端5列布局，移动端2列换行布局

### 3. 三大支柱区块 (ThreePillars)
- **功能**: 展示实现确定性的三大支柱
- **支柱**: 人才确定性、流程确定性、责任确定性
- **设计**: 大卡片布局，每个卡片包含图标、标题和详细描述
- **响应式**: PC端3列布局，移动端单列布局

### 4. 核心服务区块 (CoreServices)
- **功能**: 展示4个核心技术服务
- **服务**: 100%资产归属、塑造品牌溢价、沉淀私域流量、极致转化体验
- **设计**: 卡片式布局，每个服务包含图标、主标题、副标题和描述
- **响应式**: 移动端优先的垂直布局

### 5. CTA区块 (CTASection)
- **功能**: 行动号召，引导用户获取免费咨询
- **设计**: 深色背景，白色按钮，居中布局
- **响应式**: 按钮大小和文字大小适配不同屏幕

### 6. FAQ区块 (FAQSection)
- **功能**: 常见问题解答，可展开/收起
- **交互**: 点击问题展开答案，带动画效果
- **设计**: 简洁的列表布局，蓝色分割线
- **响应式**: 文字大小和间距适配移动端

## 技术特点

### 1. 组件化设计
- 按照WordPress古腾堡区块的方式进行组件化
- 每个区块都是独立的React组件
- 便于维护和复用

### 2. 响应式设计
- 严格按照Figma设计稿的PC端(1920px)和移动端(375px)规范
- 主内容区域固定为1200px
- 使用CSS媒体查询实现响应式布局

### 3. 样式管理
- 使用CSS Modules避免样式冲突
- SCSS预处理器提供更好的样式组织
- 统一的变量管理

### 4. 图标资源
- 从Figma设计稿中导出SVG图标
- 使用background-image方式引入图标
- 保证图标的清晰度和可缩放性

## 文件结构
```
src/pages/Services/
├── Services.jsx                    # 主页面组件
├── Services.module.scss           # 主页面样式
└── components/
    ├── HeroSection/
    │   ├── HeroSection.jsx
    │   └── HeroSection.module.scss
    ├── CertaintyFeatures/
    │   ├── CertaintyFeatures.jsx
    │   └── CertaintyFeatures.module.scss
    ├── ThreePillars/
    │   ├── ThreePillars.jsx
    │   └── ThreePillars.module.scss
    ├── CoreServices/
    │   ├── CoreServices.jsx
    │   └── CoreServices.module.scss
    ├── CTASection/
    │   ├── CTASection.jsx
    │   └── CTASection.module.scss
    └── FAQSection/
        ├── FAQSection.jsx
        └── FAQSection.module.scss
```

## 路由配置
页面已添加到路由系统中，访问路径为 `/services`

## 使用说明
1. 页面已集成到现有的导航系统中
2. 支持从主导航菜单访问
3. 所有交互功能已实现（FAQ展开/收起、按钮悬停效果等）
4. 响应式设计确保在各种设备上的良好显示效果

## 注意事项
- 背景图片目前使用占位符，需要替换为实际的设计图片
- 图标已从Figma导出并集成
- 所有文字内容严格按照设计稿要求
- 颜色、字体、间距等严格遵循设计规范
