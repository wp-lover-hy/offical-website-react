import React from 'react';
import styles from './CTASection.module.scss';

export const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>准备好比您的同行领先一步了吗？</h2>
          <p className={styles.subtitle}>
            立即预约一次免费的1对1咨询，与我们的技术专家共同探讨您品牌的数字化未来。
          </p>
        </div>
        
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            了解我们的独立站服务
          </button>
          <button className={styles.secondaryButton}>
            预约一次免费咨询
          </button>
        </div>
      </div>
    </section>
  );
};
