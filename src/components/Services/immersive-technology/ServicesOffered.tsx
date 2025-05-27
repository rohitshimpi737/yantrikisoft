import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-videocam-line',
    title: 'AR/VR Development',
    features: [
      'Immersive augmented and virtual experiences',
      'Interactive 3D environments for users',
      'Hardware and software integration',
      'Custom solutions for diverse industries',
    ],
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile AR Solutions',
    features: [
      'Real-time augmented reality on mobile devices',
      'Location-based AR for better user engagement',
      'Integration with mobile camera and sensors',
      'Interactive mobile AR experiences for marketing',
    ],
  },
  {
    icon: 'ri-cursor-line',
    title: 'Interactive Holography',
    features: [
      '3D holographic visualizations',
      'Real-time user interaction with holograms',
      'Perfect for product demos and presentations',
      'Advanced user interface technologies',
    ],
  },
  {
    icon: 'ri-gamepad-line',
    title: 'Game Development (AR/VR)',
    features: [
      'Creating immersive game worlds',
      'Interactive VR/AR gaming experiences',
      'Game mechanics design and testing',
      'Cross-platform development for AR/VR games',
    ],
  },
  {
    icon: 'ri-rocket-line',
    title: 'Mixed Reality Solutions',
    features: [
      'Bridging the gap between physical and virtual worlds',
      'Real-time interaction with digital content',
      'Enhanced training and simulation applications',
      'Immersive, interactive customer experiences',
    ],
  },
  {
    icon: 'ri-globe-line',
    title: '360° Virtual Tours',
    features: [
      'Immersive 360° experiences for any environment',
      'Perfect for real estate and tourism industries',
      'Interactive navigation within the virtual tour',
      'Customizable virtual walkthroughs',
    ],
  },
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6">
        <h2 className={styles.heading}>Immersive Technologies Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>
                <i className={`${service.icon} ri-2x`}></i>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;