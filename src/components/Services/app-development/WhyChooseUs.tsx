import styles from '@/styles/Services/WhyChooseUs.module.css';
// Example: reasons for choosing YANTRIKISOFT for Mobile App Development
import {
  RiPhoneLine,
  RiAppsLine,
  RiDeviceLine,
  RiSettings3Line,
  RiTimeLine,
  RiLockLine,
} from "react-icons/ri";

const reasons = [
  {
    icon: <RiPhoneLine className={styles.icon} />,
    title: 'Expert Mobile App Development',
    description:
      'Our team specializes in building high-performance, feature-rich mobile apps tailored for your business needs, from native to cross-platform solutions.',
  },
  {
    icon: <RiAppsLine className={styles.icon} />,
    title: 'Cross-Platform Compatibility',
    description:
      'We develop apps that work seamlessly across iOS and Android, ensuring a broad audience reach without the need for multiple codebases.',
  },
  {
    icon: <RiDeviceLine className={styles.icon} />,
    title: 'Agile Development Approach',
    description:
      'Our agile methodology allows us to deliver robust and scalable mobile applications with quick iterations and seamless integration of new features.',
  },
  {
    icon: <RiSettings3Line className={styles.icon} />,
    title: 'Tailored Solutions',
    description:
      'We design and develop custom mobile app solutions to meet the unique needs of your business, ensuring optimal user engagement and performance.',
  },
  {
    icon: <RiTimeLine className={styles.icon} />,
    title: 'On-Time Delivery',
    description:
      'Our experienced team ensures that your mobile app is developed and delivered on time, with an emphasis on quality and user satisfaction.',
  },
  {
    icon: <RiLockLine className={styles.icon} />,
    title: 'Data Security & Privacy',
    description:
      'We ensure the security and privacy of your users\' data, building mobile apps that comply with the highest standards of security practices.',
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
