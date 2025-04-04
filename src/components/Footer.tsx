import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section (Services, Technologies, Company + Contacts) */}
        <div className={styles.topFooter}>
          {/* Services, Technologies, Company (Grouped) */}
          <div className={styles.servicesCompanyTech}>
            {/* Services */}
            <div className={styles.column}>
              <h3>SERVICES</h3>
              <ul>
                <li>
                  <Link href="#">AI Development Services</Link>
                </li>
                <li>
                  <Link href="#">Generative AI Development</Link>
                </li>
                <li>
                  <Link href="#">Product Engineering</Link>
                </li>
                <li>
                  <Link href="#">Enterprise Software Development</Link>
                </li>
                <li>
                  <Link href="#">Mobile App Development</Link>
                </li>
                <li>
                  <Link href="#">Ecommerce Development</Link>
                </li>
                <li>
                  <Link href="#">Web Development</Link>
                </li>
                <li>
                  <Link href="#">Hire Resources</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="#">Game Development</Link>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className={styles.column}>
              <h3>TECHNOLOGIES</h3>
              <ul>
                <li>
                  <Link href="#">Augmented Reality</Link>
                </li>
                <li>
                  <Link href="#">Virtual Reality</Link>
                </li>
                <li>
                  <Link href="#">Progressive Web App</Link>
                </li>
                <li>
                  <Link href="#">Artificial Intelligence</Link>
                </li>
                <li>
                  <Link href="#">Machine Learning Development</Link>
                </li>
                <li>
                  <Link href="#">Internet Of Things</Link>
                </li>
                <li>
                  <Link href="#">Cloud Computing</Link>
                </li>
                <li>
                  <Link href="#">Blockchain Development</Link>
                </li>
                <li>
                  <Link href="#">UI / UX Design</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className={styles.column}>
              <h3>COMPANY</h3>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
                <li>
                  <Link href="#">Infrastructure</Link>
                </li>
                <li>
                  <Link href="#">Testimonials</Link>
                </li>
                <li>
                  <Link href="#">Referral Partner Program</Link>
                </li>
                <li>
                  <Link href="#">Insights</Link>
                </li>
                <li>
                  <Link href="#">News</Link>
                </li>
                <li>
                  <Link href="#">Portfolio</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contacts Section (Separate) */}
          <div className={styles.contactSection}>
            <h3>CONTACTS</h3>
            <p>
              <FaEnvelope /> sales@company.com
            </p>
            <p>📞 +1-315-381-4100</p>
            <div className={styles.socialIcons}>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>
        <hr />
        {/* Bottom Footer */}
        <div className={styles.bottomFooter}>
          <p>
            <Link href="#">Privacy Policy</Link> |{" "}
            <Link href="#">Disclaimer</Link> |{" "}
            <Link href="#">Terms and Conditions</Link> |{" "}
            <Link href="#">Standard Policies</Link>
          </p>
          <p>Copyright © 2021 YantrikiSoft, All Rights Reserved.</p>
        </div>
      </div>
      {/* Floating Icons */}
      <div className={styles.floatingIcons}>
        <div className={styles.icon}>
          <FaEnvelope />
        </div>
        <div className={styles.icon}>
          <FaCommentDots />
        </div>
      </div>
    </footer>
  );
}
