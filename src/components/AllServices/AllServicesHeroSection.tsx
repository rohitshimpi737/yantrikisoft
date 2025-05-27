import React from 'react';
import styles from '@/styles/AllServices/AllServicesHeroSection.module.css';

const AllServicesHeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1>Innovative Technology Solutions for Your Business</h1>
        <p>We help businesses transform through technology with our comprehensive suite of digital services.</p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AllServicesHeroSection;