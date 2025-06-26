import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiVkLine,
  RiStoreLine,
  RiPhoneLine,
  RiGameLine,
  RiCompassLine,
  RiGlobalLine,
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiVkLine className={styles.icon} />,
    title: 'Revolutionizes Customer Engagement',
    description: (
      <>
        Immersive technologies like AR/VR create <span className={styles.highlight}>interactive experiences</span> that captivate customers.
      </>
    ),
    details:
      'These technologies enhance user engagement, enabling customers to interact with your products in ways never possible before.',
  },
  {
    icon: <RiStoreLine className={styles.icon} />,
    title: 'Enhances Product Visualization',
    description: (
      <>
        Immersive technologies help showcase products in <span className={styles.highlight}>real-world environments</span>.
      </>
    ),
    details:
      'By allowing customers to visualize products virtually, they can make informed purchasing decisions.',
  },
  {
    icon: <RiPhoneLine className={styles.icon} />,
    title: 'Boosts Immersive Learning and Training',
    description: (
      <>
        AR and VR are being widely adopted for <span className={styles.highlight}>training simulations</span> across industries.
      </>
    ),
    details:
      'These technologies offer realistic, hands-on learning experiences without the risk or cost of real-world training.',
  },
  {
    icon: <RiGameLine className={styles.icon} />,
    title: 'Increases Brand Awareness',
    description: (
      <>
        Immersive experiences create a <span className={styles.highlight}>memorable brand experience</span>.
      </>
    ),
    details:
      'By offering an interactive and engaging platform, businesses can stand out and strengthen their brand identity.',
  },
  {
    icon: <RiCompassLine className={styles.icon} />,
    title: 'Improves Customer Satisfaction',
    description: (
      <>
        Immersive technologies allow customers to engage with your brand in a way that is <span className={styles.highlight}>personalized and enjoyable</span>.
      </>
    ),
    details:
      'These engaging experiences increase customer satisfaction and foster a deeper connection with your brand.',
  },
  {
    icon: <RiGlobalLine className={styles.icon} />,
    title: 'Expands Market Reach',
    description: (
      <>
        With immersive technologies, your business can reach a broader audience, including those who prefer <span className={styles.highlight}>virtual interactions</span>.
      </>
    ),
    details:
      'From virtual shopping experiences to remote collaboration, immersive technologies break down geographical barriers.',
  },
];

const WhyImmersiveTechMatters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Every Business Needs Immersive Technologies</h2>
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
            &quot;Immersive technologies are transforming the way businesses engage with customers, offering new opportunities for innovation.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyImmersiveTechMatters;