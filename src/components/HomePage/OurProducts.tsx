import styles from "@/styles/HomePage/OurProducts.module.css";

export default function OurProducts() {
  return (
    <section className={styles.ourProducts}>
      <h2 className={styles.title}>OUR PRODUCTS</h2>
      <div className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <img
            src="/logos/kGamify_logo.svg"
            alt="My Product"
            className={styles.productImage}
          />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>kGamify </h3>
          <p className={styles.productDescription}>
kGamify is a gamified championship platform where students battle it out in quiz-based competitions, earn points, unlock rewards, and get noticed by recruiters. Created by students, for students — it's not about studying; it's about showing what you know, climbing leaderboards, and boosting your career through fun, competitive learning.          </p>
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
