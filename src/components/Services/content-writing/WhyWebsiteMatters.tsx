import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiLightbulbFlashLine,
  RiSearchLine,
  RiHandHeartLine,
  RiCustomerService2Line,
  RiLoopRightLine,
  RiGlobalLine,
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiLightbulbFlashLine className={styles.icon} />,
    title: 'Builds Brand Awareness',
    description: (
      <>
        Strategic content helps <span className={styles.highlight}>increase visibility</span> and positions your brand as a thought leader.
      </>
    ),
    details: 'Consistent blogs, articles, and web copy ensure your audience remembers and trusts your business.'
  },
  {
    icon: <RiSearchLine className={styles.icon} />,
    title: 'Boosts SEO Rankings',
    description: (
      <>
        High-quality content improves search engine rankings and drives <span className={styles.highlight}>organic traffic</span>.
      </>
    ),
    details: 'Blogs, landing pages, and keyword-rich articles help your audience find you faster.'
  },
  {
    icon: <RiHandHeartLine className={styles.icon} />,
    title: 'Builds Trust & Authority',
    description: (
      <>
        <span className={styles.highlight}>81%</span> of consumers research online before buying — quality content builds confidence.
      </>
    ),
    details: 'Educational content shows you know your industry and care about helping your audience.'
  },
  {
    icon: <RiCustomerService2Line className={styles.icon} />,
    title: 'Drives Leads & Sales',
    description: (
      <>
        Companies that blog get <span className={styles.highlight}>67% more leads</span> than those that don’t.
      </>
    ),
    details: 'Compelling copy guides visitors through your funnel — from awareness to conversion.'
  },
  {
    icon: <RiLoopRightLine className={styles.icon} />,
    title: 'Supports Every Channel',
    description: (
      <>
        From emails to ads, <span className={styles.highlight}>everything starts with content</span>.
      </>
    ),
    details: 'Great writing enhances marketing, social media, video scripts, and more.'
  },
  {
    icon: <RiGlobalLine className={styles.icon} />,
    title: 'Connects with a Global Audience',
    description: (
      <>
        Well-crafted content can <span className={styles.highlight}>reach millions</span> across the globe.
      </>
    ),
    details: 'Tailored messaging bridges cultures, languages, and markets like no other medium can.'
  }
];

const WhyWebsiteMatters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Every Business Needs Content Writing</h2>
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
            &quot;Content isn&apos;t just what you say — it&apos;s how your brand is remembered.&quot;
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyWebsiteMatters;