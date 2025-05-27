import React from "react";
import styles from "../../styles/terms/TermsQuickNav.module.css";

const navItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "acceptance", label: "2. Acceptance of Terms" },
  { id: "services", label: "3. Services Provided" },
  { id: "responsibilities", label: "4. User Responsibilities" },
  { id: "privacy", label: "5. Privacy Policy" },
  { id: "intellectual", label: "6. Intellectual Property" },
  { id: "third-party", label: "7. Third-Party Links" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Termination" },
  { id: "governing", label: "10. Governing Law" },
  { id: "changes", label: "11. Changes to Terms" },
  { id: "contact", label: "12. Contact Information" },
];

const TermsQuickNav: React.FC = () => (
  <aside className={styles.quickNav}>
    <div className={styles.stickyNav}>
      <nav>
        <h3 className={styles.quickNavTitle}>Table of Contents</h3>
        <ul className={styles.quickNavList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={styles.quickNavLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);

export default TermsQuickNav;