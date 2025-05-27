"use client";
import React, { useState } from 'react';
import styles from '@/styles/Services/WebDevelopmentLifecycle.module.css';

const DigitalMarketingLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Digital Marketing Lifecycle</h2>
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineItems}>
            {phases.map((phase, index) => (
              <TimelineItem
                key={index}
                phase={phase}
                isLeftAligned={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ phase: any; isLeftAligned: boolean }> = ({
  phase,
  isLeftAligned,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`${styles.timelineItem} ${
        isLeftAligned ? styles.leftAligned : styles.rightAligned
      }`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div
        className={`${styles.textWrapper} ${
          isLeftAligned ? styles.textRight : styles.textLeft
        }`}
      >
        <h3 className={styles.phaseTitle}>{phase.title}</h3>
        <p className={styles.phaseDescription}>{phase.description}</p>
      </div>
      <div
        className={styles.iconWrapper}
        role="button"
        aria-label={`More about ${phase.title}`}
        tabIndex={0}
      >
        <div className={`${styles.icon} ${styles[phase.iconClass]}`}>
          <i className={phase.icon}></i>
        </div>
      </div>
      <div className={`${styles.detailsWrapper} ${showDetails ? styles.showDetails : ''}`}>
        <div className={styles.details}>
          <ul className={styles.detailsList}>
            {phase.details.map((detail: string, i: number) => (
              <li key={i} className={styles.detailItem}>
                <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const phases = [
  {
    title: 'Market Research',
    description:
      'Understanding audience behavior, market trends, and competitor strategies to form a strong foundation.',
    iconClass: 'bar-chart',
    icon: 'ri-bar-chart-2-line ri-lg',
    details: ['Competitor Analysis', 'Target Audience', 'Trend Identification'],
  },
  {
    title: 'Strategy Development',
    description:
      'Defining goals, channels, budget, and KPIs to establish a focused digital marketing roadmap.',
    iconClass: 'settings',
    icon: 'ri-settings-4-line ri-lg',
    details: ['Channel Selection', 'Budget Planning', 'KPIs Setup'],
  },
  {
    title: 'Execution & Promotion',
    description:
      'Launching campaigns across various platforms using targeted ads, SEO, email, and content marketing.',
    iconClass: 'send-plane',
    icon: 'ri-send-plane-2-line ri-lg',
    details: ['PPC Campaigns', 'SEO Optimization', 'Social Media Ads'],
  },
  {
    title: 'Monitoring & Analysis',
    description:
      'Tracking campaign results in real-time and measuring performance using analytics tools and dashboards.',
    iconClass: 'pie-chart',
    icon: 'ri-pie-chart-line ri-lg',
    details: ['Performance Review', 'Conversion Metrics', 'Funnel Tracking'],
  },
  {
    title: 'Optimization & Scaling',
    description:
      'Refining campaigns based on insights and expanding successful strategies for maximum ROI and growth.',
    iconClass: 'line-chart',
    icon: 'ri-line-chart-line ri-lg',
    details: ['A/B Testing', 'ROI Optimization', 'Retargeting Campaigns'],
  },
];

export default DigitalMarketingLifecycle;