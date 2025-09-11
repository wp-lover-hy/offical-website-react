import React from 'react';
import styles from './TeamSection.module.scss';
import teamMember1 from '../../../../assets/images/team-member-1.png';
import teamMember2 from '../../../../assets/images/team-member-2.png';
import teamMember3 from '../../../../assets/images/team-member-3.png';
import teamMember4 from '../../../../assets/images/team-member-4.png';
import companyLogo from '../../../../assets/images/company-logo-1.png';

export const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: '张三',
      position: '首席架构师',
      avatar: teamMember1,
      description: '12年高并发系统架构经验，专注于为复杂业务提供稳定、可扩展的技术解决方案。',
      company: '曾服务于此'
    },
    {
      id: 2,
      name: '李四',
      position: '首席架构师',
      avatar: teamMember2,
      description: '前腾讯高级UI/UX设计师，坚信设计是商业战略的一部分，致力于创造美学与转化率并存的用户体验。',
      company: '曾服务于此'
    },
    {
      id: 3,
      name: '王五',
      position: '项目总监',
      avatar: teamMember3,
      description: '拥有PMP认证，擅长敏捷项目管理。确保每一个项目都能在预算内按时、高质量地交付。',
      company: '曾服务于此'
    },
    {
      id: 4,
      name: '赵六',
      position: '前端技术专家',
      avatar: teamMember4,
      description: '热衷于创造极致流畅的交互体验，精通各类现代前端框架，确保设计稿得到1:1的像素级还原。',
      company: '曾服务于此'
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>团队风采</h2>
            <p className={styles.subtitle}>
              我们的核心优势源于我们的人才。每一位成员都身经百战，并将一线大厂的卓越标准融入到您的项目中。
            </p>
          </div>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.memberCard}>
                <img src={member.avatar} alt={member.name} className={styles.avatar} />
                <div className={styles.memberInfo}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.position}>{member.position}</p>
                </div>
                <p className={styles.description}>{member.description}</p>
                <div className={styles.companyInfo}>
                  <span className={styles.companyText}>{member.company}</span>
                  <div className={styles.companyLogo}>
                    <img src={companyLogo} alt="Company Logo" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
