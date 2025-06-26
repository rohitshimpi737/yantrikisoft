import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiSmartphoneLine,
  RiCodeLine,
  RiSpeedLine,
  RiBarChartBoxLine,
  RiLockLine,
  RiCustomerService2Line
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiSmartphoneLine className={styles.icon} />,
    title: 'Connects Directly with Customers',
    description: (
      <>
        Mobile apps create a{' '}
        <span className={styles.highlight}>direct channel</span>
        {' '}between businesses and users.
      </>
    ),
    details: "Push notifications, in-app support, and instant feedback enhance communication and engagement."
  },
  {
    icon: <RiCodeLine className={styles.icon} />,
    title: 'Custom Features & Scalability',
    description: (
      <>
        Tailored mobile apps offer{' '}
        <span className={styles.highlight}>unique features</span>
        {' '}suited to your business model.
      </>
    ),
    details: "Scalable architectures allow growth and feature expansion as your business evolves."
  },
  {
    icon: <RiSpeedLine className={styles.icon} />,
    title: 'Improves Operational Efficiency',
    description: (
      <>
        Apps streamline workflows and reduce manual tasks with{' '}
        <span className={styles.highlight}>automated processes</span>.
      </>
    ),
    details: "Integrating internal systems boosts productivity and reduces time-to-service."
  },
  {
    icon: <RiBarChartBoxLine className={styles.icon} />,
    title: 'Offers Data-Driven Insights',
    description: (
      <>
        Mobile apps track{' '}
        <span className={styles.highlight}>user behavior and analytics</span>
        {' '}in real time.
      </>
    ),
    details: "This data empowers you to make better decisions and optimize user experiences."
  },
  {
    icon: <RiLockLine className={styles.icon} />,
    title: 'Ensures Data Security',
    description: (
      <>
        Mobile apps can offer{' '}
        <span className={styles.highlight}>secure environments</span>
        {' '}for sensitive operations.
      </>
    ),
    details: "Data encryption, user authentication, and secure APIs protect your business and customers."
  },
  {
    icon: <RiCustomerService2Line className={styles.icon} />,
    title: 'Enhances Customer Support',
    description: (
      <>
        In-app chat, support tickets, and help centers provide{' '}
        <span className={styles.highlight}>better customer service</span>.
      </>
    ),
    details: "Fast, accessible support leads to higher satisfaction and stronger loyalty."
  }
];

const WhyWebsiteMatters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Every Business Needs a Great Website</h2>
        <div className={styles.grid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconCircleOuter}>
                <div className={styles.iconCircleInner}>{card.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>
                {card.description}
              </p>
              <p className={styles.cardDetails}>{card.details}</p>
            </div>
          ))}
        </div>
        <div className={styles.quoteBox}>
          <p className={styles.quote}>
            &quot;Mobile apps are no longer optional—they are vital tools for business growth and customer engagement&quot;
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhyWebsiteMatters;
