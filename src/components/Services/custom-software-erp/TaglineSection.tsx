import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Custom Software & ERP Solutions — Transform Your Business
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we build cutting-edge custom software and ERP solutions that cater to your unique business challenges. From ERP implementation to scalable enterprise systems, we provide robust, adaptable solutions to enhance operational efficiency, increase productivity, and provide you with a competitive edge. Let us help you modernize and optimize your business processes.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="https://th.bing.com/th/id/OIP.yhOk8OesDdqazKcYF85k3wHaE-?w=273&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Custom software and ERP development illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;