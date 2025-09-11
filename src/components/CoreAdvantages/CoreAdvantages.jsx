import React from 'react';
import styles from './CoreAdvantages.module.scss';

export const CoreAdvantages = () => {
  const advantages = [
    {
      icon: 'performance',
      title: '极致性能 (Performance)',
      description: '我们将大型电商平台处理高并发的架构经验，应用于您的网站。从代码优化到服务器配置，我们苛求每一个毫秒的进步，确保您的网站在全球任何角落都能快如闪电，抓住每一位潜在客户。'
    },
    {
      icon: 'design',
      title: '美学设计 (Design)',
      description: '您的品牌故事，值得被优雅地讲述。我们的设计师团队坚持"美学与体验并重"的原则，为您打造独一无二的视觉识别系统。我们坚信，卓越的设计本身就是一种强大的销售力。'
    },
    {
      icon: 'marketing',
      title: '增长基因 (Marketing)',
      description: '一个不能带来增长的网站，只是昂贵的"线上名片"。我们从建站之初就植入SEO的底层逻辑，并为您无缝集成数据分析工具，让您的每一次营销投入都有迹可循。'
    }
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'performance':
        return (
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3.5L25.2 15.75H38.5L28.65 22.75L32.85 35L21 28L9.15 35L13.35 22.75L3.5 15.75H16.8L21 3.5Z" fill="currentColor"/>
          </svg>
        );
      case 'design':
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8H32V24H8V8Z" fill="currentColor"/>
            <path d="M12 12H28V16H12V12Z" fill="currentColor"/>
            <path d="M12 18H24V20H12V18Z" fill="currentColor"/>
            <path d="M8 28H32V32H8V28Z" fill="currentColor"/>
          </svg>
        );
      case 'marketing':
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 30L12 24L18 28L30 16L34 20V8H22L26 12L18 20L12 16L6 22V30Z" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.coreAdvantages}>
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
                  {renderIcon(advantage.icon)}
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
