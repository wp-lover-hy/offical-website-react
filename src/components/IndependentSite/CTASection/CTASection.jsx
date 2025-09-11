import React from 'react';
import styles from './CTASection.module.scss';

const CTASection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            想领先你的同行一步？ 那就先迈出预约的第一步
          </h2>
          <p className={styles.description}>
            不确定自己的官网是否有问题？不清楚如何规划一个能赚钱的独立站？立即预约一次免费的1对1诊断，让大厂技术专家帮您理清思路。
            <br /><br />
            诊断包含：现有网站性能与SEO问题分析 / 目标市场与竞品官网优劣势对比 / 独立站增长路径规划建议
            <br /><br />
            我们承诺：诊断过程客观中立，绝不强行推销。不建站也没关系，交个朋友，也许能给您带来一些新启发。
          </p>
        </div>
        
        <div className={styles.ctaActions}>
          <button className={styles.ctaButton}>
            立即预约：1对1官网增长诊断 (免费)
          </button>
          
          <div className={styles.limitInfo}>
            <span className={styles.limitIcon}>✨</span>
            <span className={styles.limitText}>每日仅限3个免费名额</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
