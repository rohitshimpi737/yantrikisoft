import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiPaletteLine,
  RiContrast2Line,
  RiUserLine,
  RiSpeedLine,
  RiRestartLine,
  RiMovieLine
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiPaletteLine className={styles.icon} />,
    title: 'Enhances User Experience',
    description: (
      <>
        UI/UX design focuses on creating{' '}
        <span className={styles.highlight}>intuitive, user-friendly</span> interfaces.
      </>
    ),
    details: "A seamless user experience makes your customers return and engage more with your product."
  },
  {
    icon: <RiContrast2Line className={styles.icon} />,
    title: 'Improves Visual Appeal',
    description: (
      <>
        Well-designed interfaces capture users’ attention and enhance{' '}
        <span className={styles.highlight}>brand aesthetics</span>.
      </>
    ),
    details: "Effective UI design can set you apart, making your product memorable and visually compelling."
  },
  {
    icon: <RiUserLine className={styles.icon} />,
    title: 'Boosts Customer Retention',
    description: (
      <>
        <span className={styles.highlight}>93%</span> of users say a better design increases the likelihood of returning.
      </>
    ),
    details: "A streamlined and intuitive design encourages users to stay longer and engage more with your platform."
  },
  {
    icon: <RiSpeedLine className={styles.icon} />,
    title: 'Increases Conversion Rates',
    description: (
      <>
        UI/UX optimization is shown to increase conversions by{' '}
        <span className={styles.highlight}>200%</span> in some cases.
      </>
    ),
    details: "By focusing on usability, your design becomes more persuasive and helps drive action."
  },
  {
    icon: <RiRestartLine className={styles.icon} />,
    title: 'Improves Accessibility',
    description: (
      <>
        Good UI/UX design ensures your platform is{' '}
        <span className={styles.highlight}>accessible to everyone</span>.
      </>
    ),
    details: "Design for inclusivity means making your digital product usable by people of all abilities."
  },
  {
    icon: <RiMovieLine className={styles.icon} />,
    title: 'Optimizes Mobile Experience',
    description: (
      <>
        With <span className={styles.highlight}>mobile-first</span> design, you ensure a smooth experience on all devices.
      </>
    ),
    details: "Mobile optimization is critical as more users access your website or app from smartphones."
  }
];

const WhyWebsiteMatters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Every Business Needs UI/UX Design</h2>
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
            &quot;Good design is not just about aesthetics, it&apos;s about creating a seamless user experience that converts.&quot;
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyWebsiteMatters;
