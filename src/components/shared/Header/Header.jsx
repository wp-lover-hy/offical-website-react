import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo-haoyuai.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img src={logo} alt="logo" className={styles.logoImage} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>主页</Link>
          <Link to="/independent-site" className={`${styles.navLink} ${isActive('/independent-site') ? styles.active : ''}`}>独立站</Link>
          <Link to="/services" className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}>系统服务</Link>
          <Link to="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>关于我们</Link>
          <Link to="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>联系我们</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <Link to="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>主页</Link>
          <Link to="/independent-site" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>独立站</Link>
          <Link to="/services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>系统服务</Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>关于我们</Link>
          <Link to="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>联系我们</Link>
        </nav>
      </div>
    </header>
  );
};
