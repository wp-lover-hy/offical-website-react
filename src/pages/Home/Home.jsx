import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
    </div>
  );
};
