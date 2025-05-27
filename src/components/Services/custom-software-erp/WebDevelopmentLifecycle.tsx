"use client";
import React, { useState } from 'react';
import styles from '@/styles/Services/WebDevelopmentLifecycle.module.css';

const CustomSoftwareERPLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Custom Software & ERP Services Process</h2>
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
    title: 'Requirement Analysis',
    description:
      "Understanding the client's business needs, objectives, and current processes to define the scope of the software or ERP solution.",
    iconClass: 'file-search',
    icon: 'ri-file-search-line ri-lg',
    details: [
      'Business Requirement Gathering',
      'Process Mapping',
      'Feasibility Study',
    ],
  },
  {
    title: 'Design & Prototyping',
    description:
      'Designing user-friendly interfaces and developing prototypes to ensure user-centric solutions that meet business goals.',
    iconClass: 'pencil-ruler',
    icon: 'ri-pencil-ruler-line ri-lg',
    details: [
      'UI/UX Design',
      'Interactive Prototypes',
      'Wireframes and Mockups',
    ],
  },
  {
    title: 'Software Development',
    description:
      'Turning the design into a fully functional software solution using modern technologies and agile development methodologies.',
    iconClass: 'code-s-slash',
    icon: 'ri-code-s-slash-line ri-lg',
    details: [
      'Custom Development',
      'ERP Modules',
      'API Integrations',
    ],
  },
  {
    title: 'Testing & QA',
    description:
      'Thorough testing to ensure the software’s functionality, security, and performance meet the required standards.',
    iconClass: 'bug',
    icon: 'ri-bug-line ri-lg',
    details: [
      'Functionality Testing',
      'Security Testing',
      'Performance Testing',
    ],
  },
  {
    title: 'Deployment & Support',
    description:
      'Deploying the software solution and providing ongoing support and maintenance to ensure continuous business success.',
    iconClass: 'rocket',
    icon: 'ri-rocket-line ri-lg',
    details: [
      'Deployment to Server',
      'Ongoing Software Maintenance',
      'System Updates',
    ],
  },
];

export default CustomSoftwareERPLifecycle;