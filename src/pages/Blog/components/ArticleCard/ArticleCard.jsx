import React from 'react';
import styles from './ArticleCard.module.scss';

export const ArticleCard = ({ article }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={article.image} alt={article.title} className={styles.image} />
        <div className={styles.tag} style={{ backgroundColor: article.tag.bgColor }}>
          <span style={{ color: article.tag.color }}>{article.tag.label}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{article.title}</h3>
          <div className={styles.meta}>
            <span className={styles.author}>作者: {article.author}</span>
            <span className={styles.date}>{article.date}</span>
          </div>
        </div>
        <p className={styles.excerpt}>{article.excerpt}</p>
      </div>
      <a href="/blog/any-article-slug" className={styles.readMore}>阅读全文 →</a>
    </article>
  );
};
