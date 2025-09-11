import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  const quickLinks = ['AI对话', 'AI绘画', '价格', '开放平台'];
  const aboutLinks = ['关于我们', '加入我们', '帮助中心', 'API文档'];
  const friendlyLinks = [
    '链接伙伴A', '链接伙伴B', '链接伙伴B', '链接伙伴B', 
    '链接伙伴B', '链接伙伴B', '链接伙伴B', '链接伙伴B',
    '链接伙伴B', '链接伙伴B', '链接伙伴B'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
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
            <p className={styles.brandDescription}>
              我们致力于探索人工智能的前沿技术，为企业和个人提供创新的解决方案。
            </p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.linkTitle}>快速链接</h3>
              <div className={styles.linkList}>
                {quickLinks.map((link, index) => (
                  <a key={index} href="#" className={styles.link}>{link}</a>
                ))}
              </div>
            </div>

            <div className={styles.linkColumn}>
              <div className={styles.linkList}>
                {aboutLinks.map((link, index) => (
                  <a key={index} href="#" className={styles.link}>{link}</a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.linkTitle}>联系我们</h3>
            <div className={styles.linkList}>
              <span className={styles.contactInfo}>邮箱: contact@haoyu.ai</span>
              <span className={styles.contactInfo}>地址: 中国北京市海淀区</span>
              <span className={styles.contactInfo}>电话: +86 10 1234 5678</span>
            </div>
            <div className={styles.qrCode}>
              <div className={styles.qrCodeContainer}>
                <div className={styles.qrCodeImage}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.friendlyLinksSection}>
          <span className={styles.friendlyLinksTitle}>友情链接</span>
          {friendlyLinks.map((link, index) => (
            <a key={index} href="#" className={styles.friendlyLink}>{link}</a>
          ))}
        </div>

        <div className={styles.copyright}>
          <span className={styles.copyrightText}>2024 好雨Al. All rights reserved</span>
          <span className={styles.icpText}>京ICP备xxxxxxxx号-x</span>
        </div>
      </div>
    </footer>
  );
};
