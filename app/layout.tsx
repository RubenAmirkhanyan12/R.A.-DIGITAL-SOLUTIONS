import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* ── Pon aquí tu Measurement ID de Google Analytics 4 ───────── */
const GA_ID = "G-XXXXXXXXXX"; // ← reemplaza con tu ID real

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RASTECH — Automatización Procesos Barcelona | €51k/año Ahorrados | Especialista n8n",
  description:
    "RASTECH automatiza procesos manuales en empresas Barcelona. €51k/año ahorrados. 20+ empresas. Especialista n8n, Make. Auditoría gratis 60 min sin compromiso.",
  keywords: [
    "automatización procesos Barcelona",
    "RASTECH automatización Barcelona",
    "n8n Barcelona especialista",
    "automatizar facturación empresa",
    "eliminar tareas manuales negocio",
    "Make Zapier n8n Barcelona",
    "reducir horas administrativas",
    "ahorro automatización empresa",
  ],
  authors: [{ name: "Rubén Amirkhanyan" }],
  openGraph: {
    title: "RASTECH — Automatización Procesos Barcelona | €51k/año Ahorrados",
    description:
      "RASTECH automatiza procesos manuales en empresas Barcelona. €51k/año ahorrados. 20+ empresas. Especialista n8n, Make. Auditoría gratis sin compromiso.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  twitter: {
    card: "summary_large_image",
    title: "RASTECH — Automatización Procesos Barcelona",
    description:
      "RASTECH automatiza procesos manuales. €51k/año ahorrados. 20+ empresas Barcelona. Auditoría gratis 60 min.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        {/* Schema: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RASTECH",
              "alternateName": "Rubén Amirkhanyan",
              "url": "https://ras-tech.es",
              "logo": "https://ras-tech.es/logo.png",
              "description": "Automatización de procesos para empresas Barcelona. Especialista n8n, Make, integraciones.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+34-613-361-115",
                "email": "rubenamirkhanyan12@gmail.com",
              },
              "areaServed": {
                "@type": "Place",
                "name": "Barcelona, España",
              },
            }),
          }}
        />
        {/* Schema: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RASTECH",
              "image": "https://ras-tech.es/logo.png",
              "description": "Automatización de procesos administrativos en Barcelona",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Barcelona",
                "addressLocality": "Barcelona",
                "addressRegion": "Catalonia",
                "postalCode": "08000",
                "addressCountry": "ES",
              },
              "telephone": "+34-613-361-115",
              "url": "https://ras-tech.es",
              "priceRange": "€550 - €5150",
            }),
          }}
        />
        {/* Schema: ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "RASTECH - Automatización de Procesos",
              "description": "Especialistas en automatización de procesos con n8n, Make, integraciones. ROI documentado desde el mes 1.",
              "provider": {
                "@type": "Person",
                "name": "Rubén Amirkhanyan",
              },
              "areaServed": "Barcelona",
              "availableLanguage": ["es"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Paquetes de automatización",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "STARTER",
                    "price": "550",
                    "priceCurrency": "EUR",
                    "description": "1-2 procesos, 2 semanas, soporte 30 días",
                  },
                  {
                    "@type": "Offer",
                    "name": "GROWTH",
                    "price": "2600",
                    "priceCurrency": "EUR",
                    "description": "3-5 procesos, 2-3 semanas, soporte 60 días",
                  },
                  {
                    "@type": "Offer",
                    "name": "ENTERPRISE",
                    "price": "5150",
                    "priceCurrency": "EUR",
                    "description": "6+ procesos, 3-4 semanas, retainer mensual disponible",
                  },
                ],
              },
            }),
          }}
        />
        {/* Google Analytics 4 — carga después de que la página sea interactiva */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-[#F8F9FA] antialiased">
        {children}
      </body>
    </html>
  );
}
