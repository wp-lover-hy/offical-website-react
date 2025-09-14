import React, { useState } from 'react';
import styles from './FAQSection.module.scss';

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: '你们的定制开发和普通模板建站有什么本质区别？',
      answer: '定制开发是根据您的具体业务需求从零开始构建，完全符合您的业务流程和品牌形象。而模板建站只是套用现成模板，功能和设计都受限制，难以满足个性化需求。'
    },
    {
      id: 2,
      question: '项目周期一般是多久？',
      answer: '项目周期取决于功能复杂度和需求范围。简单的企业官网通常2-4周，复杂的管理系统可能需要2-6个月。我们会在需求确认后给出准确的时间规划。'
    },
    {
      id: 3,
      question: '网站上线后，我们自己可以更新内容吗？',
      answer: '当然可以。我们会为您配置易用的内容管理系统，并提供详细的使用培训。您可以随时更新文章、图片、产品信息等内容，无需技术背景。'
    },
    {
      id: 4,
      question: '你们提供网站的维护和技术支持服务吗？',
      answer: '是的，我们提供完整的售后服务，包括系统维护、安全更新、性能优化、技术支持等。我们有不同的服务套餐可供选择，确保您的系统长期稳定运行。'
    },
    {
      id: 5,
      question: '为什么你们强调交付源代码？',
      answer: '交付源代码意味着您拥有系统的完全控制权，不会被任何平台绑定。即使将来不再与我们合作，您也可以找其他团队继续维护，保护您的投资和数据安全。'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>还有疑问？</h2>
            <p className={styles.description}>我们整理了客户最关心的几个问题，希望能帮您解惑</p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className={styles.questionText}>{faq.question}</h3>
                  <span className={`${styles.arrow} ${openFAQ === faq.id ? styles.open : ''}`}>
                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8438 0.984375L5.82812 6L0.8125 0.984375H10.8438Z" fill="#4E6AF7" />
                    </svg>

                  </span>
                </div>
                {openFAQ === faq.id && (
                  <div className={styles.faqAnswer}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
