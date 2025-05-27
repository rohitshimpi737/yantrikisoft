'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiCameraLensLine,
  RiDeviceLine,
  RiEyeLine,
  RiReactjsLine,
  RiLayout6Line,
  RiHeadphoneLine,
  RiMagicLine,
  RiBrush4Line,
  RiGlassesLine,
  RiCodeSSlashLine,
} from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

// Full forms for clarity in type and tab labels
type TechCategory = "Augmented Reality" | "Virtual Reality" | "Mixed Reality" | "Extended Reality";

const techContent: Record<TechCategory, { name: string; Icon: any; color: string }[]> = {
  "Augmented Reality": [
    { name: "AR.js", Icon: RiCameraLensLine, color: styles.blue },
    { name: "8thWall", Icon: RiDeviceLine, color: styles.green },
    { name: "Spark AR", Icon: RiEyeLine, color: styles.red },
  ],
  "Virtual Reality": [
    { name: "Unity", Icon: RiReactjsLine, color: styles.indigo },
    { name: "Unreal Engine", Icon: RiLayout6Line, color: styles.yellow },
    { name: "A-Frame", Icon: RiHeadphoneLine, color: styles.pink },
  ],
  "Mixed Reality": [
    { name: "Microsoft Mesh", Icon: RiMagicLine, color: styles.blue },
    { name: "Vuforia", Icon: RiBrush4Line, color: styles.green },
  ],
  "Extended Reality": [
    { name: "WebXR", Icon: RiGlassesLine, color: styles.purple },
    { name: "Mozilla Hubs", Icon: RiCodeSSlashLine, color: styles.orange },
  ],
};

const tabs = [
  { id: "Augmented Reality", label: "AR (Augmented Reality)" },
  { id: "Virtual Reality", label: "VR (Virtual Reality)" },
  { id: "Mixed Reality", label: "MR (Mixed Reality)" },
  { id: "Extended Reality", label: "XR (Extended Reality)" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>("Augmented Reality");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use for Immersive Technologies</h2>
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