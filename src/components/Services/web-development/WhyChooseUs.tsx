import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiSmartphoneLine,
  RiFileChartLine,
  RiMoneyDollarCircleLine,
  RiCustomerService2Line,
  RiSpeedLine,
} from 'react-icons/ri';

const reasons = [
  {
    icon: <RiSmartphoneLine className={styles.icon} />,
    title: 'Mobile-First & SEO-Optimized',
    description:
      'Our development process prioritizes mobile responsiveness and search engine optimization from day one. We implement advanced SEO techniques and ensure perfect display across all devices, resulting in higher rankings and better user experience.',
  },
  {
    icon: <RiFileChartLine className={styles.icon} />,
    title: 'Agile Project Management',
    description:
      'We follow an agile methodology with clear milestones and regular updates. Our transparent project management approach keeps you informed at every stage, ensuring your project stays on track and meets all objectives within the timeline.',
  },
  {
    icon: <RiMoneyDollarCircleLine className={styles.icon} />,
    title: 'Transparent Pricing',
    description:
      'Our pricing structure is completely transparent with no hidden costs. We provide detailed breakdowns of all services and costs upfront, and you\'ll never face unexpected charges. Pay only for what you need and approve.',
  },
  {
    icon: <RiCustomerService2Line className={styles.icon} />,
    title: 'Post-Launch Support',
    description:
      'Our relationship doesn’t end at launch. We provide comprehensive post-launch support including performance monitoring, security updates, and technical assistance. Our dedicated support team ensures your website continues to perform optimally.',
  },
  {
    icon: <RiSpeedLine className={styles.icon} />,
    title: 'Performance Monitoring',
    description:
      'We continuously monitor your website\'s performance using advanced analytics tools. Regular performance reports and optimization recommendations help maintain peak performance and identify opportunities for improvement.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT?</h2>
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
