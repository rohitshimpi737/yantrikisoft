"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Shared/BackToTopButton.module.css";
import { RiArrowUpLine } from "react-icons/ri";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.show : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <RiArrowUpLine size={28} />
    </button>
  );
};

export default BackToTopButton;