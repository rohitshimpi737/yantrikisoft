import styles from "./page.module.css";
import HomeHeroSection from "@/components/HomeHeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ValuesSection from "@/components/ValuesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NotableClients from "@/components/NotableClients";
import ContactUs from "@/components/ContactUs";


export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeroSection />
      <AboutUsSection />
      <ValuesSection />
      <TechnologiesSection />
      <WhyChooseUs />
      <NotableClients />
      <ContactUs />
    </main>
  );
}
