import type { Metadata } from "next";
import AutomatizarAgencias from "../components/landing/AutomatizarAgencias";

const BASE_URL = "https://ras-tech.es";

export const metadata: Metadata = {
  title: "Automatizar Agencia Barcelona — Escala Sin Contratar | Reportes, Facturas, Hitos | RASTECH",
  description:
    "Agencias marketing, diseño y desarrollo Barcelona que triplicaron clientes sin nuevo hiring. Reportes automáticos, facturas Stripe, alertas hitos. 12+ implementadas.",
  keywords:
    "automatizar agencia barcelona, reportes automáticos agencia, facturas automáticas agencia, escalar agencia sin contratar barcelona",
  openGraph: {
    title: "Automatizar Agencia Barcelona — Escala Sin Contratar | RASTECH",
    description:
      "12+ agencias Barcelona. De 5 a 15 clientes sin contratar. €3.500/mes ahorrados. Consulta gratis 30 min.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: `${BASE_URL}/automatizar-agencias` },
};

export default AutomatizarAgencias;
