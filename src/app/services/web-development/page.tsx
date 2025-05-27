import Hero from '@/components/Services/web-development/Hero';
import WebDevelopmentLifecycle from '@/components/Services/web-development/WebDevelopmentLifecycle';
import WhatIsWebDevelopment from '@/components/Services/web-development/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/web-development/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/web-development/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/web-development/ServicesOffered';
import TechStackTabs from '@/components/Services/web-development/TechStack';
import WhyChooseUs from '@/components/Services/web-development/WhyChooseUs';
import StatsAndCTA from '@/components/Services/web-development/StatsAndCTA';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Web Development Services | Yantrikisoft",
  description: "Professional web development services by YANTRIKISOFT. Custom websites, scalable solutions, and optimized performance for your business growth.",
};

const CustomService = () => {
  return (
    <main>
        <Hero />
        <WhatIsWebDevelopment />
        <WebDevelopmentLifecycle />
        <WhyWebsiteMatters />
        <TaglineSection />
        <ServicesOffered />
        <TechStackTabs />
        <WhyChooseUs />
        <StatsAndCTA/>
    </main>


  );
};

export default CustomService;
