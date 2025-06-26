"use client";
import React, { useState } from "react";
import styles from "@/styles/Services/WebDevelopmentLifecycle.module.css";

// Define type for a phase
interface Phase {
  title: string;
  description: string;
  iconClass: string;
  icon: string;
  details: string[];
}

const phases: Phase[] = [
  {
    title: "Requirement Gathering",
    description:
      "Understanding business needs, identifying use cases, and defining AI goals and expectations.",
    iconClass: "lightbulb-flash",
    icon: "ri-lightbulb-flash-line ri-lg",
    details: ["Business Case Definition", "Stakeholder Interviews", "Goal Alignment"],
  },
  {
    title: "Data Collection & Preparation",
    description:
      "Gathering relevant data, cleaning and transforming it for training and testing AI models.",
    iconClass: "database-2",
    icon: "ri-database-2-line ri-lg",
    details: ["Data Audit", "Data Cleaning", "Feature Engineering"],
  },
  {
    title: "Model Development",
    description:
      "Selecting the right algorithms, training the models, and iteratively improving performance.",
    iconClass: "cpu",
    icon: "ri-cpu-line ri-lg",
    details: ["Algorithm Selection", "Model Training", "Hyperparameter Tuning"],
  },
  {
    title: "Validation & Testing",
    description:
      "Validating the AI model for performance, accuracy, and robustness before deployment.",
    iconClass: "verify",
    icon: "ri-verify-line ri-lg",
    details: ["Model Evaluation", "Cross Validation", "Explainability Check"],
  },
  {
    title: "Deployment",
    description:
      "Deploying the AI model into production environments and integrating with business systems.",
    iconClass: "rocket-2",
    icon: "ri-rocket-2-line ri-lg",
    details: ["CI/CD Integration", "Cloud Hosting", "API Exposure"],
  },
  {
    title: "Monitoring & Improvement",
    description:
      "Tracking model performance, gathering feedback, and updating models to maintain accuracy and value.",
    iconClass: "line-chart",
    icon: "ri-line-chart-line ri-lg",
    details: ["Model Monitoring", "Feedback Looping", "Continuous Learning"],
  },
];

// Component props type
interface TimelineItemProps {
  phase: Phase;
  isLeftAligned: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ phase, isLeftAligned }) => {
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

const AIDevelopmentLifecycle: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>AI Development Lifecycle</h2>
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

export default AIDevelopmentLifecycle;
