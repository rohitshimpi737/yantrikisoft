import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsAIDevelopment: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              // src="https://readdy.ai/api/search-image?query=web%20development%20concept%20illustration%20showing%20HTML%2C%20CSS%2C%20JavaScript%20code%20on%20screens%2C%20modern%20web%20browsers%20like%20Chrome%20and%20Firefox%2C%20responsive%20design%20across%20devices%2C%20clean%20digital%20illustration%20style%2C%20professional%2C%20tech-focused&width=600&height=500&seq=123457&orientation=landscape"
              alt="AI Development Illustration"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What is AI Development?</h2>
            <p className={styles.text}>
              AI development is the process of designing and building intelligent software that can simulate human-like{' '}
              <span className={styles.highlight}>thinking</span>,{' '}
              <span className={styles.highlight}>learning</span>, and{' '}
              <span className={styles.highlight}>decision-making</span>. It leverages advanced technologies like{' '}
              <span className={styles.highlight}>machine learning</span>,{' '}
              <span className={styles.highlight}>natural language processing</span>, and{' '}
              <span className={styles.highlight}>computer vision</span> to create systems that solve real-world problems efficiently. 
              From <span className={styles.highlight}>chatbots</span> to <span className={styles.highlight}>predictive models</span>, 
              AI empowers businesses to automate, optimize, and innovate like never before.
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

export default WhatIsAIDevelopment;