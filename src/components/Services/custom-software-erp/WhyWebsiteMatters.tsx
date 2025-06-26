import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiBuildingLine,
  RiSettings3Line,
  RiBriefcaseLine,
  RiBarChartLine,
  RiShieldLine,
  RiExportLine,
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiBuildingLine className={styles.icon} />,
    title: 'Optimizes Business Processes',
    description: 'Custom software and ERP solutions streamline your business operations.',
    details: 'Automate manual tasks, enhance workflow efficiency, and reduce operational bottlenecks.',
  },
  {
    icon: <RiSettings3Line className={styles.icon} />,
    title: 'Custom Solutions for Unique Needs',
    description: "Tailored software addresses your business's specific requirements.",
    details: 'ERP and custom software solutions are designed to scale with your business and adjust to changing needs.',
  },
  {
    icon: <RiBriefcaseLine className={styles.icon} />,
    title: 'Enhances Collaboration & Integration',
    description: 'Custom software solutions enable seamless collaboration across teams.',
    details: 'ERP systems integrate various business functions like finance, HR, and inventory into one platform for better communication and decision-making.',
  },
  {
    icon: <RiBarChartLine className={styles.icon} />,
    title: 'Improves Data Analytics & Reporting',
    description: 'Gain actionable insights with advanced analytics and real-time reporting.',
    details: 'Monitor key performance indicators (KPIs), track business performance, and make informed decisions faster.',
  },
  {
    icon: <RiShieldLine className={styles.icon} />,
    title: 'Ensures Data Security',
    description: 'Custom software and ERP systems implement robust security measures.',
    details: 'With secure data encryption, multi-factor authentication, and strict access controls, your business data remains protected.',
  },
  {
    icon: <RiExportLine className={styles.icon} />,
    title: 'Offers Ongoing Support & Maintenance',
    description: 'Custom software comes with regular updates and technical support.',
    details: 'Ensure system stability, functionality, and the continuous improvement of features with expert maintenance services.',
  },
];

const WhyCustomSoftwareERP = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Every Business Needs Custom Software and ERP Solutions</h2>
        <div className={styles.grid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconCircleOuter}>
                <div className={styles.iconCircleInner}>{card.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <p className={styles.cardDetails}>{card.details}</p>
            </div>
          ))}
        </div>
        <div className={styles.quoteBox}>
          <p className={styles.quote}>
            &quot;Custom software and ERP systems are the backbone of a successful, efficient, and scalable business.&quot;
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyCustomSoftwareERP;