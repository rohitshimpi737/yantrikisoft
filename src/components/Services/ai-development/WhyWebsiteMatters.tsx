import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiBrainLine,
  RiRobotLine,
  RiLineChartLine,
  RiShieldKeyholeLine,
  RiUserSmileLine,
  RiGlobalLine,
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiBrainLine className={styles.icon} />,
    title: 'Improves Decision Making',
    highlight: null,
    description: (
      <>
        AI analyzes data faster and smarter, helping you make <span className={styles.highlight}>data-driven decisions</span>.
      </>
    ),
    details: 'From predictive analytics to business intelligence, AI empowers confident strategies.',
  },
  {
    icon: <RiRobotLine className={styles.icon} />,
    title: 'Automates Repetitive Tasks',
    highlight: null,
    description: (
      <>
        AI reduces human effort by <span className={styles.highlight}>automating manual tasks</span>.
      </>
    ),
    details: 'Chatbots, workflow engines, and smart assistants improve productivity and save time.',
  },
  {
    icon: <RiLineChartLine className={styles.icon} />,
    title: 'Drives Business Growth',
    highlight: null,
    description: (
      <>
        <span className={styles.highlight}>AI-powered insights</span> unlock new revenue streams and market opportunities.
      </>
    ),
    details: 'Recommendation engines, personalization, and forecasting boost engagement and ROI.',
  },
  {
    icon: <RiShieldKeyholeLine className={styles.icon} />,
    title: 'Enhances Security & Risk Management',
    highlight: null,
    description: (
      <>
        AI detects threats and anomalies <span className={styles.highlight}>before they cause harm</span>.
      </>
    ),
    details: 'From fraud detection to cybersecurity, AI provides a smarter layer of defense.',
  },
  {
    icon: <RiUserSmileLine className={styles.icon} />,
    title: 'Enhances Customer Experience',
    highlight: null,
    description: (
      <>
        <span className={styles.highlight}>Personalized AI solutions</span> engage users and improve satisfaction.
      </>
    ),
    details: 'Smart assistants, AI chat, and customer insights help create memorable experiences.',
  },
  {
    icon: <RiGlobalLine className={styles.icon} />,
    title: 'Scales with Your Business',
    highlight: null,
    description: (
      <>
        AI grows as your business grows, delivering <span className={styles.highlight}>flexibility and speed</span>.
      </>
    ),
    details: 'From startups to enterprises, AI adapts to scale operations efficiently.',
  },
];

const WhyAIMatters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Every Business Needs AI Development</h2>
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
            "AI isn’t the future — it’s the competitive edge your business needs today."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAIMatters;