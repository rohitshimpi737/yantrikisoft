'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiCodeSSlashLine,
  RiSettings3Line,
  RiDatabaseLine,
  RiRefreshLine,
  RiLineChartLine,
  RiLockLine,
  RiTruckLine,
  RiPieChartLine,
} from "react-icons/ri";

const techContent = {
  customSoftware: [
    { name: "Bespoke Software Development", Icon: RiCodeSSlashLine, color: styles.blue },
    { name: "System Integration & Automation", Icon: RiSettings3Line, color: styles.green },
    { name: "Security & Data Protection", Icon: RiLockLine, color: styles.red },
  ],
  erpSolutions: [
    { name: "Enterprise Resource Planning", Icon: RiDatabaseLine, color: styles.orange },
    { name: "Supply Chain Management", Icon: RiTruckLine, color: styles.yellow },
    { name: "Business Analytics & Reporting", Icon: RiPieChartLine, color: styles.purple },
  ],
};

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Our Core Capabilities</h2>

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
    case "customSoftware":
      return "Custom Software Development";
    case "erpSolutions":
      return "ERP & Business Solutions";
    default:
      return key;
  }
};

export default TechStack;
