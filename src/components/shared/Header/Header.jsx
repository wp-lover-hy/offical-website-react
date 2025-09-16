import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo-haoyuai.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileNavRef = useRef(null);
  const mobileMenuBtnRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // 处理滚动事件的回调函数
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // 在顶部附近时始终显示
    if (currentScrollY < 10) {
      setIsVisible(true);
    } else {
      // 向下滚动时隐藏，向上滚动时显示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // 监听滚动事件
  useEffect(() => {
    let ticking = false;
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [handleScroll]);

  // 处理移动端菜单外部点击和ESC键关闭
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen &&
          mobileNavRef.current &&
          mobileMenuBtnRef.current &&
          !mobileNavRef.current.contains(event.target) &&
          !mobileMenuBtnRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      // 防止页面滚动
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
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
          <Link to="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}>博客</Link>
          <Link to="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>关于我们</Link>
          <Link to="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>联系我们</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          ref={mobileMenuBtnRef}
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && <div className={styles.mobileOverlay} onClick={closeMenu} />}
        
        {/* Mobile Navigation */}
        <nav 
          ref={mobileNavRef}
          className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}
        >
          <Link to="/" className={styles.mobileNavLink} onClick={closeMenu}>主页</Link>
          <Link to="/independent-site" className={styles.mobileNavLink} onClick={closeMenu}>独立站</Link>
          <Link to="/services" className={styles.mobileNavLink} onClick={closeMenu}>系统服务</Link>
          <Link to="/blog" className={styles.mobileNavLink} onClick={closeMenu}>博客</Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={closeMenu}>关于我们</Link>
          <Link to="/contact" className={styles.mobileNavLink} onClick={closeMenu}>联系我们</Link>
        </nav>
      </div>
    </header>
  );
};
