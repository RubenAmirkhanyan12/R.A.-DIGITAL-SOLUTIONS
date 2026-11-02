import { pageMetadata } from "../lib/seo";
import AutomatizarSelector from "../components/landing/AutomatizarSelector";

export const metadata = pageMetadata({
  title: "Automatización de Procesos Barcelona: Guía por Sectores | RASTECH",
  description:
    "Automatización de procesos en Barcelona. Guía completa por sector: restaurantes, e-commerce, agencias, despachos, servicios. ROI documentado. Especialista n8n y Make.",
  path: "/automatizar",
});

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.ras-tech.es" },
        { "@type": "ListItem", "position": 2, "name": "Automatizar", "item": "https://www.ras-tech.es/automatizar" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué procesos se pueden automatizar en una empresa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Facturación, emails de seguimiento, reportes, cobros, pedidos a proveedores, gestión de clientes, onboarding, dashboards. Cualquier tarea repetitiva que consume tiempo sin aportar valor.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta automatizar procesos en Barcelona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Desde €700 para 1-2 procesos (STARTER) hasta €1.650+ para proyectos enterprise. El análisis inicial es gratuito y el precio se cierra antes de empezar.",
          },
        },
      ],
    },
  ],
};

export default function AutomatizarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <AutomatizarSelector />
    </>
  );
}
