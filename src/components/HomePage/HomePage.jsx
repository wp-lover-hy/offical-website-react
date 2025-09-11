import React from 'react';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { CoreServices } from '../CoreServices/CoreServices';
import { TeamIntro } from '../TeamIntro/TeamIntro';
import { Philosophy } from '../Philosophy/Philosophy';
import { CoreAdvantages } from '../CoreAdvantages/CoreAdvantages';
import { SuccessCases } from '../SuccessCases/SuccessCases';
import { CallToAction } from '../CallToAction/CallToAction';
import { Footer } from '../Footer/Footer';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <CoreServices />
        <TeamIntro />
        <Philosophy />
        <CoreAdvantages />
        <SuccessCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};
