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

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use for Content Writing</h2>
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
    case "writingTools":
      return "Writing Tools";
    case "researchTools":
      return "Research Tools";
    case "editingTools":
      return "Editing Tools";
    case "seoTools":
      return "SEO Tools";
    case "collaborationTools":
      return "Collaboration Tools";
    default:
      return key;
  }
};

export default TechStack;
