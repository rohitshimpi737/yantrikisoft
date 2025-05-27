import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsCustomSoftwareERP: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="https://th.bing.com/th/id/OIP.yhOk8OesDdqazKcYF85k3wHaE-?w=273&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Custom Software Services"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What are Custom Software & ERP Solutions?</h2>
            <p className={styles.text}>
              Custom software and ERP (Enterprise Resource Planning) solutions are tailored digital systems designed to address your business’s unique challenges and workflows. Unlike off-the-shelf products, custom solutions are built to fit your exact requirements—whether you need to automate processes, integrate departments, or gain real-time insights.
              <br /><br />
              <span className={styles.highlight}>Custom Software</span> streamlines operations, automates manual tasks, and adapts as your business grows. <span className={styles.highlight}>ERP systems</span> unify core business functions—like finance, HR, inventory, and sales—into a single, collaborative platform, enabling smarter decisions and seamless collaboration.
            </p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <i className="ri-building-line ri-2x text-primary"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-settings-3-line ri-2x text-primary"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-bar-chart-line ri-2x text-primary"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-shield-lock-line ri-2x text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCustomSoftwareERP;