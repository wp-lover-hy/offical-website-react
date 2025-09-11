import React from 'react';
import styles from './Hero.module.scss';

export const Hero = ({
  title = "十年技术沉淀",
  subtitle = "只为交付卓越",
  description = "融合一线互联网大厂实战经验，为您打造在性能、设计与营销上全面领先的官网、外贸独立站、AI Agent与企业数字化系统，并承诺100%资产自由。",
  primaryButtonText = "了解我们的独立站服务",
  primaryButtonUrl = "#",
  secondaryButtonText = "预约一次免费咨询",
  secondaryButtonUrl = "#",
  imageUrl = "http://t2cudrsvf.hn-bkt.clouddn.com/banner-main.png",
  imageAlt = "Hero Image"
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.backgroundGradient1}></div>
        <div className={styles.backgroundGradient2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>{title}</span>
              <span className={styles.titleLine}>{subtitle}</span>
            </h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
              <a 
                href={primaryButtonUrl} 
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                {primaryButtonText}
              </a>
              <a 
                href={secondaryButtonUrl} 
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
          <div className={styles.image}>
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={imageAlt}
                className={styles.imageElement}
              />
            ) : (
              <div className={styles.placeholder}>
                <div className={styles.placeholderContent}>
                  <div className={styles.placeholderIcon}>🖼️</div>
                  <p>图片占位符</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
