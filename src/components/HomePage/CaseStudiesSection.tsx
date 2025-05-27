import React from "react";
import styles from "@/styles/HomePage/CaseStudiesSection.module.css"; // Adjust the path as needed

const CaseStudiesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How We Helped Our Clients</h2>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20with%20people%20working%20on%20computers%2C%20business%20meeting%20in%20progress%2C%20professional%20environment%2C%20clean%20modern%20workspace%20with%20blue%20accents%2C%20high%20quality%20professional%20image&width=1200&height=600&seq=2&orientation=landscape"
              alt="Case Study"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <h3 className={styles.overlayTitle}>Transforming Digital Presence</h3>
                <p className={styles.overlayDescription}>
                  We helped a mid-sized retail company increase online sales by 78% within 6 months through strategic digital transformation.
                </p>
                <a href="#" className={styles.button}>
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
