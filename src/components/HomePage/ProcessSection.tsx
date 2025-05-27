import React from "react";
import styles from '@/styles/HomePage/ProcessSection.module.css';
const steps = [
  { number: "1", title: "Discovery", description: "We begin by understanding your business, goals, challenges, and market position through comprehensive analysis." },
  { number: "2", title: "Strategy", description: "Our team develops a tailored growth strategy based on data-driven insights and industry best practices." },
  { number: "3", title: "Implementation", description: "We execute the strategy with precision, leveraging our expertise to drive measurable results." },
  { number: "4", title: "Optimization", description: "Continuous monitoring allows us to refine approaches and maximize return on investment." },
  { number: "5", title: "Scaling", description: "We identify opportunities to scale successful initiatives for sustainable business growth." },
  { number: "6", title: "Reporting", description: "Transparent reporting provides clear insights into performance and return on investment." },
  { number: "7", title: "Training", description: "We empower your team with the knowledge and skills needed to maintain growth momentum." },
  { number: "8", title: "Support", description: "Ongoing support ensures that your business continues to thrive long after our initial engagement." },
  { number: "9", title: "Growth Review", description: "Regular reviews help us assess progress, celebrate wins, and plan for future growth opportunities." },
];

const ProcessSection: React.FC = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Proven Process</h2>
        <div className={styles.grid}>
          {steps.map(({ number, title, description }) => (
            <div key={number} className={styles.card}>
              <div className={styles.stepHeader}>
                <div className={styles.stepCircle}>{number}</div>
                <h3 className={styles.stepTitle}>{title}</h3>
              </div>
              <p className={styles.stepDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
