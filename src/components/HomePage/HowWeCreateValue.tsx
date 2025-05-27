import React from 'react';
import styles from '@/styles/HomePage/HowWeCreateValue.module.css'; // Adjust the path as necessary
const HowWeCreateValue = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How We Create Value</h2>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20business%20team%20collaborating%20in%20a%20bright%20office%20space%2C%20discussing%20strategy%20and%20innovation%2C%20professional%20environment%20with%20clean%20minimalist%20design%2C%20high%20quality%20corporate%20image&width=800&height=600&seq=3&orientation=landscape"
              alt="Value Creation"
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.featureList}>
            {[
              {
                icon: 'ri-focus-3-line',
                title: 'Strategic Focus',
                text: 'We align our solutions with your business objectives, ensuring every initiative drives measurable value and sustainable growth.',
              },
              {
                icon: 'ri-team-line',
                title: 'Collaborative Approach',
                text: 'Our team works closely with yours, combining expertise and insights to develop innovative solutions that address your unique challenges.',
              },
              {
                icon: 'ri-line-chart-line',
                title: 'Data-Driven Results',
                text: 'We leverage advanced analytics and industry insights to make informed decisions that maximize your return on investment.',
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Quality Assurance',
                text: 'Our rigorous quality control processes ensure consistent, high-quality deliverables that exceed industry standards.',
              },
            ].map((item, index) => (
              <div className={styles.featureItem} key={index}>
                <div className={styles.iconCircle}>
                  <i className={`${item.icon} ${styles.icon}`}></i>
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeCreateValue;
