import React, { useState } from 'react';
import styles from './SuccessCases.module.scss';

export const SuccessCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      title: '北京橙元智能科技有限公司',
      quote: '一个月内超预期完成了整个系统的开发，新系统上线后，我们的工作效率提升了60%',
      image: 'case1'
    },
    {
      title: '上海创新科技有限公司',
      quote: '专业的技术团队，优秀的项目管理，交付质量超出预期，合作非常愉快',
      image: 'case2'
    },
    {
      title: '深圳智慧物流有限公司',
      quote: '系统稳定运行一年多，零故障，为我们节省了大量运营成本',
      image: 'case3'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className={styles.successCases}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>成功，是我们唯一的作品标准。</h2>
        
        <div className={styles.casesContainer}>
          <div className={styles.casesGrid}>
            {cases.map((caseItem, index) => (
              <div 
                key={index} 
                className={`${styles.caseCard} ${index === currentSlide ? styles.active : ''}`}
              >
                <div className={`${styles.caseImage} ${styles[caseItem.image]}`}></div>
                <div className={styles.caseContent}>
                  <div className={styles.caseText}>
                    <span className={styles.caseLabel}>成功案例</span>
                    <div className={styles.caseInfo}>
                      <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                      <blockquote className={styles.caseQuote}>
                        "{caseItem.quote}"
                      </blockquote>
                    </div>
                    <a href="#case-detail" className={styles.caseLink}>
                      查看完整案例 →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.pagination}>
            <button 
              className={`${styles.paginationDot} ${currentSlide === 0 ? styles.active : ''}`}
              onClick={() => setCurrentSlide(0)}
            ></button>
            <button 
              className={`${styles.paginationDot} ${currentSlide === 1 ? styles.active : ''}`}
              onClick={() => setCurrentSlide(1)}
            ></button>
            <button 
              className={`${styles.paginationDot} ${currentSlide === 2 ? styles.active : ''}`}
              onClick={() => setCurrentSlide(2)}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};
