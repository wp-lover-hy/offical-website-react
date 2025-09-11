import React from 'react';
import styles from './AdvantagesSection.module.scss';

export const AdvantagesSection = () => {
  const advantages = [
    {
      id: 'ownership',
      icon: (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path d="M5.25 2.19H36.75V38.5H5.25V2.19Z" fill="url(#gradient-ownership)"/>
          <defs>
            <linearGradient id="gradient-ownership" x1="5.25" y1="2.19" x2="36.75" y2="38.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.8)"/>
              <stop offset="1" stopColor="#FFFFFF"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: '100%资产归属',
      subtitle: '你的地盘，你做主',
      description: '交付全部源码，数据100%归你。无平台束缚，可以随时迁走，彻底掌握自己命运。'
    },
    {
      id: 'branding',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0.81 0.44H40.7V40.05H0.81V0.44Z" fill="url(#gradient-branding)"/>
          <defs>
            <linearGradient id="gradient-branding" x1="0.81" y1="0.44" x2="40.7" y2="40.05" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.8)"/>
              <stop offset="1" stopColor="#FFFFFF"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: '塑造品牌溢价',
      subtitle: '跳出比价，做品牌',
      description: '高端定制，专业设计，讲述品牌故事，传递专业价值，让客户因信任而选择你。'
    },
    {
      id: 'traffic',
      icon: (
        <svg width="27" height="34" viewBox="0 0 27 34" fill="none">
          <path d="M7 4H34.13V38.13H7V4Z" fill="url(#gradient-traffic)"/>
          <defs>
            <linearGradient id="gradient-traffic" x1="7" y1="4" x2="34.13" y2="38.13" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.8)"/>
              <stop offset="1" stopColor="#FFFFFF"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: '沉淀私域流量',
      subtitle: '把流量变成你的"活期存款"',
      description: '通过SEO、内容营销持续获客，将访客沉淀为可反复触达的私域用户，实现流量变现。'
    },
    {
      id: 'conversion',
      icon: (
        <svg width="41" height="38" viewBox="0 0 41 38" fill="none">
          <path d="M0.61 2.19H41.39V39.82H0.61V2.19Z" fill="url(#gradient-conversion)"/>
          <defs>
            <linearGradient id="gradient-conversion" x1="0.61" y1="2.19" x2="41.39" y2="39.82" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255, 255, 255, 0.8)"/>
              <stop offset="1" stopColor="#FFFFFF"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: '极致转化体验',
      subtitle: '不让网站速度，拖累你的成交',
      description: '大厂级的技术标准，毫秒级加载速度，流畅的交互体验，最大化提升询盘和订单转化率。'
    }
  ];

  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>好的独立站是什么样的？</h2>
          <p className={styles.subtitle}>
            根据企业实际情况进行专业化定制，能稳定带来流量，并且100%资产归属，完全自由可掌控
          </p>
        </div>
        
        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div key={advantage.id} className={styles.advantageCard}>
              <div className={styles.iconContainer}>
                {advantage.icon}
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                <p className={styles.cardSubtitle}>{advantage.subtitle}</p>
              </div>
              
              <p className={styles.description}>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
