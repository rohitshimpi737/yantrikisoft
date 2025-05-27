"use client";
import React, { useState } from 'react';
import styles from '@/styles/Services/WebDevelopmentLifecycle.module.css';

const ContentWritingLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Content Writing Lifecycle</h2>
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
    title: 'Research & Planning',
    description:
      'Identifying the target audience, analyzing competitors, and planning the content strategy to meet business objectives.',
    iconClass: 'search',
    icon: 'ri-search-line ri-lg',
    details: ['Audience Profiling', 'Keyword Research', 'Content Calendar'],
  },
  {
    title: 'Outlining & Strategy',
    description:
      'Creating content outlines and aligning tone, style, and structure with the brand and user needs.',
    iconClass: 'quill-pen',
    icon: 'ri-quill-pen-line ri-lg',
    details: ['Title Crafting', 'Content Structure', 'Style Guidelines'],
  },
  {
    title: 'Content Creation',
    description:
      'Writing high-quality, original content tailored to the topic, audience, and platform.',
    iconClass: 'edit',
    icon: 'ri-edit-2-line ri-lg',
    details: ['SEO-Friendly Writing', 'Plagiarism-Free Content', 'Keyword Optimization'],
  },
  {
    title: 'Editing & Proofreading',
    description:
      'Polishing the content for clarity, correctness, and engagement before final approval.',
    iconClass: 'file-check',
    icon: 'ri-file-check-line ri-lg',
    details: ['Grammar Checks', 'Readability Enhancements', 'Fact-Checking'],
  },
  {
    title: 'Publishing',
    description:
      'Uploading and formatting the content for web platforms, blogs, or CMS, ensuring responsiveness and accessibility.',
    iconClass: 'upload-cloud',
    icon: 'ri-upload-cloud-line ri-lg',
    details: ['CMS Integration', 'Metadata Optimization', 'Responsiveness Check'],
  },
  {
    title: 'Analysis & Optimization',
    description:
      'Monitoring content performance and refining strategies to boost engagement and search visibility.',
    iconClass: 'bar-chart',
    icon: 'ri-bar-chart-line ri-lg',
    details: ['Performance Tracking', 'SEO Refinement', 'Periodic Updates'],
  },
];

export default ContentWritingLifecycle;