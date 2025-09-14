import React, { useState } from 'react';
import styles from './Contact.module.scss';
import wechatQR from '../../assets/images/wechat-qr-code.png';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [],
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除错误信息
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入联系电话';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 这里可以添加表单提交逻辑
      console.log('表单提交:', formData);
      alert('感谢您的咨询，我们会尽快与您联系！');
      // 重置表单
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        services: [],
        message: ''
      });
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.background}>
        <div className={styles.backgroundGradient1}></div>
        <div className={styles.backgroundGradient2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* 左侧内容区 */}
          <div className={styles.leftSection}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>让我们开始一次有价值的对话</h1>
              <p className={styles.subtitle}>
                每一次沟通，都是一次深入的战略探讨，而非简单的产品推销。我们期待倾听您的故事和挑战。
              </p>
            </div>

            {/* 联系方式 */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                  </svg>
                </div>
                <div className={styles.contactDetails}>
                  <h3>邮箱</h3>
                  <p>contact@yourcompany.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
                  </svg>
                </div>
                <div className={styles.contactDetails}>
                  <h3>电话</h3>
                  <p>+86 1XX XXXX XXXX</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z" fill="white"/>
                  </svg>
                </div>
                <div className={styles.contactDetails}>
                  <h3>微信咨询</h3>
                  <p>添加企业微信，随时沟通</p>
                  <div className={styles.qrCode}>
                    <img src={wechatQR} alt="微信二维码" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <div className={styles.rightSection}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>让我们开始一次有价值的对话</h1>
              <p className={styles.subtitle}>
                每一次沟通，都是一次深入的战略探讨，而非简单的产品推销。我们期待倾听您的故事和挑战。
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="您的姓名"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? styles.error : ''}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>
                <div>
                <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="company"
                      placeholder="公司名称"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="您的邮箱"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? styles.error : ''}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="联系电话"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? styles.error : ''}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.servicesGroup}>
                  <label className={styles.servicesLabel}>感兴趣的服务</label>
                  <div className={styles.checkboxGroup}>
                    {['独立站定制', '系统定制', '其他'].map(service => (
                      <label key={service} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                        />
                        <span className={styles.checkboxText}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="您的需求简述"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  发送您的需求
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
