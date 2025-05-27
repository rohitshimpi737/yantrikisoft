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
          <h2 className={styles.ctaHeading}>Ready to Elevate Your Content Strategy?</h2>
          <p className={styles.ctaDescription}>
            Let’s discuss how YANTRIKISOFT’s content writing services can help you create compelling, SEO-optimized, and audience-driven content that drives results for your business.
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