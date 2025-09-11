import React from 'react';
import styles from './About.module.scss';

// 导入组件
import { HeroSection } from './components/HeroSection/HeroSection';
import { FounderSection } from './components/FounderSection/FounderSection';
import { MissionHighlight } from './components/MissionHighlight/MissionHighlight';
import { TeamSection } from './components/TeamSection/TeamSection';

export const About = () => {
  return (
    <div className={styles.aboutPage}>
      <HeroSection />
      <FounderSection />
      <MissionHighlight />
      <TeamSection />
    </div>
  );
};
