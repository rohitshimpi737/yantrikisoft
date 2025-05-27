import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiLayout2Line,
  RiPaletteLine,
  RiSmartphoneLine,
  RiSearchLine,
  RiBrushLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const reasons = [
  {
    icon: <RiLayout2Line className={styles.icon} />,
    title: 'User-Centered Design',
    description:
      "We prioritize your users' needs and behaviors in every design decision. Our user-centric approach ensures that your interface is intuitive, accessible, and engaging for all users.",
  },
  {
    icon: <RiPaletteLine className={styles.icon} />,
    title: 'Visually Stunning Designs',
    description:
      "Our design team creates visually appealing designs that captivate users. We ensure the aesthetics of your UI align with your brand while maintaining clarity and usability.",
  },
  {
    icon: <RiSmartphoneLine className={styles.icon} />,
    title: 'Mobile-First Approach',
    description:
      "With a growing mobile user base, we ensure that our designs are responsive and optimized for mobile devices, giving users a seamless experience across all screen sizes.",
  },
  {
    icon: <RiSearchLine className={styles.icon} />,
    title: 'UX Research & Testing',
    description:
      "We use user research and testing to ensure that the final product aligns with user needs. Our iterative process includes usability testing and feedback loops to refine the design.",
  },
  {
    icon: <RiBrushLine className={styles.icon} />,
    title: 'Brand Consistency',
    description:
      "We ensure that your UI/UX design is consistent with your brand identity, delivering a cohesive experience that aligns with your brand’s vision and goals.",
  },
  {
    icon: <RiShieldCheckLine className={styles.icon} />,
    title: 'Quality & Performance',
    description:
      "Our UI/UX designs are not only visually appealing but also perform seamlessly across all platforms. We optimize for speed, accessibility, and overall functionality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT for UI/UX Design?</h2>
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