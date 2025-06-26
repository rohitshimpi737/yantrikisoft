'use client';
import styles from '@/styles/about/MissionVision.module.css';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Mission & Vision</h2>
      <p className={styles.subheading}>
        Our guiding principles that drive everything we do at Yantrikisoft.
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <FaBullseye className={styles.icon} />
          <h3>Our Mission</h3>
          <p>
            To empower digital transformation by delivering innovative, scalable, and sustainable technology
            solutions. We strive to create future-ready ecosystems for enterprises in an ever-evolving global landscape.
          </p>
        </div>
        <div className={styles.card}>
          <FaEye className={styles.icon} />
          <h3>Our Vision</h3>
          <p>
            To be the architect of digital innovation globally, recognized for our ability to harness emerging
            technologies, drive organizational success, and create sustainable growth and a wide-reaching
            positive impact for our clients and society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
