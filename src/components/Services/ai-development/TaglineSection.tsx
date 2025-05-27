import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          AI Development — Intelligence That Works for You
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we harness the power of artificial intelligence to transform how businesses operate and grow.
          From intelligent automation and predictive analytics to custom machine learning solutions,
          our AI development team delivers results that are practical, scalable, and impactful.
          Whether you're optimizing workflows, enhancing customer engagement, or unlocking new data insights,
          we craft AI solutions that align with your goals and evolve with your needs.
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="https://th.bing.com/th/id/OIP.Ar9AFoRYgBg_GRtaAt68qAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="AI development team at work"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;