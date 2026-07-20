/* =============================================================
   HOME PAGE — North East UAV Aerial Services
   Design: Pacific Northwest Outdoor Brand meets Tech Startup
   Sections: Navbar → Hero → Services → About → Gallery → WhyUs → Contact → Footer
   ============================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
