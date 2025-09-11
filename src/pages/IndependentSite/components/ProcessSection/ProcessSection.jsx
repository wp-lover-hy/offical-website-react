import React from 'react';
import styles from './ProcessSection.module.scss';

export const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: '战略诊断',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M2 2H30V30H2V2Z" fill="#4F46E5"/>
        </svg>
      ),
      description: '深入沟通，理解您的商业模式、目标客群、产品卖点与核心痛点，共同制定网站的战略目标与成功指标。'
    },
    {
      id: 2,
      title: '网站规划',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 4H28V28H4V4Z" fill="#4F46E5"/>
        </svg>
      ),
      description: '基于战略诊断结果，规划网站整体架构、页面层级、内容策略和功能模块，确保产品逻辑清晰、用户体验流畅。'
    },
    {
      id: 3,
      title: '视觉与体验设计',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M3.99 4H28.25V28.26H3.99V4Z" fill="#4F46E5"/>
        </svg>
      ),
      description: '深入沟通，理解您的商业模式、目标客群、产品卖点与核心痛点，共同制定网站的战略目标与成功指标。'
    },
    {
      id: 4,
      title: '透明开发',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 4H28V28H4V4Z" fill="#4F46E5"/>
        </svg>
      ),
      description: '采用敏捷开发模式，定期交付阶段性成果。您在任何节点都能清晰地看到进展和成果。'
    },
    {
      id: 5,
      title: '资产交接',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M3.5 4H28.5V27.98H3.5V4Z" fill="#4F46E5"/>
        </svg>
      ),
      description: '交付全部源码、设计文件与技术文档，并进行后台操作培训，确保您能顺利接管，后顾无忧。'
    }
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>只为一线大厂交付标准</h2>
          <p className={styles.subtitle}>
            流程清晰，规范透明，我们这样把"靠谱"做到极致
          </p>
        </div>
        
        <div className={styles.processFlow}>
          <div className={styles.flowLine}></div>
          
          {processes.map((process, index) => (
            <div key={process.id} className={styles.processStep}>
              <div className={styles.stepNumber}>
                <div className={styles.numberCircle}>
                  <span>{process.id}</span>
                </div>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepIcon}>
                    {process.icon}
                  </div>
                  <h3 className={styles.stepTitle}>{process.title}</h3>
                </div>
                <p className={styles.stepDescription}>{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
