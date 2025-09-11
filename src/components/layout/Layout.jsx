import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../shared/Header/Header';
import { Footer } from '../shared/Footer/Footer';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
