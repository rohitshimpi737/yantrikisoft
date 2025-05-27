import React from 'react';
import styles from '@/styles/Services/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h1 className={styles.heading}>
            Custom Software &amp; ERP Solutions
          </h1>
          <p className={styles.text}>
            Develop bespoke software and ERP systems that streamline your business operations, enhance productivity, and drive growth with tailored solutions for your unique needs.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
