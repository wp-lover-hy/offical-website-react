import React, { useState } from 'react';
import styles from './FAQSection.module.scss';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '你们的定制开发和普通模板建站有什么本质区别？',
      answer: '定制开发是根据您的具体业务需求和品牌特色量身打造，代码简洁高效，性能优异，可以完全按照您的想法进行功能扩展。而模板建站使用现成模板，功能固定，代码臃肿，难以深度定制，无法很好地体现品牌特色。'
    },
    {
      question: '项目周期一般是多久？',
      answer: '根据项目复杂程度，一般的企业官网项目周期为2-4周，包含需求分析、设计、开发、测试和上线等环节。复杂的电商或功能型网站可能需要4-8周。我们会在项目开始前给出详细的时间规划。'
    },
    {
      question: '网站上线后，我们自己可以更新内容吗？',
      answer: '当然可以。我们会为您配置易用的后台管理系统，并提供详细的操作培训。您可以自主更新文章、产品信息、图片等内容。对于复杂的功能修改，我们也提供技术支持服务。'
    },
    {
      question: '你们提供网站的维护和技术支持服务吗？',
      answer: '是的，我们提供完善的售后服务。包括网站安全监控、性能优化、bug修复、内容更新协助等。我们有不同的服务套餐可选，也可以根据您的需求定制服务方案。'
    },
    {
      question: '为什么你们强调交付源代码？',
      answer: '交付源代码意味着您拥有网站的完全控制权，不会被任何服务商绑定。您可以随时找其他技术团队进行维护或升级，也可以将网站迁移到任何服务器。这是真正的资产归属，而不是租用服务。'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
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
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={styles.questionText}>{faq.question}</h3>
                <span className={`${styles.toggleIcon} ${openIndex === index ? styles.open : ''}`}>
                  ▼
                </span>
              </div>
              
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
