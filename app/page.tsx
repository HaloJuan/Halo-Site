import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </div>
  );
}