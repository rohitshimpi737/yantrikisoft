import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          UI/UX Design — Elevating Your Digital Experience
        </h2>
        <p className={styles.paragraph}>
At YANTRIKISOFT, we don’t just design — we craft immersive, intuitive, and user-centric digital experiences that drive results. Our team of expert UI/UX designers focuses on delivering seamless interfaces that enhance user satisfaction, increase engagement, and ensure your digital products are not only beautiful but functional. From wireframes to high-fidelity prototypes, we create designs that connect with users and create lasting impressions.        </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://ts1.mm.bing.net/th?id=OIP.wPNO9klt-4CMZ8mFsi-pSgHaEv&pid=15.1" 
       alt="Creative UI/UX design team collaborating" 
            className={styles.image}
          />
        </div>
    </section>
  );
};

export default TaglineSection;
