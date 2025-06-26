import styles from '@/styles/industries/IndustriesOverview.module.css';

export default function IndustriesOverview() {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Industries We Serve</h2>
        <p className={styles.subtitle}>
          Our expertise spans across multiple industries, delivering tailored solutions that address unique challenges and drive innovation in each sector.
        </p>
      </div>
    </section>
  );
}