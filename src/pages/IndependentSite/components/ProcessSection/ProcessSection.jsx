import React from 'react';
import styles from './ProcessSection.module.scss';

// 导入SVG图标
import AuctionLineIcon from '../../../../assets/images/process-icons/auction_line.svg';
import RulerLineIcon from '../../../../assets/images/process-icons/ruler_line.svg';
import Magic2LineIcon from '../../../../assets/images/process-icons/magic_2_line.svg';
import TerminalBoxLineIcon from '../../../../assets/images/process-icons/terminal_box_line.svg';
import BoxIcon from '../../../../assets/images/process-icons/box.svg';

export const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: '战略诊断',
      icon: <img src={AuctionLineIcon} alt="战略诊断" width="32" height="32" />,
      description: '深入沟通，理解您的商业模式、目标客群、产品卖点与核心痛点，共同制定网站的战略目标与成功指标。'
    },
    {
      id: 2,
      title: '网站规划',
      icon: <img src={RulerLineIcon} alt="网站规划" width="32" height="32" />,
      description: '基于战略诊断结果，规划网站整体架构、页面层级、内容策略和功能模块，确保产品逻辑清晰、用户体验流畅。'
    },
    {
      id: 3,
      title: '视觉与体验设计',
      icon: <img src={Magic2LineIcon} alt="视觉与体验设计" width="32" height="32" />,
      description: '深入沟通，理解您的商业模式、目标客群、产品卖点与核心痛点，共同制定网站的战略目标与成功指标。'
    },
    {
      id: 4,
      title: '透明开发',
      icon: <img src={TerminalBoxLineIcon} alt="透明开发" width="32" height="32" />,
      description: '采用敏捷开发模式，定期交付阶段性成果。您在任何节点都能清晰地看到进展和成果。'
    },
    {
      id: 5,
      title: '资产交接',
      icon: <img src={BoxIcon} alt="资产交接" width="32" height="32" />,
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

        {/* PC端时间线布局 */}
        <div className={`${styles.processFlow} ${styles.desktopFlow}`}>
          <div className={styles.flowLine}></div>

          {/* Step 1 - Right side */}
          <div className={`${styles.processStep} ${styles.stepRight}`}>
            <div className={styles.stepNumber}>
              <div className={styles.numberCircle}>
                <span>1</span>
              </div>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>
                  {processes[0].icon}
                </div>
                <h3 className={styles.stepTitle}>{processes[0].title}</h3>
              </div>
              <p className={styles.stepDescription}>{processes[0].description}</p>
            </div>
          </div>

          {/* Step 2 - Left side */}
          <div className={`${styles.processStep}`}>
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <h3 className={styles.stepTitle}>{processes[1].title}</h3>
                <div className={styles.stepIcon}>
                  {processes[1].icon}
                </div>
              </div>
              <p className={styles.stepDescription}>{processes[1].description}</p>
            </div>
            <div className={styles.stepNumber}>
              <div className={styles.numberCircle}>
                <span>2</span>
              </div>
            </div>
          </div>

          {/* Step 3 - Right side */}
          <div className={`${styles.processStep} ${styles.stepRight}`}>
            <div className={styles.stepNumber}>
              <div className={styles.numberCircle}>
                <span>3</span>
              </div>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>
                  {processes[2].icon}
                </div>
                <h3 className={styles.stepTitle}>{processes[2].title}</h3>
              </div>
              <p className={styles.stepDescription}>{processes[2].description}</p>
            </div>
          </div>

          {/* Step 4 - Left side */}
          <div className={`${styles.processStep} `}>
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <h3 className={styles.stepTitle}>{processes[3].title}</h3>
                <div className={styles.stepIcon}>
                  {processes[3].icon}
                </div>
              </div>
              <p className={styles.stepDescription}>{processes[3].description}</p>
            </div>
            <div className={styles.stepNumber}>
              <div className={styles.numberCircle}>
                <span>4</span>
              </div>
            </div>
          </div>

          {/* Step 5 - Right side */}
          <div className={`${styles.processStep} ${styles.stepRight}`}>
            <div className={styles.stepNumber}>
              <div className={styles.numberCircle}>
                <span>5</span>
              </div>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>
                  {processes[4].icon}
                </div>
                <h3 className={styles.stepTitle}>{processes[4].title}</h3>
              </div>
              <p className={styles.stepDescription}>{processes[4].description}</p>
            </div>
          </div>
        </div>

        {/* 移动端垂直布局 */}
        <div className={`${styles.processFlow} ${styles.mobileFlow}`}>
          <div className={styles.flowLine}></div>

          {processes.map((process, index) => (
            <div key={process.id} className={`${styles.processStep} ${styles.mobileStep}`}>
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
