import React from 'react';
import styles from './Services.module.scss';
import { HeroSection } from './components/HeroSection/HeroSection';
import { CertaintyFeatures } from './components/CertaintyFeatures/CertaintyFeatures';
import { ThreePillars } from './components/ThreePillars/ThreePillars';
import { CoreServices } from './components/CoreServices/CoreServices';
import { CTASection } from './components/CTASection/CTASection';
import { FAQSection } from './components/FAQSection/FAQSection';

export const Services = () => {
  return (
    <div className={styles.services}>
      <HeroSection />
      <CertaintyFeatures />
      <ThreePillars />
      <CoreServices />
      <CTASection />
      <FAQSection />
    </div>
  );
};
