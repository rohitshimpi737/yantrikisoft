import styles from "./page.module.css";
import HomeHeroSection from "@/components/HomePage/HomeHeroSection";
import AboutUsSection from "@/components/HomePage/AboutUsSection";
import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection";
import NotableClients from "@/components/HomePage/NotableClients";
import ContactUs from "@/components/HomePage/ContactUs";
import ProcessSection from "@/components/HomePage/ProcessSection";
import SkillsSection from "@/components/HomePage/SkillsSection";
import HowWeCreateValue from "@/components/HomePage/HowWeCreateValue";
import OurServices from "@/components/HomePage/OurServices";
import OurProducts from "@/components/HomePage/OurProducts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yantrikisoft",
  description: "YANTRIKISOFT: Web, mobile, AI, and immersive technology solutions for business growth. Explore our services, products, and client success stories.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeroSection />
      <AboutUsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <SkillsSection />
      <HowWeCreateValue />
      <OurServices />
      <OurProducts />
      <NotableClients />
      <ContactUs />
    </main>
  );
}
