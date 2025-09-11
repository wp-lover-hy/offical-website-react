import React from 'react';
import styles from './ArticleList.module.scss';
import { ArticleCard } from '../ArticleCard/ArticleCard';

import blogArticle1 from '../../../../assets/images/blog-article-1-344869.png';
import blogArticle2 from '../../../../assets/images/blog-article-2-344869.png';
import blogArticle3 from '../../../../assets/images/blog-article-3.png';
import blogArticle4 from '../../../../assets/images/blog-article-4.png';

const articles = [
  {
    id: 1,
    image: blogArticle1,
    tag: { label: '独立站运营', color: '#4F46E5', bgColor: '#E5E4FF' },
    title: '2025年，外贸独立站必须关注的5个SEO新趋势',
    author: '王静',
    date: '2025年9月1日',
    excerpt: '在竞争日益激烈的全球市场中，仅仅拥有一个网站是远远不够的。搜索引擎优化（SEO）是获取高质量自然流量的关键。本文将深入探讨2025年您必须关注的五大SEO新趋势，从AI驱动的内容生成到用户体验信号的重要性...'
  },
  {
    id: 2,
    image: blogArticle2,
    tag: { label: '技术架构', color: '#306BE3', bgColor: '#DBE9FF' },
    title: '为什么我们坚持为客户的网站交付100%源代码？',
    author: '王静',
    date: '2025年9月1日',
    excerpt: '在竞争日益激烈的全球市场中，仅仅拥有一个网站是远远不够的。搜索引擎优化（SEO）是获取高质量自然流量的关键。本文将深入探讨2025年您必须关注的五大SEO新趋势，从AI驱动的内容生成到用户体验信号的重要性...'
  },
  {
    id: 3,
    image: blogArticle3,
    tag: { label: '用户体验', color: '#12AB0A', bgColor: '#E5FFE4' },
    title: '设计心理学：如何通过界面设计提升用户信任感',
    author: '王静',
    date: '2025年9月1日',
    excerpt: '一个优秀的网站不仅功能强大，更能在无形中与用户建立信任。本文将从设计心理学的角度，分享7个简单而有效的设计技巧，帮助您的网站在细节中赢得客户的心...'
  },
  {
    id: 4,
    image: blogArticle4,
    tag: { label: '性能优化', color: '#E54649', bgColor: '#FFE4E4' },
    title: '网站加载速度优化指南：从0.8秒到0.2秒的实战复盘',
    author: '王静',
    date: '2025年9月1日',
    excerpt: '在SaaS平台大行其道的今天，我们为何反其道而行，坚持为每个客户提供完整的源代码？这背后是对客户数字资产所有权的尊重，也是我们技术自信的体现。本文将阐述我们的技术哲学...'
  }
];

export const ArticleList = () => {
  return (
    <div className={styles.articleList}>
      <div className={styles.articlesGrid}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
