import React from 'react';
import styles from './IndependentSite.module.scss';
import { HeroSection } from './components/HeroSection/HeroSection';
import { ComparisonSection } from './components/ComparisonSection/ComparisonSection';
import { PitfallsSection } from './components/PitfallsSection/PitfallsSection';
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection';
import { TeamSection } from './../Home/components/TeamSection/TeamSection';
import { ProcessSection } from './components/ProcessSection/ProcessSection';
import { CTASection } from './components/CTASection/CTASection';
import { FAQSection } from './../Services/components/FAQSection/FAQSection';

export const IndependentSite = () => {
  return (
    <div className={styles.independentSite}>
      <HeroSection />
      <ComparisonSection />
      <PitfallsSection />
      <AdvantagesSection />
      <TeamSection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};
