import React, { useState } from 'react';
import styles from './BlogPagination.module.scss';

export const BlogPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageButton} ${i === currentPage ? styles.active : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.navButton} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
            fill={currentPage === 1 ? "#D9D9D9" : "#4F4769"}
          />
        </svg>
      </button>
      
      {renderPageNumbers()}
      
      <button
        className={`${styles.navButton} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M4.59 1.41L9.17 6L4.59 10.59L6 12L12 6L6 0L4.59 1.41Z"
            fill={currentPage === totalPages ? "#D9D9D9" : "#4F4769"}
          />
        </svg>
      </button>
    </div>
  );
};
