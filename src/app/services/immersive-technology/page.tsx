import Hero from '@/components/Services/immersive-technology/Hero';
import WebDevelopmentLifecycle from '@/components/Services/immersive-technology/WebDevelopmentLifecycle';
import WhatIsWebDevelopment from '@/components/Services/immersive-technology/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/immersive-technology/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/immersive-technology/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/immersive-technology/ServicesOffered';
import TechStackTabs from '@/components/Services/immersive-technology/TechStack';
import WhyChooseUs from '@/components/Services/immersive-technology/WhyChooseUs';
import StatsAndCTA from '@/components/Services/immersive-technology/StatsAndCTA';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive Technology Services | Yantrikisoft",
  description: "Explore immersive technology services by YANTRIKISOFT: AR, VR, MR, and XR solutions for next-generation business experiences.",
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
