'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodejsLine,
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

const techContent = {
  Frontend: [
    { name: "HTML5", Icon: RiHtml5Line, color: styles.orange },
    { name: "CSS3", Icon: RiCss3Line, color: styles.blue },
    { name: "JavaScript", Icon: RiJavascriptLine, color: styles.yellow },
    { name: "React", Icon: RiReactjsLine, color: styles.sky },
    { name: "Vue", Icon: FaVuejs, color: styles.green },
    { name: "Tailwind", Icon: SiTailwindcss, color: styles.teal },
  ],
  Backend: [
    { name: "Node.js", Icon: RiNodejsLine, color: styles.green },
    { name: "Express.js", Icon: SiExpress, color: styles.darkGray },
    { name: "PHP", Icon: FaPhp, color: styles.violet },
  ],
  Databases: [
    { name: "MongoDB", Icon: SiMongodb, color: styles.green },
    { name: "MySQL", Icon: SiMysql, color: styles.blue },
    { name: "PostgreSQL", Icon: SiPostgresql, color: styles.indigo },
  ],
  CMS: [
    { name: "WordPress", Icon: SiWordpress, color: styles.blue },
    { name: "Drupal", Icon: SiDrupal, color: styles.darkBlue },
  ],
  DevOps: [
    { name: "Git", Icon: FaGitAlt, color: styles.orange },
    { name: "Jenkins", Icon: SiJenkins, color: styles.red },
    { name: "Docker", Icon: SiDocker, color: styles.sky },
    { name: "Kubernetes", Icon: SiKubernetes, color: styles.blue },
  ],
};

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Our Web Development Stack</h2>

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
