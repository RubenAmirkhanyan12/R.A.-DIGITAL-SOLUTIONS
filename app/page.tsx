import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import ProcessSection from "./components/ProcessSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ROICalculator from "./components/ROICalculator";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CookiesBanner from "./components/CookiesBanner";
import LeadMagnetPopup from "./components/LeadMagnetPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ROICalculator />
        <CTASection />
      </main>
      <Footer />
      <CookiesBanner />
      <LeadMagnetPopup />
    </>
  );
}
