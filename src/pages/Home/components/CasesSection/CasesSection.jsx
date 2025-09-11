import React, { useState } from 'react';
import styles from './CasesSection.module.scss';

export const CasesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const cases = [
    {
      title: "北京橙元智能科技有限公司",
      quote: "一个月内超预期完成了整个系统的开发，新系统上线后，我们的工作效率提升了60%",
      image: "/images/case-image.jpg"
    },
    {
      title: "北京橙元智能科技有限公司",
      quote: "一个月内超预期完成了整个系统的开发，新系统上线后，我们的工作效率提升了60%",
      image: "/images/case-image.jpg"
    },
    {
      title: "北京橙元智能科技有限公司",
      quote: "一个月内超预期完成了整个系统的开发，新系统上线后，我们的工作效率提升了60%",
      image: "/images/case-image.jpg"
    }
  ];

  return (
    <section className={styles.casesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>成功，是我们唯一的作品标准。</h2>
        
        <div className={styles.casesContainer}>
          <div className={styles.casesGrid}>
            {cases.map((caseItem, index) => (
              <div key={index} className={styles.caseCard}>
                <div className={styles.caseImage}>
                  <img src={caseItem.image} alt={caseItem.title} />
                </div>
                <div className={styles.caseContent}>
                  <div className={styles.caseInfo}>
                    <span className={styles.caseLabel}>成功案例</span>
                    <div className={styles.caseDetails}>
                      <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                      <blockquote className={styles.caseQuote}>
                        "{caseItem.quote}"
                      </blockquote>
                    </div>
                    <a href="#" className={styles.caseLink}>查看完整案例 →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.pagination}>
            {cases.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
