import React from 'react';
import styles from './Services.module.scss';

export const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>我们的服务</h1>
        <div className={styles.content}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>网站开发</h3>
              <p>专业的网站开发服务，包括前端和后端开发。</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>移动应用</h3>
              <p>iOS 和 Android 移动应用开发服务。</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>技术咨询</h3>
              <p>为您的项目提供专业的技术咨询和解决方案。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
