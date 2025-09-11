import React from 'react';
import styles from './ComparisonSection.module.scss';

export const ComparisonSection = () => {
  const comparisonData = [
    {
      category: '流量来源',
      b2b: '公域流量，花钱才有，不花钱就停',
      independent: '私域流量，越沉淀越值钱'
    },
    {
      category: '客户归属',
      b2b: '客户是平台的，随时可能被抢走',
      independent: '客户是自己的，直接沟通，反复成交'
    },
    {
      category: '竞争环境',
      b2b: '同行扎堆，公开比价，利润比纸薄',
      independent: '我的地盘我做主，展示品牌，告别比价'
    },
    {
      category: '规则束缚',
      b2b: '规则说变就变，旺铺说封就封，一夜回到解放前',
      independent: '规则自己定，命运掌握在自己手里'
    },
    {
      category: '本质比喻',
      b2b: '在别人的鱼塘里钓鱼',
      independent: '建自己的水库养鱼'
    }
  ];

  return (
    <section className={styles.comparisonSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>B2B平台 VS 品牌独立站</h2>
        
        <div className={styles.comparisonTable}>
          {/* 类别列 */}
          <div className={styles.categoryColumn}>
            <div className={styles.tableHeader}></div>
            {comparisonData.map((item, index) => (
              <div key={index} className={styles.categoryCell}>
                {item.category}
              </div>
            ))}
          </div>
          
          {/* B2B平台列 */}
          <div className={styles.b2bColumn}>
            <div className={styles.tableHeader}>
              B2B平台 (公域流量)
            </div>
            {comparisonData.map((item, index) => (
              <div key={index} className={styles.b2bCell}>
                {item.b2b}
              </div>
            ))}
          </div>
          
          {/* 独立站列 */}
          <div className={styles.independentColumn}>
            <div className={`${styles.tableHeader} ${styles.independentHeader}`}>
              <div className={styles.starIcon}>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                  <path d="M14.5 2L17.5 10.5H26.5L19.5 15.5L22.5 24L14.5 19L6.5 24L9.5 15.5L2.5 10.5H11.5L14.5 2Z" fill="#FFFFFF"/>
                </svg>
              </div>
              品牌独立站 (私域阵地)
            </div>
            {comparisonData.map((item, index) => (
              <div key={index} className={styles.independentCell}>
                {item.independent}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
