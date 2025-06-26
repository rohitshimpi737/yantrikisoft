import React from "react";
import styles from "@/styles/HomePage/CaseStudiesSection.module.css";

const CaseStudiesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Success Stories</h2>
          <h1 className={styles.heading}>Transforming Businesses</h1>
          <p className={styles.description}>
            Discover how we've helped companies achieve remarkable results through innovative solutions.
          </p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20with%20people%20working%20on%20computers%2C%20business%20meeting%20in%20progress%2C%20professional%20environment%2C%20clean%20modern%20workspace%20with%20blue%20accents%2C%20high%20quality%20professional%20image&width=1200&height=600&seq=2&orientation=landscape"
              alt="Case Study"
              width={1200}
              height={600}
              className={styles.image}
            />

            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>78%</span>
                    <span className={styles.statLabel}>Sales Increase</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>6</span>
                    <span className={styles.statLabel}>Months</span>
                  </div>
                </div>
                
                <h3 className={styles.overlayTitle}>Retail Digital Transformation</h3>
                <p className={styles.overlayDescription}>
                  Revolutionized a mid-sized retailer's online presence, implementing cutting-edge e-commerce solutions that dramatically boosted conversions and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;