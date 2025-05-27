import React from 'react';
import styles from '@/styles/Services/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h1 className={styles.heading}>
            Mobile App Development Services
          </h1>
          <p className={styles.text}>
            Build seamless, high-performance mobile applications tailored to your business needs across iOS, Android, and cross-platform ecosystems.
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
