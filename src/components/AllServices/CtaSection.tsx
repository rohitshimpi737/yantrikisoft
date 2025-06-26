"use client";
import React, { useState } from 'react';
import styles from "@/styles/AllServices/CtaSection.module.css";
import Link from 'next/link';


const CtaSection: React.FC = () => {

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexBox}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Ready to transform your business?</h2>
              <p className={styles.description}>
                Let&apos;s discuss how our technology solutions can help you achieve your business goals.
              </p>
            </div>
            <div>
              <Link href='/contact' passHref>
                <button className={styles.button}>
                Contact Us
                </button>
              </Link>
              </div>
            {/* <div>
              <button onClick={() => setShowContactPopup(true)} className={styles.button}>
                Contact Us
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
