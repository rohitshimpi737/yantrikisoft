import Hero from '@/components/Services/ui-ux/Hero';
import WebDevelopmentLifecycle from '@/components/Services/ui-ux/WebDevelopmentLifecycle';
import WhatIsWebDevelopment from '@/components/Services/ui-ux/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/ui-ux/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/ui-ux/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/ui-ux/ServicesOffered';
import TechStackTabs from '@/components/Services/ui-ux/TechStack';
import WhyChooseUs from '@/components/Services/ui-ux/WhyChooseUs';
import StatsAndCTA from '@/components/Services/ui-ux/StatsAndCTA';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Yantrikisoft",
  description: "Discover UI/UX design services by YANTRIKISOFT. User-centric web and app design, seamless experiences, and creative digital solutions for your business.",
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
