import React from "react";
import styles from "@/styles/HomePage/AboutUsSection.module.css"; // Adjust path as needed
import 'remixicon/fonts/remixicon.css';

const AboutUsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            Founded in 2021, Yantrikisoft Private Limited is a forward-thinking digital and media technology consultancy based in Navi Mumbai, India. We specialize in crafting innovative digital products and delivering comprehensive IT solutions tailored for businesses ranging from startups to enterprises.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <div className={styles.icon}>
                <i className="ri-team-line ri-lg" style={{ color: "#437CCC" }}></i>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Our Team</h3>
            <p className={styles.cardText}>
              Our diverse team of experts brings together decades of experience across industries. We combine strategic thinking with practical execution to deliver exceptional results for our clients.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <div className={styles.icon}>
                <i className="ri-award-line ri-lg" style={{ color: "#437CCC" }}></i>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Our Approach</h3>
            <p className={styles.cardText}>
              We believe in a collaborative approach that puts your business goals first. Through in-depth analysis and strategic planning, we identify opportunities for sustainable growth and implement effective solutions.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <div className={styles.icon}>
                <i className="ri-customer-service-line ri-lg"style={{ color: "#437CCC" }}></i>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Our Promise</h3>
            <p className={styles.cardText}>
              We're committed to your success. Our client-centered approach ensures that we understand your unique challenges and deliver solutions that exceed expectations and drive tangible business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
