import React, { useState } from 'react';
import styles from './FAQSection.module.scss';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '你们的定制开发和普通模板建站有什么本质区别？',
      answer: '我们的定制开发是根据您的具体业务需求和品牌特色进行量身定制，从架构设计到功能实现都是原创开发。而模板建站只是套用现成模板，功能和设计都受限，无法满足个性化需求，且代码质量和性能都存在问题。'
    },
    {
      question: '项目周期一般是多久？',
      answer: '项目周期根据网站复杂程度而定，一般企业官网2-4周，功能型网站4-8周。我们采用敏捷开发模式，会在项目开始前给出明确的时间规划，并定期交付阶段性成果。'
    },
    {
      question: '网站上线后，我们自己可以更新内容吗？',
      answer: '当然可以。我们会为您配置易用的后台管理系统，并提供详细的操作培训。您可以轻松更新文章、产品信息、图片等内容，无需技术背景。'
    },
    {
      question: '你们提供网站的维护和技术支持服务吗？',
      answer: '是的，我们提供完善的售后服务。包括免费的技术支持、安全更新、性能优化建议等。同时也提供付费的深度维护服务，确保您的网站始终保持最佳状态。'
    },
    {
      question: '为什么你们强调交付源代码？',
      answer: '交付源代码意味着您拥有网站的完全控制权。这样您就不会被任何服务商绑定，可以随时选择其他技术团队进行维护或升级，真正做到资产100%归属于您。'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>还有疑问？</h2>
          <p className={styles.subtitle}>
            我们整理了客户最关心的几个问题，希望能帮您解惑
          </p>
        </div>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={`${styles.arrow} ${openIndex === index ? styles.open : ''}`}>
                  arrow_drop_up
                </span>
              </button>
              
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
