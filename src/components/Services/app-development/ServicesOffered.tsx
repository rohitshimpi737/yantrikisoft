import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';


const services = [
  {
    icon: 'ri-android-line',
    title: 'Android App Development',
    features: [
      'Native Android applications using Kotlin/Java',
      'Custom UI/UX tailored for Android users',
      'Integration with third-party APIs and services',
      'Deployment on Google Play Store'
    ]
  },
  {
    icon: 'ri-apple-line',
    title: 'iOS App Development',
    features: [
      'Native iOS apps using Swift and Objective-C',
      'High performance and smooth UI/UX',
      'iPhone, iPad, and Apple Watch app support',
      'App Store compliance and submission'
    ]
  },
  {
    icon: 'ri-reactjs-line',
    title: 'Cross-platform Apps',
    features: [
      'React Native, Flutter, and Xamarin development',
      'Single codebase for Android and iOS',
      'Faster development and cost-effective',
      'Consistent UI across platforms'
    ]
  },
  {
    icon: 'ri-database-2-line',
    title: 'Backend & API Integration',
    features: [
      'Robust and secure server-side development',
      'RESTful and GraphQL API services',
      'Real-time database integration',
      'Cloud and local hosting options'
    ]
  },
  {
    icon: 'ri-shield-keyhole-line',
    title: 'App Security & Testing',
    features: [
      'End-to-end testing of mobile apps',
      'Vulnerability and performance analysis',
      'Data encryption and authentication',
      'App Store compliance testing'
    ]
  },
  {
    icon: 'ri-line-chart-line',
    title: 'App Analytics & Optimization',
    features: [
      'Performance monitoring and usage analytics',
      'User behavior tracking and reporting',
      'App performance tuning and updates',
      'Scalable architecture for growing user base'
    ]
  }
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6">
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
