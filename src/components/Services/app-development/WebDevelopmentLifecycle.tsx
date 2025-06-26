"use client";
import React, { useState } from 'react';
import styles from '@/styles/Services/WebDevelopmentLifecycle.module.css';

interface Phase {
  title: string;
  description: string;
  iconClass: string;
  icon: string;
  details: string[];
}

const phases: Phase[] = [
  {
    title: 'Requirement Analysis',
    description:
      "Understanding the client's needs, goals, and target users to define the scope of the app project.",
    iconClass: 'file-search',
    icon: 'ri-file-search-line ri-lg',
    details: [
      'Client Consultation',
      'Feasibility Study',
      'Tech Stack Planning'
    ],
  },
  {
    title: 'Design & Prototyping',
    description:
      'Designing visually appealing and user-centric interfaces for seamless app experiences.',
    iconClass: 'pencil-ruler',
    icon: 'ri-pencil-ruler-line ri-lg',
    details: [
      'UX/UI Wireframes',
      'Interactive Prototypes',
      'User Journey Mapping'
    ],
  },
  {
    title: 'App Development',
    description:
      'Translating designs into functional mobile applications using robust frameworks and best practices.',
    iconClass: 'code',
    icon: 'ri-code-s-slash-line ri-lg',
    details: [
      'Frontend & Backend',
      'API Integration',
      'Database Configuration'
    ],
  },
  {
    title: 'Testing & QA',
    description:
      'Conducting rigorous quality assurance testing to ensure app stability, security, and performance.',
    iconClass: 'bug',
    icon: 'ri-bug-line ri-lg',
    details: [
      'Device Testing',
      'Bug Fixing',
      'User Acceptance Testing'
    ],
  },
  {
    title: 'Launch & Maintenance',
    description:
      'Releasing the app on app stores, monitoring performance, and offering ongoing updates and support.',
    iconClass: 'rocket',
    icon: 'ri-rocket-line ri-lg',
    details: [
      'App Store Deployment',
      'Analytics & Reports',
      'Feature Enhancements'
    ],
  },
];

const TimelineItem: React.FC<{ phase: Phase; isLeftAligned: boolean }> = ({
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

const WebDevelopmentLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Mobile App Development Process</h2>
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

export default WebDevelopmentLifecycle;
