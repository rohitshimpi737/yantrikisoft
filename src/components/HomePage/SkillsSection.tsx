import React from "react";
import styles from "@/styles/HomePage/SkillsSection.module.css";

const skills = [
  { name: "Strategic Planning", percentage: 95 },
  { name: "Digital Marketing", percentage: 90 },
  { name: "Business Analytics", percentage: 85 },
  { name: "Customer Experience", percentage: 92 },
];

const SkillsSection: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Skills</h2>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillValue}>{skill.percentage}%</span>
              </div>
              <div className={styles.progressBarBackground}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
