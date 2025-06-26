import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Immersive Technologies — Redefining Business Interaction
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we believe in the power of immersive technologies to revolutionize the way businesses interact with their customers. Our expert team specializes in AR, VR, and MR technologies, creating unique, engaging experiences that elevate your brand and drive customer loyalty. Whether it&apos;s creating virtual environments for training, interactive product visualization, or gamified brand experiences, we help you leverage the latest technologies to stay ahead of the curve.
        </p>

      </div>
      <div className={styles.imageWrapper}>
        <img
          src="https://th.bing.com/th/id/OIP.f9aI6beLa8wfI6WekQm0VAHaE8?w=296&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="Immersive technology demonstration"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default TaglineSection;