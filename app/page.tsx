import { pageMetadata } from "./lib/seo";
import Navbar from "./components/Navbar";

export const metadata = pageMetadata({
  title: "Automatización de procesos para pymes en Barcelona | RASTECH",
  description:
    "Automatización de procesos para pymes en Barcelona: facturación, reportes, pedidos y seguimiento de clientes con n8n y Make. Pide una llamada gratuita.",
  path: "/",
});
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import ProcessSection from "./components/ProcessSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import HowIWorkSection from "./components/HowIWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ROICalculator from "./components/ROICalculator";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <HowIWorkSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ROICalculator />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
