import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-search-line',
    title: 'SEO Services',
    features: [
      'On-page and off-page SEO optimization',
      'Keyword research and optimization',
      'Improving organic search rankings',
      'Content creation and optimization for SEO'
    ]
  },
  {
    icon: 'ri-facebook-circle-line',
    title: 'Social Media Marketing',
    features: [
      'Brand awareness campaigns',
      'Targeted social media ads',
      'Content creation and management',
      'Engagement and community building'
    ]
  },
  {
    icon: 'ri-mail-line',
    title: 'Email Marketing',
    features: [
      'Targeted email campaigns',
      'Personalized email content',
      'Email list segmentation',
      'Performance analytics and reporting'
    ]
  },
  {
    icon: 'ri-line-chart-line',
    title: 'PPC Advertising',
    features: [
      'Pay-per-click ad campaigns on Google Ads',
      'Targeted ads for increased conversion rates',
      'Campaign performance tracking and optimization',
      'Landing page optimization for higher ROI'
    ]
  },
  {
    icon: 'ri-tv-line',
    title: 'Content Marketing',
    features: [
      'Blog posts, articles, and whitepapers',
      'Video marketing campaigns',
      'Infographics and visual content creation',
      'Interactive content for user engagement'
    ]
  },
  {
    icon: 'ri-global-line',
    title: 'Influencer Marketing',
    features: [
      'Partnering with influencers in your niche',
      'Building brand awareness through influencers',
      'Campaign management and tracking',
      'ROI measurement and optimization'
    ]
  }
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className="container mx-auto px-6">
        <h2 className={styles.heading}>Digital Marketing Services</h2>
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