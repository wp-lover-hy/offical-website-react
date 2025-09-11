import React from 'react';
import { HeroSection } from './components/HeroSection/HeroSection';
import { CoreServices } from './components/CoreServices/CoreServices';
import { TeamSection } from './components/TeamSection/TeamSection';
import { PhilosophySection } from './components/PhilosophySection/PhilosophySection';
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection';
import { CasesSection } from './components/CasesSection/CasesSection';
import { CTASection } from './components/CTASection/CTASection';
import { FloatingFeatures } from './components/FloatingFeatures/FloatingFeatures';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.heroContainer}>
        <HeroSection />
        <FloatingFeatures />
      </div>
      <CoreServices />
      <TeamSection />
      <PhilosophySection />
      <AdvantagesSection />
      <CasesSection />
      <CTASection />
    </div>
  );
};
