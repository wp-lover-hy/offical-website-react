import React from 'react';
import styles from './HeroSection.module.scss';
import { MissionHighlight } from '../MissionHighlight/MissionHighlight';

export const HeroSection = () => {
  return (
      <section>
        <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <h1 className={styles.title}>我们的使命</h1>
            <p className={styles.description}>
              我们是一群对代码质量和产品体验有信仰的工程师与设计师。我们坚信，
              顶级的技术不应只服务于巨头公司，更应该成为驱动优秀品牌成长的强大引擎。
            </p>
          </div>
        </div>
      </section>
      <MissionHighlight />
    </section>
    
  );
};
