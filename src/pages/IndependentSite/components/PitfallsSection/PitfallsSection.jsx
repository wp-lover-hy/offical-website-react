import React from 'react';
import styles from './PitfallsSection.module.scss';

export const PitfallsSection = () => {
  const pitfalls = [
    {
      id: 'saas',
      icon: (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path d="M3.52 6.98H38.56V28.01H3.52V6.98Z" fill="#CF1601"/>
        </svg>
      ),
      title: 'SaaS平台（不自由）',
      subtitle: '在给平台"打长工"',
      description: '年费月费一分不少，交易还抽成，功能受限，设计雷同，站点无法迁移，被平台绑死。',
      linkText: '查看详情 →',
      bgColor: 'linear-gradient(180deg, #FFFFFF 0%, #FF8F91 100%)',
      iconBg: 'linear-gradient(180deg, #FF6363 0%, #FF0004 100%)',
      linkColor: '#CF1601'
    },
    {
      id: 'template',
      icon: (
        <svg width="31" height="32" viewBox="0 0 31 32" fill="none">
          <path d="M5.38 5.25H25.58V26.75H5.38V5.25Z" fill="#CA8A04"/>
        </svg>
      ),
      title: '模板建站（不专业）',
      subtitle: '"买了个拖拉机，想上高速"',
      description: '看似便宜，实则代码臃肿，性能堪忧。样式千篇一律，无法深度定制，难以承载品牌发展。',
      linkText: '查看详情 →',
      bgColor: 'linear-gradient(180deg, #FFFFFF 0%, #FFF28F 100%)',
      iconBg: 'linear-gradient(180deg, #FFFC63 0%, #FFF600 100%)',
      linkColor: '#CA8A04'
    },
    {
      id: 'outsourcing',
      icon: (
        <svg width="28" height="35" viewBox="0 0 28 35" fill="none">
          <path d="M7 3.42H21V38.42H7V3.42Z" fill="#E57200"/>
        </svg>
      ),
      title: '普通外包（不靠谱）',
      subtitle: '"花钱请了个祖宗"',
      description: '沟通靠"吼"，交付靠"等"，结果靠"猜"。缺乏战略思考和专业流程，最终成品与期望相去甚远。',
      linkText: '查看详情 →',
      bgColor: 'linear-gradient(180deg, #FFFFFF 0%, #FFCC6D 100%)',
      iconBg: 'linear-gradient(180deg, #FFDB63 0%, #FFAE00 100%)',
      linkColor: '#E57200'
    }
  ];

  return (
    <section className={styles.pitfallsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>做独立站容易踩的三个大坑</h2>
          <p className={styles.subtitle}>
            很多非技术人员不了解独立站，大部分人都被忽悠，最终做了一个假的独立站
          </p>
        </div>
        
        <div className={styles.pitfallsGrid}>
          {pitfalls.map((pitfall, index) => (
            <div key={pitfall.id} className={styles.pitfallCard}>
              <div className={styles.iconContainer} style={{ background: pitfall.iconBg }}>
                {pitfall.icon}
              </div>
              
              <div className={styles.content}>
                <div className={styles.titleGroup}>
                  <h3 className={styles.cardTitle}>{pitfall.title}</h3>
                  <p className={styles.cardSubtitle}>{pitfall.subtitle}</p>
                </div>
                
                <p className={styles.description}>{pitfall.description}</p>
                
                <a href="#" className={styles.link} style={{ color: pitfall.linkColor }}>
                  {pitfall.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
