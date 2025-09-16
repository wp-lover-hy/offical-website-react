import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.background}>
        <div className={styles.backgroundGradient1}></div>
        <div className={styles.backgroundGradient2}></div>
      </div>
      <div className={styles.container}>
        {/* Hero内容 */}
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              品牌独立站：<br />
              不是选择题，而是生死必答题
            </h1>
            <p className={styles.description}>
              流量红利见顶，野蛮生长的时代结束。当询盘增长乏力，利润越来越薄，您需要一个真正属于自己的"私域"阵地，沉淀品牌，掌握自己的命运。
            </p>
            <button className={styles.ctaButton}>
              查看解决方案
            </button>
          </div>
          
          <div className={styles.heroImage}>
            <img src="/images/hero-banner-image-74dd10-52e0b5.png" alt="独立站解决方案" />
          </div>
        </div>
      </div>
    </section>
  );
};
