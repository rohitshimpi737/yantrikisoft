import React from 'react';
import styles from '@/styles/HomePage/OurServices.module.css';
import Link from 'next/link';

const services = [
  {
    icon: 'ri-paint-brush-line',
    title: 'UI/UX Design',
    description:
      'User-centered design solutions that create intuitive and engaging digital experiences for your customers.',
    link: '/services/ui-ux',
  },
  {
    icon: 'ri-draft-line',
    title: 'Content Writing',
    description:
      'Professional content creation services to engage your audience and strengthen your brand voice.',
    link: '/services/content-writing',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing strategies to enhance your online presence and drive business growth.',
    link: '/services/digital-marketing',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Web Development',
    description:
      'Custom web development solutions tailored to meet your business needs and enhance user experience.',
    link: '/services/web-development',
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile App',
    description:
      'Custom mobile application development for iOS and Android platforms.',
    link: '/services/app-development',
  },
  {
    icon: 'ri-brain-line',
    title: 'AI Development',
    description:
      'Advanced AI and machine learning solutions to unlock insights and drive data-driven decision making.',
    link: '/services/ai-development',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Custom Software & ERP',
    description:
      'Enterprise Resource Planning solutions to streamline your business operations and improve efficiency.',
    link: '/services/custom-software-erp',
  },
  {
    icon: 'ri-checkbox-blank-circle-line',
    title: 'Immersive Technology',
    description:
      'AR/VR-based experiences for innovative engagement and interactive solutions.',
    link: '/services/immersive-technology',
  },
];

const OurServices = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                <i className={`${service.icon} ${styles.icon}`}></i>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <Link href={service.link} className={styles.cardLink}>
                Learn More
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
