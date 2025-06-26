"use client";
import React, { useState } from 'react';
import styles from '@/styles/Shared/Navbar.module.css';
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setShowDropdown(false); // Close desktop dropdown if open
  };

  // Close mobile menu on navigation
  const handleMobileNav = () => {
    setMobileMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoSection}>
          <img
            src="/logos/gear-svgrepo-com.png"
            alt="Yantrikisoft Logo"
            className={styles.logo}
          />
          <span className={styles.brandName}>Yantrikisoft</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="about" className={styles.navLink}>About</Link>

          <div className={styles.dropdownWrapper}>
            <Link href="/all-services" className={styles.serviceLink}>
              Services
            </Link>
            <button
              className={styles.arrowButton}
              onClick={toggleDropdown}
              aria-expanded={showDropdown}
              aria-label="Toggle services dropdown"
              type="button"
            >
            </button>

            <div className={`${styles.dropdown} ${showDropdown ? styles.show : ''}`}>
              <div className={styles.dropdownColumn}>
                <h3 className={styles.dropdownHeader}>Design & Content</h3>
                <Link href="/services/ui-ux" className={styles.dropdownItem}>
                  <i className="ri-pencil-ruler-2-line"  style={{ color: "#3b82f6" }}></i>
                  UI/UX Design
                </Link>
                <Link href="/services/content-writing" className={styles.dropdownItem}>
                  <i className="ri-article-line"  style={{ color: "#3b82f6" }}></i>
                  Content Writing
                </Link>
                <Link href="/services/digital-marketing" className={styles.dropdownItem}>
                  <i className="ri-megaphone-line"  style={{ color: "#3b82f6" }}></i>
                  Digital Marketing
                </Link>
              </div>

              <div className={styles.dropdownColumn}>
                <h3 className={styles.dropdownHeader}>Development</h3>
                <Link href="/services/web-development" className={styles.dropdownItem}>
                  <i className="ri-code-s-slash-line"  style={{ color: "#3b82f6" }}></i>
                  Web Development
                </Link>
                <Link href="/services/app-development" className={styles.dropdownItem}>
                  <i className="ri-smartphone-line"  style={{ color: "#3b82f6" }}></i>
                  Mobile Apps
                </Link>
                <Link href="/services/ai-development" className={styles.dropdownItem}>
                  <i className="ri-cpu-line"  style={{ color: "#3b82f6" }}></i>
                  AI Development
                </Link>
              </div>

              <div className={styles.dropdownColumn}>
                <h3 className={styles.dropdownHeader}>Business Sols</h3>
                <Link href="/services/custom-software-erp" className={styles.dropdownItem}>
                  <i className="ri-settings-5-line"  style={{ color: "#3b82f6" }}></i>
                  Custom Software & ERP
                </Link>
                <Link href="/services/immersive-technology" className={styles.dropdownItem}>
                  <i className="ri-article-line" style={{ color: "#3b82f6" }}></i>
                  Immersive Technologies
                </Link>
              </div>

              <div className={styles.seeAll}>
                <Link href="/all-services" className={styles.seeAllLink}>
                  See all services <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/industries" className={styles.navLink}>Industries</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>

        </nav>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Open mobile menu">
            <div className={styles.iconWrapper}>
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line ri-lg`}></i>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileNavDrawer}>
          {/* Close Button for Mobile Menu */}
          <button
            className={styles.closeButton}
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            {/* <i className="ri-close-line"></i> */}
          </button>
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.navLink} onClick={handleMobileNav}>Home</Link>
            <Link href="contact" className={styles.navLink} onClick={handleMobileNav}>About</Link>
            <details>
              <summary className={styles.navLink}>Services</summary>
              <div className={styles.mobileDropdown}>
                <div>
                  {/* <span className={styles.dropdownHeader}>Design & Content</span> */}
                  <Link href="/services/ui-ux" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-pencil-ruler-2-line"></i>
                    UI/UX Design
                  </Link>
                  <Link href="/services/content-writing" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-article-line"></i>
                    Content Writing
                  </Link>
                  <Link href="/services/digital-marketing" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-megaphone-line"></i>
                    Digital Marketing
                  </Link>
                </div>
                <div>
                  {/* <span className={styles.dropdownHeader}>Development</span> */}
                  <Link href="/services/web-development" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-code-s-slash-line"></i>
                    Web Development
                  </Link>
                  <Link href="/services/app-development" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-smartphone-line"></i>
                    Mobile Apps
                  </Link>
                  <Link href="/services/ai-development" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-cpu-line"></i>
                    AI Development
                  </Link>
                </div>
                <div>
                  {/* <span className={styles.dropdownHeader}>Business Sols</span> */}
                  <Link href="/services/custom-software-erp" className={styles.dropdownItem} onClick={handleMobileNav}>
                    <i className="ri-settings-5-line"></i>
                    Custom Software & ERP
                  </Link>
                  <Link href="/services/immersive-technology" className={styles.dropdownItem} onClick={handleMobileNav}>
                     <i className="ri-article-line"></i>
                    Immersive Technologies
                  </Link>
                </div>
                <div className={styles.seeAll}>
                  <Link href="/all-services" className={styles.seeAllLink} onClick={handleMobileNav}>
                    See all services <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </details>
            <Link href="/industries" className={styles.navLink} onClick={handleMobileNav}>Industries</Link>
            <Link href="/contact" className={styles.navLink} onClick={handleMobileNav}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;