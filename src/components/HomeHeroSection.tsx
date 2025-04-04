import Image from "next/image";
import styles from "@/styles/HomeHeroSection.module.css";

export default function HomeHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1>We are helping to grow your business.</h1>
          <p>
            We provide innovative digital solutions, <br />
            media technology consultancy, and IT <br />
            services for startups to enterprises.
          </p>
          <button className={styles.ctaButton}>Explore Our Services</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/hero-image.png"
            alt="Helping business grow"
            width={652} /* Reduced size */
            height={652} /* Adjusted height */
          />
        </div>
      </div>
    </section>
  );
}
