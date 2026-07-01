import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Utensils, Package, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: <Utensils size={28} className="text-[#B8860B]" />,
    title: "Restaurantes",
    pain: "40h/semana en facturación, reservas y pedidos manuales",
    points: [
      "Facturación automática (pedido → factura → envío)",
      "Reservas centralizadas (tel + email + web = 1 calendario)",
      "Pedidos proveedores automáticos",
      "Reportes diarios en vivo",
    ],
    saving: "€2.500/mes ahorrados promedio",
    cta: "Automatizar Restaurante",
    href: "/automatizar-restaurantes",
    meta: "20+ restaurantes Barcelona",
  },
  {
    icon: <Package size={28} className="text-[#B8860B]" />,
    title: "E-commerce",
    pain: "25h/semana en gestión pedidos, stock desincronizado, 8% errores",
    points: [
      "Gestión pedidos automática (Shopify → factura → confirmación)",
      "Stock sincronizado real-time (tienda = almacén = proveedor)",
      "Devoluciones automáticas (cliente solicita → reembolso → stock)",
      "Dashboard de ventas en vivo",
    ],
    saving: "€4.200/mes ahorrados promedio",
    cta: "Automatizar E-commerce",
    href: "/automatizar-ecommerce",
    meta: "15+ e-commerce Barcelona",
  },
  {
    icon: <BarChart3 size={28} className="text-[#B8860B]" />,
    title: "Agencias",
    pain: "6h/cliente/semana en reportes, facturas manuales, hitos olvidados",
    points: [
      "Reportes automáticos cada lunes (GA + Ads + Conversiones)",
      "Facturas recurrentes automáticas (Stripe)",
      "Alertas de hitos automáticas",
      "Escalabilidad: de 5 clientes a 15 sin contratar",
    ],
    saving: "€3.500/mes ahorrados promedio",
    cta: "Automatizar Agencia",
    href: "/automatizar-agencias",
    meta: "12+ agencias Barcelona",
  },
];

export default function AutomatizarSelector() {
  return (
    <>
      <div className="min-h-screen bg-[#0F0F0F]">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#B8860B]/4 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                Automatización · Barcelona · RASTECH
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              ¿Qué Quieres Automatizar?
            </h1>

            <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
              20+ empresas Barcelona ya automatizan. Elige tu sector y descubre exactamente cuánto ahorrarías.
            </p>
          </div>
        </section>

        {/* ── 3 CARDS ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map(({ icon, title, pain, points, saving, cta, href, meta }) => (
              <div
                key={title}
                className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 p-7 transition-all flex flex-col"
              >
                <div className="mb-4">{icon}</div>

                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
                  {title}
                </h2>

                <p className="text-white font-semibold text-[15px] mb-4 leading-snug">{pain}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {points.map(p => (
                    <li key={p} className="text-white/60 text-[14px] leading-snug">
                      • {p}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#1A3A52]/30 border border-[#1A3A52]/60 p-4 mb-5">
                  <p className="text-[#B8860B] font-bold text-[15px]">{saving}</p>
                </div>

                <Link
                  href={href}
                  className="block text-center bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold py-3 px-6 w-full transition-all mb-3"
                >
                  {cta}
                </Link>

                <p className="text-white/45 text-xs text-center">{meta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SIGUIENTE PASO ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
              El Siguiente Paso
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8">
              Cada sector tiene un flujo diferente. Hemos documentado exactamente qué automatizar en cada caso.
            </p>

            <div className="bg-gradient-to-br from-[#1A3A52]/20 to-[#0F0F0F] border border-[#1A3A52]/50 p-8">
              <h3 className="text-white font-bold text-[17px] mb-2">
                Auditoría Gratis Para Tu Empresa
              </h3>
              <p className="text-white/60 text-[15px] mb-6">
                30 minutos · Zoom · Sin compromiso · Descubre exactamente qué podrías automatizar
              </p>
              <Link
                href="/sobre-nosotros#contacto"
                className="inline-block bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold py-4 px-8 transition-all"
              >
                Agendar Auditoría Gratis
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
