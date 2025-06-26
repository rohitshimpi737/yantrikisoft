'use client';
import styles from '@/styles/about/FounderSection.module.css';
import Image from 'next/image';

const FounderSection = () => {
  return (
    <section className={styles.founderSection}>
      <h2 className={styles.heading}>Who We Are</h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/brajesh.jpg"
            alt="Brajesh Lal"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.name}>Brajesh Lal</h3>
          <p className={styles.role}>CEO & Founder – Yantrikisoft Pvt Ltd.</p>
          <p className={styles.bio}>
            Brajesh Lal's journey into the world of technology and digital transformation spans over a decade,
            driven by a passion for building impactful solutions through innovation.
          </p>
          <p className={styles.bio}>
            As a hands-on problem solver, Brajesh brings a wealth of experience from working with diverse industries
            and leading cross-functional product and engineering teams. His focus is on leveraging emerging technologies
            like AI, ML, and blockchain to create smart, scalable, and sustainable solutions.
          </p>
          <p className={styles.bio}>
            Known for his bold leadership and entrepreneurial spirit, Brajesh envisions Yantrikisoft as a hub of
            next-gen innovation — from custom software to intelligent data-driven systems. He inspires trust and
            transparency in every collaboration, ensuring client-centric development with measurable impact.
          </p>
          <p className={styles.bio}>
            Whether he's speaking at conferences or mentoring startup founders, Brajesh leads Yantrikisoft as a
            platform for building not just software — but sustainable digital ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
