'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiPaletteLine,
  RiPencilLine,
  RiPlayLine,
  RiContrastLine,
  RiGridLine,
  RiImageLine,
  RiSlideshowLine,
  RiStopLine,
  RiPlayCircleLine,
  RiCornerRightDownLine,
  RiDragDropLine,
  RiLayout2Line,
  RiToolsLine,
  RiChatSmileLine,
  RiGoogleLine,
  RiFileLine,
  RiZoomInLine,
} from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

type UiUxTechCategory = "designTools" | "prototypingTools" | "wireframingTools" | "collaborationTools";

const techContent = {
  designTools: [
    { name: "Adobe XD", Icon: RiPaletteLine, color: styles.blue },
    { name: "Sketch", Icon: RiPencilLine, color: styles.red },
    { name: "Figma", Icon: RiPlayLine, color: styles.green },
    { name: "InVision", Icon: RiContrastLine, color: styles.teal },
    { name: "Canva", Icon: RiGridLine, color: styles.orange },
    { name: "CorelDRAW", Icon: RiImageLine, color: styles.purple },
  ],
  prototypingTools: [
    { name: "Marvel", Icon: RiSlideshowLine, color: styles.blue },
    { name: "Proto.io", Icon: RiStopLine, color: styles.green },
    { name: "Framer", Icon: RiPlayCircleLine, color: styles.orange },
    { name: "Axure RP", Icon: RiCornerRightDownLine, color: styles.red },
  ],
  wireframingTools: [
    { name: "Balsamiq", Icon: RiPencilLine, color: styles.teal },
    { name: "Wireframe.cc", Icon: RiDragDropLine, color: styles.blue },
    { name: "Lucidchart", Icon: RiLayout2Line, color: styles.green },
    { name: "WireframePro", Icon: RiToolsLine, color: styles.orange },
  ],
  collaborationTools: [
    { name: "Slack", Icon: RiChatSmileLine, color: styles.green },
    { name: "Google Drive", Icon: RiGoogleLine, color: styles.blue },
    { name: "Trello", Icon: RiFileLine, color: styles.orange },
    { name: "Zoom", Icon: RiZoomInLine, color: styles.teal },
  ],
};

const tabs = [
  { id: "designTools", label: "Design Tools" },
  { id: "prototypingTools", label: "Prototyping Tools" },
  { id: "wireframingTools", label: "Wireframing Tools" },
  { id: "collaborationTools", label: "Collaboration Tools" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<UiUxTechCategory>("designTools");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use for UI/UX Design</h2>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => setActiveTab(tab.id as UiUxTechCategory)}
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
                <item.Icon size={40} />
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