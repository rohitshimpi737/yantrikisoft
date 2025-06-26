'use client';
import styles from '@/styles/about/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2 className={styles.sectionLabel}>About Us</h2>
        <h1 className={styles.title}>
          About Yantrikisoft – Innovating the Digital Future
        </h1>
        <p className={styles.subtitle}>
          Discover how we're shaping tomorrow’s technology landscape through innovation,
          expertise, and unwavering commitment to excellence.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
