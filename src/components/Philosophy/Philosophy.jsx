import React from 'react';
import styles from './Philosophy.module.scss';

export const Philosophy = () => {
  const philosophies = [
    {
      title: '契约精神 (Commitment)',
      description: '我们以十年经验帮您梳理业务逻辑，确保需求清晰、闭环。一旦承诺，便严格按计划执行，以铁一般的纪律，为您交付100%的确定性。',
      image: 'commitment'
    },
    {
      title: '伙伴关系 (Partnership)',
      description: '精英团队资源稀缺，我们专注于服务同样追求卓越的客户，只做更有意义的高端定制，而非简单套模板，我们不做简单的"乙方"，而是致力于成为您能长期信赖、共同成长的技术伙伴。',
      image: 'partnership'
    },
    {
      title: '绝对自由 (Freedom)',
      description: '告别平台的"小院高墙"。我们基于全球主流开放系统进行源码级定制，交付时您将100%拥有全部代码与数据。无捆绑，不设限，您的数字资产完全由您掌控。',
      image: 'freedom'
    }
  ];

  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>我们的三重理念 · 构建深度信任</h2>
          <p className={styles.subtitle}>我们交付的，不止是代码，更是深度信任的合作关系。</p>
        </div>
        
        <div className={styles.philosophyGrid}>
          {philosophies.map((item, index) => (
            <div key={index} className={styles.philosophyCard}>
              <div className={`${styles.cardImage} ${styles[item.image]}`}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
