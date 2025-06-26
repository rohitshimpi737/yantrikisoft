import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-code-s-slash-line',
    title: 'Custom Software Development',
    features: [
      'Tailored software solutions for your business',
      'Advanced technologies including AI, IoT, and Blockchain',
      'Scalable architecture to meet future needs',
      'Maintenance, support, and continuous optimization'
    ]
  },
  {
    icon: 'ri-settings-2-line',
    title: 'Enterprise Resource Planning (ERP)',
    features: [
      'Integrated ERP systems for businesses',
      'Modules for finance, HR, inventory, CRM, and more',
      'Cloud-based and on-premise deployment options',
      'Real-time analytics and reporting tools'
    ]
  },
  {
    icon: 'ri-link-line',
    title: 'ERP System Integration',
    features: [
      'Seamless integration with existing systems',
      'Real-time data synchronization across departments',
      'Custom APIs for ERP connectivity',
      'Enhanced workflow automation and efficiency'
    ]
  },
  {
    icon: 'ri-pencil-line',
    title: 'ERP Customization',
    features: [
      'Custom module development to suit business needs',
      'Personalized dashboards and user interfaces',
      'Workflows designed specifically for your organization',
      'Optimized ERP system performance'
    ]
  },
  {
    icon: 'ri-refresh-line',
    title: 'ERP Support & Maintenance',
    features: [
      'Comprehensive support for ERP systems',
      'Regular updates and security patches',
      'Performance tuning and issue resolution',
      '24/7 dedicated support team'
    ]
  },
  {
    icon: 'ri-line-chart-line',
    title: 'ERP Analytics & Reporting',
    features: [
      'Real-time data analysis and reporting',
      'Custom reports for different business departments',
      'Interactive dashboards for decision-makers',
      'Automated alerts and notifications'
    ]
  }
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Custom Software & ERP Solutions</h2>
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