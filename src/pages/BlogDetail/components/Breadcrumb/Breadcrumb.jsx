import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

export const Breadcrumb = ({ currentTitle }) => {
  return (
    <nav className={styles.breadcrumb}>
      <div className={styles.breadcrumbItem}>
        <Link to="/blog" className={styles.breadcrumbLink}>
          博客
        </Link>
      </div>
      <span className={styles.separator}>/</span>
      <div className={styles.breadcrumbItem}>
        <span className={styles.currentPage}>
          {currentTitle}
        </span>
      </div>
    </nav>
  );
};
