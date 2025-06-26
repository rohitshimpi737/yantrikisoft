import React from "react";
import styles from "../../styles/cookiepolicy/CookiePolicyContent.module.css";

const CookiePolicyContent: React.FC = () => (
  <main className={styles.policyContent}>
    {/* What Are Cookies */}
    <section id="what-are-cookies" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-question-line ri-lg"></i></span>
        <h2>What Are Cookies?</h2>
      </div>
      <p>
        Cookies are small text files that are placed on your device when you visit a website. They serve various purposes, from helping the website function properly to providing a better user experience. Cookies can be:
      </p>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-time-line"></i></span> Session Cookies</h3>
          <p>Temporary cookies that expire when you close your browser. They help websites remember your choices during your visit.</p>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-database-2-line"></i></span> Persistent Cookies</h3>
          <p>Cookies that remain on your device for a set period or until you delete them. They help remember your preferences for future visits.</p>
        </div>
      </div>
    </section>

    {/* How We Use Cookies */}
    <section id="how-we-use-cookies" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-settings-line ri-lg"></i></span>
        <h2>How We Use Cookies</h2>
      </div>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-shield-check-line"></i></span> Essential Cookies</h3>
          <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and e-commerce features. The website cannot function properly without these cookies.</p>
          <ul>
            <li>User authentication</li>
            <li>Shopping cart functionality</li>
            <li>Security features</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-line-chart-line"></i></span> Analytics Cookies</h3>
          <p>These cookies help us understand how visitors interact with our website. The information collected is used to improve our website&apos;s functionality and user experience.</p>
          <ul>
            <li>Page view statistics</li>
            <li>User behavior analysis</li>
            <li>Performance monitoring</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-user-settings-line"></i></span> Functional Cookies</h3>
          <p>These cookies enable enhanced functionality and personalization. They may be set by us or third-party providers whose services we use on our website.</p>
          <ul>
            <li>Language preferences</li>
            <li>Live chat services</li>
            <li>User preferences</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-advertisement-line"></i></span> Marketing Cookies</h3>
          <p>These cookies track your activity across websites to deliver targeted advertising. They are usually placed by advertising networks with our permission.</p>
          <ul>
            <li>Ad personalization</li>
            <li>Campaign effectiveness</li>
            <li>Behavioral tracking</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Managing Cookies */}
    <section id="managing-cookies" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-tools-line ri-lg"></i></span>
        <h2>Managing Cookies</h2>
      </div>
      <p>
        You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
      </p>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. Common browser settings include:
          </p>
          <ul>
            <li>Viewing cookies stored on your device</li>
            <li>Allowing or blocking specific types of cookies</li>
            <li>Clearing cookies periodically</li>
            <li>Private browsing modes</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Cookie Consent Tool</h3>
          <p>
            Our website provides a cookie consent tool that allows you to:
          </p>
          <div className={styles.buttonRow}>
            <button className={styles.primaryBtn}>Manage Preferences</button>
            <button className={styles.secondaryBtn}>Accept All Cookies</button>
          </div>
        </div>
      </div>
      <div className={styles.infoNote}>
        <span className={styles.iconSm}><i className="ri-information-line"></i></span>
        <div>
          <h4>Please Note</h4>
          <p>
            Restricting cookies may impact your experience on our website. Some features may not function properly if cookies are disabled.
          </p>
        </div>
      </div>
    </section>

    {/* Third-Party Cookies */}
    <section id="third-party-cookies" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-share-line ri-lg"></i></span>
        <h2>Third-Party Cookies</h2>
      </div>
      <p>
        Some cookies are placed by third-party services that appear on our pages. We do not control these third parties or their cookies. These cookies may include:
      </p>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-line-chart-line"></i></span> Analytics Providers</h3>
          <p>Services like Google Analytics that help us understand how visitors use our website.</p>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-advertisement-line"></i></span> Advertising Networks</h3>
          <p>Companies that deliver targeted advertisements based on your interests.</p>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-customer-service-2-line"></i></span> Social Media Platforms</h3>
          <p>Services that enable social media features and sharing capabilities.</p>
        </div>
        <div className={styles.card}>
          <h3><span className={styles.iconSm}><i className="ri-video-line"></i></span> Content Providers</h3>
          <p>Services that host videos, images, or other content we display on our website.</p>
        </div>
      </div>
    </section>

    {/* Policy Updates */}
    <section id="policy-updates" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-refresh-line ri-lg"></i></span>
        <h2>Policy Updates</h2>
      </div>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this policy.
      </p>
      <p>
        We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
      </p>
    </section>

    {/* Contact Information */}
    <section id="contact-information" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.icon}><i className="ri-contacts-line ri-lg"></i></span>
        <h2>Contact Information</h2>
      </div>
      <p>
        If you have any questions about our use of cookies or this Cookie Policy, please contact us:
      </p>
      <div className={styles.contactList}>
        <div>
          <i className="ri-mail-line"></i> privacy@yantrikisoft.com
        </div>
        <div>
          <i className="ri-customer-service-2-line"></i> +91 80 1234 5678
        </div>
      </div>
    </section>
  </main>
);

export default CookiePolicyContent;