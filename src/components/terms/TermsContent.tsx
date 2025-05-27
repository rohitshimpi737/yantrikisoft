import React from "react";
import styles from "../../styles/terms/TermsContent.module.css";

const TermsContent: React.FC = () => (
  <main className={styles.termsContent}>
    {/* 1. Introduction */}
    <section id="introduction" className={styles.section}>
      <h2 className={styles.sectionTitle}>1. Introduction</h2>
      <p>
        Welcome to Yantrikisoft's website. These Terms and Conditions govern your access to and use of Yantrikisoft's website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and Conditions.
      </p>
      <p>
        Please read these Terms and Conditions carefully before using our Services. If you do not agree with any part of these terms, you may not access or use our Services.
      </p>
    </section>

    {/* 2. Acceptance of Terms */}
    <section id="acceptance" className={styles.section}>
      <h2 className={styles.sectionTitle}>2. Acceptance of Terms</h2>
      <p>
        By accessing or using Yantrikisoft's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
      </p>
      <p>
        These Terms and Conditions constitute a legally binding agreement between you and Yantrikisoft. If you are using our Services on behalf of a company, organization, or other entity, you represent and warrant that you have the authority to bind that entity to these Terms and Conditions.
      </p>
      <p>
        We reserve the right to modify these Terms and Conditions at any time. Your continued use of our Services following any changes constitutes your acceptance of the revised Terms and Conditions.
      </p>
    </section>

    {/* 3. Services Provided */}
    <section id="services" className={styles.section}>
      <h2 className={styles.sectionTitle}>3. Services Provided</h2>
      <p>
        Yantrikisoft provides various technology solutions and services, including but not limited to:
      </p>
      <ul className={styles.list}>
        <li>UI/UX Design</li>
        <li>Content Writing</li>
        <li>Digital Marketing</li>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>AI Development</li>
        <li>Custom Software & ERP Development</li>
        <li>Immersive Technology Services</li>
      </ul>
      <p>
        All services provided by Yantrikisoft are governed by these Terms and Conditions, as well as any additional terms and agreements specific to particular services or projects.
      </p>
      <p>
        Yantrikisoft reserves the right to modify, suspend, or discontinue any of its services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of our services.
      </p>
    </section>

    {/* 4. User Responsibilities */}
    <section id="responsibilities" className={styles.section}>
      <h2 className={styles.sectionTitle}>4. User Responsibilities</h2>
      <h3 className={styles.subTitle}>4.1 Account Creation and Security</h3>
      <p>
        When creating an account with Yantrikisoft, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify Yantrikisoft immediately of any unauthorized use of your account or any other breach of security.
      </p>
      <h3 className={styles.subTitle}>4.2 Content Posting</h3>
      <p>
        You are solely responsible for any content you post, upload, or otherwise transmit through our Services. You agree that you will not post content that:
      </p>
      <ul className={styles.list}>
        <li>Infringes on the intellectual property rights of others</li>
        <li>Contains defamatory, obscene, or offensive material</li>
        <li>Violates any applicable laws or regulations</li>
        <li>Contains viruses, malware, or other harmful code</li>
        <li>Impersonates any person or entity</li>
      </ul>
      <h3 className={styles.subTitle}>4.3 Prohibited Use</h3>
      <p>
        You agree not to use our Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. Prohibited activities include but are not limited to:
      </p>
      <ul className={styles.list}>
        <li>Attempting to gain unauthorized access to any part of our Services</li>
        <li>Engaging in any form of automated data collection without Yantrikisoft's prior consent</li>
        <li>Using our Services to transmit spam or other unsolicited communications</li>
        <li>Interfering with other users' enjoyment of our Services</li>
        <li>Using our Services in connection with any illegal activities</li>
      </ul>
    </section>

    {/* 5. Privacy Policy */}
    <section id="privacy" className={styles.section}>
      <h2 className={styles.sectionTitle}>5. Privacy Policy</h2>
      <p>
        Your privacy is important to us. Our Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. By using our Services, you consent to the data practices described in our Privacy Policy.
      </p>
      <p>
        Our Privacy Policy is incorporated into these Terms and Conditions by reference. Please review our <a href="/privacypolicy" className={styles.link}>Privacy Policy</a> for more information on how we handle your personal data.
      </p>
    </section>

    {/* 6. Intellectual Property */}
    <section id="intellectual" className={styles.section}>
      <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
      <p>
        All content on Yantrikisoft's website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Yantrikisoft or its licensors and is protected by international copyright, trademark, and other intellectual property laws.
      </p>
      <p>
        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without the prior written consent of Yantrikisoft.
      </p>
      <p>
        Yantrikisoft's name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Yantrikisoft or its affiliates. You may not use such marks without the prior written permission of Yantrikisoft.
      </p>
      <p>
        Any feedback, comments, or suggestions you may provide regarding our Services is entirely voluntary, and we will be free to use such feedback, comments, or suggestions without any obligation to you.
      </p>
    </section>

    {/* 7. Third-Party Links */}
    <section id="third-party" className={styles.section}>
      <h2 className={styles.sectionTitle}>7. Third-Party Links</h2>
      <p>
        Our Services may contain links to third-party websites or services that are not owned or controlled by Yantrikisoft. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
      </p>
      <p>
        You acknowledge and agree that Yantrikisoft shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
      </p>
      <p>
        We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
      </p>
    </section>

    {/* 8. Limitation of Liability */}
    <section id="liability" className={styles.section}>
      <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Yantrikisoft and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
      </p>
      <ul className={styles.list}>
        <li>Your access to or use of or inability to access or use our Services</li>
        <li>Any conduct or content of any third party on our Services</li>
        <li>Any content obtained from our Services</li>
        <li>Unauthorized access, use, or alteration of your transmissions or content</li>
      </ul>
      <p>
        In no event shall Yantrikisoft's total liability to you for all claims, damages, losses, and causes of action exceed the amount paid by you, if any, for accessing or using our Services during the six (6) months prior to bringing such claim.
      </p>
      <p>
        The limitations of liability set forth above are fundamental elements of the basis of the bargain between Yantrikisoft and you.
      </p>
    </section>

    {/* 9. Termination */}
    <section id="termination" className={styles.section}>
      <h2 className={styles.sectionTitle}>9. Termination</h2>
      <p>
        Yantrikisoft reserves the right to terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.
      </p>
      <p>
        Upon termination, your right to use our Services will immediately cease. If you wish to terminate your account, you may simply discontinue using our Services or contact us to request account deletion.
      </p>
      <p>
        All provisions of these Terms and Conditions which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
      </p>
    </section>

    {/* 10. Governing Law */}
    <section id="governing" className={styles.section}>
      <h2 className={styles.sectionTitle}>10. Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
      </p>
      <p>
        Any disputes arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts located in Pune, India.
      </p>
      <p>
        You agree to submit to the personal jurisdiction of the courts located in Pune, India, for the purpose of litigating all such claims or disputes.
      </p>
    </section>

    {/* 11. Changes to Terms */}
    <section id="changes" className={styles.section}>
      <h2 className={styles.sectionTitle}>11. Changes to Terms</h2>
      <p>
        Yantrikisoft reserves the right, at its sole discretion, to modify or replace these Terms and Conditions at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page and updating the "Last Updated" date at the top of this page.
      </p>
      <p>
        Your continued use of our Services after any such changes constitutes your acceptance of the new Terms and Conditions. If you do not agree to the new terms, please stop using our Services.
      </p>
      <p>
        We encourage you to review these Terms and Conditions periodically for any changes. Changes to these Terms and Conditions are effective when they are posted on this page.
      </p>
    </section>

    {/* 12. Contact Information */}
    <section id="contact" className={styles.section}>
      <h2 className={styles.sectionTitle}>12. Contact Information</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      <div className={styles.contactBox}>
        <p><strong>Yantrikisoft Technologies Pvt. Ltd.</strong></p>
        <p>Office No. 305, 3rd Floor, Pride Icon</p>
        <p>Kharadi, Pune - 411014</p>
        <p>Maharashtra, India</p>
        <p>
          Email: <a href="mailto:legal@yantrikisoft.com" className={styles.link}>legal@yantrikisoft.com</a>
        </p>
        <p>Phone: +91 20 4862 5000</p>
      </div>
    </section>
  </main>
);

export default TermsContent;