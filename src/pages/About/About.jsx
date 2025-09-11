import React from 'react';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>关于我们</h1>
        <div className={styles.content}>
          <p>这里是关于我们页面的内容。您可以在这里添加公司介绍、团队信息、发展历程等内容。</p>
          <p>我们致力于为客户提供最优质的服务和解决方案。</p>
        </div>
      </div>
    </div>
  );
};
