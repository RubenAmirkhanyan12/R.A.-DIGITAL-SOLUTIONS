import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import SolutionsSection from "./components/SolutionsSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import CookiesBanner from "./components/CookiesBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <ProcessSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <CookiesBanner />
    </>
  );
}
