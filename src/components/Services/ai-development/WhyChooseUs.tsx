import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiRobotLine,
  RiLockLine,
  RiTeamLine,
  RiBarChartLine,
  RiFeedbackLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const reasons = [
  {
    icon: <RiRobotLine className={styles.icon} />,
    title: 'Advanced AI Solutions',
    description:
      'We offer cutting-edge AI solutions to optimize business operations, including machine learning, deep learning, and natural language processing techniques tailored to your needs.',
  },
  {
    icon: <RiLockLine className={styles.icon} />,
    title: 'Timely Project Delivery',
    description:
      'We understand the critical importance of deadlines in AI projects. Our team ensures timely delivery without compromising the quality of AI models and systems.',
  },
  {
    icon: <RiTeamLine className={styles.icon} />,
    title: 'Expert AI Team',
    description:
      'Our team consists of AI experts with years of experience in developing robust AI models for various industries, ensuring that we deliver innovative and effective AI-driven solutions.',
  },
  {
    icon: <RiBarChartLine className={styles.icon} />,
    title: 'Data-Driven Decisions',
    description:
      'We leverage data analytics to enhance decision-making and drive better outcomes. Our AI systems are powered by data to help your business gain insights and increase productivity.',
  },
  {
    icon: <RiFeedbackLine className={styles.icon} />,
    title: 'Client-Centric Approach',
    description:
      'We work closely with clients, incorporating feedback and ensuring that our AI solutions align with your specific business goals and requirements.',
  },
  {
    icon: <RiShieldCheckLine className={styles.icon} />,
    title: 'Robust Security',
    description:
      'Our AI solutions are designed with the highest security standards, ensuring that your sensitive data is protected and your AI systems remain secure from external threats.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT for AI Development?</h2>
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