import React from 'react';
import styles from './AdvantagesSection.module.scss';

export const AdvantagesSection = () => {
  const advantages = [
    {
      title: "极致性能 (Performance)",
      description: "我们将大型电商平台处理高并发的架构经验，应用于您的网站。从代码优化到服务器配置，我们苛求每一个毫秒的进步，确保您的网站在全球任何角落都能快如闪电，抓住每一位潜在客户。",
      icon: "/images/icon-lamp.svg"
    },
    {
      title: "美学设计 (Design)",
      description: '您的品牌故事，值得被优雅地讲述。我们的设计师团队坚持"美学与体验并重"的原则，为您打造独一无二的视觉识别系统。我们坚信，卓越的设计本身就是一种强大的销售力。',
      icon: "/images/icon-marker.svg"
    },
    {
      title: "增长基因 (Marketing)",
      description: '一个不能带来增长的网站，只是昂贵的"线上名片"。我们从建站之初就植入SEO的底层逻辑，并为您无缝集成数据分析工具，让您的每一次营销投入都有迹可循。',
      icon: "/images/icon-trending.svg"
    }
  ];

  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>我们的三大核心优势 · 交付卓越成果</h2>
          <p className={styles.subtitle}>将一线大厂的成功标准注入项目的每一个细节。</p>
        </div>
        
        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.advantageCard}>
              <div className={styles.iconContainer}>
                <div className={styles.iconBackground}>
                  <img src={advantage.icon} alt={advantage.title} className={styles.icon} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                <p className={styles.cardDescription}>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
