import React from 'react';
import Link from 'next/link';
import styles from '@/styles/AllServices/ServicesSection.module.css';
import {
    RiLayout4Line,
    RiPenNibLine,
    RiMegaphoneLine,
    RiCodeSSlashLine,
    RiSmartphoneLine,
    RiBrainLine,
    RiToolsLine,
    RiVkLine,
    RiArrowRightLine,
} from 'react-icons/ri';

const services = [
    {
        icon: <RiLayout4Line size={32} />,
        title: 'UI/UX Design',
        desc: 'User-centric design strategies for seamless interfaces that enhance user experience and engagement.',
        link: '/services/ui-ux',
    },
    {
        icon: <RiPenNibLine size={32} />, 
        title: 'Content Writing',
        desc: 'Engaging, high-quality content tailored for your brand that resonates with your target audience.',
        link: '/services/content-writing',
    },
    {
        icon: <RiMegaphoneLine size={32} />, 
        title: 'Digital Marketing',
        desc: 'SEO, SEM, and social media strategies to boost online visibility and drive qualified traffic.',
        link: '/services/digital-marketing',
    },
    {
        icon: <RiCodeSSlashLine size={32} />, 
        title: 'Web Development',
        desc: 'Robust, responsive websites built to meet business needs and deliver exceptional user experiences.',
        link: '/services/web-development',
    },
    {
        icon: <RiSmartphoneLine size={32} />, 
        title: 'Mobile App Development',
        desc: 'Native and hybrid apps for superior user experience across all mobile platforms.',
        link: '/services/app-development',
    },
    {
        icon: <RiBrainLine size={32} />, 
        title: 'AI Development',
        desc: 'AI-based solutions to automate and optimize operations for increased efficiency.',
         link: '/services/ai-development',
    },
    {
        icon: <RiToolsLine size={32} />, 
        title: 'Custom Software & ERP',
        desc: 'Tailored software solutions for seamless business management and operational excellence.',
        link: '/services/custom-software-erp',
    },
    {
        icon: <RiVkLine size={32} />, 
        title: 'Immersive Technology',
        desc: 'AR/VR-based experiences for innovative engagement and interactive solutions.',
        link: '/services/immersive-technology',
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gradientOverlay}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Our Expertise</span>
                    <h2 className={styles.title}>Innovative Solutions for Modern Business</h2>
                    <p className={styles.subtitle}>
                        Empowering businesses with cutting-edge technology solutions that drive growth and digital transformation.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.desc}</p>
                            <Link href={service.link} className={styles.cardLink}>
                                Explore Service <RiArrowRightLine className={styles.cardArrow} />
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
