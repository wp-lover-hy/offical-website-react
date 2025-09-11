import React from 'react';
import styles from './Hero.module.scss';
import heroMainImage from '../../../assets/images/hero-main-image-52e0b5.jpg';
import mobileHeroMainImage from '../../../assets/images/mobile-hero-main-image-2d0101.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
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
          <div className={styles.imageContent}>
            <picture>
              <source 
                media="(max-width: 768px)" 
                srcSet={mobileHeroMainImage}
              />
              <img 
                src={heroMainImage} 
                alt="独立站解决方案" 
                className={styles.heroImage}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
