import Image from "next/image";
import styles from "@/styles/AboutUsSection.module.css";

export default function AboutUsSection() {
  return (
    <section className={styles.aboutSection}>
      {/* About Us Header */}
      <h2 className={styles.aboutUsHeader}>About Us</h2>
      <p className={styles.aboutUsText}>
        We are a team of passionate professionals dedicated to providing
        innovative digital solutions. Our expertise spans across media
        technology, IT consultancy, and business growth strategies.
      </p>

      {/* Vision & Mission Section */}
      <div className={styles.visionMissionContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Image
              src="/images/vision-icon.png"
              alt="Vision Icon"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h3>Our vision</h3>
            <p>
              To be a pioneer in digital transformation, shaping a future where
              technology seamlessly integrates with businesses to create
              sustainable and intelligent solutions. We aim to drive progress
              through AI, cloud computing, IoT, and blockchain innovations.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <Image
              src="/images/mission-icon.png"
              alt="Mission Icon"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h3>Our mission</h3>
            <p>
              We are committed to redefining the digital landscape with
              innovative, scalable, and efficient IT solutions. Our
              technology-driven strategies are designed to empower businesses,
              enhance productivity, and drive sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className={styles.teamContainer}>
        <h3 className={styles.teamHeader}>Our team</h3>
        <div className={styles.teamContent}>
          {/* Left Side - Image & Name */}
          <div className={styles.teamImage}>
            <Image
              src="/images/team-member.png"
              alt="Team Member"
              width={200}
              height={200}
            />
            <p>
              Mr. XYZ
              <br />
              Business Operator
            </p>
          </div>

          {/* Right Side - Description */}
          <div className={styles.teamText}>
            <div className={styles.icon}>
              <Image
                src="/images/team-icon.png"
                alt="Team Icon"
                width={50}
                height={50}
              />
            </div>
            <p>
              Our team consists of visionary thinkers, creative developers, and
              technology experts specializing in AI, data science, IoT,
              cybersecurity, and enterprise solutions. We collaborate to deliver
              cutting-edge digital experiences and customized solutions tailored
              to business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
