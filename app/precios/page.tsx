import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ROICalculator from "../components/ROICalculator";

export const metadata: Metadata = {
  title: "Precio Automatización Procesos Barcelona: Desde €700 con ROI Garantizado | RASTECH",
  description:
    "Precio automatización procesos Barcelona. 3 planes: STARTER desde €700, GROWTH desde €1.150, ENTERPRISE desde €1.650. ROI documentado. Análisis gratuito sin compromiso.",
  keywords: [
    "precio automatización barcelona",
    "cuánto cuesta automatizar procesos",
    "presupuesto automatización empresa",
    "tarifa automatización procesos barcelona",
    "desde 700 automatización",
    "planes automatización barcelona",
  ],
  openGraph: {
    title: "Precio Automatización Procesos Barcelona: Desde €700 | RASTECH",
    description: "3 planes: STARTER €700, GROWTH €1.150, ENTERPRISE €1.650. ROI documentado. Análisis gratuito.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: "https://ras-tech.es/precios" },
};

const tiers = [
  {
    label: "STARTER",
    tagline: "Para empezar a ahorrar rápido",
    price: "€700",
    processes: "1-2 procesos",
    timeline: "2 semanas",
    support: "30 días soporte",
    includes: [
      "Análisis y mapeado de procesos",
      "Diseño de flujos automatizados",
      "Testing con datos reales",
      "Formación de tu equipo (30 min)",
      "30 días soporte post-lanzamiento",
    ],
    highlight: false,
    cta: "Agendar análisis",
  },
  {
    label: "GROWTH",
    tagline: "El más elegido — sistema completo",
    price: "€1.150",
    processes: "3-5 procesos",
    timeline: "2-3 semanas",
    support: "60 días + revisión mes 1",
    includes: [
      "Todo lo del STARTER",
      "3-5 procesos automatizados",
      "Panel de control personalizado",
      "Integración con tus herramientas actuales",
      "60 días soporte + revisión de optimización",
    ],
    highlight: true,
    cta: "Empezar ahora",
  },
  {
    label: "ENTERPRISE",
    tagline: "Transformación completa de procesos",
    price: "€1.650",
    processes: "6+ procesos",
    timeline: "3-4 semanas",
    support: "Retainer mensual disponible",
    includes: [
      "Todo lo del GROWTH",
      "6+ procesos automatizados",
      "Arquitectura completa de automatización",
      "Formación completa del equipo",
      "Retainer mensual para mejoras continuas",
    ],
    highlight: false,
    cta: "Solicitar propuesta",
  },
];

const timeline = [
  { week: "Semana 1", phase: "Análisis Gratuito", desc: "Mapeamos tus procesos, calculamos el coste real de cada uno y te damos el ROI proyectado antes de firmar nada." },
  { week: "Semana 2", phase: "Diseño del Sistema", desc: "Construimos los flujos automáticos específicos para tu negocio. Integramos con tus herramientas actuales sin cambiar nada." },
  { week: "Semana 3", phase: "Testing con Tus Datos", desc: "Probamos con casos reales de tu empresa. Nada va a producción sin pasar 100+ pruebas. Cero riesgos." },
  { week: "Semana 4+", phase: "Implementación y Soporte", desc: "Activamos el sistema sin interrumpir tu negocio. Tu equipo aprende en 30 min. Soporte garantizado." },
];

const supportItems = [
  "Ajustes menores sin coste adicional",
  "Resolución de errores en menos de 2 horas",
  "Formación adicional de tu equipo",
  "Pequeñas mejoras y optimizaciones",
  "Acceso al dashboard de monitoreo",
];

const faqs = [
  { q: "¿Hay costes ocultos?", a: "No. El precio se cierra en el análisis gratuito. Una vez acordado, ese es el precio final. Sin sorpresas, sin extras." },
  { q: "¿Qué pasa si no estoy satisfecho?", a: "Si no ves el ROI proyectado documentado en 60 días, te devolvemos el dinero íntegro. Sin preguntas. Es nuestra garantía." },
  { q: "¿Puedo empezar con STARTER y subir a GROWTH?", a: "Sí. Muchos clientes empiezan con 1-2 procesos para ver resultados y luego amplían. El trabajo del plan anterior siempre se integra." },
  { q: "¿Qué herramientas necesito tener?", a: "Ninguna nueva. Trabajamos con lo que ya tienes: Gmail, Google Sheets, WhatsApp Business, Shopify, QuickBooks, etc. Integramos más de 200 aplicaciones." },
  { q: "¿El análisis inicial es realmente gratis?", a: "Sí, 100% gratis y sin compromiso. En 30-60 min analizamos tus procesos, calculamos cuánto pierdes y te damos un número exacto de ROI. Si no convence, no hay ningún coste." },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ras-tech.es/" },
        { "@type": "ListItem", "position": 2, "name": "Precios", "item": "https://ras-tech.es/precios" },
      ],
    },
    {
      "@type": "Product",
      "name": "Automatización de Procesos Empresariales",
      "description": "Servicio de automatización de procesos administrativos para empresas en Barcelona. Especialistas n8n y Make.",
      "brand": { "@type": "Brand", "name": "RASTECH" },
      "offers": tiers.map((t) => ({
        "@type": "Offer",
        "name": t.label,
        "price": t.price.replace("€", ""),
        "priceCurrency": "EUR",
        "description": `${t.tagline}. ${t.processes}. Timeline: ${t.timeline}.`,
        "availability": "https://schema.org/InStock",
        "url": "https://ras-tech.es/precios",
      })),
    },
  ],
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="min-h-screen bg-[#0F0F0F]">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#B8860B]/4 rounded-full blur-3xl" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                Inversión transparente · Sin sorpresas
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Precio Automatización Procesos Barcelona:{" "}
              <span className="text-[#B8860B]">Desde €700</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Cada empresa es diferente. Análisis gratuito, presupuesto cerrado, sin sorpresas.
              ROI documentado o dinero de vuelta.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/25 px-5 py-2.5">
              <span className="text-[#10B981] text-xs">✓</span>
              <span className="text-white/70 text-sm">Análisis gratuito · Presupuesto cerrado · Sin compromiso</span>
            </div>
          </div>
        </section>

        {/* ── 3 PLANES ── */}
        <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">Planes</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mt-3">
              Elige tu plan de automatización
            </h2>
            <p className="text-white/45 text-sm mt-3">Precios desde, adaptados a tu caso. El precio exacto se acuerda en el análisis gratuito.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tiers.map((t) => (
              <div
                key={t.label}
                className={`p-8 flex flex-col transition-all ${
                  t.highlight
                    ? "bg-[#1A3A52] border-2 border-[#B8860B]/60 shadow-[0_0_40px_rgba(184,134,11,0.12)] relative"
                    : "bg-[#111111] border border-white/5 hover:border-white/15"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#B8860B] text-black text-[10px] font-bold tracking-widest uppercase px-4 py-1.5">
                      Más elegido
                    </span>
                  </div>
                )}
                <p className={`text-xs font-bold tracking-[0.22em] uppercase mb-3 ${t.highlight ? "text-[#B8860B]" : "text-white/35"}`}>
                  {t.label}
                </p>
                <p className="text-white/55 text-sm mb-4">{t.tagline}</p>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className={`text-sm ${t.highlight ? "text-[#B8860B]/60" : "text-white/35"}`}>desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-white">{t.price}</span>
                </div>
                <p className="text-white/35 text-xs mb-6">pago único · sin suscripción</p>

                <div className="space-y-1.5 mb-6 text-xs text-white/45">
                  <div className="flex items-center gap-2">
                    <span className="text-[#B8860B]">⚙</span> {t.processes}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B8860B]">⏱</span> {t.timeline}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B8860B]">🛟</span> {t.support}
                  </div>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {t.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#10B981] mt-0.5 shrink-0 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contacto"
                  className={`block text-center font-bold text-sm py-3.5 px-6 transition-all ${
                    t.highlight
                      ? "bg-[#B8860B] hover:bg-[#9A7009] text-white hover:shadow-[0_0_20px_rgba(184,134,11,0.3)]"
                      : "bg-white/8 hover:bg-white/12 text-white border border-white/15"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-[#1A3A52]/10 border border-[#1A3A52]/30 p-5 text-center">
            <p className="text-white/50 text-sm">
              ¿No sabes qué plan necesitas?{" "}
              <Link href="/#contacto" className="text-[#B8860B] hover:underline font-medium">
                El análisis gratuito te lo dice en 30 min →
              </Link>
            </p>
          </div>
        </section>

        {/* ── ROI CALCULATOR ── */}
        <ROICalculator />

        {/* ── GARANTÍA ROI ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-[#1A3A52]/20 border-2 border-[#B8860B]/40 p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A52]/10 to-transparent" />
              <div className="relative z-10">
                <span className="text-5xl mb-5 block">🛡️</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                  Garantía 100% de ROI
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  Si no ves el ROI proyectado documentado en <strong>60 días</strong>, te devolvemos todo el dinero.
                  Sin preguntas. Sin burocracia.
                </p>
                <div className="bg-[#B8860B]/10 border border-[#B8860B]/25 px-6 py-4 inline-block mb-6">
                  <p className="text-white/65 text-sm leading-relaxed">
                    Estamos tan seguros de nuestro trabajo que <span className="text-[#B8860B] font-bold">apostamos dinero a ello</span>.
                    Calculamos el ROI antes de empezar, en el análisis gratuito.
                    Si los números no cuadran, te lo decimos antes de cobrar nada.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/45">
                  {["60 días de garantía", "Sin preguntas ni burocracia", "Devolución completa"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="text-[#10B981] text-xs">✓</span> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">El proceso</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                De Análisis a Sistema Funcionando:{" "}
                <span className="text-[#B8860B]">2-4 Semanas</span>
              </h2>
              <p className="text-white/45 text-base max-w-xl mx-auto">
                Proceso predecible. Sabes exactamente qué pasa cada semana.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {timeline.map((phase, i) => (
                <div key={i} className="relative">
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#B8860B]/40 to-transparent z-10" />
                  )}
                  <div className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/15 p-6 transition-all h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-7 h-7 rounded-full bg-[#B8860B]/15 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-white/30 text-xs font-mono">{phase.week}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">{phase.phase}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{phase.desc}</p>
                    {i === 0 && (
                      <span className="inline-block mt-3 bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        GRATIS
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOPORTE ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase">Soporte incluido</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mt-3 mb-4">
                  ¿Qué Incluye el Soporte Post-Implementación?
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  El soporte no termina el día del lanzamiento. Estamos contigo mientras el sistema
                  genera ROI.
                </p>
                <Link
                  href="/casos"
                  className="text-[#B8860B] text-sm font-semibold hover:underline"
                >
                  Ver cómo lo vivieron otros clientes →
                </Link>
              </div>
              <div className="bg-[#111111] border border-white/5 p-7">
                <ul className="space-y-3">
                  {supportItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/5">
                  <p className="text-white/35 text-xs leading-relaxed">
                    Soporte STARTER: 30 días · GROWTH: 60 días + revisión · ENTERPRISE: retainer mensual disponible.
                    Cambios mayores tienen presupuesto adicional — siempre cerrado de antemano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ PRECIOS ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10 text-center">
              Preguntas sobre{" "}
              <span className="text-[#B8860B]">Precios</span>
            </h2>
            <div className="bg-[#111111] border border-white/5">
              {faqs.map((faq, i) => (
                <details key={i} className="border-b border-white/5 last:border-0 group">
                  <summary className="flex items-center justify-between py-5 px-6 cursor-pointer list-none text-white/80 hover:text-white font-medium text-sm leading-relaxed transition-colors">
                    {faq.q}
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-white/10 text-white/40 ml-4 group-open:border-[#B8860B]/40 group-open:text-[#B8860B]">
                      +
                    </span>
                  </summary>
                  <p className="text-white/55 text-sm leading-relaxed px-6 pb-5">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contacto" className="py-20 bg-gradient-to-br from-[#1A3A52]/20 to-[#0A0A0A]">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Agendar Análisis Gratuito
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              30 minutos. Calculamos tu ROI exacto. Sin compromiso.
              Si los números no justifican la inversión, te lo decimos.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-base px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
            >
              Agendar análisis gratuito (30 min) →
            </Link>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-white/30">
              {["Sin compromiso", "Respuesta en menos de 24h", "100% gratuito"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-[#10B981]">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
