import React from 'react';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>行业洞察 & 技术前沿</h1>
        <p className={styles.subtitle}>
          在这里，我们分享关于品牌出海、技术架构和用户体验的深度思考。
        </p>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <input 
            type="text" 
            placeholder="搜索关键词，如 'SEO', '性能优化'..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
