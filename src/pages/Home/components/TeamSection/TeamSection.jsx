import React from 'react';
import styles from './TeamSection.module.scss';

export const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            源自一线大厂的精英战队，是我们承诺交付的底气，是您成功的坚实后盾。
          </h2>
          <p className={styles.description}>
            我们的核心成员均拥有超过十年的软件工程经验，并曾在阿里巴巴、腾讯、字节跳动、京东、美团等公司担任重要技术角色。我们不仅拥有领先的技术视野，更有一线大厂解决复杂问题的能力及保障项目稳健交付的宝贵经验，选择我们，即选择了一线大厂的交付标准与技术远见。
          </p>
        </div>
        
        <div className={styles.companiesSection}>
          <p className={styles.companiesTitle}>核心团队曾服务于此</p>
          <div className={styles.companiesGrid}>
            <img src="/images/company-logo-1.png" alt="Company 1" className={styles.companyLogo} />
            <img src="/images/company-logo-2-372588.png" alt="Company 2" className={styles.companyLogo} />
            <img src="/images/company-logo-3.png" alt="Company 3" className={styles.companyLogo} />
            <img src="/images/company-logo-4.png" alt="Company 4" className={styles.companyLogo} />
            <img src="/images/company-logo-5.png" alt="Company 5" className={styles.companyLogo} />
          </div>
        </div>
      </div>
    </section>
  );
};
