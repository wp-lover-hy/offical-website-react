import React from 'react';
import styles from './CoreServices.module.scss';

export const CoreServices = () => {
  return (
    <section className={styles.coreServices}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>两大核心服务</h2>
        
        <div className={styles.servicesGrid}>
          {/* 高端网站定制 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.serviceTitle}>高端网站定制</h3>
              <p className={styles.serviceSubtitle}>您的线上增长引擎</p>
            </div>
            <p className={styles.serviceDescription}>
              我们不满足于"展示"，而是创造"增长"。从品牌故事的视觉呈现，到用户行为的深度追踪，再到询盘订单的顺滑转化，我们为您打造一个集品牌、营销、交易于一体的强大线上堡垒。
            </p>
            <a href="#website" className={styles.serviceLink}>
              深入了解详情 →
            </a>
            <div className={styles.serviceIcon}>
              <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 60H180V120H60V60Z" fill="#7D4AFF" opacity="0.4"/>
                <path d="M80 80H160V100H80V80Z" fill="#7D4AFF" opacity="0.4"/>
                <path d="M80 110H140V130H80V110Z" fill="#7D4AFF" opacity="0.4"/>
                <path d="M80 140H120V160H80V140Z" fill="#7D4AFF" opacity="0.4"/>
              </svg>
            </div>
          </div>

          {/* 企业数字化系统定制 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.serviceTitle}>企业数字化系统定制</h3>
              <p className={styles.serviceSubtitle}>您业务的稳健基石</p>
            </div>
            <p className={styles.serviceDescription}>
              当业务复杂度超越标准软件的极限，您需要的是一支能解决核心问题的技术战队。我们承诺"确定性交付"，为您的复杂运营打造高效、可靠的专属系统。
            </p>
            <a href="#services" className={styles.serviceLink}>
              深入了解详情 →
            </a>
            <div className={styles.serviceIcon}>
              <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="80" width="60" height="80" rx="8" fill="#7D4AFF" opacity="0.4"/>
                <rect x="130" y="60" width="60" height="100" rx="8" fill="#7D4AFF" opacity="0.4"/>
                <circle cx="80" cy="50" r="8" fill="#7D4AFF" opacity="0.4"/>
                <circle cx="160" cy="50" r="8" fill="#7D4AFF" opacity="0.4"/>
                <path d="M70 180H170V200H70V180Z" fill="#7D4AFF" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
