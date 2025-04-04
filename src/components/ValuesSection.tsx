import Image from "next/image";
import styles from "@/styles/ValuesSection.module.css";

export default function ValuesSection() {
  return (
    <section className={styles.valuesSection}>
      <h2 className={styles.sectionTitle}>HOW WE CREATE VALUE</h2>
      <div className={styles.contentContainer}>
        {/* Left Side - Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/values-image.png" // Update with correct path
            alt="Logistics and Digital Solutions"
            width={500}
            height={300}
          />
        </div>

        {/* Right Side - Values */}
        <div className={styles.valuesList}>
          {/* Value 1 */}
          <div className={styles.valueItem}>
            <Image
              src="/icons/design-icon.png" // Update with correct path
              alt="Design Icon"
              width={40}
              height={40}
            />
            <div className={styles.textContent}>
              <h3>PRODUCT DESIGN AND DEVELOPMENT</h3>
              <p>
                Product design and development involves a lot of innovative
                processes. Our product design includes research, technology
                selection, prototyping, and feedback-based improvements.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className={styles.valueItem}>
            <Image
              src="/icons/software-icon.png" // Update with correct path
              alt="Software Engineering Icon"
              width={40}
              height={40}
            />
            <div className={styles.textContent}>
              <h3>SOFTWARE ENGINEERING</h3>
              <p>
                We provide a structured approach to software development by
                breaking down complex problems into smaller solutions and
                resolving them step by step.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className={styles.valueItem}>
            <Image
              src="/icons/manpower-icon.png" // Update with correct path
              alt="Manpower Icon"
              width={50}
              height={40}
            />
            <div className={styles.textContent}>
              <h3>SKILLED MAN POWER SUPPORT</h3>
              <p>
                We specialize in understanding manpower requirements, matching
                candidates to the desired profile, and fostering trust-based
                relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
