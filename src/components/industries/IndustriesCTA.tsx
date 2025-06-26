import styles from '@/styles/industries/IndustriesCTA.module.css';

export default function IndustriesCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Transform Your Industry?</h2>
        <p className={styles.subtitle}>
          Partner with Yantrikisoft to leverage our industry expertise and technological capabilities for your business growth.
        </p>
        <a href="/contact" className={styles.ctaBtn}>
          Contact Us Today
          <i className="ri-arrow-right-line ri-lg" style={{ marginLeft: 8 }}></i>
        </a>
      </div>
    </section>
  );
}