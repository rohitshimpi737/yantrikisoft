"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import styles from "@/styles/ContactModal.module.css";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const ContactPopup: React.FC<Props> = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeField, setActiveField] = useState<string | null>(null);

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus, onClose]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className={styles.modal}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <FiX size={24} />
            </button>

            <div className={styles.modalHeader}>
              <h2 className={styles.heading}>Get in Touch</h2>
              <p className={styles.subheading}>Let's discuss how we can help your business</p>
            </div>

            {submitStatus === "success" ? (
              <div className={styles.successMessage}>
                <FiCheckCircle size={48} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>We'll get back to you soon.</p>
              </div>
            ) : submitStatus === "error" ? (
              <div className={styles.errorMessage}>
                <FiAlertCircle size={48} className={styles.errorIcon} />
                <h3>Something went wrong</h3>
                <p>Please try again later.</p>
                <button
                  className={styles.retryButton}
                  onClick={() => setSubmitStatus("idle")}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label
                    htmlFor="name"
                    className={`${styles.formLabel} ${(activeField === "name" || formData.name) ? styles.active : ""}`}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    htmlFor="company"
                    className={`${styles.formLabel} ${(activeField === "company" || formData.company) ? styles.active : ""}`}
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setActiveField("company")}
                    onBlur={() => setActiveField(null)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    htmlFor="email"
                    className={`${styles.formLabel} ${(activeField === "email" || formData.email) ? styles.active : ""}`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    htmlFor="phone"
                    className={`${styles.formLabel} ${(activeField === "phone" || formData.phone) ? styles.active : ""}`}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField(null)}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label
                    htmlFor="message"
                    className={`${styles.formLabel} ${(activeField === "message" || formData.message) ? styles.active : ""}`}
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={styles.formTextarea}
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className={styles.spinner}></span>
                  ) : (
                    <>
                      <FiSend className={styles.buttonIcon} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;