import styles from '@/styles/Services/StatsAndCTA.module.css';

const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '100%', label: 'Custom Fit Solutions' },
  { value: '50+', label: 'ERP Projects Delivered' },
  { value: '24/7', label: 'Support & Maintenance' },
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
          <h2 className={styles.ctaHeading}>Transform Your Business with Custom Software &amp; ERP Solutions</h2>
          <p className={styles.ctaDescription}>
            Leverage the power of custom software and ERP systems to streamline your processes, improve efficiency, and drive business growth. YANTRIKISOFT’s expert team delivers tailored solutions that integrate seamlessly into your operations and empower your business for success.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Start Building Your Custom Solution</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndCTA;