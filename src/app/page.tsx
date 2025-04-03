import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/Hero/Hero";
import PricingSection from "@/components/PricingSection/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PricingSection/>
      <WhyChooseUs/>
      <ContactSection/>
    </div>
  );
}
