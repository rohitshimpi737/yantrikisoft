'use client';

import HeroSection from '@/components/about/HeroSection';
import CompanySection from '@/components/about/CompanySection';
import MissionVision from '@/components/about/MissionVision';
import FounderSection from '@/components/about/FounderSection';
import TeamSection from '@/components/about/TeamSection';
const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <CompanySection />
        <MissionVision/>
        <FounderSection />
        <TeamSection />
    </main>
  );
};

export default AboutPage;
