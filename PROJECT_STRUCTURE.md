# 项目结构说明

## 路由系统

项目已经成功集成了 React Router DOM，支持多页面导航。

### 当前路由配置

- `/` - 首页 (Home)
- `/about` - 关于我们页面
- `/services` - 服务页面  
- `/contact` - 联系我们页面

### 项目文件结构

```
src/
├── components/
│   ├── shared/           # 共享组件
│   │   ├── Header/       # 导航头部组件
│   │   └── Footer/       # 页脚组件
│   ├── layout/           # 布局组件
│   │   └── Layout.jsx    # 主布局组件（包含 Header 和 Footer）
│   └── [其他业务组件]/    # 首页相关的业务组件
├── pages/                # 页面组件
│   ├── Home/             # 首页
│   ├── About/            # 关于我们页面
│   ├── Services/         # 服务页面
│   └── Contact/          # 联系我们页面
├── router/               # 路由配置
│   └── index.jsx         # 路由配置文件
├── styles/               # 全局样式
└── assets/               # 静态资源
```

## 设计原则

### 高内聚低耦合

1. **页面组件独立**: 每个页面都有自己的文件夹，包含组件和样式文件
2. **共享组件复用**: Header、Footer 等公共组件放在 `shared` 文件夹中
3. **布局组件统一**: 使用 Layout 组件统一管理页面布局
4. **路由配置集中**: 所有路由配置集中在 `router/index.jsx` 中

### 组件组织

- **pages/**: 页面级组件，每个页面一个文件夹
- **components/shared/**: 跨页面复用的组件
- **components/layout/**: 布局相关组件
- **components/[业务组件]/**: 特定业务逻辑的组件

## 如何添加新页面

1. 在 `src/pages/` 下创建新的页面文件夹
2. 创建页面组件和样式文件
3. 在 `src/router/index.jsx` 中添加新的路由配置
4. 在 Header 组件中添加导航链接（如需要）

## 导航功能

- Header 组件已集成 React Router 的 Link 组件
- 支持当前页面高亮显示
- 响应式设计，支持移动端菜单
- 点击导航链接会进行客户端路由跳转，无需页面刷新

## 开发建议

1. 保持页面组件的独立性，避免页面间的直接依赖
2. 公共逻辑和组件放在 shared 文件夹中
3. 样式文件使用 CSS Modules，避免样式冲突
4. 新增页面时遵循现有的文件夹结构和命名规范
