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
} from 'react-icons/ri';

const techContent = {
  SEO: [
    { name: 'Google Search Console', Icon: RiSearchLine, color: styles.green },
    { name: 'Ahrefs', Icon: RiBarChartLine, color: styles.blue },
    { name: 'SEMrush', Icon: RiRocketLine, color: styles.yellow },
    { name: 'Yoast SEO', Icon: RiImageLine, color: styles.red },
  ],
  Analytics: [
    { name: 'Google Analytics', Icon: RiBarChartLine, color: styles.blue },
    { name: 'Hotjar', Icon: RiPieChartLine, color: styles.green },
    { name: 'Mixpanel', Icon: RiSendPlaneLine, color: styles.purple },
  ],
  'Social Media': [
    { name: 'Facebook Ads', Icon: RiFacebookCircleLine, color: styles.blue },
    { name: 'Twitter Ads', Icon: RiTwitterLine, color: styles.blue },
    { name: 'Instagram Ads', Icon: RiInstagramLine, color: styles.pink },
  ],
  'Email Marketing': [
    { name: 'Mailchimp', Icon: RiMailLine, color: styles.blue },
    { name: 'Sendinblue', Icon: RiSendPlaneLine, color: styles.gray },
    { name: 'Constant Contact', Icon: RiBriefcaseLine, color: styles.green },
  ],
  'Paid Ads': [
    { name: 'Google Ads', Icon: RiGoogleLine, color: styles.blue },
    { name: 'Bing Ads', Icon: RiBaiduLine, color: styles.orange },
    { name: 'YouTube Ads', Icon: RiYoutubeLine, color: styles.red },
  ],
};

const TechStack = () => {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Digital Marketing Tools We Use</h2>

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
