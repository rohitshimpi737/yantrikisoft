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
          <h2 className={styles.ctaHeading}>Ready to Transform Your User Experience?</h2>
          <p className={styles.ctaDescription}>
            {"Let's discuss how YANTRIKISOFT's UI/UX design services can help you create intuitive, engaging, and beautiful user interfaces that enhance your brand and boost user satisfaction."}
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
