import React from "react";
import styles from "./Terms.module.css";
import TermsQuickNav from "@/components/terms/TermsQuickNav";
import TermsContent from "@/components/terms/TermsContent";
import BackToTopButton from "@/components/Shared/BackToTopButton";

const TermsPage = () => (
  <div className={styles.bg}>
    <header className={styles.header}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.updated}>Last Updated: May 11, 2025</p>
      <p className={styles.intro}>
        Welcome to Yantrikisoft's website. These Terms and Conditions govern your access to and use of Yantrikisoft's website, services, and applications. By accessing or using our Services, you agree to be bound by these Terms and Conditions.
      </p>
    </header>
    <div className={styles.contentWrapper}>
      <div className={styles.navWrapper}>
        <TermsQuickNav />
      </div>
      <div className={styles.mainContent}>
        <TermsContent />
      </div>
    </div>
    <BackToTopButton />
  </div>
);

export default TermsPage;