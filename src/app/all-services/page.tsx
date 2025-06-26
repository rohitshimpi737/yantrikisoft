import React from 'react';
import AllServicesHeroSection from '@/components/AllServices/AllServicesHeroSection';
import ServicesSection from '@/components/AllServices/ServicesSection';
import CtaSection from '@/components/AllServices/CtaSection';
import WhyChooseUs from '@/components/AllServices/WhyChooseUs';
import Testimonials from '@/components/AllServices/Testimonials';
import Contact from '@/components/HomePage/ContactUs';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services | Yantrikisoft",
  description: "Explore all services offered by YANTRIKISOFT: Web, mobile, AI, immersive technologies, and more.",
};

const AllServicesPage = () => {
  return (
    <main>
      <AllServicesHeroSection />
      <ServicesSection />
      <CtaSection />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default AllServicesPage;
