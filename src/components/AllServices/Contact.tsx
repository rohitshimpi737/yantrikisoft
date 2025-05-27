import React from 'react';
import styles from '@/styles/AllServices/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div>
            <h2 className={styles.heading}>Get in Touch</h2>
            <p className={styles.description}>
              Have a project in mind? Let's discuss how we can help you achieve your business goals through innovative technology solutions.
            </p>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <i className="ri-phone-line ri-lg"></i>
                </div>
                <div>
                  <p className={styles.label}>Call Us</p>
                  <p className={styles.value}>8879688067</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <i className="ri-mail-line ri-lg"></i>
                </div>
                <div>
                  <p className={styles.label}>Email Us</p>
                  <p className={styles.value}>hello@yantrikisoft.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <i className="ri-map-pin-line ri-lg"></i>
                </div>
                <div>
                  <p className={styles.label}>Visit Us</p>
                  <p className={styles.value}>Tech Hub, 123 Innovation Street, Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className={styles.form}>
              <h3 className={styles.formHeading}>Send Us a Message</h3>
              <div className={styles.formGrid}>
                <div>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input type="text" id="name" className={styles.input} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input type="text" id="subject" className={styles.input} placeholder="How can we help you?" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" rows={4} className={styles.textarea} placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
