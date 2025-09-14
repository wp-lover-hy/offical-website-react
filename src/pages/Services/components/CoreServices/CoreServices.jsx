import React from 'react';
import styles from './CoreServices.module.scss';
import SystemService1 from '../../../../../public/images/system-service-1.png';
import SystemService2 from '../../../../../public/images/system-service-2.png';
import SystemService3 from '../../../../../public/images/system-service-3.png';
import SystemService4 from '../../../../../public/images/system-service-4.png';
import SystemService5 from '../../../../../public/images/system-service-5.png';
import SystemService6 from '../../../../../public/images/system-service-6.png';

export const CoreServices = () => {
  const services = [
    {
      id: 1,
      title: '100%资产归属',
      subtitle: '你的地盘，你做主',
      description: '交付全部源码，数据100%归你。无平台束缚，可以随时迁走，彻底掌握自己命运。',
      icon: SystemService1
    },
    {
      id: 2,
      title: '塑造品牌溢价',
      subtitle: '跳出比价，做品牌',
      description: '高端定制，专业设计，讲述品牌故事，传递专业价值，让客户因信任而选择你。',
      icon: SystemService2
    },
    {
      id: 3,
      title: '沉淀私域流量',
      subtitle: '把流量变成你的"活期存款"',
      description: '通过SEO、内容营销持续获客，将访客沉淀为可反复触达的私域用户，实现流量变现。',
      icon: SystemService3
    },
    {
      id: 4,
      title: '极致转化体验',
      subtitle: '不让网站速度，拖累你的成交',
      description: '大厂级的技术标准，毫秒级加载速度，流畅的交互体验，最大化提升询盘和订单转化率。',
      icon: SystemService4
    },
    {
      id: 5,
      title: '极致转化体验',
      subtitle: '不让网站速度，拖累你的成交',
      description: '大厂级的技术标准，毫秒级加载速度，流畅的交互体验，最大化提升询盘和订单转化率。',
      icon: SystemService5
    },
    {
      id: 6,
      title: '极致转化体验',
      subtitle: '不让网站速度，拖累你的成交',
      description: '大厂级的技术标准，毫秒级加载速度，流畅的交互体验，最大化提升询盘和订单转化率。',
      icon: SystemService6
    }
  ];

  return (
    <section className={styles.coreServices}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>我们的核心技术服务</h2>
            <p className={styles.description}>我们专注于解决企业在数字化转型中遇到的各类复杂技术挑战。</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconBg}>
                    {/* {service.icon} */}
                    {/* <div className={styles.icon} data-icon={service.icon}></div> */}
                    <img src={service.icon} alt={service.title} className={styles.icon} />
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
