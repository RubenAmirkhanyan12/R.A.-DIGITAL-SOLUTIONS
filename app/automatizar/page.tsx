import { pageMetadata } from "../lib/seo";
import { SITE } from "../lib/site-config";
import { faqJsonLd, HUB_FAQS } from "../lib/faqs";
import AutomatizarSelector from "../components/landing/AutomatizarSelector";

export const metadata = pageMetadata({
  title: "Automatización de Procesos Barcelona: Guía por Sectores | RASTECH",
  description:
    "Automatización de procesos en Barcelona: guía por sectores (restaurantes, e-commerce, agencias, despachos y más) con n8n y Make. Pide una llamada gratuita.",
  path: "/automatizar",
});

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE.url },
        { "@type": "ListItem", "position": 2, "name": "Automatizar", "item": `${SITE.url}/automatizar` },
      ],
    },
    faqJsonLd(HUB_FAQS),
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
