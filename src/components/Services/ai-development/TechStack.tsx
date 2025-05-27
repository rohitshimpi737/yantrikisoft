'use client';
import styles from '@/styles/Services/TechStack.module.css';
import {
  RiBrainLine,
  RiPieChartLine,
  RiCpuLine,
  RiRocketLine,
  RiDatabaseLine,
  RiBarChartLine,
  RiCodeSSlashLine,
  RiRefreshLine,
  RiCoinsLine,
  RiCloudLine,
  RiAlertLine,
  RiStackLine,
  RiArchiveLine,
  RiChatVoiceLine,
  RiChatSmileLine,
  RiMicLine,
  RiHeadphoneLine,
  RiVoiceAiLine,
  RiCloudFill,
  RiCloudOffLine,
} from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

type TechCategory =
  | "aiTools"
  | "mlTools"
  | "dataAnalysis"
  | "nlp"
  | "cloud";

const techContent = {
  aiTools: [
    { name: "TensorFlow", Icon: RiBrainLine, color: styles.blue },
    { name: "Keras", Icon: RiPieChartLine, color: styles.green },
    { name: "PyTorch", Icon: RiCpuLine, color: styles.orange },
    { name: "OpenAI", Icon: RiRocketLine, color: styles.gray },
    { name: "Scikit-learn", Icon: RiDatabaseLine, color: styles.sky },
    { name: "XGBoost", Icon: RiBarChartLine, color: styles.green },
  ],
  mlTools: [
    { name: "H2O.ai", Icon: RiCodeSSlashLine, color: styles.yellow },
    { name: "MLlib", Icon: RiRefreshLine, color: styles.teal },
    { name: "Apache Spark", Icon: RiCoinsLine, color: styles.blue },
    { name: "Google Cloud AI", Icon: RiCloudLine, color: styles.purple },
    { name: "AWS AI", Icon: RiAlertLine, color: styles.red },
  ],
  dataAnalysis: [
    { name: "Pandas", Icon: RiBarChartLine, color: styles.blue },
    { name: "NumPy", Icon: RiStackLine, color: styles.teal },
    { name: "Matplotlib", Icon: RiArchiveLine, color: styles.green },
    { name: "Seaborn", Icon: RiPieChartLine, color: styles.yellow },
    { name: "Plotly", Icon: RiVoiceAiLine, color: styles.orange },
  ],
  nlp: [
    { name: "NLTK", Icon: RiChatVoiceLine, color: styles.blue },
    { name: "spaCy", Icon: RiChatSmileLine, color: styles.green },
    { name: "Gensim", Icon: RiMicLine, color: styles.orange },
    { name: "Transformers", Icon: RiHeadphoneLine, color: styles.gray },
    { name: "BERT", Icon: RiVoiceAiLine, color: styles.teal },
  ],
  cloud: [
    { name: "Google Cloud", Icon: RiCloudLine, color: styles.blue },
    { name: "AWS", Icon: RiCloudFill, color: styles.green },
    { name: "Azure", Icon: RiCloudOffLine, color: styles.orange },
  ],
};

const tabs = [
  { id: "aiTools", label: "AI Tools" },
  { id: "mlTools", label: "Machine Learning Tools" },
  { id: "dataAnalysis", label: "Data Analysis Tools" },
  { id: "nlp", label: "NLP Tools" },
  { id: "cloud", label: "Cloud Tools" },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>("aiTools");

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