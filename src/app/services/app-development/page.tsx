import Hero from '@/components/Services/app-development/Hero';
import WebDevelopmentLifecycle from '@/components/Services/app-development/WebDevelopmentLifecycle';
import WhatIsWebDevelopment from '@/components/Services/app-development/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/app-development/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/app-development/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/app-development/ServicesOffered';
import TechStackTabs from '@/components/Services/app-development/TechStack';
import WhyChooseUs from '@/components/Services/app-development/WhyChooseUs';
import StatsAndCTA from '@/components/Services/app-development/StatsAndCTA';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development Services | Yantrikisoft",
  description: "Mobile app development services by YANTRIKISOFT. Custom iOS, Android, and cross-platform solutions for your business growth.",
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
