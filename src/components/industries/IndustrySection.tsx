import styles from '@/styles/industries/IndustrySection.module.css';

const sections = [
  {
    title: "Education",
    desc: "We provide innovative digital solutions for educational institutions that enhance learning experiences, streamline administrative processes, and facilitate better communication between students, teachers, and parents. Our technology empowers educators to deliver high-quality education efficiently.",
    image: "https://readdy.ai/api/search-image?query=modern%20classroom%20with%20students%20using%20digital%20tablets%20and%20interactive%20displays%2C%20bright%20learning%20environment%2C%20engaged%20students%2C%20technology%20in%20education%2C%20high%20quality%20realistic&width=600&height=450&seq=edu1&orientation=landscape",
    points: [
      "Learning Management Systems (LMS)",
      "Student Information Systems",
      "Virtual Classroom Solutions",
      "Educational Content Management",
      "Assessment and Analytics Platforms"
    ],
    reverse: false
  },
  {
    title: "Healthcare",
    desc: "We assist healthcare providers with technological solutions that help to bring better patient care, improved outcomes, and streamlined operations. Our software is developed while complying with relevant industry regulations like HIPPA.",
    image: "https://readdy.ai/api/search-image?query=healthcare%20professional%20with%20digital%20tablet%20consulting%20with%20patient%2C%20modern%20medical%20facility%2C%20professional%20medical%20environment%2C%20caring%20interaction%2C%20high%20quality%20realistic&width=600&height=450&seq=health1&orientation=landscape",
    points: [
      "Electronic Health Records (EHR) Systems",
      "Health Monitoring Apps",
      "Telemedicine Platforms",
      "Appointment Scheduling Apps",
      "Medical Billing Software"
    ],
    reverse: true
  },
  {
    title: "E-commerce",
    desc: "We develop comprehensive e-commerce solutions that help businesses sell products and services online effectively. Our platforms are designed to provide seamless shopping experiences, secure payment processing, and efficient inventory management.",
    image: "https://readdy.ai/api/search-image?query=person%20shopping%20online%20with%20laptop%20and%20credit%20card%2C%20e-commerce%20concept%2C%20digital%20shopping%20experience%2C%20modern%20lifestyle%2C%20high%20quality%20realistic&width=600&height=450&seq=ecom1&orientation=landscape",
    points: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Customer Relationship Management",
      "Analytics and Reporting Tools"
    ],
    reverse: false
  },
  {
    title: "Infrastructure",
    desc: "We provide robust infrastructure solutions that form the backbone of digital operations. Our services ensure reliable, scalable, and secure IT environments that support business growth and technological advancement.",
    image: "https://readdy.ai/api/search-image?query=modern%20server%20room%20with%20network%20equipment%2C%20data%20center%20with%20blue%20LED%20lights%2C%20high-tech%20infrastructure%2C%20professional%20IT%20environment%2C%20high%20quality%20realistic&width=600&height=450&seq=infra1&orientation=landscape",
    points: [
      "Cloud Infrastructure Setup",
      "Network Design and Implementation",
      "Data Center Management",
      "Disaster Recovery Solutions",
      "IT Security Infrastructure"
    ],
    reverse: true
  },
  {
    title: "Entertainment",
    desc: "We create innovative digital solutions for the entertainment industry that enhance content delivery, audience engagement, and revenue generation. Our technologies help media companies adapt to the evolving digital landscape.",
    image: "https://readdy.ai/api/search-image?query=modern%20entertainment%20studio%20with%20cameras%2C%20lighting%20equipment%2C%20and%20digital%20displays%2C%20professional%20media%20production%20environment%2C%20high-tech%20entertainment%20industry%2C%20high%20quality%20realistic&width=600&height=450&seq=ent1&orientation=landscape",
    points: [
      "Content Streaming Platforms",
      "Digital Rights Management",
      "Interactive Media Applications",
      "Audience Analytics Solutions",
      "Content Management Systems"
    ],
    reverse: false
  }
];

export default function IndustrySection() {
  return (
    <section className={styles.industrySection}>
      <div className="container mx-auto px-4">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={
              section.reverse
                ? styles.industryCardRowReverse
                : styles.industryCardRow
            }
          >
            <div className={styles.industryCardContent}>
              <h2 className={styles.industryTitle}>{section.title}</h2>
              <p className={styles.industryDesc}>{section.desc}</p>
              <ul>
                {section.points.map((point: string, pidx: number) => (
                  <li className={styles.checkItem} key={pidx}>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.industryCardImage}>
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
