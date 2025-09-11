import React from 'react';
import styles from './CTASection.module.scss';

export const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>准备好将您的商业构想变为现实了吗？</h2>
            <p className={styles.description}>
              立即联系我们的技术专家，获取免费的初步咨询和方案评估。让我们共同构建您的数字化未来。
            </p>
          </div>
          
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>
              获取免费咨询
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
