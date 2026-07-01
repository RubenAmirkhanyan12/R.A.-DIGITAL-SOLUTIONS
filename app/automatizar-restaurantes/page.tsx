import type { Metadata } from "next";
import AutomatizarRestaurantes from "../components/landing/AutomatizarRestaurantes";

const BASE_URL = "https://ras-tech.es";

export const metadata: Metadata = {
  title: "Automatizar Restaurante Barcelona — De 40h Facturación a 5h Automático | RASTECH",
  description:
    "Especialistas en automatización para restaurantes, bares y catering Barcelona. 20+ implementados. Facturación, reservas, pedidos proveedores. Payback 1 mes.",
  keywords:
    "automatizar restaurante barcelona, automatización facturación restaurante, reservas automáticas restaurante barcelona, n8n restaurante",
  openGraph: {
    title: "Automatizar Restaurante Barcelona — De 40h a 5h Automático | RASTECH",
    description:
      "20+ restaurantes Barcelona implementados. €2.500/mes ahorrados. Payback 1 mes. Consulta gratis 30 min.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: `${BASE_URL}/automatizar-restaurantes` },
};

export default AutomatizarRestaurantes;
