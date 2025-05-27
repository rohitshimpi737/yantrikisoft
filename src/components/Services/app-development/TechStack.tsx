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

import { useState } from "react";
import clsx from "clsx";

type MobileTechCategory = "native" | "crossPlatform" | "hybrid";

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

const tabs = [
  { id: "native", label: "Native" },
  { id: "crossPlatform", label: "Cross-Platform" },
  { id: "hybrid", label: "Hybrid" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<MobileTechCategory>("native");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Mobile App Tech Stack We Use</h2>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => setActiveTab(tab.id as MobileTechCategory)}
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