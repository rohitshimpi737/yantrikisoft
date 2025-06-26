import React from "react";
import styles from "../../styles/privacypolicy/PrivacyPolicyContent.module.css";

const PrivacyPolicyContent: React.FC = () => (
  <main className={styles.policyContent}>
    {/* Introduction */}
    <section id="introduction" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-shield-check-line ri-lg"></i></span>
        <h2>Introduction</h2>
      </div>
      <p>
        This Privacy Policy applies to all services offered by Yantrikisoft, including our website, mobile applications, and other digital products. By using our services, you consent to the collection and use of information as described in this policy.
      </p>
      <p>
        We understand the importance of your personal information and are committed to maintaining the highest standards of data protection. Our policy is designed to be transparent about our practices and to give you control over your information.
      </p>
    </section>

    {/* Information Collection */}
    <section id="information-collection" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-folder-info-line ri-lg"></i></span>
        <h2>Information Collection</h2>
      </div>
      <p>
        We collect information to provide better services to our users and to improve our business operations. The types of information we collect fall into two main categories:
      </p>
      <div className={styles.grid2}>
        {/* Personal Information */}
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-user-line"></i></span> Personal Information</h3>
          <ul>
            <li><i className="ri-checkbox-circle-line"></i> Full name and contact details</li>
            <li><i className="ri-checkbox-circle-line"></i> Email address and phone number</li>
            <li><i className="ri-checkbox-circle-line"></i> Billing and payment information</li>
            <li><i className="ri-checkbox-circle-line"></i> Company information (for business clients)</li>
            <li><i className="ri-checkbox-circle-line"></i> Account credentials and preferences</li>
          </ul>
        </div>
        {/* Usage Data */}
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-bar-chart-line"></i></span> Usage Data</h3>
          <ul>
            <li><i className="ri-checkbox-circle-line"></i> IP address and device information</li>
            <li><i className="ri-checkbox-circle-line"></i> Browser type and operating system</li>
            <li><i className="ri-checkbox-circle-line"></i> Pages visited and features used</li>
            <li><i className="ri-checkbox-circle-line"></i> Time spent on our services</li>
            <li><i className="ri-checkbox-circle-line"></i> Cookies and similar tracking technologies</li>
          </ul>
        </div>
      </div>
      <div className={styles.infoNote}>
        <span className={styles.iconSm}><i className="ri-information-line"></i></span>
        <div>
          <h4>Important Note</h4>
          <p>
            We collect personal information only with your consent or when necessary to provide the services you have requested. You can choose not to provide certain information, but this may limit your ability to use some features of our services.
          </p>
        </div>
      </div>
    </section>

    {/* Data Usage */}
    <section id="data-usage" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-database-2-line ri-lg"></i></span>
        <h2>Data Usage</h2>
      </div>
      <p>
        We use the information we collect for various purposes, including but not limited to:
      </p>
      <div className={styles.stack}>
        <div>
          <h3><i className="ri-service-line"></i> Providing and Improving Our Services</h3>
          <p>We use your information to deliver the services you&apos;ve requested, process transactions, and enhance your user experience...</p>
        </div>
        <div>
          <h3><i className="ri-customer-service-2-line"></i> Customer Support</h3>
          <p>Your information helps us respond to your inquiries, provide technical support, and resolve any issues you may encounter while using our services.</p>
        </div>
        <div>
          <h3><i className="ri-mail-send-line"></i> Communication</h3>
          <p>We may use your contact information to send you important updates about our services, respond to your inquiries, and, with your consent, send marketing communications about products and services that may interest you.</p>
        </div>
        <div>
          <h3><i className="ri-secure-payment-line"></i> Security and Fraud Prevention</h3>
          <p>We use information to verify accounts, monitor for suspicious activities, prevent fraud, and ensure the security of our platform and users.</p>
        </div>
        <div>
          <h3><i className="ri-line-chart-line"></i> Analytics and Business Intelligence</h3>
          <p>We analyze usage patterns and trends to better understand how our services are used, which helps us make data-driven decisions to improve our offerings.</p>
        </div>
      </div>
    </section>

    {/* Data Protection */}
    <section id="data-protection" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-lock-line ri-lg"></i></span>
        <h2>Data Protection Measures</h2>
      </div>
      <p>We implement a variety of security measures to maintain the safety of your personal information:</p>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3><i className="ri-lock-password-line"></i> Encryption</h3>
          <p>All sensitive data is encrypted using industry-standard SSL/TLS protocols during transmission and at rest in our databases.</p>
        </div>
        <div className={styles.card}>
          <h3><i className="ri-shield-keyhole-line"></i> Access Controls</h3>
          <p>We restrict access to personal information to authorized employees who need it to perform their job functions.</p>
        </div>
        <div className={styles.card}>
          <h3><i className="ri-server-line"></i> Secure Infrastructure</h3>
          <p>Our systems are hosted in secure data centers with comprehensive physical and network security measures.</p>
        </div>
        <div className={styles.card}>
          <h3><i className="ri-eye-line"></i> Regular Audits</h3>
          <p>We conduct regular security audits and vulnerability assessments to identify and address potential risks.</p>
        </div>
      </div>
      <p>
        While we implement these safeguards, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
      </p>
    </section>

    {/* Third-Party Sharing */}
    <section id="third-party-sharing" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-share-line ri-lg"></i></span>
        <h2>Third-Party Sharing</h2>
      </div>
      <p>We may share your information with third parties in the following circumstances:</p>
      <div className={styles.stack}>
        <div>
          <h3><i className="ri-service-line"></i> Service Providers</h3>
          <p>We work with trusted third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer support. These providers have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        </div>
        <div>
          <h3><i className="ri-government-line"></i> Legal Requirements</h3>
          <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency). We may also disclose your information to enforce our Terms of Service, protect our rights, privacy, safety, or property, or that of our users or others.</p>
        </div>
        <div>
          <h3><i className="ri-building-line"></i> Business Transfers</h3>
          <p>If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.</p>
        </div>
        <div>
          <h3><i className="ri-group-line"></i> With Your Consent</h3>
          <p>We may share your information with third parties when we have your explicit consent to do so.</p>
        </div>
      </div>
      <p>
        We do not sell your personal information to third parties. When we share data with third-party service providers, we require them to maintain the confidentiality and security of your information.
      </p>
    </section>

    {/* Policy Updates */}
    <section id="policy-updates" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-refresh-line ri-lg"></i></span>
        <h2>Policy Updates</h2>
      </div>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this policy and notify you in one or more of the following ways:
      </p>
      <ul>
        <li><i className="ri-mail-line"></i> Sending an email to the address associated with your account</li>
        <li><i className="ri-notification-line"></i> Displaying a prominent notice on our website</li>
        <li><i className="ri-message-2-line"></i> Providing notification through our application</li>
      </ul>
      <p>
        We encourage you to review this Privacy Policy periodically to stay informed about our information practices. Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
      </p>
    </section>

    {/* Contact Information */}
    <section id="contact-information" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-contacts-book-line ri-lg"></i></span>
        <h2>Contact Information</h2>
      </div>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@yantrikisoft.com">info@yantrikisoft.com</a>.
      </p>
    </section>
  </main>
);

export default PrivacyPolicyContent;