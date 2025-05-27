import React from 'react';
import styles from '@/styles/Shared/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.heading}>About Us</h3>
            <p className={styles.text}>
              Our approach includes research, idea, wireframing, architecture designing and prototyping, testing and feedback at every stage of product development cycle, deployment, maintenance. We have created various complex mobile apps, web applications, games and digital solution etc.
            </p>
          </div>
          <div>
            <h3 className={styles.heading}>Contact us</h3>
            <ul className={styles.list}>
              <li className={styles.text}>Sector 19D, Vashi</li>
              <li className={styles.text}>Navi Mumbai,</li>
              <li className={styles.text}>Maharashtra</li>
              <li className={styles.text}>+91 9920448802</li>
              <li className={styles.text}>+91 9920448809</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Working hours</h3>
            <ul className={styles.list}>
              <li className={styles.text}>Mon - Fri: 9:00AM - 5:00PM</li>
              <li className={styles.text}>Saturday - Fri: 9:00AM - 5:00PM</li>
              <li className={styles.text}>Sunday: closed</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>Home</a></li>
              <li><a href="#" className={styles.link}>About</a></li>
              <li><a href="#" className={styles.link}>Services</a></li>
              <li><a href="#" className={styles.link}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.policyLinks}>
            <a href="privacypolicy" className={styles.link}>PRIVACY POLICY</a>
            <a href="cookiepolicy" className={styles.link}>COOKIE POLICY</a>
            <a href="terms" className={styles.link}>TERMS</a>
          </div>
          <p className={styles.copyright}>
            Copyright © 2021 Yantrikisoft - All Rights Reserved. - P.IVA 0128790127
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
