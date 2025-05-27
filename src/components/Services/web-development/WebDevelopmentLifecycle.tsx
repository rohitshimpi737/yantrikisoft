"use client";
import React, { useState } from 'react';
import styles from '@/styles/Services/WebDevelopmentLifecycle.module.css';

const WebDevelopmentLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Web Development Lifecycle</h2>
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
    title: 'Discovery & Planning',
    description:
      'Understanding project requirements, target audience, and business goals. Creating detailed project roadmap and timeline.',
    iconClass: 'search',
    icon: 'ri-search-2-line ri-lg',
    details: ['Requirement Analysis', 'Market Research', 'Project Scoping'],
  },
  {
    title: 'Design & Prototyping',
    description:
      'Creating visual designs, user interfaces, and interactive prototypes that align with brand guidelines and user expectations.',
    iconClass: 'paintbrush',
    icon: 'ri-paint-brush-line ri-lg',
    details: ['Wireframing', 'UI/UX Design', 'Prototype Creation'],
  },
  {
    title: 'Development',
    description:
      'Writing clean, efficient code and implementing features according to design specifications and technical requirements.',
    iconClass: 'code',
    icon: 'ri-code-s-slash-line ri-lg',
    details: ['Frontend Development', 'Backend Integration', 'Database Setup'],
  },
  {
    title: 'Testing & QA',
    description:
      'Rigorous testing to ensure functionality, performance, and compatibility across different devices and browsers.',
    iconClass: 'bug',
    icon: 'ri-bug-line ri-lg',
    details: ['Unit Testing', 'Integration Testing', 'Performance Testing'],
  },
  {
    title: 'Deployment',
    description:
      'Launching the website on production servers with proper configuration and security measures.',
    iconClass: 'rocket',
    icon: 'ri-rocket-line ri-lg',
    details: ['Server Setup', 'Domain Configuration', 'SSL Implementation'],
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, updates, and support to ensure optimal performance and security.',
    iconClass: 'settings',
    icon: 'ri-settings-line ri-lg',
    details: ['Performance Monitoring', 'Security Updates', 'Content Updates'],
  },
];

export default WebDevelopmentLifecycle;