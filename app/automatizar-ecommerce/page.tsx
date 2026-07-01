import type { Metadata } from "next";
import AutomatizarEcommerce from "../components/landing/AutomatizarEcommerce";

const BASE_URL = "https://ras-tech.es";

export const metadata: Metadata = {
  title: "Automatizar E-commerce Barcelona — De 25h Gestión Pedidos a 3h Automático | RASTECH",
  description:
    "Automatización para Shopify, WooCommerce y tiendas online Barcelona. Gestión pedidos, stock sincronizado, devoluciones automáticas. 15+ implementados. Consulta gratis.",
  keywords:
    "automatizar ecommerce barcelona, automatización shopify barcelona, gestión pedidos automática, stock sincronizado shopify",
  openGraph: {
    title: "Automatizar E-commerce Barcelona — De 25h a 3h Automático | RASTECH",
    description:
      "15+ e-commerce Barcelona. €4.200/mes ahorrados. Stock sincronizado, pedidos automáticos. Consulta gratis 30 min.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: `${BASE_URL}/automatizar-ecommerce` },
};

export default AutomatizarEcommerce;
