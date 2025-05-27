import React from 'react';
import styles from '@/styles/AllServices/CtaSection.module.css';

const CtaSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.flexBox}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Ready to transform your business?</h2>
            <p className={styles.description}>
              Let's discuss how our technology solutions can help you achieve your business goals.
            </p>
          </div>
          <div>
            <button className={styles.button}>Contact Us Today</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
