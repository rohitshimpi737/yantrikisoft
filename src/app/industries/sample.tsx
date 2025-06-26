import styles from './page.module.css';

// --- Hero Section ---
function IndustriesHero() {
  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20with%20glass%20facade%20at%20sunset%2C%20professional%20business%20atmosphere%2C%20dramatic%20lighting%2C%20high%20quality%2C%20realistic&width=1920&height=600&seq=ind1&orientation=landscape')",
      }}
    >
      <div className={styles.heroOverlay}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 text-white mb-10 md:mb-0">
            <h1 className={styles.heroTitle}>Industry Wide Innovation</h1>
            <p className={styles.heroSubtitle}>Transforming Businesses Through Technology</p>
            <p className="text-lg mb-8 max-w-2xl">
              Yantrikisoft is a leading technology consultancy that specializes in delivering innovative digital solutions across multiple industries. With over a decade of experience, we help businesses navigate their digital transformation journey with confidence.
            </p>
            <a
              href="#"
              className={`${styles.ctaBtn} inline-flex items-center`}
            >
              Contact Us
              <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div>
          <div className="w-full md:w-2/5 flex justify-end">
            <div className="grid grid-cols-2 gap-4">
              <div className={styles.hexagonImg}>
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20office%20buildings%20with%20glass%20facades%20in%20urban%20setting%2C%20bright%20day%2C%20professional%20corporate%20environment%2C%20high%20quality%20realistic&width=300&height=300&seq=hex1&orientation=squarish"
                  alt="Corporate Buildings"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className={styles.hexagonImg}>
                <img
                  src="https://readdy.ai/api/search-image?query=healthcare%20professional%20in%20modern%20hospital%20setting%20with%20advanced%20medical%20equipment%2C%20professional%20medical%20environment%2C%20high%20quality%20realistic&width=300&height=300&seq=hex2&orientation=squarish"
                  alt="Healthcare"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className={`${styles.hexagonImg} col-span-2`}>
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20data%20center%20with%20servers%20and%20blue%20LED%20lights%2C%20technological%20infrastructure%2C%20professional%20IT%20environment%2C%20high%20quality%20realistic&width=600&height=300&seq=hex3&orientation=landscape"
                  alt="Technology Infrastructure"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Overview Section ---
