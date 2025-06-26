"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/HomePage/HomeHeroSection.module.css";

const lineVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.2, ease: "easeOut" },
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const HomeHeroSection: React.FC = () => {
  const [hideLines, setHideLines] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLines(true);
    }, 1000); // Hide after 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.background}></div>

      {!hideLines && (
        <div className={styles.lineIndicator}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={styles.verticalLine}
              custom={i}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={lineVariants}
            />
          ))}
        </div>
      )}

      <div className={styles.container}>
        <motion.div
          className={styles.textContainer}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            We are looking to grow your business
          </h1>
          <p className={styles.description}>
            Partner with us to transform your business potential into measurable
            growth. Our expert team delivers tailored strategies for sustainable
            success.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/all-services" className={styles.primaryButton}>
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
