import React from 'react';
import styles from '@/styles/Services/WhyWebsiteMatters.module.css';
import {
  RiGlobeLine,
  RiSearchLine,
  RiBarChartLine,
  RiPhoneLine,
  RiMoneyDollarCircleLine,
  RiTeamLine,
} from 'react-icons/ri';

const cardData = [
  {
    icon: <RiGlobeLine className={styles.icon} />,
    title: 'Increases Online Visibility',
    description: (
      <>
        Digital marketing techniques such as <span className={styles.highlight}>SEO</span> and social media help your business gain more exposure online.
      </>
    ),
    details: 'It drives relevant traffic to your website and establishes a strong online presence.',
  },
  {
    icon: <RiSearchLine className={styles.icon} />,
    title: 'Boosts Customer Engagement',
    description: (
      <>
        With personalized content, digital marketing increases <span className={styles.highlight}>customer engagement</span>, building relationships.
      </>
    ),
    details: 'Social media platforms and email campaigns create two-way communication between brands and customers.',
  },
  {
    icon: <RiBarChartLine className={styles.icon} />,
    title: 'Provides Measurable Results',
    description: (
      <>
        Digital marketing offers <span className={styles.highlight}>precise metrics</span> on campaign performance, making it easier to track ROI.
      </>
    ),
    details: 'You can analyze data from ads, social media, and websites to fine-tune your strategies in real time.',
  },
  {
    icon: <RiPhoneLine className={styles.icon} />,
    title: 'Mobile-Friendly Marketing',
    description: (
      <>
        Digital marketing adapts to the <span className={styles.highlight}>mobile era</span>, ensuring your business reaches customers on their smartphones.
      </>
    ),
    details: 'From mobile ads to responsive websites, it’s essential for targeting on-the-go consumers.',
  },
  {
    icon: <RiMoneyDollarCircleLine className={styles.icon} />,
    title: 'Cost-Effective Strategy',
    description: (
      <>
        Compared to traditional marketing, digital marketing is highly <span className={styles.highlight}>cost-effective</span>, offering great value for the budget.
      </>
    ),
    details: 'You can run targeted campaigns at a fraction of the cost, reaching a larger audience.',
  },
  {
    icon: <RiTeamLine className={styles.icon} />,
    title: 'Enables Global Reach',
    description: (
      <>
        Through digital marketing, you can <span className={styles.highlight}>connect with a global audience</span> and expand your brand’s reach worldwide.
      </>
    ),
    details: 'Whether through SEO, paid ads, or social media, you can engage with people across borders.',
  },
];

const WhyWebsiteMatters = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Digital Marketing is Essential for Every Business</h2>
        <div className={styles.grid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconCircleOuter}>
                <div className={styles.iconCircleInner}>{card.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <p className={styles.cardDetails}>{card.details}</p>
            </div>
          ))}
        </div>
        <div className={styles.quoteBox}>
          <p className={styles.quote}>
            &quot;Digital marketing is not just an option, it&apos;s a necessity for modern businesses.&quot;
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyWebsiteMatters;