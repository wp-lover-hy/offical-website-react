import React from 'react';
import styles from './ThreePillars.module.scss';

export const ThreePillars = () => {
  const pillars = [
    {
      id: 1,
      title: '源自顶尖公司的"人才确定性"',
      description: '我们的工程师，曾在阿里巴巴、腾讯等一线公司身经百战，习惯于应对亿级用户的流量和千变万化的业务逻辑。我们用构建"航母"的人才储备，来确保您项目的技术领先与坚固。',
      icon: 'team'
    },
    {
      id: 2,
      title: '严谨透明的"流程确定性"',
      description: '我们采用业界领先的敏捷项目管理流程，将大项目分解为可控的小模块，定期交付阶段性成果。您在项目的任何点，都能清晰地看到进展，提出反馈，杜绝"黑盒"开发。',
      icon: 'process'
    },
    {
      id: 3,
      title: '创始人领衔的"责任确定性"',
      description: '每个核心项目都由创始人直接监督，并配备专属项目经理。这不仅是管理制度，更是我们对客户的庄重承诺。我们交付的不仅是代码，更是我们整个团队的信誉。',
      icon: 'responsibility'
    }
  ];

  return (
    <section className={styles.threePillars}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>我们实现"确定性"的三大支柱</h2>
          </div>
          
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
              <div key={pillar.id} className={styles.pillarCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconBg}>
                    <div className={styles.icon} data-icon={pillar.icon}></div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
