// Hero.tsx
import React from 'react';
import styles from '@/styles/Services/Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.heroBg}>
    <div className={styles.gradientOverlay}></div>
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <h1 className={styles.heading}>
          Smarter Solutions Start Here: AI Development Services That Deliver
        </h1>
        <p className={styles.text}>
          Transform your business with intelligent systems built to think, learn, and grow with you.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Contact Us</button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;