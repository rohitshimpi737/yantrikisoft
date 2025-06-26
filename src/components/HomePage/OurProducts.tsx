import Image from "next/image";
import styles from "@/styles/HomePage/OurProducts.module.css";

export default function OurProducts() {
  return (
    <section className={styles.ourProducts}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <Image
            src="/logos/kGamify_logo.svg"
            alt="kGamify Logo"
            className={styles.productImage}
            width={120}
            height={120}
            priority
          />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>kGamify</h3>
          <p className={styles.productDescription}>
            kGamify is a gamified championship platform where students battle it out in quiz-based competitions, earn points, unlock rewards, and get noticed by recruiters. Created by students, for students — it&apos;s not about studying; it&apos;s about showing what you know, climbing leaderboards, and boosting your career through fun, competitive&nbsp;learning.
          </p>
          <a
            href="https://kgamify.in/"
            className={styles.learnMoreButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
