import React from 'react';
import styles from './TeamSection.module.scss';

export const TeamSection = () => {
  const companies = [
    { name: '阿里巴巴', logo: '/images/company-logo-1.png' },
    { name: '腾讯', logo: '/images/company-logo-2-372588.png' },
    { name: '字节跳动', logo: '/images/company-logo-3.png' },
    { name: '京东', logo: '/images/company-logo-4.png' },
    { name: '美团', logo: '/images/company-logo-5.png' }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            源自一线大厂的精英战队，<br />
            是我们确定性交付的底气
          </h2>
          <p className={styles.description}>
            我们的核心成员均拥有超过十年的软件工程经验，并曾在 阿里巴巴、腾讯、字节跳动、京东、美团 
            等公司担任重要技术角色，亲手构建过服务亿万用户的产品。这份履历带给我们的，不仅是领先的技术视野，更是解决复杂问题、保障项目稳健交付的宝贵经验。
          </p>
        </div>
        
        <div className={styles.companiesSection}>
          <h3 className={styles.companiesTitle}>核心团队曾服务于此</h3>
          <div className={styles.companiesGrid}>
            {companies.map((company, index) => (
              <div key={index} className={styles.companyLogo}>
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
