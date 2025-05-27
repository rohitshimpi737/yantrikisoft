import styles from '@/styles/Services/StatsAndCTA.module.css';

const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '10x', label: 'Faster Insights' },
  { value: '200+', label: 'AI Projects Delivered' },
  { value: '24/7', label: 'AI Support' },
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
          <h2 className={styles.ctaHeading}>Ready to Leverage AI for Your Business?</h2>
          <p className={styles.ctaDescription}>
            Let&apos;s discuss how YANTRIKISOFT’s AI development services can help you build intelligent, data-driven solutions that enhance decision-making, optimize processes, and drive innovation for your business.
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