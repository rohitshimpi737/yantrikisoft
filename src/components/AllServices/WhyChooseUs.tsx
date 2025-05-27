import React from 'react';
import styles from '@/styles/AllServices/WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'ri-award-line',
      title: 'Expert Team',
      description: 'Our team comprises industry experts with extensive experience in delivering cutting-edge technology solutions.',
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Dedicated Support',
      description: 'We provide ongoing support and maintenance to ensure your solutions continue to perform optimally.',
    },
    {
      icon: 'ri-rocket-line',
      title: 'Innovative Approach',
      description: 'We stay at the forefront of technology trends to deliver innovative solutions that give you a competitive edge.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Yantrikisoft</h2>
          <p className={styles.subtitle}>
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.iconWrapper}>
                <i className={`${feature.icon} ri-2x`}></i>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
