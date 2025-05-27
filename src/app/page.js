"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AppPreviewSection from "./components/AppPreviewSection";
import PBSKSection from "./components/PBSKSection";
import PartnersSection from "./components/PartnersSection";
import PartnersContactSection from "./components/PartnersContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackToTopButton from "./components/BackToTopButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white relative scroll-smooth">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <AppPreviewSection />
        <PBSKSection />
        <PartnersSection />
        <PartnersContactSection />
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
}
