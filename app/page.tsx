import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Automatización de Procesos Barcelona | €51k/Año · RASTECH",
  description:
    "Automatización de procesos en Barcelona: RASTECH. 20+ empresas, €51k/año ahorrados, ROI desde mes 1. Especialista n8n y Make. Auditoría gratis sin compromiso.",
  keywords: [
    "automatización de procesos barcelona",
    "automatizar procesos empresa barcelona",
    "especialista n8n barcelona",
    "automatización procesos administrativos",
    "ROI automatización barcelona",
    "make automatización barcelona",
    "reducir horas administrativas barcelona",
    "RASTECH automatización barcelona",
  ],
  openGraph: {
    title: "Automatización de Procesos Barcelona | €51k/Año · RASTECH",
    description:
      "¿Cuánto ahorra tu empresa automatizando en Barcelona? RASTECH: 20+ empresas, €51k/año ahorrados. Especialista n8n. Auditoría gratis.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de Procesos Barcelona | €51k/Año · RASTECH",
    description:
      "Automatización de procesos Barcelona. 20+ empresas, €51k/año ahorrados. Especialista n8n. Auditoría gratis.",
  },
};
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
