import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsWebDevelopment: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="https://readdy.ai/api/search-image?query=web%20development%20concept%20illustration%20showing%20HTML%2C%20CSS%2C%20JavaScript%20code%20on%20screens%2C%20modern%20web%20browsers%20like%20Chrome%20and%20Firefox%2C%20responsive%20design%20across%20devices%2C%20clean%20digital%20illustration%20style%2C%20professional%2C%20tech-focused&width=600&height=500&seq=123457&orientation=landscape"
              alt="Web Development Illustration"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What is Web Development?</h2>
            <p className={styles.text}>
              Web development is the process of building and maintaining websites and web applications. It involves a combination of <span className={styles.highlight}>HTML</span> for structure, <span className={styles.highlight}>CSS</span> for styling, and <span className={styles.highlight}>JavaScript</span> for interactivity. Modern web development encompasses everything from simple static pages to complex web applications that work seamlessly across different browsers like <span className={styles.highlight}>Chrome</span> and <span className={styles.highlight}>Firefox</span>, and adapt to various devices and screen sizes. It's the perfect blend of technical expertise and creative design that brings digital experiences to life.
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

export default WhatIsWebDevelopment;
