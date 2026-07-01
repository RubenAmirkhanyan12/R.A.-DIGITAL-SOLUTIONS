import type { Metadata } from "next";
import AutomatizarOtros from "../components/landing/AutomatizarOtros";

const BASE_URL = "https://ras-tech.es";

export const metadata: Metadata = {
  title: "Automatiza Tu Empresa — Propuesta Personalizada | RASTECH",
  description:
    "¿Tu sector no está en nuestras opciones? Cuéntanos tu empresa y te enviamos una propuesta personalizada de automatización. Barcelona. Sin compromiso.",
  keywords:
    "automatizar empresa barcelona, propuesta personalizada automatización, automatización procesos empresa",
  openGraph: {
    title: "Automatiza Tu Empresa — Propuesta Personalizada | RASTECH",
    description: "Presupuesto personalizado para tu empresa. Sin compromiso.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: `${BASE_URL}/automatizar-otros` },
};

export default AutomatizarOtros;
