import React from 'react';
import styles from '@/styles/AllServices/Testimonials.module.css';

const testimonials = [
  {
    rating: 5,
    quote:
      'Yantrikisoft transformed our digital presence with a stunning website and effective SEO strategy. Our online traffic has increased by 200% since working with them.',
    name: 'Michael Richardson',
    title: 'CEO, TechVision Inc.',
  },
  {
    rating: 5,
    quote:
      'The mobile app developed by Yantrikisoft has revolutionized how we interact with our customers. The user experience is seamless and our customer satisfaction ratings have soared.',
    name: 'Sarah Johnson',
    title: 'Marketing Director, Retail Solutions',
  },
  {
    rating: 5,
    quote:
      'The custom ERP solution developed by Yantrikisoft has streamlined our operations and reduced manual processes by 70%. Their team\'s expertise and support have been invaluable.',
    name: 'David Thompson',
    title: 'Operations Manager, GlobalLogistics',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from businesses that have transformed their operations with our technology solutions.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.stars}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <i className="ri-user-line" />
                </div>
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
