import React from "react";
import styles from "@/styles/HomePage/HomeHeroSection.module.css"; // Adjust the path if needed

const HomeHeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            We are looking to grow your business
          </h1>
          <p className={styles.description}>
            Partner with us to transform your business potential into measurable
            growth. Our expert team delivers tailored strategies for sustainable
            success.
          </p>
          <div className={styles.buttonContainer}>
            <a href="#services" className={styles.primaryButton}>
              Explore Our Services
            </a>
            <a href="#" className={styles.secondaryButton}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
