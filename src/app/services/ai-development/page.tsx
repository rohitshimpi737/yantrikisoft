import Hero from '@/components/Services/ai-development/Hero';
import WebDevelopmentLifecycle from '@/components/Services/ai-development/WebDevelopmentLifecycle';
import WhatIsWebDevelopment from '@/components/Services/ai-development/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/ai-development/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/ai-development/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/ai-development/ServicesOffered';
import TechStackTabs from '@/components/Services/ai-development/TechStack';
import WhyChooseUs from '@/components/Services/ai-development/WhyChooseUs';
import StatsAndCTA from '@/components/Services/ai-development/StatsAndCTA';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development Services | Yantrikisoft",
  description: "AI development services by YANTRIKISOFT. Custom artificial intelligence solutions, machine learning, automation, and data-driven innovation for your business.",
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
