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
import { useState } from "react";
import clsx from "clsx";

type TechCategory = "customSoftware" | "erpSolutions";

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

const tabs = [
  { id: "customSoftware", label: "Custom Software" },
  { id: "erpSolutions", label: "ERP Solutions" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>("customSoftware");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Our Core Capabilities</h2>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => setActiveTab(tab.id as TechCategory)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.techGrid}>
        {techContent[activeTab]?.map((item, idx) => (
          <div key={idx} className={styles.techCard}>
            <div className={styles.iconWrapper}>
              <div className={item.color}>
                <item.Icon size={32} />
              </div>
            </div>
            <span className={styles.techName}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;