import React from 'react';
import styles from './MissionHighlight.module.scss';
import trophyIcon from '../../../../assets/images/trophy-icon.svg';

export const MissionHighlight = () => {
  return (
    <section className={styles.missionHighlight}>
      <div className={styles.container}>
        <div className={styles.highlightBox}>
          <div className={styles.iconContainer}>
            <img src={trophyIcon} alt="Trophy" className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.text}>以精湛的工程技术，助推每一个用心经营的品牌。</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
