import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-code-box-line',
    title: 'Custom Website Design & Development',
    features: [
      'Unique, brand-aligned visual design',
      'Responsive layouts for all devices',
      'Performance-optimized code',
      'User experience focused development'
    ]
  },
  {
    icon: 'ri-shopping-cart-2-line',
    title: 'E-Commerce Development',
    features: [
      'Custom shopping experiences',
      'Secure payment gateway integration',
      'Inventory management systems',
      'Mobile-optimized checkout process'
    ]
  },
  {
    icon: 'ri-building-line',
    title: 'Corporate & Portfolio Websites',
    features: [
      'Professional brand representation',
      'Interactive portfolio showcases',
      'Team and company information sections',
      'Integrated contact and inquiry forms'
    ]
  },
  {
    icon: 'ri-layout-grid-line',
    title: 'CMS Development',
    features: [
      'Custom WordPress solutions',
      'Headless CMS implementation',
      'User-friendly content management',
      'Multi-user role management'
    ]
  },
  {
    icon: 'ri-focus-3-line',
    title: 'Landing Page Design & Development',
    features: [
      'Conversion-optimized layouts',
      'A/B testing setup',
      'Campaign-specific designs',
      'Lead capture form integration'
    ]
  },
  {
    icon: 'ri-tools-line',
    title: 'Website Maintenance & Optimization',
    features: [
      'Regular security updates',
      'Performance monitoring & enhancement',
      'Content updates & management',
      'Technical SEO improvements'
    ]
  }
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Services Offered</h2>
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
                    <i className="ri-checkbox-circle-line"></i>
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
