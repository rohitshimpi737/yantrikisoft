import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiVkLine,
  RiDeviceLine,
  RiToolsLine,
  RiBrainLine,
  RiFocusLine,
  RiShieldUserLine,
} from 'react-icons/ri';

const reasons = [
  {
    icon: <RiVkLine className={styles.icon} />,
    title: 'Expertise in AR/VR/MR/XR',
    description:
      'Our team specializes in building immersive applications using the latest Augmented, Virtual, Mixed, and Extended Reality technologies tailored for your business goals.',
  },
  {
    icon: <RiDeviceLine className={styles.icon} />,
    title: 'Cross-Platform Compatibility',
    description:
      'We develop immersive experiences that work across mobile, web, and head-mounted displays, ensuring broad accessibility and reach.',
  },
  {
    icon: <RiToolsLine className={styles.icon} />,
    title: 'Cutting-Edge Tool Stack',
    description:
      'We utilize tools like Unity, Unreal Engine, WebXR, AR.js, and 8thWall to craft engaging and performant immersive applications.',
  },
  {
    icon: <RiBrainLine className={styles.icon} />,
    title: 'Immersive UX Strategy',
    description:
      'We design immersive user flows with spatial awareness and intuitive interaction models that enhance engagement and usability.',
  },
  {
    icon: <RiFocusLine className={styles.icon} />,
    title: 'Real-Time Interaction',
    description:
      'Our solutions support real-time data visualization and collaborative experiences using WebRTC and Socket-based streaming.',
  },
  {
    icon: <RiShieldUserLine className={styles.icon} />,
    title: 'Security & Scalability',
    description:
      'We build immersive systems with secure architecture and scalable infrastructure to support growing user bases and evolving features.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT for Immersive Technologies?</h2>
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