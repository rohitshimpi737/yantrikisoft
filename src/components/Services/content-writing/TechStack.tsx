'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiArticleLine,
  RiGoogleLine,
  RiTeamLine,
  RiPenNibLine,
  RiClipboardLine,
  RiPencilLine,
  RiSearchLine,
  RiBookmarkLine,
  RiStackLine,
  RiBookLine,
  RiGlobeLine,
  RiCheckDoubleLine,
  RiDirectionLine,
  RiUploadCloudLine,
  RiBarChartLine,
  RiChatSmileLine,
  RiFileLine,
  RiZoomInLine,
} from "react-icons/ri";

import { useState } from "react";
import clsx from "clsx";

type ContentTechCategory =
  | "writingTools"
  | "researchTools"
  | "editingTools"
  | "seoTools"
  | "collaborationTools";

const techContent = {
  writingTools: [
    { name: "Microsoft Word", Icon: RiArticleLine, color: styles.blue },
    { name: "Google Docs", Icon: RiGoogleLine, color: styles.red },
    { name: "Evernote", Icon: RiTeamLine, color: styles.orange },
    { name: "Scrivener", Icon: RiPenNibLine, color: styles.gray },
    { name: "Notion", Icon: RiClipboardLine, color: styles.sky },
    { name: "Hemingway Editor", Icon: RiPencilLine, color: styles.green },
  ],
  researchTools: [
    { name: "Google Scholar", Icon: RiSearchLine, color: styles.yellow },
    { name: "Grammarly", Icon: RiBookmarkLine, color: styles.red },
    { name: "JSTOR", Icon: RiStackLine, color: styles.blue },
    { name: "Evernote Web Clipper", Icon: RiBookLine, color: styles.teal },
    { name: "SEMrush", Icon: RiGlobeLine, color: styles.purple },
  ],
  editingTools: [
    { name: "Hemingway Editor", Icon: RiPencilLine, color: styles.yellow },
    { name: "ProWritingAid", Icon: RiCheckDoubleLine, color: styles.green },
    { name: "Grammarly", Icon: RiPencilLine, color: styles.blue },
    { name: "Ginger Software", Icon: RiDirectionLine, color: styles.orange },
  ],
  seoTools: [
    { name: "Yoast SEO", Icon: RiSearchLine, color: styles.blue },
    { name: "Ahrefs", Icon: RiGlobeLine, color: styles.teal },
    { name: "Google Analytics", Icon: RiBarChartLine, color: styles.red },
  ],
  collaborationTools: [
    { name: "Slack", Icon: RiChatSmileLine, color: styles.green },
    { name: "Google Drive", Icon: RiGoogleLine, color: styles.blue },
    { name: "Trello", Icon: RiFileLine, color: styles.orange },
    { name: "Zoom", Icon: RiZoomInLine, color: styles.teal },
  ],
};

const tabs = [
  { id: "writingTools", label: "Writing Tools" },
  { id: "researchTools", label: "Research Tools" },
  { id: "editingTools", label: "Editing Tools" },
  { id: "seoTools", label: "SEO Tools" },
  { id: "collaborationTools", label: "Collaboration Tools" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<ContentTechCategory>("writingTools");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use for Content Writing</h2>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => setActiveTab(tab.id as ContentTechCategory)}
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