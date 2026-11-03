import { pageMetadata } from "../lib/seo";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ROICalculator from "../components/ROICalculator";
import { formatEUR, OFFER, planById, SITE } from "../lib/site-config";

export const metadata = pageMetadata({
  title: "Precios de automatización de procesos en Barcelona | RASTECH",
  description:
    "Precios de automatización de procesos en Barcelona: qué incluye cada plan, cómo se paga y cómo calcular cuánto puede ahorrar tu empresa.",
  path: "/precios",
});

function tierFields(id: string) {
  const plan = planById(id);
  return {
    label: plan.name,
    fromEUR: plan.fromEUR,
    price: formatEUR(plan.fromEUR),
    processes: `${plan.processes} procesos`,
    timeline: `${plan.weeks} semanas`,
    support: plan.support,
  };
}

const tiers = [
  {
    ...tierFields("starter"),
    tagline: "Para empezar a ahorrar rápido",
    includes: [
      "Análisis y mapeado de procesos",
      "Diseño de flujos automatizados",
      "Pruebas con tus datos antes de activar",
      `Formación de tu equipo (${OFFER.trainingHours} hora)`,
    ],
    highlight: false,
    cta: "Reserva tu llamada",
  },
  {
    ...tierFields("growth"),
    tagline: "Sistema completo",
    includes: [
      "Todo lo del STARTER",
      "3-5 procesos automatizados",
      "Integración con tus herramientas actuales",
    ],
    highlight: true,
    cta: "Reserva tu llamada",
  },
  {
    ...tierFields("enterprise"),
    tagline: "Automatización de varias áreas",
    includes: [
      "Todo lo del GROWTH",
      "6+ procesos automatizados",
    ],
    highlight: false,
    cta: "Reserva tu llamada",
  },
];

const timeline = [
  { week: "Paso 1", phase: "Llamada gratuita", desc: "Vemos tus procesos, estimamos su coste y decidimos qué conviene automatizar primero." },
  { week: "Paso 2", phase: "Propuesta y diseño", desc: "Recibes la propuesta con precio cerrado. Diseño los flujos con las herramientas que ya usas." },
  { week: "Paso 3", phase: "Pruebas con tus datos", desc: "Hago pruebas con tus datos antes de activar, incluidos los casos raros." },
  { week: "Paso 4", phase: "Puesta en marcha y soporte", desc: `Activo el sistema sin parar tu negocio y dedico ${OFFER.trainingHours} hora a formar a tu equipo.` },
];

const supportItems = [
  "Ajustes menores sin coste adicional",
  `Alertas automáticas si un flujo falla; respondo en ${OFFER.responseTime}`,
  "Resolución de dudas de tu equipo",
  "Pequeñas mejoras dentro del alcance acordado",
];

const faqs = [
  { q: "¿Hay costes ocultos?", a: `El precio se cierra por escrito antes de empezar. ${OFFER.noHiddenCosts} Las suscripciones de herramientas de terceros, si las necesitas, las pagas directamente a cada proveedor.` },
  { q: "¿Cómo se paga?", a: OFFER.payment },
  { q: "¿Qué pasa si no funciona como acordamos?", a: OFFER.guarantee },
  { q: "¿Puedo empezar con STARTER y subir a GROWTH?", a: "Sí. Puedes empezar con 1-2 procesos y ampliar después. Lo ya hecho se aprovecha." },
  { q: "¿Qué herramientas necesito tener?", a: "Normalmente ninguna nueva. Trabajo con lo que ya tienes, como Gmail, Google Sheets o Shopify. n8n y Make se conectan con cientos de aplicaciones." },
  { q: "¿La llamada inicial es gratis?", a: `Sí. Son ${OFFER.freeCallMinutes} minutos sin compromiso: vemos tus procesos y estimamos cuánto te cuestan.` },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE.url },
        { "@type": "ListItem", "position": 2, "name": "Precios", "item": `${SITE.url}/precios` },
      ],
    },
    {
      "@type": "Product",
      "name": "Automatización de Procesos Empresariales",
      "description": "Automatización de procesos para pymes de Barcelona con n8n y Make.",
      "brand": { "@type": "Brand", "name": "RASTECH" },
      "offers": tiers.map((t) => ({
        "@type": "Offer",
        "name": t.label,
        "price": String(t.fromEUR),
        "priceCurrency": "EUR",
        "description": `${t.tagline}. ${t.processes}. Plazo: ${t.timeline}.`,
        "availability": "https://schema.org/InStock",
        "url": `${SITE.url}/precios`,
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
                Precios claros · Barcelona
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Precio Automatización Procesos Barcelona:{" "}
              <span className="text-[#B8860B]">Desde €700</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Cada empresa es diferente: llamada gratuita, precio cerrado por escrito y garantía de {OFFER.guaranteeDays} días.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/25 px-5 py-2.5">
              <span className="text-[#10B981] text-xs">✓</span>
              <span className="text-white/70 text-sm">Llamada gratuita · Precio cerrado · Sin compromiso</span>
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
            <p className="text-white/45 text-sm mt-3">Precios desde, adaptados a tu caso. El precio exacto se cierra por escrito antes de empezar.</p>
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
                      Recomendado
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
                <p className="text-white/35 text-xs mb-6">pago único por proyecto</p>

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
                Lo vemos en la llamada gratuita de {OFFER.freeCallMinutes} min →
              </Link>
            </p>
            <p className="text-white/40 text-sm mt-2">
              Si quieres entender de qué depende el precio, lee{" "}
              <Link href="/blog/cuanto-cuesta-automatizar-barcelona" className="text-[#B8860B] hover:underline">
                cuánto cuesta automatizar procesos
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── ROI CALCULATOR ── */}
        <ROICalculator />

        {/* ── GARANTÍA ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-[#1A3A52]/20 border-2 border-[#B8860B]/40 p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A52]/10 to-transparent" />
              <div className="relative z-10">
                <span className="text-5xl mb-5 block">🛡️</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                  Garantía de {OFFER.guaranteeDays} días
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
                  {OFFER.guarantee}
                </p>
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
                De la llamada al sistema funcionando:{" "}
                <span className="text-[#B8860B]">2-4 semanas</span>
              </h2>
              <p className="text-white/45 text-base max-w-xl mx-auto">
                Sabes qué pasa en cada fase. El plazo exacto depende del plan.
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
                  ¿Qué incluye el soporte tras la entrega?
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  El soporte no termina el día de la entrega. Durante el periodo de tu plan, respondo en {OFFER.responseTime}.
                </p>
                <Link
                  href="/casos"
                  className="text-[#B8860B] text-sm font-semibold hover:underline"
                >
                  Ver casos de uso →
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
                    {OFFER.noHiddenCosts}
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
              <span className="text-[#B8860B]">precios</span>
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
              Reserva tu llamada
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              {OFFER.freeCallMinutes} minutos, sin compromiso. Si los números no justifican la inversión, te lo digo.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-base px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
            >
              Reserva tu llamada ({OFFER.freeCallMinutes} min) →
            </Link>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-white/30">
              {["Sin compromiso", `Respondo en ${OFFER.responseTime}`, "Llamada gratuita"].map((t) => (
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
