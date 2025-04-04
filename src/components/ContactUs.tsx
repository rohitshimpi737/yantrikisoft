"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/ContactUs.module.css";

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
      <h2 className={styles.heading}>CONTACT US</h2>
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
            Submit
          </button>
        </form>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?..." // Replace with actual embed link
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
