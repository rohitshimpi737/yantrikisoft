"use client";
import ContactForm from "@/components/HomePage/ContactUs";
import ContactCard from "@/components/contact/ContactCard";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>
          We’d love to hear about your project. Drop us a line and we’ll get back to you shortly.
        </p>
      </section>

      <section className={styles.cardsSection}>
        {/* <ContactCard icon="📍" title="Visit Us" detail="Pune, Maharashtra, India" /> */}
        <ContactCard icon="📞" title="Call Us" detail="+91 12345 67890" />
        <ContactCard icon="📧" title="Email Us" detail="contact@yantrikisoft.com" />
      </section>

      <section className={styles.formSection}>
        <ContactForm />
      </section>
    </main>
  );
}
