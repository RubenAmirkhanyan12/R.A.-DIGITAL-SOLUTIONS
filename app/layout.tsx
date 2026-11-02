import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "./lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: "RASTECH | Automatización de Procesos Barcelona",
  description:
    "Automatización de procesos en Barcelona. RASTECH: especialistas en n8n y Make. 15+ empresas automatizadas. Auditoría gratis sin compromiso.",
  authors: [{ name: "Rubén Amirkhanyan" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
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
      <meta name="google-site-verification" content="YK1vSGe2rBq7dJ8fHfqW8uF6qyvUx1Dsm5NIkYNkXjc" />
        {/* Schema: definición única del negocio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "RASTECH",
              "url": SITE_URL,
              "description": "Automatización de procesos para pymes de Barcelona con n8n y Make.",
              "telephone": "+34 613 361 175",
              "email": "rubenamirkhanyan12@gmail.com",
              "priceRange": "€700 - €15.000",
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
                    "price": "700",
                    "priceCurrency": "EUR",
                    "description": "1-2 procesos, 2 semanas, soporte 30 días",
                  },
                  {
                    "@type": "Offer",
                    "name": "GROWTH",
                    "price": "1150",
                    "priceCurrency": "EUR",
                    "description": "3-5 procesos, 2-3 semanas, soporte 60 días",
                  },
                  {
                    "@type": "Offer",
                    "name": "ENTERPRISE",
                    "price": "1650",
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
