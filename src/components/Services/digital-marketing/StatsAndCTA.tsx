import styles from '@/styles/Services/StatsAndCTA.module.css';

const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '10x', label: 'Average ROI Growth' },
  { value: '200+', label: 'Campaigns Managed' },
  { value: '24/7', label: 'Marketing Support' },
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
          <h2 className={styles.ctaHeading}>Ready to Boost Your Digital Presence?</h2>
          <p className={styles.ctaDescription}>
            Let&apos;s discuss how YANTRIKISOFT’s digital marketing services can help you drive targeted traffic, improve ROI, and elevate your brand across digital channels.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Get Started Today</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndCTA;