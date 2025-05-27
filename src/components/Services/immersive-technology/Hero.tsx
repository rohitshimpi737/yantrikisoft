import React from 'react';
import styles from '@/styles/Services/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h1 className={styles.heading}>
            Immersive Technologies: Innovating with VR, AR, MR &amp; Gaming
          </h1>
          <p className={styles.text}>
            Push the boundaries of innovation with immersive technologies that create dynamic, interactive experiences across VR, AR, MR, and Gaming.
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