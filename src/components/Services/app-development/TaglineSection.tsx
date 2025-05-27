import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Mobile Apps — Fueling Modern Business Innovation
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we build powerful mobile apps tailored to your business needs. From native iOS and Android apps to cross-platform solutions using Flutter and React Native, we help you deliver seamless, secure, and high-performance experiences that your customers will love. Let us help you unlock growth, enhance customer service, and stay ahead in the digital era.
        </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src='https://th.bing.com/th/id/OIP.xqg3QveEHg58-FCjcDg_5wHaFz?w=209&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
            alt="Mobile app development illustration"
            className={styles.image}
          />
        </div>
    </section>
  );
};

export default TaglineSection;
