import React from "react";
import styles from "../../styles/privacypolicy/PrivacyPolicyQuickNav.module.css";

const navItems = [
  { id: "introduction", label: "Introduction" },
  { id: "information-collection", label: "Information Collection" },
  { id: "data-usage", label: "Data Usage" },
  { id: "data-protection", label: "Data Protection" },
  { id: "third-party-sharing", label: "Third-Party Sharing" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "contact-information", label: "Contact Information" },
];

const PrivacyPolicyQuickNav: React.FC = () => (
  <aside className={styles.quickNav}>
    <div className={styles.stickyNav}>
      <nav>
        <h3 className={styles.quickNavTitle}>Quick Navigation</h3>
        <ul className={styles.quickNavList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={styles.quickNavLink}>
                <span className={styles.dot}></span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);

export default PrivacyPolicyQuickNav;