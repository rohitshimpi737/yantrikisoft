"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"; // Adjust the path as necessary
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Yantrikisoft"
            width={100}
            height={50}
          />
        </Link>
        <Link href="/" className={styles.logoText}>
          Yantrikisoft
        </Link>
      </div>

      <div className={styles.navRight}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/industries">Industries</Link>
          </li>
        </ul>

        <div className={styles.contactUs}>
          <Link href="/contact-us">
            CONTACT US <FaArrowRight className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
