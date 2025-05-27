import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsWebDevelopment: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>

            <img 
              alt="Web Development Illustration"
              className={styles.image}
             />

          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What is Mobile App Development?</h2>
            <p className={styles.text}>
              Mobile app development involves designing and building applications for smartphones and tablets across platforms like iOS and Android. From initial concept to deployment, it enables brands to connect with users on the go. Using <span className={styles.highlight}>native</span>, <span className={styles.highlight}>hybrid</span>, and <span className={styles.highlight}>cross-platform</span> technologies, we deliver feature-rich apps that are scalable, secure, and user-friendly.
            </p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <i className="ri-smartphone-line ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-android-line ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-apple-line ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-layout-masonry-line ri-2x text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWebDevelopment;
