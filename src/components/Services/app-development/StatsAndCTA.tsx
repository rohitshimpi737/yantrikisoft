import styles from '@/styles/Services/StatsAndCTA.module.css';

const stats = [
  { value: '99%', label: 'PageSpeed Score' },
  { value: '100%', label: 'Mobile Responsive' },
  { value: '500+', label: 'Apps Launched' },
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
          <h2 className={styles.ctaHeading}>Elevate Your Business with Mobile App Development</h2>
          <p className={styles.ctaDescription}>
            Harness the power of custom mobile app development to connect with your customers and streamline your operations. YANTRIKISOFT’s expert team crafts high-performance, intuitive mobile apps for iOS and Android that drive engagement and deliver results.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Start Building Your Mobile App</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndCTA;
