import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsWebDevelopment: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
            <div className={styles.imageWrapper}>
              <img
              src="/images/ui-ux.png"
              alt="UI/UX Design Illustration"
              className={styles.image}
              />
            </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What is UI/UX Design?</h2>
            <p className={styles.text}>
              UI/UX design is the process of creating intuitive and aesthetically pleasing user interfaces, ensuring seamless user experiences. It involves <span className={styles.highlight}>user research</span>, <span className={styles.highlight} >wireframing</span>, <span className={styles.highlight} >prototyping</span>, and <span className={styles.highlight}>testing</span> to deliver digital products that are both functional and visually appealing. The goal of UI/UX design is to understand the user&rsquo;s needs and behaviors, then craft designs that provide solutions that are easy to navigate and delightful to interact with. It&apos;s a combination of creativity, psychology, and technology to make products user-centric and accessible across platforms like <span className={styles.highlight} >websites</span>, <span className={styles.highlight}>mobile apps</span>, and <span className={styles.highlight} >software</span>.
            </p>

            <div className={styles.icons}>
              <div className={styles.icon}>
                <i className="ri-web-browser-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-phone-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-laptop-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-tablet-fill ri-2x text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWebDevelopment;
