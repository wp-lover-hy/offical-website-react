import React from 'react';
import styles from './FloatingFeatures.module.scss';

export const FloatingFeatures = () => {
  const features = [
    {
      title: "增长导向",
      description: "深度集成SEO与营销工具，让流量转化为生意。",
      icon: "/images/features/growth.png"
    },
    {
      title: "极致性能",
      description: "比肩一线互联网大厂的稳定性与响应速度。",
      icon: "/images/features/high-performance.png"
    },
    {
      title: "美学设计",
      description: "让品牌在第一眼就赢得客户的青睐。",
      icon: "/images/features/beautiful-design.png"
    }
  ];

  return (
    <div className={styles.floatingFeatures}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <div className={styles.iconBackground}>
                <img src={feature.icon} alt={feature.title} className={styles.icon} />
              </div>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
