import React from "react";
import styles from "./CookiePolicy.module.css";
import CookiePolicyContent from "@/components/cookiepolicy/CookiePolicyContent";
import CookiePolicyQuickNav from "@/components/cookiepolicy/CookiePolicyQuickNav";
import BackToTopButton from "@/components/Shared/BackToTopButton";

const CookiePolicyPage = () => (
  <div className={styles.bg}>
    <header className={styles.header}>
      <h1 className={styles.title}>Cookie Policy</h1>
      <p className={styles.updated}>Last Updated: May 11, 2025</p>
      <p className={styles.intro}>
        At Yantrikisoft, we use cookies and similar technologies to enhance your browsing experience and provide personalized service. This Cookie Policy explains what cookies are, how we use them, and how you can control them when you visit our website.
      </p>
    </header>
    <div className={styles.contentWrapper}>
      <div className={styles.navWrapper}>
        <CookiePolicyQuickNav />
      </div>
      <div className={styles.mainContent}>
        <CookiePolicyContent />
      </div>
    </div>
    <BackToTopButton />
  </div>
);

export default CookiePolicyPage;