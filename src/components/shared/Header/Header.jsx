import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

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
            <svg width="109" height="49" viewBox="0 0 109 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H35.95C35.95 0 35.95 48.7 35.95 48.7H0V0Z" fill="url(#gradient1)"/>
              <path d="M41.74 13.92C41.74 13.92 63.77 13.92 63.77 35.95C63.77 35.95 41.74 35.95 41.74 13.92Z" fill="#4F46E5"/>
              <path d="M66.1 15.07C66.1 15.07 88.13 15.07 88.13 35.94C88.13 35.94 66.1 35.94 66.1 15.07Z" fill="#4F46E5"/>
              <path d="M89.29 16.23C89.29 16.23 104.36 16.23 104.36 33.62C104.36 33.62 89.29 33.62 89.29 16.23Z" fill="#4F46E5"/>
              <path d="M106.68 16.23H109V33.62H106.68V16.23Z" fill="#4F46E5"/>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="35.95" y2="48.7" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5"/>
                  <stop offset="0.95" stopColor="#6B90FF"/>
                </linearGradient>
              </defs>
            </svg>
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
