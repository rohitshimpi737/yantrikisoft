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

const techContent = {
  "Design Tools": [
    { name: "Adobe XD", Icon: RiPaletteLine, color: styles.blue },
    { name: "Sketch", Icon: RiPencilLine, color: styles.red },
    { name: "Figma", Icon: RiPlayLine, color: styles.green },
    { name: "InVision", Icon: RiContrastLine, color: styles.teal },
    { name: "Canva", Icon: RiGridLine, color: styles.orange },
    { name: "CorelDRAW", Icon: RiImageLine, color: styles.purple },
  ],
  "Prototyping Tools": [
    { name: "Marvel", Icon: RiSlideshowLine, color: styles.blue },
    { name: "Proto.io", Icon: RiStopLine, color: styles.green },
    { name: "Framer", Icon: RiPlayCircleLine, color: styles.orange },
    { name: "Axure RP", Icon: RiCornerRightDownLine, color: styles.red },
  ],
  "Wireframing Tools": [
    { name: "Balsamiq", Icon: RiPencilLine, color: styles.teal },
    { name: "Wireframe.cc", Icon: RiDragDropLine, color: styles.blue },
    { name: "Lucidchart", Icon: RiLayout2Line, color: styles.green },
    { name: "WireframePro", Icon: RiToolsLine, color: styles.orange },
  ],
  "Collaboration Tools": [
    { name: "Slack", Icon: RiChatSmileLine, color: styles.green },
    { name: "Google Drive", Icon: RiGoogleLine, color: styles.blue },
    { name: "Trello", Icon: RiFileLine, color: styles.orange },
    { name: "Zoom", Icon: RiZoomInLine, color: styles.teal },
  ],
};

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use for UI/UX Design</h2>

      {Object.entries(techContent).map(([category, tools]) => (
        <div key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <div className={styles.techGrid}>
            {tools.map((item, idx) => (
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
      ))}
    </div>
  );
};

export default TechStack;
