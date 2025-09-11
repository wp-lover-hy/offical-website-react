import React from 'react';
import styles from './Blog.module.scss';
import { HeroSection } from './components/HeroSection/HeroSection';
import { FilterTags } from './components/FilterTags/FilterTags';
import { ArticleList } from './components/ArticleList/ArticleList';
import { BlogPagination } from './components/BlogPagination/BlogPagination';

export const Blog = () => {
  return (
    <div className={styles.blog}>
      <HeroSection />
      <div className={styles.content}>
        <FilterTags />
        <ArticleList />
        <BlogPagination />
      </div>
    </div>
  );
};
