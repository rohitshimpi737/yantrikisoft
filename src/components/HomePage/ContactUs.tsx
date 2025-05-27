"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/HomePage/ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Access Service ID from .env
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Access Template ID from .env
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Access Public Key from .env
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent!");
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className={styles.contactSection}>
      <p className={styles.subheading}>Let’s Discuss Your Project</p>
      <p className={styles.description}>
        Ready to transform your business with innovative digital solutions? Get
        in touch with our team today.
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
