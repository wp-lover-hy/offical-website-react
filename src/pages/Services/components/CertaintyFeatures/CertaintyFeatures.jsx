import React from 'react';
import styles from './CertaintyFeatures.module.scss';

export const CertaintyFeatures = () => {
  const features = [
    {
      id: 1,
      title: '明确的需求边界',
      icon: 'design'
    },
    {
      id: 2,
      title: '透明的开发过程',
      icon: 'eye'
    },
    {
      id: 3,
      title: '准时的交付周期',
      icon: 'time'
    },
    {
      id: 4,
      title: '可靠的系统质量',
      icon: 'vip'
    },
    {
      id: 5,
      title: '负责到底的态度',
      icon: 'thumb'
    }
  ];

  return (
    <section className={styles.certaintyFeatures}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>在软件定制领域，我们只出品一样东西：确定性</h2>
            <p className={styles.description}>
              我们深知，复杂的系统开发，最大的风险在于过程的不可控。因此，我们将"确定性"作为交付的核心，它体现在每一个合作细节中：
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconBg}>
                    <div className={styles.icon} data-icon={feature.icon}></div>
                  </div>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
