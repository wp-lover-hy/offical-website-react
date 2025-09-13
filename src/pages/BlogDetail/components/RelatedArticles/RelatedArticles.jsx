import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RelatedArticles.module.scss';

export const RelatedArticles = ({ articles }) => {
  return (
    <section className={styles.relatedArticles}>
      <div className={styles.container}>
        <h2 className={styles.title}>相关阅读</h2>
        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              to={`/blog/${article.slug || article.id}`} 
              className={styles.articleCard}
            >
              <div className={styles.articleImage}>
                <img src={article.image} alt={article.title} />
              </div>
              <div className={styles.articleContent}>
                
                <div className={styles.articleInfo}>
                  <div className={styles.articleHeader}>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                  </div>
                </div>
              </div>
              <div className={styles.articleMeta}>
                <div className={styles.tag}>
                  {article.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
