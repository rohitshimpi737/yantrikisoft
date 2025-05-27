import Hero from '@/components/Services/content-writing/Hero';
import ContentWritingLifecycle from '@/components/Services/content-writing/ContentWritingLifecycle';
import WhatIsWebDevelopment from '@/components/Services/content-writing/WhatIsWebDevelopment';
import WhyWebsiteMatters from '@/components/Services/content-writing/WhyWebsiteMatters';
import TaglineSection from '@/components/Services/content-writing/TaglineSection';
import React from 'react';
import ServicesOffered from '@/components/Services/content-writing/ServicesOffered';
import TechStackTabs from '@/components/Services/content-writing/TechStack';
import WhyChooseUs from '@/components/Services/content-writing/WhyChooseUs';
import StatsAndCTA from '@/components/Services/content-writing/StatsAndCTA';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services | Yantrikisoft",
  description: "Professional content writing services by YANTRIKISOFT. SEO content, blogs, website copy, and creative writing for your business growth.",
};

const CustomService = () => {
  return (
    <main>
        <Hero />
        <WhatIsWebDevelopment />
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
