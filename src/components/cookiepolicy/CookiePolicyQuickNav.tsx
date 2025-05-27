import React from "react";
import styles from "../../styles/cookiepolicy/CookiePolicyQuickNav.module.css";

const navItems = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "how-we-use-cookies", label: "How We Use Cookies" },
  { id: "managing-cookies", label: "Managing Cookies" },
  { id: "third-party-cookies", label: "Third-Party Cookies" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "contact-information", label: "Contact Information" },
];

const CookiePolicyQuickNav: React.FC = () => (
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

export default CookiePolicyQuickNav;