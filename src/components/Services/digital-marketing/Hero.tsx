import React from 'react';
import styles from '@/styles/Services/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h1 className={styles.heading}>
            Drive Results: Elevate Your Brand with Strategic Digital Marketing
          </h1>
          <p className={styles.text}>
            Reach the right audience at the right time—with data-driven strategies that deliver measurable impact.
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