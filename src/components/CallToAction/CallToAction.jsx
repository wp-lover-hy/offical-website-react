import React from 'react';
import styles from './CallToAction.module.scss';

export const CallToAction = () => {
  return (
    <section className={styles.callToAction}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            准备好比您的同行领先一步了吗？
          </h2>
          <p className={styles.description}>
            立即预约一次免费的1对1咨询，与我们的技术专家共同探讨您品牌的数字化未来。
          </p>
        </div>
        
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>
            了解我们的独立站服务
          </button>
          <button className={styles.secondaryBtn}>
            预约一次免费咨询
          </button>
        </div>
      </div>
    </section>
  );
};
