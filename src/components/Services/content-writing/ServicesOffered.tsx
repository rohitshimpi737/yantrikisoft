import React from 'react';
import styles from '@/styles/Services/ServicesOffered.module.css';

const services = [
  {
    icon: 'ri-pen-nib-line',
    title: 'Blog Writing',
    features: [
      'Engaging and informative blog posts',
      'SEO-friendly content to boost traffic',
      'Well-researched articles',
      'Creative and original writing style'
    ]
  },
  {
    icon: 'ri-pencil-ruler-line',
    title: 'Website Content Writing',
    features: [
      'Compelling homepage copy',
      'Effective product/service descriptions',
      'Optimized content for higher conversion rates',
      'Clear call-to-action statements'
    ]
  },
  {
    icon: 'ri-quill-pen-line',
    title: 'Copywriting',
    features: [
      'Persuasive advertising copy',
      'Sales-driven email marketing content',
      'Attention-grabbing headlines',
      'Optimized content for ad campaigns'
    ]
  },
  {
    icon: 'ri-edit-box-line',
    title: 'Product Descriptions',
    features: [
      'Clear and concise product information',
      'Highlighting unique selling points',
      'SEO-optimized product descriptions',
      'Engagement-focused writing style'
    ]
  },
  {
    icon: 'ri-article-line',
    title: 'SEO Content Writing',
    features: [
      'High-quality, keyword-focused articles',
      'On-page SEO optimization',
      'Link-building and internal linking strategies',
      'Content tailored to rank on search engines'
    ]
  },
  {
    icon: 'ri-article-line',
    title: 'Social Media Content',
    features: [
      'Engaging content for all platforms',
      'Brand voice consistency across platforms',
      'Interactive and shareable content',
      'Optimized content for user engagement'
    ]
  }
];

const ServicesOffered = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Content Writing Services</h2>
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