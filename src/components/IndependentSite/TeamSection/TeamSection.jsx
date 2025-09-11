import React from 'react';
import styles from './TeamSection.module.scss';
import alibabaLogo from '../../../assets/images/company-alibaba.jpg';
import tencentLogo from '../../../assets/images/company-tencent-372588.jpg';
import bytedanceLogo from '../../../assets/images/company-bytedance.jpg';
import jdLogo from '../../../assets/images/company-jd.jpg';
import meituanLogo from '../../../assets/images/company-meituan.jpg';

const TeamSection = () => {
  const companies = [
    { name: '阿里巴巴', logo: alibabaLogo },
    { name: '腾讯', logo: tencentLogo },
    { name: '字节跳动', logo: bytedanceLogo },
    { name: '京东', logo: jdLogo },
    { name: '美团', logo: meituanLogo }
  ];

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            源自一线大厂的精英战队，是我们确定性交付的底气
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

export default TeamSection;
