import styles from "@/styles/industries/IndustriesHero.module.css";

export default function IndustriesHero() {
  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20with%20glass%20facade%20at%20sunset%2C%20professional%20business%20atmosphere%2C%20dramatic%20lighting%2C%20high%20quality%2C%20realistic&width=1920&height=600&seq=ind1&orientation=landscape')",
      }}
    >
      <div className={styles.heroOverlay}></div>
      <div className={`${styles.heroContent} container`}>
        <div className={styles.contentGrid}>
          <div className={styles.leftContent}>
            <h1 className={styles.heroTitle}>Industry Wide Innovation</h1>
            <p className={styles.heroSubtitle}>Transforming Businesses Through Technology</p>
            <p className={styles.heroDesc}>
              Yantrikisoft is a leading technology consultancy that delivers innovative digital solutions across industries. We help businesses confidently navigate their digital transformation journey.
            </p>
            <a href="/contact" className={styles.ctaBtn}>
              Contact Us <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div>

          <div className={styles.rightImages}>
            <div className={styles.gridTwo}>
              <img
                  src="https://readdy.ai/api/search-image?query=modern%20office%20buildings%20with%20glass%20facades%20in%20urban%20setting%2C%20bright%20day%2C%20professional%20corporate%20environment%2C%20high%20quality%20realistic&width=300&height=300&seq=hex1&orientation=squarish"
                alt="Corporate"
                className={styles.imageBox}
              />
              <img
                  src="https://readdy.ai/api/search-image?query=healthcare%20professional%20in%20modern%20hospital%20setting%20with%20advanced%20medical%20equipment%2C%20professional%20medical%20environment%2C%20high%20quality%20realistic&width=300&height=300&seq=hex2&orientation=squarish"
                alt="Healthcare"
                className={styles.imageBox}
              />
            </div>
            <img
                  src="https://readdy.ai/api/search-image?query=modern%20data%20center%20with%20servers%20and%20blue%20LED%20lights%2C%20technological%20infrastructure%2C%20professional%20IT%20environment%2C%20high%20quality%20realistic&width=600&height=300&seq=hex3&orientation=landscape"
              alt="Data Center"
              className={`${styles.imageBox} ${styles.fullWidth}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
