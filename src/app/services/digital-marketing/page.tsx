import Hero from '@/components/Services/digital-marketing/Hero';
import ContentWritingLifecycle from '@/components/Services/digital-marketing/ContentWritingLifecycle';
import WhatIsDigitalMarketing from '@/components/Services/digital-marketing/WhatIsDigitalMarketing';
import WhyWebsiteMatters from '@/components/Services/digital-marketing/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/digital-marketing/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/digital-marketing/ServicesOffered';
import TechStackTabs from '@/components/Services/digital-marketing/TechStack';
import WhyChooseUs from '@/components/Services/digital-marketing/WhyChooseUs';
import StatsAndCTA from '@/components/Services/digital-marketing/StatsAndCTA';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Yantrikisoft",
  description: "Discover digital marketing services by YANTRIKISOFT. SEO, content, social media, and growth strategies for your business success.",
};

const CustomService = () => {
  return (
    <main>
        <Hero />
        <WhatIsDigitalMarketing />
        <ContentWritingLifecycle />
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
