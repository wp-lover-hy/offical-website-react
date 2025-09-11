import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
import { ArticleHeader } from './components/ArticleHeader/ArticleHeader';
import { ArticleContent } from './components/ArticleContent/ArticleContent';
import { ArticleNavigation } from './components/ArticleNavigation/ArticleNavigation';
import { RelatedArticles } from './components/RelatedArticles/RelatedArticles';
import styles from './BlogDetail.module.scss';

export const BlogDetail = () => {
  const { slug } = useParams();

  // 模拟文章数据 - 实际项目中应该从API获取
  const articleData = {
    id: 1,
    title: '2025年，外贸独立站必须关注的5个SEO新趋势',
    author: '王静',
    publishDate: '2025年9月1日',
    category: '独立站运营',
    heroImage: '/src/assets/images/blog-detail-hero-image.png',
    contentImage: '/src/assets/images/blog-detail-content-image.png',
    content: {
      introduction: '在竞争日益激烈的全球市场中，仅仅拥有一个网站是远远不够的。搜索引擎优化（SEO）是获取高质量自然流量的关键。随着搜索引擎算法的不断进化，过去的策略可能不再有效。本文将深入探讨2025年您必须关注的五大SEO新趋势，帮助您的品牌在全球市场中保持领先。',
      sections: [
        {
          title: '1. AI驱动的内容策略与SGE（搜索生成体验）',
          content: 'Google的SGE正在重塑搜索结果页。这意味着用户可能无需点击进入任何网站就能获得答案。我们的策略需要从"关键词排名"转向"成为权威信息源"。\n\n创建实体：_建立您的品牌、作者和产品在Google知识图谱中的权威性。\n深度与广度：_创作不仅能回答问题，还能引发新问题的深度内容。\n结构化数据：_使用Schema标记，帮助搜索引擎更好地理解您的内容。'
        },
        {
          title: '2. E-E-A-T: 经验、专业、权威、可信',
          content: 'E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) 不再仅仅是医疗或金融领域的要求，它已成为所有行业内容质量的黄金标准。您需要向用户和搜索引擎证明，您的内容是可信的。\n\n"在信息泛滥的时代，信任是最稀缺的资源。您的网站需要成为用户可以信赖的灯塔。"'
        },
        {
          title: '3. 视频SEO的崛起',
          content: '视频内容在搜索结果中的权重越来越高。YouTube是全球第二大搜索引擎。为您的产品、服务或教程创建高质量的视频，并进行适当的SEO优化（标题、描述、标签），将为您带来可观的流量。'
        }
      ],
      conclusion: {
        image: '/src/assets/images/blog-detail-content-image.png',
        content: '图：视频内容在用户旅程中的作用日益重要。\n\n4. 核心Web指标 (Core Web Vitals) 与用户体验\n\n网站的性能就是用户体验的一部分。Google明确表示，LCP（最大内容绘制）、FID（首次输入延迟）和CLS（累积布局偏移）是重要的排名因素。我们为客户构建的每一个网站，都将性能优化刻在DNA里，确保为用户提供流畅的浏览体验。\n\n5. 内部链接的战略价值\n\n内部链接是向搜索引擎展示您网站结构和内容关联性的最有效方式之一。一个精心策划的内链策略可以：\n\n帮助搜索引擎发现您网站的深层页面。\n传递页面权重，提升重要页面的排名。\n引导用户发现更多相关内容，增加停留时间。\n\n结论：\n2025年的SEO是一场关于质量、权威和用户体验的综合竞赛。作为您的技术伙伴，我们不仅为您构建一个高性能的网站，更会从技术层面为您打下坚实的SEO基础，助您在这场竞赛中拔得头筹。'
      }
    }
  };

  const relatedArticles = [
    {
      id: 2,
      title: '设计心理学：如何通过界面设计提升用户信任感',
      category: '用户体验',
      image: '/src/assets/images/blog-related-article-1-21bd27.png'
    },
    {
      id: 3,
      title: '设计心理学：如何通过界面设计提升用户信任感',
      category: '用户体验',
      image: '/src/assets/images/blog-related-article-1-21bd27.png'
    },
    {
      id: 4,
      title: '设计心理学：如何通过界面设计提升用户信任感',
      category: '用户体验',
      image: '/src/assets/images/blog-related-article-1-21bd27.png'
    }
  ];

  const navigationData = {
    prev: {
      title: '2025年，外贸独立站必须关注的5个SEO新趋势',
      category: '独立站运营'
    },
    next: {
      title: '2025年，外贸独立站必须关注的5个SEO新趋势',
      category: '独立站运营'
    }
  };

  return (
    <div className={styles.blogDetail}>
      <div className={styles.container}>
        <Breadcrumb currentTitle={articleData.title} />
        <ArticleHeader article={articleData} />
        <ArticleContent article={articleData} />
        <ArticleNavigation navigation={navigationData} />
      </div>
      <RelatedArticles articles={relatedArticles} />
    </div>
  );
};