function IndustriesOverview() {
  return (
    <section className={styles.overviewSection}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored solutions that address unique challenges and drive innovation in each sector.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Education Section ---
function EducationSection() {
  return (
    <section className={styles.industrySection}>
      <div className="container mx-auto px-4">
        <div className={styles.industryCardRow}>
          <div className={styles.industryCardContent}>
            <h2 className={styles.industryTitle}>Education</h2>
            <p className="mb-6 text-gray-700">
              We provide innovative digital solutions for educational institutions that enhance learning experiences, streamline administrative processes, and facilitate better communication between students, teachers, and parents. Our technology empowers educators to deliver high-quality education efficiently.
            </p>
            <ul className="space-y-3">
              <li className={styles.checkItem}><span>Learning Management Systems (LMS)</span></li>
              <li className={styles.checkItem}><span>Student Information Systems</span></li>
              <li className={styles.checkItem}><span>Virtual Classroom Solutions</span></li>
              <li className={styles.checkItem}><span>Educational Content Management</span></li>
              <li className={styles.checkItem}><span>Assessment and Analytics Platforms</span></li>
            </ul>
          </div>
          <div className={styles.industryCardImage}>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20classroom%20with%20students%20using%20digital%20tablets%20and%20interactive%20displays%2C%20bright%20learning%20environment%2C%20engaged%20students%2C%20technology%20in%20education%2C%20high%20quality%20realistic&width=600&height=450&seq=edu1&orientation=landscape"
              alt="Education Technology"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Healthcare Section ---
function HealthcareSection() {
  return (
    <section className={styles.industrySection}>
      <div className="container mx-auto px-4">
        <div className={styles.industryCardRowReverse}>
          <div className={styles.industryCardImage}>
            <img
              src="https://readdy.ai/api/search-image?query=healthcare%20professional%20with%20digital%20tablet%20consulting%20with%20patient%2C%20modern%20medical%20facility%2C%20professional%20medical%20environment%2C%20caring%20interaction%2C%20high%20quality%20realistic&width=600&height=450&seq=health1&orientation=landscape"
              alt="Healthcare Solutions"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className={styles.industryCardContent}>
            <h2 className={styles.industryTitle}>Healthcare</h2>
            <p className="mb-6 text-gray-700">
              We assist healthcare providers with technological solutions that help to bring better patient care, improved outcomes, and streamlined operations. Our software is developed while complying with relevant industry regulations like HIPPA.
            </p>
            <ul className="space-y-3">
              <li className={styles.checkItem}><span>Electronic Health Records (EHR) Systems</span></li>
              <li className={styles.checkItem}><span>Health Monitoring Apps</span></li>
              <li className={styles.checkItem}><span>Telemedicine Platforms</span></li>
              <li className={styles.checkItem}><span>Appointment Scheduling Apps</span></li>
              <li className={styles.checkItem}><span>Medical Billing Software</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- E-commerce Section ---
function EcommerceSection() {
  return (
    <section className={styles.industrySection}>
      <div className="container mx-auto px-4">
        <div className={styles.industryCardRow}>
          <div className={styles.industryCardContent}>
            <h2 className={styles.industryTitle}>E-commerce</h2>
            <p className="mb-6 text-gray-700">
              We develop comprehensive e-commerce solutions that help businesses sell products and services online effectively. Our platforms are designed to provide seamless shopping experiences, secure payment processing, and efficient inventory management.
            </p>
            <ul className="space-y-3">
              <li className={styles.checkItem}><span>Custom E-commerce Platforms</span></li>
              <li className={styles.checkItem}><span>Payment Gateway Integration</span></li>
              <li className={styles.checkItem}><span>Inventory Management Systems</span></li>
              <li className={styles.checkItem}><span>Customer Relationship Management</span></li>
              <li className={styles.checkItem}><span>Analytics and Reporting Tools</span></li>
            </ul>
          </div>
          <div className={styles.industryCardImage}>
            <img
              src="https://readdy.ai/api/search-image?query=person%20shopping%20online%20with%20laptop%20and%20credit%20card%2C%20e-commerce%20concept%2C%20digital%20shopping%20experience%2C%20modern%20lifestyle%2C%20high%20quality%20realistic&width=600&height=450&seq=ecom1&orientation=landscape"
              alt="E-commerce Solutions"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Infrastructure Section ---
function InfrastructureSection() {
  return (
    <section className={styles.industrySection}>
      <div className="container mx-auto px-4">
        <div className={styles.industryCardRowReverse}>
          <div className={styles.industryCardImage}>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20server%20room%20with%20network%20equipment%2C%20data%20center%20with%20blue%20LED%20lights%2C%20high-tech%20infrastructure%2C%20professional%20IT%20environment%2C%20high%20quality%20realistic&width=600&height=450&seq=infra1&orientation=landscape"
              alt="Infrastructure Solutions"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className={styles.industryCardContent}>
            <h2 className={styles.industryTitle}>Infrastructure</h2>
            <p className="mb-6 text-gray-700">
              We provide robust infrastructure solutions that form the backbone of digital operations. Our services ensure reliable, scalable, and secure IT environments that support business growth and technological advancement.
            </p>
            <ul className="space-y-3">
              <li className={styles.checkItem}><span>Cloud Infrastructure Setup</span></li>
              <li className={styles.checkItem}><span>Network Design and Implementation</span></li>
              <li className={styles.checkItem}><span>Data Center Management</span></li>
              <li className={styles.checkItem}><span>Disaster Recovery Solutions</span></li>
              <li className={styles.checkItem}><span>IT Security Infrastructure</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Entertainment Section ---
function EntertainmentSection() {
  return (
    <section className={styles.industrySection}>
      <div className="container mx-auto px-4">
        <div className={styles.industryCardRow}>
          <div className={styles.industryCardContent}>
            <h2 className={styles.industryTitle}>Entertainment</h2>
            <p className="mb-6 text-gray-700">
              We create innovative digital solutions for the entertainment industry that enhance content delivery, audience engagement, and revenue generation. Our technologies help media companies adapt to the evolving digital landscape.
            </p>
            <ul className="space-y-3">
              <li className={styles.checkItem}><span>Content Streaming Platforms</span></li>
              <li className={styles.checkItem}><span>Digital Rights Management</span></li>
              <li className={styles.checkItem}><span>Interactive Media Applications</span></li>
              <li className={styles.checkItem}><span>Audience Analytics Solutions</span></li>
              <li className={styles.checkItem}><span>Content Management Systems</span></li>
            </ul>
          </div>
          <div className={styles.industryCardImage}>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20entertainment%20studio%20with%20cameras%2C%20lighting%20equipment%2C%20and%20digital%20displays%2C%20professional%20media%20production%20environment%2C%20high-tech%20entertainment%20industry%2C%20high%20quality%20realistic&width=600&height=450&seq=ent1&orientation=landscape"
              alt="Entertainment Solutions"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CTA Section ---
function IndustriesCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={styles.sectionTitle}>Ready to Transform Your Industry?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Partner with Yantrikisoft to leverage our industry expertise and technological capabilities for your business growth.
        </p>
        <a
          href="#"
          className={`${styles.ctaBtn} inline-flex items-center`}
        >
          Contact Us Today
          <i className="ri-arrow-right-line ri-lg ml-2"></i>
        </a>
      </div>
    </section>
  );
}

// --- Main Page ---
export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesOverview />
      <EducationSection />
      <HealthcareSection />
      <EcommerceSection />
      <InfrastructureSection />
      <EntertainmentSection />
      <IndustriesCTA />
    </main>
  );
}