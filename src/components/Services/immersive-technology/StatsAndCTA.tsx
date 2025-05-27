import styles from '@/styles/Services/StatsAndCTA.module.css';

const stats = [
  { value: '99%', label: 'PageSpeed Score' },
  { value: '100%', label: 'Mobile Responsive' },
  { value: '500+', label: 'Websites Launched' },
  { value: '24/7', label: 'Technical Support' },
];

const StatsAndCTA = () => {
  return (
    <>
      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div className={styles.statItem} key={idx}>
              <div className={styles.statValue}>{stat.value}</div>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaHeading}>Step Into the Future with Immersive Tech</h2>
          <p className={styles.ctaDescription}>
           Explore how YANTRIKISOFT’s immersive technology solutions can revolutionize your business with cutting-edge AR, VR, and XR experiences that captivate and engage your audience like never before.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Start Building Immersive Experiences</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndCTA;
