import {
  FaShippingFast,
  FaLaptopCode,
  FaChartLine,
  FaTools,
} from "react-icons/fa";
import styles from "@/styles/WhyChooseUs.module.css";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Rapid delivery",
    description: "We deliver our product in time",
  },
  {
    icon: <FaLaptopCode />,
    title: "Software Solutions",
    description: "We provide Software Solutions for startups to enterprises",
  },
  {
    icon: <FaChartLine />,
    title: "Market research",
    description: "We do market research before providing solutions",
  },
  {
    icon: <FaTools />,
    title: "Best engineering",
    description: "We are passionate people with ideas and various skills.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.title}>WHY CHOOSE US ?</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
