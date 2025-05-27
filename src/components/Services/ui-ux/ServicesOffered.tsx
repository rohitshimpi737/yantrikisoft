import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-pencil-ruler-line',
    title: 'Wireframing',
    features: [
      'Blueprint design for user interfaces',
      'Clear visual representation of layout',
      'Fast iterations for design validation',
      'Collaborative design process'
    ]
  },
  {
    icon: 'ri-palette-line',
    title: 'UI Design',
    features: [
      'Visually appealing user interfaces',
      'Responsive design for all devices',
      'Consistency in design patterns',
      'Interactive design components'
    ]
  },
  {
    icon: 'ri-user-line',
    title: 'UX Research',
    features: [
      'Understanding user behavior',
      'User testing and feedback',
      'Persona creation for targeting',
      'Data-driven UX improvements'
    ]
  },
  {
    icon: 'ri-edit-box-line',
    title: 'Prototyping',
    features: [
      'Interactive and clickable prototypes',
      'Simulate user interaction for feedback',
      'Test concepts before development',
      'Refine the user experience design'
    ]
  },
  {
    icon: 'ri-brush-2-line',
    title: 'Interaction Design',
    features: [
      'Designing fluid user interactions',
      'Improving touchpoints and flow',
      'Responsive and intuitive actions',
      'Ensuring accessibility and ease of use'
    ]
  },
  {
    icon: 'ri-rocket-line',
    title: 'UX/UI Strategy',
    features: [
      'Long-term UX/UI vision and strategy',
      'Market research and competitor analysis',
      'Design roadmap and milestone planning',
      'Alignment with business goals and objectives'
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
