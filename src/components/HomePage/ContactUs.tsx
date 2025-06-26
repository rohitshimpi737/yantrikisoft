"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/styles/HomePage/ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setCaptchaToken(null);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Message sending failed. Try again later.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <p className={styles.subheading}>Let's Discuss Your Project</p>
      <p className={styles.description}>
        Ready to transform your business with innovative digital solutions?
        Connect with Yantrikisoft to harness the power of technology, enhance efficiency, and drive growth. Our team is here to turn your vision into reality. Get in touch with us today.
      </p>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <div className={styles.flexInputs}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className={styles.recaptcha}>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160998805!2d72.741101!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c0f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin&t=k"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
