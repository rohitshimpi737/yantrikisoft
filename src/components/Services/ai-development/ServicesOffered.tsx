import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-brain-line',
    title: 'Custom AI Solutions',
    features: [
      'Tailored AI models for business needs',
      'End-to-end development & integration',
      'Data-driven decision-making tools',
      'Deployment-ready AI architectures'
    ]
  },
  {
    icon: 'ri-cpu-line',
    title: 'Machine Learning Models',
    features: [
      'Supervised and unsupervised learning',
      'Model training, validation, and tuning',
      'Real-time inference and predictions',
      'Scalable and efficient pipelines'
    ]
  },
  {
    icon: 'ri-chat-3-line',
    title: 'AI Chatbots & Assistants',
    features: [
      'Conversational AI for customer support',
      'Voice & text-based assistants',
      'Natural Language Understanding',
      'Multi-language support integration'
    ]
  },
  {
    icon: 'ri-search-eye-line',
    title: 'Computer Vision',
    features: [
      'Image recognition and object detection',
      'Facial analysis and detection systems',
      'Video processing and analytics',
      'Edge deployment for IoT devices'
    ]
  },
  {
    icon: 'ri-database-2-line',
    title: 'AI for Data Analytics',
    features: [
      'Automated insights from big data',
      'Predictive and prescriptive analytics',
      'Advanced data visualization dashboards',
      'Custom KPI and metrics reporting'
    ]
  },
  {
    icon: 'ri-shield-check-line',
    title: 'AI for Cybersecurity',
    features: [
      'Anomaly detection systems',
      'Real-time threat monitoring',
      'Automated threat response tools',
      'Behavioral analysis for fraud prevention'
    ]
  }
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>AI Development Services</h2>
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