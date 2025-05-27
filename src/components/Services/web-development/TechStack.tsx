'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodejsLine,
  RiGitBranchLine,
} from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiWordpress,
  SiDrupal,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiExpress,
} from "react-icons/si";
import { FaVuejs, FaPhp, FaGitAlt } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

type TechCategory = "frontend" | "backend" | "databases" | "cms" | "devops";
const techContent = {
  frontend: [
    { name: "HTML5", Icon: RiHtml5Line, color: styles.orange },
    { name: "CSS3", Icon: RiCss3Line, color: styles.blue },
    { name: "JavaScript", Icon: RiJavascriptLine, color: styles.yellow },
    { name: "React", Icon: RiReactjsLine, color: styles.sky },
    { name: "Vue", Icon: FaVuejs, color: styles.green },
    { name: "Tailwind", Icon: SiTailwindcss, color: styles.teal },
  ],
  backend: [
    { name: "Node.js", Icon: RiNodejsLine, color: styles.green },
    { name: "Express.js", Icon: SiExpress, color: styles.darkGray },
    { name: "PHP", Icon: FaPhp, color: styles.violet },
  ],
  databases: [
    { name: "MongoDB", Icon: SiMongodb, color: styles.green },
    { name: "MySQL", Icon: SiMysql, color: styles.blue },
    { name: "PostgreSQL", Icon: SiPostgresql, color: styles.indigo },
  ],
  cms: [
    { name: "WordPress", Icon: SiWordpress, color: styles.blue },
    { name: "Drupal", Icon: SiDrupal, color: styles.darkBlue },
  ],
  devops: [
    { name: "Git", Icon: FaGitAlt, color: styles.orange },
    { name: "Jenkins", Icon: SiJenkins, color: styles.red },
    { name: "Docker", Icon: SiDocker, color: styles.sky },
    { name: "Kubernetes", Icon: SiKubernetes, color: styles.blue },
  ],
};

const tabs = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "cms", label: "CMS" },
  { id: "devops", label: "DevOps" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>("frontend");

  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use</h2>
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
