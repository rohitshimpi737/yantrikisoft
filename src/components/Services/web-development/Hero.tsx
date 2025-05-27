import React from 'react';
import styles from '@/styles/Services/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h1 className={styles.heading}>
            Build Modern, Scalable, and High-Performing Websites That Work for Your Business
          </h1>
          <p className={styles.text}>
            Your website is more than just a digital identity — it's the foundation of your customer's online experience.
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
