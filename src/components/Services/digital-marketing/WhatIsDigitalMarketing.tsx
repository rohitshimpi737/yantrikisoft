import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsDigitalMarketing: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/415/582/large_2x/digital-marketing-concept-illustration-vector.jpg"
              alt="Digital Marketing Illustration"
              style={{
                height: 'auto',
                width: '70%',
                maxWidth: '600px',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
                objectPosition: 'top'
              }}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What is Digital Marketing?</h2>
            <p className={styles.text}>
              Digital marketing is the strategic promotion of brands through online channels to reach and engage a targeted audience. It encompasses diverse approaches such as data-driven{' '}
              <span className={styles.highlight}>search engine marketing (SEM)</span>, impactful{' '}
              <span className={styles.highlight}>email campaigns</span>, creative{' '}
              <span className={styles.highlight}>social media marketing</span>, and results-oriented{' '}
              <span className={styles.highlight}>pay-per-click (PPC) advertising</span>. Successful digital marketing blends{' '}
              <span className={styles.highlight}>analytics</span>,{' '}
              <span className={styles.highlight}>consumer behavior insights</span>, and{' '}
              <span className={styles.highlight}>content strategy</span> to drive engagement, conversions, and brand growth across platforms like{' '}
              <span className={styles.highlight}>Instagram</span>,{' '}
              <span className={styles.highlight}>Facebook</span>, and{' '}
              <span className={styles.highlight}>Google Ads</span>.
            </p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <i className="ri-chrome-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-firefox-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-edge-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-safari-fill ri-2x text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDigitalMarketing;