'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiAndroidLine,
  RiAppleLine,
  RiAppsLine,
  RiFlaskLine,
  RiCodeLine,
  RiHtml5Line,
  RiPhoneLine,
} from "react-icons/ri";

const techContent = {
  native: [
    { name: "Android (Java/Kotlin)", Icon: RiAndroidLine, color: styles.green },
    { name: "iOS (Swift)", Icon: RiAppleLine, color: styles.gray },
  ],
  crossPlatform: [
    { name: "React Native", Icon: RiAppsLine, color: styles.blue },
    { name: "Flutter", Icon: RiFlaskLine, color: styles.yellow },
    { name: "Xamarin", Icon: RiCodeLine, color: styles.purple },
  ],
  hybrid: [
    { name: "Ionic", Icon: RiHtml5Line, color: styles.orange },
    { name: "PhoneGap", Icon: RiPhoneLine, color: styles.green },
  ],
};

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Mobile App Tech Stack We Use</h2>

      {Object.entries(techContent).map(([category, tools]) => (
        <div key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{formatCategoryTitle(category)}</h3>
          <div className={styles.techGrid}>
            {tools.map((item, idx) => (
              <div key={idx} className={styles.techCard}>
                <div className={styles.iconWrapper}>
                  <div className={item.color}>
                    <item.Icon size={28} />
                  </div>
                </div>
                <span className={styles.techName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const formatCategoryTitle = (key: string) => {
  switch (key) {
    case "native":
      return "Native App Development";
    case "crossPlatform":
      return "Cross-Platform Development";
    case "hybrid":
      return "Hybrid App Development";
    default:
      return key;
  }
};

export default TechStack;
