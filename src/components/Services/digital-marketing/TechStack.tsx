'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiSearchLine,
  RiBarChartLine,
  RiRocketLine,
  RiImageLine,
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiMailLine,
  RiSendPlaneLine,
  RiBriefcaseLine,
  RiGoogleLine,
  RiBaiduLine,
  RiYoutubeLine,
  RiPieChartLine,
} from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

type MarketingTechCategory =
  | "seo"
  | "analytics"
  | "socialMedia"
  | "emailMarketing"
  | "ads";

const techContent = {
  seo: [
    { name: "Google Search Console", Icon: RiSearchLine, color: styles.green },
    { name: "Ahrefs", Icon: RiBarChartLine, color: styles.blue },
    { name: "SEMrush", Icon: RiRocketLine, color: styles.yellow },
    { name: "Yoast SEO", Icon: RiImageLine, color: styles.red },
  ],
  analytics: [
    { name: "Google Analytics", Icon: RiBarChartLine, color: styles.blue },
    { name: "Hotjar", Icon: RiPieChartLine, color: styles.green },
    { name: "Mixpanel", Icon: RiSendPlaneLine, color: styles.purple },
  ],
  socialMedia: [
    { name: "Facebook Ads", Icon: RiFacebookCircleLine, color: styles.blue },
    { name: "Twitter Ads", Icon: RiTwitterLine, color: styles.blue },
    { name: "Instagram Ads", Icon: RiInstagramLine, color: styles.pink },
  ],
  emailMarketing: [
    { name: "Mailchimp", Icon: RiMailLine, color: styles.blue },
    { name: "Sendinblue", Icon: RiSendPlaneLine, color: styles.gray },
    { name: "Constant Contact", Icon: RiBriefcaseLine, color: styles.green },
  ],
  ads: [
    { name: "Google Ads", Icon: RiGoogleLine, color: styles.blue },
    { name: "Bing Ads", Icon: RiBaiduLine, color: styles.orange },
    { name: "YouTube Ads", Icon: RiYoutubeLine, color: styles.red },
  ],
};

const tabs = [
  { id: "seo", label: "SEO" },
  { id: "analytics", label: "Analytics" },
  { id: "socialMedia", label: "Social Media" },
  { id: "emailMarketing", label: "Email Marketing" },
  { id: "ads", label: "Paid Ads" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<MarketingTechCategory>("seo");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Digital Marketing Tools We Use</h2>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => setActiveTab(tab.id as MarketingTechCategory)}
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