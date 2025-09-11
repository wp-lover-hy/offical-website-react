import React from 'react';
import styles from './IndependentSite.module.scss';
import IndependentSiteHero from '../../components/IndependentSite/Hero/Hero';
import ComparisonSection from '../../components/IndependentSite/ComparisonSection/ComparisonSection';
import PitfallsSection from '../../components/IndependentSite/PitfallsSection/PitfallsSection';
import AdvantagesSection from '../../components/IndependentSite/AdvantagesSection/AdvantagesSection';
import TeamSection from '../../components/IndependentSite/TeamSection/TeamSection';
import ProcessSection from '../../components/IndependentSite/ProcessSection/ProcessSection';
import CTASection from '../../components/IndependentSite/CTASection/CTASection';
import FAQSection from '../../components/IndependentSite/FAQSection/FAQSection';

const IndependentSite = () => {
  return (
    <div className={styles.independentSite}>
      <IndependentSiteHero />
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

export default IndependentSite;
