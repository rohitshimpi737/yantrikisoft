import React from 'react';
import styles from '@/styles/Services/Hero.module.css';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h1 className={styles.heading}>
            Design That Connects: Craft Exceptional UI/UX with Intent
          </h1>
          <p className={styles.text}>
            Great design isn’t just beautiful—it’s intuitive, inclusive, and built for impact.
          </p>
          {/* <div className={styles.buttonContainer}>
            <button className={styles.button}>
              Contact Us
            </button>
          </div> */}
          <div className={styles.buttonContainer}>
            <Link href="/contact">
              <button className={styles.button}>Contact Us</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
