import React from "react";
import BackToTopButton from "@/components/Shared/BackToTopButton";
import styles from "./PrivacyPolicy.module.css";
import PrivacyPolicyContent from "@/components/privacypolicy/PrivacyPolicyContent";
import PrivacyPolicyQuickNav from "@/components/privacypolicy/PrivacyPolicyQuickNav";

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.bg}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last Updated: May 11, 2025</p>
        <p className={styles.intro}>
          At Yantrikisoft, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or visit our website.
        </p>
      </header>

      <div className={styles.contentWrapper}>
        <div className={styles.navWrapper}>
          <PrivacyPolicyQuickNav />
        </div>
        <div className={styles.mainContent}>
          <PrivacyPolicyContent />
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default PrivacyPolicyPage;