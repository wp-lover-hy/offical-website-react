import React from 'react';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              十年技术沉淀<br />
              只为交付卓越
            </h1>
            <p className={styles.description}>
              融合一线互联网大厂实战经验，为您打造在性能、设计与营销上全面领先的官网、外贸独立站、AI Agent与企业数字化系统，并承诺100%资产自由。
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>
                了解我们的独立站服务
              </button>
              <button className={styles.secondaryButton}>
                预约一次免费咨询
              </button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <div className={styles.mainImageWrapper}>
                <img 
                  src="/images/hero-banner-image-74dd10.png" 
                  alt="Hero Banner" 
                  className={styles.mainImage}
                />
              </div>
              <div className={styles.gradientCircle}>
                <img 
                  src="/images/hero-gradient-circle.svg" 
                  alt="Gradient Circle" 
                  className={styles.gradientCircleImage}
                />
              </div>
              <div className={styles.smallImage}>
                <img 
                  src="/images/hero-small-image-2b0f5e.png" 
                  alt="Small Image" 
                  className={styles.smallImageImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
