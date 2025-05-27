import Hero from '@/components/Services/custom-software-erp/Hero';
import WebDevelopmentLifecycle from '@/components/Services/custom-software-erp/WebDevelopmentLifecycle';
import WhatIsWebDevelopment from '@/components/Services/custom-software-erp/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/custom-software-erp/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/custom-software-erp/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/custom-software-erp/ServicesOffered';
import TechStackTabs from '@/components/Services/custom-software-erp/TechStack';
import WhyChooseUs from '@/components/Services/custom-software-erp/WhyChooseUs';
import StatsAndCTA from '@/components/Services/custom-software-erp/StatsAndCTA';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & ERP Solutions | Yantrikisoft",
  description: "Custom software and ERP development by YANTRIKISOFT. Tailored business solutions, automation, and scalable platforms for your enterprise.",
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
