"use client";
import React, { useState } from 'react';
import styles from '@/styles/Services/WebDevelopmentLifecycle.module.css';

const WebDevelopmentLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>UI/UX Design Process</h2>
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
// Mobile App Development Process Phases
const phases = [
  {
    title: 'Research & Discovery',
    description:
      "Understanding the user's needs, goals, pain points, and behaviors through research and stakeholder interviews.",
    iconClass: 'search',
    icon: 'ri-search-line ri-lg',
    details: [
      'User Interviews',
      'Competitor Analysis',
      'Persona Creation'
    ],
  },
  {
    title: 'Ideation & Wireframing',
    description:
      'Developing wireframes and user flows to map out the user journey and product structure.',
    iconClass: 'palette',
    icon: 'ri-palette-line ri-lg',
    details: [
      'Wireframing',
      'Sketches & Diagrams',
      'User Flows'
    ],
  },
  {
    title: 'Design & Prototyping',
    description:
      'Transforming wireframes into high-fidelity designs and interactive prototypes to showcase the final product.',
    iconClass: 'pencil-ruler',
    icon: 'ri-pencil-ruler-line ri-lg',
    details: [
      'High-Fidelity Mockups',
      'Interactive Prototypes',
      'User Testing'
    ],
  },
  {
    title: 'Testing & Iteration',
    description:
      'Conducting usability tests to gather feedback and iterate on the design based on user responses.',
    iconClass: 'check',
    icon: 'ri-check-line ri-lg',
    details: [
      'Usability Testing',
      'Feedback Collection',
      'Final Revisions'
    ],
  },
  {
    title: 'Launch & Support',
    description:
      'Deploying the final design and ensuring continuous support for improvements and updates post-launch.',
    iconClass: 'cloud',
    icon: 'ri-cloud-line ri-lg',
    details: [
      'CMS Integration',
      'Performance Monitoring',
      'Post-Launch Updates'
    ],
  },
];

export default WebDevelopmentLifecycle;