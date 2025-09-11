import React from 'react';
import styles from './FounderSection.module.scss';
import founderAvatar from '../../../../assets/images/founder-avatar.png';

export const FounderSection = () => {
  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.titleSection}>
              <h2 className={styles.title}>一份始于代码，忠于托付的承诺</h2>
            </div>
            
            <div className={styles.founderInfo}>
              <div className={styles.avatarSection}>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarBg}></div>
                  <img src={founderAvatar} alt="鹤笙" className={styles.avatar} />
                </div>
                <div className={styles.nameSection}>
                  <h3 className={styles.name}>鹤笙</h3>
                  <p className={styles.position}>创始人 & 首席技术官</p>
                </div>
              </div>
              
              <div className={styles.description}>
                <p className={styles.quote}>
                  "大家好，我是鹤笙。我的职业生涯始于对代码的热爱，而今，它将归于一个更宏大的使命：以技术之力，助推中国企业扬帆出海。这不仅是我的承诺，也是我们团队的信条。"
                </p>
                <p className={styles.paragraph}>
                  十一年，是一段从技术到商业的深刻洞见之旅。
                  我曾是PC时代的构建者，移动浪潮的亲历者，如今更是AI新纪元的探索者。从前端到后端，从产品体验到服务器运维，技术的广度让我能俯瞰全局；而在阿里、京东等一线大厂的历练，则让我对"交付"二字心生敬畏——它不仅是代码的终点，更是承诺与信任的起点。
                </p>
                <p className={styles.paragraph}>
                  2025年，AI的潜力已清晰可见，中国品牌的全球化征程更是大势所趋。我毅然启程，创立这家公司，正是希望将在大厂锤炼的专业能力与前沿AI技术相融合，为外贸企业打造坚实可靠的技术引擎，专注于独立站建设与企业信息化系统定制，将每一个项目都当成自己的作品去打磨。
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.commitmentBox}>
            <p className={styles.commitmentText}>
              在这里，没有浮夸的销售，只有专业深入的沟通；没有含糊的承诺，只有清晰可见的交付。我们当下的目标并非急于盈利，而是希望能与早期信任我们的客户共同成长，创造实实在在的价值。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
