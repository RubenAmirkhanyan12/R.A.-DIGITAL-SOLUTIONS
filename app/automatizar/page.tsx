import type { Metadata } from "next";
import AutomatizarSelector from "../components/landing/AutomatizarSelector";

const BASE_URL = "https://ras-tech.es";

export const metadata: Metadata = {
  title: "Automatizar Tu Empresa Barcelona — Elige Tu Sector | RASTECH",
  description:
    "¿Restaurante, e-commerce o agencia? Elige tu sector y descubre exactamente qué automatizar. 20+ empresas Barcelona ya lo hacen.",
  keywords:
    "automatizar barcelona, automatización procesos, qué automatizar empresa",
  openGraph: {
    title: "Automatizar Tu Empresa Barcelona — Elige Tu Sector | RASTECH",
    description:
      "20+ empresas Barcelona. Elige sector: restaurantes, e-commerce, agencias.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: `${BASE_URL}/automatizar` },
};

export default AutomatizarSelector;
