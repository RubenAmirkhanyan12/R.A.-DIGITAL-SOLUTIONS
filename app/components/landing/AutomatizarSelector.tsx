import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Utensils, Package, BarChart3, Sparkles } from "lucide-react";

interface Card {
  icon: React.ReactNode;
  title: string;
  pain: string;
  points: string[];
  saving: string;
  savingSubtext?: string;
  cta: string;
  href: string;
  meta: string;
}

const cards: Card[] = [
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
  {
    icon: <Sparkles size={28} className="text-[#B8860B]" />,
    title: "Tu Empresa",
    pain: "¿Abogado, consultor, veterinario, gym, academia u otro sector? Automatizamos procesos en cualquier tipo de empresa.",
    points: [
      "Análisis personalizado de tus procesos",
      "Propuesta creada específicamente para ti",
      "Presupuesto flexible — negociamos juntos",
      "Solución a medida para tu sector",
    ],
    saving: "Propuesta Personalizada",
    savingSubtext: "Cada empresa es diferente. Hablamos contigo y llegamos a un acuerdo.",
    cta: "Automatizar Mi Empresa",
    href: "/automatizar-otros",
    meta: "¿Tu sector no está arriba? Aquí sí.",
  },
];

const whyItems = [
  {
    icon: "💶",
    title: "Ahorro real: €43k/año promedio",
    desc: "Cada hora manual que eliminas es dinero que recuperas. 40h/semana en admin × €25/h × 52 semanas = €52,000. El 85% de eso ya no lo pagas.",
  },
  {
    icon: "📈",
    title: "Escala sin contratar",
    desc: "Con automatización puedes triplicar clientes o producción sin añadir personal admin. La automatización escala; el equipo humano se dedica a crear valor.",
  },
  {
    icon: "😌",
    title: "Procesos 24/7 sin intervención",
    desc: "Las facturas salen a las 3 AM. Los pedidos se procesan en fin de semana. Los reportes llegan el lunes a las 7 AM. Sin que nadie haga nada.",
  },
];

const whatWeAutomate = [
  {
    title: "Facturación automática",
    desc: "Pedido → factura → envío al cliente → contabilidad. Sin tocar Excel. Sin olvidar facturas. Sin errores manuales.",
  },
  {
    title: "Emails y seguimiento",
    desc: "Cotizaciones automáticas, recordatorios de cobro, confirmaciones de pedido, seguimiento post-venta. Todo sin intervención.",
  },
  {
    title: "Reportes y dashboards",
    desc: "Datos de ventas, producción, clientes y finanzas en tiempo real. Reportes semanales generados y enviados automáticamente.",
  },
  {
    title: "Cobros y pagos",
    desc: "Integración con Stripe, bancos, contabilidad. Alertas de impagados. Recordatorios de cobro automáticos. Conciliación bancaria.",
  },
  {
    title: "Gestión de clientes",
    desc: "Onboarding automático de nuevos clientes, recordatorios de renovación, encuestas de satisfacción, fidelización automática.",
  },
  {
    title: "Pedidos y stock",
    desc: "Pedidos automáticos a proveedores cuando baja el stock. Alertas de reposición. Inventario sincronizado en tiempo real.",
  },
];

const nextSteps = [
  { num: "1", label: "Selecciona tu sector", desc: "Elige arriba la opción que más se parece a tu empresa." },
  { num: "2", label: "Mira los casos reales", desc: "Empresas como la tuya ya lo hacen. Revisa los números documentados.", href: "/casos" },
  { num: "3", label: "Agenda análisis gratuito", desc: "30 min. Sin compromiso. Te damos el ROI exacto de tu caso.", href: "/#contacto" },
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

          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                Automatización · Barcelona · RASTECH
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Automatización de Procesos:{" "}
              <span className="text-[#B8860B]">Elige Tu Sector</span>
            </h1>

            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Cada sector tiene procesos diferentes. Aquí mostramos cómo automatizamos
              empresas como la tuya con ROI documentado desde el mes 1.
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/45">
              {["20+ empresas Barcelona", "Especialista n8n · Make", "ROI mes 1"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-[#10B981] text-xs">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ¿POR QUÉ AUTOMATIZAR? ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">¿Por qué ahora?</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mt-3">
                3 Razones Para Automatizar Tu Empresa
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whyItems.map(({ icon, title, desc }) => (
                <div key={title} className="bg-[#111111] border border-white/5 p-7 hover:border-[#B8860B]/15 transition-all">
                  <span className="text-4xl mb-4 block">{icon}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 SECTORES ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">Elige tu sector</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
              Soluciones Específicas por Sector
            </h2>
            <p className="text-white/45 text-sm max-w-xl mx-auto">
              Cada sector tiene procesos distintos. Hemos documentado exactamente qué automatizar en cada caso.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map(({ icon, title, pain, points, saving, savingSubtext, cta, href, meta }) => (
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
                  {savingSubtext && (
                    <p className="text-white/45 text-xs mt-2">{savingSubtext}</p>
                  )}
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

        {/* ── ¿QUÉ PODEMOS AUTOMATIZAR? ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">Alcance</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
                ¿Qué Podemos Automatizar en Tu Empresa?
              </h2>
              <p className="text-white/45 text-sm max-w-xl mx-auto">
                Cualquier proceso repetitivo que consume tiempo sin aportar valor diferencial.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/5">
              {whatWeAutomate.map((item, i) => (
                <details key={i} className="border-b border-white/5 last:border-0 group">
                  <summary className="flex items-center justify-between py-5 px-7 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <span className="text-[#B8860B] font-bold text-xs w-4 text-right shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-white/80 group-hover:text-white font-medium text-sm transition-colors">{item.title}</span>
                    </div>
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-white/10 text-white/40 ml-4 group-open:border-[#B8860B]/40 group-open:text-[#B8860B]">
                      +
                    </span>
                  </summary>
                  <p className="text-white/50 text-sm leading-relaxed px-7 pb-5 pl-14">{item.desc}</p>
                </details>
              ))}
            </div>
            <p className="text-white/30 text-xs text-center mt-5">
              +200 integraciones disponibles: Gmail, WhatsApp Business, Shopify, Stripe, Google Sheets, QuickBooks, HubSpot y más
            </p>
          </div>
        </section>

        {/* ── PRÓXIMOS PASOS ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">¿Cómo empezar?</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mt-3 mb-12">
              Próximos Pasos
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {nextSteps.map(({ num, label, desc, href }) => (
                <div key={num} className="relative">
                  <div className="bg-[#111111] border border-white/5 p-6 hover:border-[#B8860B]/15 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] font-bold mb-4 mx-auto">
                      {num}
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">{label}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                    {href && (
                      <Link href={href} className="inline-block mt-3 text-[#B8860B] text-xs hover:underline">
                        Ir →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[#1A3A52]/20 to-[#0F0F0F] border border-[#1A3A52]/50 p-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
                ¿No Sabes Por Dónde Empezar?
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Agenda un análisis gratuito de 30 min. Sin compromiso.
                Te decimos exactamente qué automatizar y cuánto ahorrarías.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-base px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
              >
                Agendar análisis gratuito (30 min) →
              </Link>
              <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs text-white/30">
                {["Sin compromiso", "Respuesta en 24h", "100% gratuito"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="text-[#10B981]">✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
