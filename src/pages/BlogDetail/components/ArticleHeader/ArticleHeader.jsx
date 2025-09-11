import React from 'react';
import styles from './ArticleHeader.module.scss';

export const ArticleHeader = ({ article }) => {
  return (
    <header className={styles.articleHeader}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          <div className={styles.tag}>
            {article.category}
          </div>
          <span className={styles.author}>作者: {article.author}</span>
          <span className={styles.date}>{article.publishDate}</span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={article.heroImage} alt={article.title} />
      </div>
    </header>
  );
};
