import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleNavigation.module.scss';

export const ArticleNavigation = ({ navigation }) => {
  return (
    <nav className={styles.articleNavigation}>
      {navigation.prev && (
        <Link to={`/blog/${navigation.prev.slug || 'prev-article'}`} className={styles.navCard}>
          <div className={styles.cardContent}>
            <div className={styles.tag}>
              {navigation.prev.category}
            </div>
            <h3 className={styles.title}>{navigation.prev.title}</h3>
          </div>
          <div className={styles.navButton}>
            上一篇
          </div>
        </Link>
      )}
      
      {navigation.next && (
        <Link to={`/blog/${navigation.next.slug || 'next-article'}`} className={styles.navCard}>
          <div className={styles.cardContent}>
            <div className={styles.tag}>
              {navigation.next.category}
            </div>
            <h3 className={styles.title}>{navigation.next.title}</h3>
          </div>
          <div className={styles.navButton}>
            下一篇
          </div>
        </Link>
      )}
    </nav>
  );
};
