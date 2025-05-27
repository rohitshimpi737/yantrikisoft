import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Digital Marketing — Transforming Your Brand’s Online Presence
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we don’t just market — we create strategies that elevate your brand’s online presence and drive measurable growth.
          Our team of digital marketing experts specializes in search engine optimization (SEO), pay-per-click (PPC) campaigns, social media marketing,
          email marketing, and more. Whether you’re looking to increase traffic, generate leads, or boost sales, we craft tailored campaigns that
          resonate with your target audience and deliver results. Because effective digital marketing isn’t just about being seen — it’s about being remembered.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/07/digital-marketing-1.jpg.optimal.jpg"
            alt="Digital marketing team at work"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;