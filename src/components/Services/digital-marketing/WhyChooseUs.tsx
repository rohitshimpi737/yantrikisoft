import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiBarChartLine,
  RiRocketLine,
  RiPieChartLine,
  RiSearchLine,
  RiShareLine,
  RiCustomerService2Line,
} from 'react-icons/ri';

const reasons = [
  {
    icon: <RiBarChartLine className={styles.icon} />,
    title: 'Results-Driven Strategies',
    description:
      'Our digital marketing strategies are designed to drive measurable results. We focus on ROI and tailor our approach to help you achieve your business objectives efficiently.',
  },
  {
    icon: <RiRocketLine className={styles.icon} />,
    title: 'Targeted Advertising',
    description:
      'We specialize in targeted advertising across platforms like Google Ads, Facebook, and Instagram. Our goal is to reach your ideal audience and maximize your ad spend efficiency.',
  },
  {
    icon: <RiPieChartLine className={styles.icon} />,
    title: 'Data-Driven Insights',
    description:
      'We believe in the power of data. Our team provides in-depth analytics and insights to optimize campaigns and make informed decisions that lead to better performance.',
  },
  {
    icon: <RiSearchLine className={styles.icon} />,
    title: 'SEO Excellence',
    description:
      'Our SEO experts ensure that your website ranks higher in search engines. We perform thorough keyword research, content optimization, and link-building strategies for better visibility.',
  },
  {
    icon: <RiShareLine className={styles.icon} />,
    title: 'Social Media Expertise',
    description:
      'We create engaging social media campaigns that build brand awareness, drive traffic, and increase conversions. Our strategies are customized for each platform, ensuring maximum impact.',
  },
  {
    icon: <RiCustomerService2Line className={styles.icon} />,
    title: 'Dedicated Support',
    description:
      'Our team offers continuous support throughout your digital marketing journey. From campaign optimization to performance tracking, we are always here to help you succeed.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT for Digital Marketing?</h2>
        <div className={styles.grid}>
          {reasons.map((reason, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{reason.icon}</div>
              <h3 className={styles.title}>{reason.title}</h3>
              <p className={styles.description}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;