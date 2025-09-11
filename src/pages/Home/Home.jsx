import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { CoreServices } from '../../components/CoreServices/CoreServices';
import { TeamIntro } from '../../components/TeamIntro/TeamIntro';
import { Philosophy } from '../../components/Philosophy/Philosophy';
import { CoreAdvantages } from '../../components/CoreAdvantages/CoreAdvantages';
import { SuccessCases } from '../../components/SuccessCases/SuccessCases';
import { CallToAction } from '../../components/CallToAction/CallToAction';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <CoreServices />
      <TeamIntro />
      <Philosophy />
      <CoreAdvantages />
      <SuccessCases />
      <CallToAction />
    </div>
  );
};
