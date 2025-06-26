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

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack We Use</h2>
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
    case "aiTools":
      return "AI Tools";
    case "mlTools":
      return "Machine Learning Tools";
    case "dataAnalysis":
      return "Data Analysis Tools";
    case "nlp":
      return "NLP Tools";
    case "cloud":
      return "Cloud Tools";
    default:
      return key;
  }
};

export default TechStack;
