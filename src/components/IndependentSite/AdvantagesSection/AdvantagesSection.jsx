import React from 'react';
import styles from './AdvantagesSection.module.scss';

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      icon: '🔒',
      title: '100%资产归属',
      subtitle: '你的地盘，你做主',
      description: '交付全部源码，数据100%归你。无平台束缚，可以随时迁走，彻底掌握自己命运。'
    },
    {
      id: 2,
      icon: '🏆',
      title: '塑造品牌溢价',
      subtitle: '跳出比价，做品牌',
      description: '高端定制，专业设计，讲述品牌故事，传递专业价值，让客户因信任而选择你。'
    },
    {
      id: 3,
      icon: '📊',
      title: '沉淀私域流量',
      subtitle: '把流量变成你的"活期存款"',
      description: '通过SEO、内容营销持续获客，将访客沉淀为可反复触达的私域用户，实现流量变现。'
    },
    {
      id: 4,
      icon: '🚀',
      title: '极致转化体验',
      subtitle: '不让网站速度，拖累你的成交',
      description: '大厂级的技术标准，毫秒级加载速度，流畅的交互体验，最大化提升询盘和订单转化率。'
    }
  ];

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>好的独立站是什么样的？</h2>
          <p className={styles.subtitle}>
            根据企业实际情况进行专业化定制，能稳定带来流量，并且100%资产归属，完全自由可掌控
          </p>
        </div>
        
        <div className={styles.cardsContainer}>
          {advantages.map((advantage) => (
            <div key={advantage.id} className={styles.card}>
              <div className={styles.cardIcon}>
                <div className={styles.iconBg}>
                  <span className={styles.icon}>{advantage.icon}</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{advantage.title}</h3>
                  <p className={styles.cardSubtitle}>{advantage.subtitle}</p>
                </div>
                
                <p className={styles.cardDescription}>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
