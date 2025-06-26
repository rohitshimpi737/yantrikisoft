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

const techContent = {
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

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Immersive Tech Stack (AR, VR, MR, XR)</h2>

      {Object.entries(techContent).map(([category, tools]) => (
        <div key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category}</h3>
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

export default TechStack;
