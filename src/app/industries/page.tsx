import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesOverview from '@/components/industries/IndustriesOverview';
import IndustrySection from '@/components/industries/IndustrySection';
import IndustriesCTA from '@/components/industries/IndustriesCTA';

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustrySection />
      <IndustriesCTA />
    </main>
  );
}