import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "R.A. Soluciones Digitales | Ingeniero Informático",
  description:
    "Soluciones digitales premium para empresas que quieren escalar. Webs que convierten, automatizaciones inteligentes y apps 100% personalizadas. Auditoría gratuita.",
  keywords: [
    "desarrollo web",
    "soluciones digitales",
    "ingeniero informático",
    "automatización",
    "apps personalizadas",
    "España",
  ],
  authors: [{ name: "Rubén Amirkhanyan Svazyan" }],
  openGraph: {
    title: "R.A. Soluciones Digitales | Transformamos Tu Negocio",
    description:
      "Cada pixel, cada línea de código, diseñado para generar resultados. Webs y apps 100% personalizadas.",
    type: "website",
    locale: "es_ES",
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
      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-[#F8F9FA] antialiased">
        {children}
      </body>
    </html>
  );
}
