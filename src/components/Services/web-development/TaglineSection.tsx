import React from 'react';
import styles from '@/styles/Services/TaglineSection.module.css';

const TaglineSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Web Development — Your Need, Our Deed
        </h2>
        <p className={styles.paragraph}>
          At YANTRIKISOFT, we build web solutions that are user-centric, scalable, and optimized for ROI.
          Our development approach focuses on creating websites that not only look stunning but also perform exceptionally well,
          driving real business results through improved user experience and conversion optimization.
        </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://readdy.ai/api/search-image?query=professional%20web%20development%20team%20working%20together%20in%20modern%20office%2C%20diverse%20group%20of%20developers%2C%20designers%20collaborating%20on%20website%20project%2C%20clean%20workspace%20with%20multiple%20screens%20showing%20code%20and%20design%2C%20high%20quality%20professional%20environment&width=800&height=400&seq=123458&orientation=landscape"
            alt="YANTRIKISOFT Web Development Team"
            className={styles.image}
          />
        </div>
    </section>
  );
};

export default TaglineSection;
