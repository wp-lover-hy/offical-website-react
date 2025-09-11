import React from 'react';
import styles from './PitfallsSection.module.scss';

const PitfallsSection = () => {
  const pitfalls = [
    {
      id: 1,
      icon: '💻',
      title: 'SaaS平台（不自由）',
      subtitle: '在给平台"打长工"',
      description: '年费月费一分不少，交易还抽成，功能受限，设计雷同，站点无法迁移，被平台绑死。',
      color: 'red',
      link: '查看详情 →'
    },
    {
      id: 2,
      icon: '🎮',
      title: '模板建站（不专业）',
      subtitle: '"买了个拖拉机，想上高速"',
      description: '看似便宜，实则代码臃肿，性能堪忧。样式千篇一律，无法深度定制，难以承载品牌发展。',
      color: 'yellow',
      link: '查看详情 →'
    },
    {
      id: 3,
      icon: '🛡️',
      title: '普通外包（不靠谱）',
      subtitle: '"花钱请了个祖宗"',
      description: '沟通靠"吼"，交付靠"等"，结果靠"猜"。缺乏战略思考和专业流程，最终成品与期望相去甚远。',
      color: 'orange',
      link: '查看详情 →'
    }
  ];

  return (
    <section className={styles.pitfalls}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>做独立站容易踩的三个大坑</h2>
          <p className={styles.subtitle}>
            很多非技术人员不了解独立站，大部分人都被忽悠，最终做了一个假的独立站
          </p>
        </div>
        
        <div className={styles.cardsContainer}>
          {pitfalls.map((pitfall) => (
            <div key={pitfall.id} className={`${styles.card} ${styles[pitfall.color]}`}>
              <div className={styles.cardIcon}>
                <div className={`${styles.iconBg} ${styles[`${pitfall.color}Bg`]}`}>
                  <span className={styles.icon}>{pitfall.icon}</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{pitfall.title}</h3>
                  <p className={styles.cardSubtitle}>{pitfall.subtitle}</p>
                </div>
                
                <p className={styles.cardDescription}>{pitfall.description}</p>
                
                <a href="#" className={`${styles.cardLink} ${styles[`${pitfall.color}Link`]}`}>
                  {pitfall.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PitfallsSection;
