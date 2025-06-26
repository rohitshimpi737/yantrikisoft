"use client";
import React, { useState } from "react";
import styles from "@/styles/Services/WebDevelopmentLifecycle.module.css";

interface Phase {
  title: string;
  description: string;
  iconClass: string;
  icon: string;
  details: string[];
}

const phases: Phase[] = [
  {
    title: "Research & Discovery",
    description:
      "Identifying user needs and defining project scope by gathering insights and exploring the possibilities of immersive technology.",
    iconClass: "search",
    icon: "ri-search-line ri-lg",
    details: ["User Interviews", "Market Research", "Technology Feasibility"],
  },
  {
    title: "Design & Prototyping",
    description:
      "Creating interactive prototypes that bring the concept to life and offer an immersive preview of the final product.",
    iconClass: "palette",
    icon: "ri-palette-line ri-lg",
    details: ["Concept Design", "Storyboarding", "Wireframes"],
  },
  {
    title: "Development & Integration",
    description:
      "Building and integrating the immersive experience into the desired platform, from VR/AR headsets to gaming systems.",
    iconClass: "code",
    icon: "ri-code-line ri-lg",
    details: ["Unity/Unreal Engine", "API Integration", "Hardware Integration"],
  },
  {
    title: "Testing & Iteration",
    description:
      "Testing the immersive experiences with real users and iterating on feedback to perfect the design and performance.",
    iconClass: "check",
    icon: "ri-check-line ri-lg",
    details: ["User Testing", "Performance Feedback", "Optimization"],
  },
  {
    title: "Launch & Support",
    description:
      "Deploying the immersive product, monitoring performance, and offering continuous support and updates for a seamless user experience.",
    iconClass: "cloud",
    icon: "ri-cloud-line ri-lg",
    details: ["System Updates", "Performance Monitoring", "Ongoing Support"],
  },
];

const ImmersiveTechnologiesProcess: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Immersive Technologies Process</h2>
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
      <div
        className={`${styles.detailsWrapper} ${
          showDetails ? styles.showDetails : ""
        }`}
      >
        <div className={styles.details}>
          <ul className={styles.detailsList}>
            {phase.details.map((detail, i) => (
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

export default ImmersiveTechnologiesProcess;
