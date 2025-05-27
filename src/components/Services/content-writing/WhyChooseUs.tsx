import styles from '@/styles/Services/WhyChooseUs.module.css';
import {
  RiPencilLine,
  RiCalendarLine,
  RiUser2Line,
  RiSearchLine,
  RiFeedbackLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const reasons = [
  {
    icon: <RiPencilLine className={styles.icon} />,
    title: 'High-Quality, Original Content',
    description:
      'Our expert writers craft high-quality, unique, and well-researched content tailored to your audience. We ensure that all content is plagiarism-free and optimized for engagement.',
  },
  {
    icon: <RiCalendarLine className={styles.icon} />,
    title: 'Timely Delivery',
    description:
      'We understand the importance of deadlines. Our team ensures that all content is delivered on time, every time, without compromising on quality.',
  },
  {
    icon: <RiUser2Line className={styles.icon} />,
    title: 'Audience-Centric Writing',
    description:
      'Our content is crafted with your target audience in mind. We tailor the tone, style, and format to suit their preferences, ensuring higher engagement and retention.',
  },
  {
    icon: <RiSearchLine className={styles.icon} />,
    title: 'SEO-Optimized Content',
    description:
      'We write content that is SEO-friendly and optimized for higher search engine rankings. Our team conducts in-depth keyword research to ensure your content ranks well.',
  },
  {
    icon: <RiFeedbackLine className={styles.icon} />,
    title: 'Client Feedback Integration',
    description:
      'We value client feedback and make revisions based on your suggestions. Our goal is to ensure that the content meets your exact requirements and vision.',
  },
  {
    icon: <RiShieldCheckLine className={styles.icon} />,
    title: 'Quality Assurance',
    description:
      'Every piece of content undergoes a strict quality control process. We ensure it is free from errors, follows the brief, and maintains a high standard of readability and professionalism.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose YANTRIKISOFT for Content Writing?</h2>
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