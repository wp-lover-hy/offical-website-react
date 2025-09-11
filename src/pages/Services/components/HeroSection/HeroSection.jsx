import React from 'react';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>交付"确定性"</h1>
          <p className={styles.subtitle}>为您的复杂业务，构建稳如磐石的数字化系统。</p>
        </div>
      </div>
    </section>
  );
};
