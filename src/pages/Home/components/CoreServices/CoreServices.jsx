import React from 'react';
import styles from './CoreServices.module.scss';

export const CoreServices = () => {
  return (
    <section className={styles.coreServices}>
      <div className={styles.container}>
        <h2 className={styles.title}>两大核心服务</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3 className={styles.serviceName}>高端网站定制</h3>
              <p className={styles.serviceTagline}>您的线上增长引擎</p>
            </div>
            <p className={styles.serviceDescription}>
              我们不满足于"展示"，而是创造"增长"。从品牌故事的视觉呈现，到用户行为的深度追踪，再到询盘订单的顺滑转化，我们为您打造一个集品牌、营销、交易于一体的强大线上堡垒。
            </p>
            <a href="#" className={styles.serviceLink}>深入了解详情 →</a>
            <div className={styles.serviceIcon}>
              <img src="/images/icon-brush.svg" alt="Brush Icon" />
            </div>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3 className={styles.serviceName}>企业数字化系统定制</h3>
              <p className={styles.serviceTagline}>您业务的稳健基石</p>
            </div>
            <p className={styles.serviceDescription}>
              当业务复杂度超越标准软件的极限，您需要的是一支能解决核心问题的技术战队。我们承诺"确定性交付"，为您的复杂运营打造高效、可靠的专属系统。
            </p>
            <a href="#" className={styles.serviceLink}>深入了解详情 →</a>
            <div className={styles.serviceIcon}>
              <img src="/images/icon-device.svg" alt="Device Icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
