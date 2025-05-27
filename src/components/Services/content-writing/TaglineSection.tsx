import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Content Writing — Words That Work for You
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we don’t just write — we communicate your brand’s story in a way that captivates and converts.
          Our team of skilled content strategists, SEO experts, and creative writers craft compelling narratives tailored to your audience,
          whether you're building a brand, boosting your web traffic, or launching a new product. We specialize in SEO-optimized blogs,
          landing page content, product descriptions, email campaigns, and more — all aligned with your tone, goals, and growth vision.
          Because great content isn’t just about words — it’s about results.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Creative content writing team at work"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;