'use client';
import styles from '@/styles/about/CompanySection.module.css';
import Image from 'next/image';

const CompanySection = () => {
  return (
    <section className={styles.companySection}>
      <h2 className={styles.heading}>Our Company</h2>
      <p className={styles.description}>
        Founded in 2018, Yantrikisoft has been at the forefront of digital transformation,
        helping businesses leverage technology to achieve their strategic goals.
      </p>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h3 className={styles.subheading}>Our Story</h3>
          <p>
            Founded in 2021 in Mumbai, Yantrikisoft has emerged as a leading force in digital
            transformation and technology innovation. We specialize in developing cutting-edge
            solutions that help businesses thrive in the digital age, from custom software
            development to AI-powered analytics platforms.
          </p>
          <p>
            Our team of 45+ technology experts brings together diverse skills and deep industry
            knowledge, enabling us to deliver comprehensive solutions that drive real business
            value. We've successfully completed over 200 projects across 15 countries, serving
            clients from startups to Fortune 500 companies.
          </p>
          <p>
            What sets us apart is our commitment to innovation and excellence. We invest heavily in
            research and experimentation, staying ahead of technology trends to ensure our clients
            receive future-ready solutions.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Teams.jpg"
            alt="Yantrikisoft Team"
            width={500}
            height={350}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
