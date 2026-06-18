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
  title: "RASTECH | Automatización de Procesos Barcelona · Ahorra 40h/semana",
  description:
    "Automatizamos los procesos administrativos de restaurantes, agencias y despachos en Barcelona. Facturación, emails, reportes y seguimiento en automático. ROI documentado desde el mes 1.",
  keywords: [
    "automatización procesos Barcelona",
    "automatizar facturación empresa",
    "eliminar tareas manuales negocio",
    "ahorro tiempo administración",
    "automatización small business España",
    "Zapier Make n8n Barcelona",
    "reducir horas administrativas",
  ],
  authors: [{ name: "Rubén Amirkhanyan" }],
  openGraph: {
    title: "RASTECH | 40 Horas Que No Necesitas",
    description:
      "Restaurantes, agencias y despachos en Barcelona reducen administrativo en 85%. ROI documentado. Desde €3,500.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  twitter: {
    card: "summary_large_image",
    title: "RASTECH | Automatización de Procesos Barcelona",
    description:
      "Reducimos las horas administrativas de tu empresa en un 85%. Casos documentados, ROI real.",
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
