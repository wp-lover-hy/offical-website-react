import React from 'react';
import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>联系我们</h1>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>电话</h3>
              <p>+86 123 4567 8900</p>
            </div>
            <div className={styles.infoCard}>
              <h3>邮箱</h3>
              <p>contact@example.com</p>
            </div>
            <div className={styles.infoCard}>
              <h3>地址</h3>
              <p>北京市朝阳区示例街道123号</p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h3>发送消息</h3>
            <form>
              <div className={styles.formGroup}>
                <input type="text" placeholder="您的姓名" />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="您的邮箱" />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="您的消息" rows="5"></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>发送消息</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
