import React from 'react';
import styles from './Footer.module.scss';
import qrCodeImage from '../../../assets/images/qr-code.png';
import logo from '../../../assets/images/logo-haoyuai.png';

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
                <img src={logo} alt="logo" className={styles.logoImage} />
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
                <img src={qrCodeImage} alt="微信二维码" className={styles.qrCodeImage} />
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
          <div className={styles.copyrightContent}>
            <span className={styles.copyrightText}>2024 好雨Al. All rights reserved</span>
            <span className={styles.icpText}>京ICP备xxxxxxxx号-x</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
