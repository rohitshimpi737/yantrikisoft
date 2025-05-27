import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsImmersiveTechnologies: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              alt="Immersive Technologies VR AR Illustration"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What are Immersive Technologies?</h2>
            <p className={styles.text}>
              Immersive technologies, including <span className={styles.highlight}>VR</span>, <span className={styles.highlight}>AR</span>, <span className={styles.highlight}>MR</span>, and <span className={styles.highlight}>Gaming</span>, provide cutting-edge experiences that blur the line between the physical and digital worlds. These technologies immerse users in interactive and engaging environments, offering innovative ways to interact with digital content. By leveraging <span className={styles.highlight}>virtual reality</span>, <span className={styles.highlight}>augmented reality</span>, <span className={styles.highlight}>mixed reality</span>, and <span className={styles.highlight}>gaming</span>, we create experiences that are dynamic, engaging, and transformative, catering to diverse industries like entertainment, education, training, and more.
            </p>
            <div className={styles.icons}>
                <div className={styles.icon}>
                <i className="ri-vr-headset-line ri-2x text-gray-600"></i>
                </div>
                <div className={styles.icon}>
                <i className="ri-apps-line ri-2x text-gray-600"></i>
                </div>
                <div className={styles.icon}>
                <i className="ri-gamepad-line ri-2x text-gray-600"></i>
                </div>
                <div className={styles.icon}>
                <i className="ri-computer-line ri-2x text-gray-600"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsImmersiveTechnologies;