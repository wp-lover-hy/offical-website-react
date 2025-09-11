import React from 'react';
import styles from './TeamIntro.module.scss';

export const TeamIntro = () => {
  const companies = [
    { name: '阿里巴巴', logo: 'alibaba' },
    { name: '腾讯', logo: 'tencent' },
    { name: '字节跳动', logo: 'bytedance' },
    { name: '京东', logo: 'jd' },
    { name: '美团', logo: 'meituan' },
    { name: '小红书', logo: 'xiaohongshu' }
  ];

  return (
    <section className={styles.teamIntro}>
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
            {companies.map((company, index) => (
              <div key={index} className={styles.companyLogo}>
                <div className={`${styles.logoPlaceholder} ${styles[company.logo]}`}>
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
