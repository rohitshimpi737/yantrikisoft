import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiCodeLine,
  RiSteamLine,
  RiRefreshLine,
  RiSettings3Line,
  RiTimeLine,
  RiShieldLine,
} from 'react-icons/ri';
const reasons = [
  {
    icon: <RiCodeLine className={styles.icon} />,
    title: 'Tailored Software Development',
    description:
      'We build custom software solutions that align perfectly with your business needs, ensuring seamless operations and high performance.',
  },
  {
    icon: <RiSteamLine className={styles.icon} />,
    title: 'Comprehensive ERP Solutions',
    description:
      'We offer integrated ERP solutions that streamline your business processes, improving efficiency and enabling data-driven decision-making.',
  },
  {
    icon: <RiRefreshLine className={styles.icon} />,
    title: 'Scalable & Flexible Solutions',
    description:
      'Our software and ERP solutions are scalable and flexible, designed to grow with your business while maintaining optimal performance.',
  },
  {
    icon: <RiSettings3Line className={styles.icon} />,
    title: 'End-to-End Service',
    description:
      'From consultation and development to implementation and support, we provide end-to-end services that ensure the success of your software or ERP project.',
  },
  {
    icon: <RiTimeLine className={styles.icon} />,
    title: 'On-Time Project Delivery',
    description:
      'We ensure timely delivery of your custom software or ERP system, adhering to deadlines and maintaining high-quality standards throughout the development process.',
  },
  {
    icon: <RiShieldLine className={styles.icon} />,
    title: 'Data Security & Compliance',
    description:
      'We prioritize the security of your business data, developing custom software and ERP systems that comply with industry standards and ensure complete privacy and security.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT for Custom Software & ERP Solutions?</h2>
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