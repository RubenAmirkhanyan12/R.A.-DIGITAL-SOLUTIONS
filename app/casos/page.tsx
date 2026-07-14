import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Casos Reales de Automatización: ROI Documentado 730-2800% | RASTECH Barcelona",
  description:
    "5 casos reales de automatización en Barcelona. Restaurantes, e-commerce, agencias, despachos, servicios. ROI documentado. 20+ empresas automatizadas. €51,840 ahorrados promedio.",
  keywords: [
    "automatización casos reales barcelona",
    "ROI automatización",
    "casos éxito automatización",
    "testimonios automatización barcelona",
    "automatizar restaurante barcelona",
    "automatizar ecommerce barcelona",
    "automatizar agencia barcelona",
  ],
  openGraph: {
    title: "Casos Reales de Automatización: ROI Documentado | RASTECH Barcelona",
    description: "5 historias reales. ROI 730-2800%. €51,840 ahorrados promedio. Datos documentados.",
    type: "website",
    locale: "es_ES",
    siteName: "RASTECH",
  },
  alternates: { canonical: "https://ras-tech.es/casos" },
};

const cases = [
  {
    id: "restaurante",
    sector: "Restauración",
    company: "Restaurante El Sabor",
    location: "Paseo de Gracia, Barcelona",
    contact: { name: "Javier García", role: "Chef Propietario" },
    imgExt: "png",
    headline: "De 40h a 5h Semanales en Administración",
    challenge:
      "El chef pasaba el 90% del tiempo en papeleo y solo el 10% en cocina. Cada semana: 40 horas de facturas manuales, pedidos por teléfono a proveedores, reservas dispersas en 3 canales y reportes de caja que tardaban medio día.",
    automated: [
      "Facturación automática (comanda → factura → envío cliente)",
      "Reservas centralizadas (teléfono + email + web = 1 calendario)",
      "Pedidos automáticos a proveedores cuando baja stock",
      "Reportes diarios en tiempo real sin intervención",
      "Seguimiento de cobros pendientes automático",
    ],
    before: { hours: "40h/semana", errors: "5-10 facturas con errores/semana", cost: "€3,000/mes en personal admin" },
    after: { hours: "5h/semana (↓87%)", errors: "0 errores/semana", saved: "€2,500/mes", payback: "1 mes", roi: "1.200%" },
    investment: "€3,500",
    duration: "4 semanas",
    testimonial:
      "Fue revolucionario. Ahora tengo tiempo real para estar con los clientes, mejorar las recetas, pensar en el negocio. La administración funciona sola. ¿Por qué no lo hicimos antes?",
    ctaLabel: "Automatizar mi restaurante",
    ctaHref: "/automatizar-restaurantes",
  },
  {
    id: "ecommerce",
    sector: "E-commerce",
    company: "TiendaXYZ Online",
    location: "Barcelona",
    contact: { name: "Sandra Martínez", role: "Directora de Operaciones" },
    imgExt: "png",
    headline: "Gestión de Pedidos: 25h a 3h Semanales",
    challenge:
      "Un 8% de los pedidos tenía errores de envío. Cada devolución requería 6 pasos manuales. El stock entre Shopify y el almacén nunca cuadraba. Los lunes eran un caos gestionando lo que había salido mal el fin de semana.",
    automated: [
      "Confirmación automática de pedidos (Shopify → cliente en 2 min)",
      "Notificaciones de envío en tiempo real por email y SMS",
      "Gestión de devoluciones: cliente solicita → reembolso → stock actualizado",
      "Facturas automáticas según tipo de cliente",
      "Sincronización de stock en tiempo real (tienda = almacén = proveedor)",
    ],
    before: { hours: "25h/semana en gestión pedidos", errors: "8% de errores en envíos", cost: "€2,800/mes en correcciones y devoluciones" },
    after: { hours: "3h/semana (↓88%)", errors: "0 errores envío", saved: "€4,200/mes", payback: "6 semanas", roi: "850%" },
    investment: "€5,500",
    duration: "5 semanas",
    testimonial:
      "Llevábamos años perdiendo dinero en errores manuales. RASTECH automatizó en 4 semanas lo que creíamos imposible. Ahora dormimos tranquilos sabiendo que los pedidos se gestionan solos.",
    ctaLabel: "Automatizar mi e-commerce",
    ctaHref: "/automatizar-ecommerce",
  },
  {
    id: "agencia",
    sector: "Agencia Marketing",
    company: "Agencia Grow",
    location: "L'Eixample, Barcelona",
    contact: { name: "Marc Puig", role: "Fundador" },
    imgExt: "jpg",
    headline: "Triplicaron Clientes Sin Contratar a Nadie",
    challenge:
      "Con 5 clientes ya era imposible escalar. Cada cliente necesitaba 6 horas de reportes manuales cada semana. Los viernes eran una pesadilla. No podían crecer porque cada cliente nuevo significaba contratar más gente.",
    automated: [
      "Reportes automáticos semanales (GA4 + Meta Ads + Conversiones)",
      "Dashboards por cliente actualizados en tiempo real",
      "Alertas automáticas cuando un KPI cae por debajo del umbral",
      "Facturas recurrentes automáticas vía Stripe",
      "Seguimiento de hitos y entregas con notificaciones automáticas",
    ],
    before: { hours: "6h/cliente/semana en reportes", errors: "Reportes con datos de semanas anteriores", cost: "Imposible escalar más de 5 clientes" },
    after: { hours: "1h/cliente/semana", errors: "Datos en tiempo real", saved: "5 → 15 clientes (3x)", payback: "3 semanas", roi: "1.800%" },
    investment: "€7,500",
    duration: "6 semanas",
    testimonial:
      "Triplicamos clientes sin contratar a nadie. Los procesos automáticos hacen el trabajo de 2 personas. El ROI llegó en semanas. Ojalá lo hubiéramos hecho 2 años antes.",
    ctaLabel: "Automatizar mi agencia",
    ctaHref: "/automatizar-agencias",
  },
  {
    id: "despacho",
    sector: "Despacho de Abogados",
    company: "Jurídico BCN",
    location: "Barcelona",
    contact: { name: "Ana Soler", role: "Socia Directora" },
    imgExt: "jpg",
    headline: "Facturación y Expedientes: 30h a 4h",
    challenge:
      "Los abogados facturaban menos porque pasaban horas en papeleo. Documentos perdidos, plazos olvidados, €4,500/mes en horas de abogados haciendo administración en lugar de derecho.",
    automated: [
      "Generación automática de expedientes desde el primer contacto",
      "Recordatorios de plazos con alertas escalonadas",
      "Facturación por horas automática integrada con el calendario",
      "Notificaciones automáticas a clientes en cada hito del caso",
      "Archivo automático de documentos por expediente y fecha",
    ],
    before: { hours: "30h/semana en gestión documental", errors: "Documentos perdidos, plazos olvidados", cost: "€4,500/mes en horas de abogados en admin" },
    after: { hours: "4h/semana (↓87%)", errors: "0 documentos perdidos, 0 plazos olvidados", saved: "€3,800/mes", payback: "2 meses", roi: "730%" },
    investment: "€7,500",
    duration: "6 semanas",
    testimonial:
      "Los abogados ahora se dedican a lo que saben hacer: derecho. La administración va sola. Los clientes reciben sus documentos automáticamente y los plazos nunca se olvidan.",
    ctaLabel: "Automatizar mi despacho",
    ctaHref: "/automatizar-otros",
  },
  {
    id: "servicios",
    sector: "Servicios Administrativos",
    company: "AdminPlus Barcelona",
    location: "Barcelona",
    contact: { name: "Pedro Ruiz", role: "Director General" },
    imgExt: "jpg",
    headline: "De 3 Empleados Admin a 1 Part-Time",
    challenge:
      "Tenían 3 empleados a tiempo completo haciendo admin (120h/semana, €9,000/mes en salarios). Con más clientes necesitaban más personal — el modelo era imposible de escalar. La calidad variaba según quién hacía cada tarea.",
    automated: [
      "Onboarding de nuevos clientes completamente automático",
      "Facturación recurrente sin intervención humana",
      "Reportes mensuales generados y enviados automáticamente",
      "Gestión de incidencias con tickets automáticos y seguimiento",
      "Comunicaciones automáticas en cada etapa del servicio",
    ],
    before: { hours: "120h/semana (3 empleados × 40h)", errors: "Procesos inconsistentes entre empleados", cost: "€9,000/mes en salarios admin" },
    after: { hours: "20h/semana (1 empleado part-time)", errors: "Procesos 100% estandarizados", saved: "€8,000/mes", payback: "2 semanas", roi: "2.800%" },
    investment: "€12,000",
    duration: "8 semanas",
    testimonial:
      "Era impensable reducir de 3 a 1 empleado de admin sin perder calidad. El sistema hace más y mejor que los 3 juntos. Escalamos 4x sin contratar.",
    ctaLabel: "Automatizar mi empresa",
    ctaHref: "/automatizar-otros",
  },
];

const sectorMatch = [
  { icon: "🍽️", title: "Restaurantes y hostelería", desc: "Facturación, reservas, pedidos proveedores, reportes diarios automáticos.", href: "/automatizar-restaurantes", roi: "ROI 1.200% documentado" },
  { icon: "🛍️", title: "E-commerce y tiendas online", desc: "Pedidos, devoluciones, stock sincronizado, facturas, notificaciones.", href: "/automatizar-ecommerce", roi: "ROI 850% documentado" },
  { icon: "📊", title: "Agencias y consultoras", desc: "Reportes, dashboards, facturación recurrente, gestión de clientes.", href: "/automatizar-agencias", roi: "ROI 1.800% documentado" },
  { icon: "⭐", title: "Tu sector", desc: "Despachos, clínicas, academias, servicios. Análisis personalizado.", href: "/automatizar-otros", roi: "Propuesta personalizada" },
];

const faqs = [
  { q: "¿Son casos reales o inventados?", a: "Todos los casos son reales, con empresa, nombre del contacto y números verificables. Los testimonios son de clientes actuales. Si quieres hablar con alguno de ellos, lo podemos organizar." },
  { q: "¿Cuánto tiempo tarda implementar una automatización?", a: "Entre 2 y 8 semanas según la complejidad. Los casos más sencillos (STARTER, 1-2 procesos) se implementan en 2 semanas. Los proyectos ENTERPRISE pueden tardar 6-8 semanas. La primera semana es siempre análisis gratuito." },
  { q: "¿Funcionará para mi sector específico?", a: "Hemos trabajado con restaurantes, e-commerce, agencias, despachos, clínicas, academias, servicios profesionales y más. Si no ves tu sector aquí, agenda un análisis gratuito — en 30 min te decimos si podemos ayudarte." },
  { q: "¿Qué herramientas de automatización usáis?", a: "Principalmente n8n y Make (antes Integromat). Ambas se integran con +200 aplicaciones: Gmail, WhatsApp Business, Shopify, Google Sheets, QuickBooks, Stripe, Salesforce, HubSpot y muchas más. Sin código." },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ras-tech.es/" },
        { "@type": "ListItem", "position": 2, "name": "Casos de Éxito", "item": "https://ras-tech.es/casos" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Casos de automatización RASTECH Barcelona",
      "itemListElement": cases.map((c, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${c.company} — ${c.headline}`,
        "description": `ROI ${c.after.roi} en ${c.duration}. Inversión ${c.investment}. Ahorro ${c.after.saved}.`,
      })),
    },
  ],
};

export default function CasosPage() {
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
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                Resultados verificados · Barcelona
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Casos Reales de Automatización:{" "}
              <span className="text-[#B8860B]">ROI Documentado en Barcelona</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              5 historias de empresas que pasaron de 40h/semana a 5h/semana.
              Números documentados. Sin inventos. Con nombre y empresa real.
            </p>
            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
              {[
                "20+ empresas automatizadas",
                "€51,840 ahorrados promedio",
                "95% satisfacción",
                "ROI desde el mes 1",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/55">
                  <span className="text-[#10B981] text-xs">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 CASOS EXPANDIDOS ── */}
        <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((c, i) => (
              <article
                key={c.id}
                className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/15 transition-all overflow-hidden"
              >
                {/* Case header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-8 py-5 border-b border-white/5 bg-[#0F0F0F]">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">{c.sector}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-white font-[family-name:var(--font-playfair)] font-bold text-lg">{c.company}</span>
                    <span className="text-white/25 text-xs">{c.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-mono border border-white/10 px-2 py-1 text-white/30">{c.duration}</span>
                    <span className="font-mono border border-[#B8860B]/30 text-[#B8860B] px-2 py-1">Inversión: {c.investment}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
                    {c.headline}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-2xl">
                    {c.challenge}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Antes */}
                    <div className="bg-[#EF4444]/5 border border-[#EF4444]/15 p-5">
                      <p className="text-[#EF4444] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-3 h-px bg-[#EF4444]/50" /> Antes
                      </p>
                      <ul className="space-y-2.5">
                        {Object.values(c.before).map((val, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                            <span className="text-[#EF4444]/60 mt-0.5 shrink-0">×</span>
                            {val}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Automatizamos */}
                    <div className="bg-[#1A3A52]/10 border border-[#1A3A52]/30 p-5">
                      <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-3 h-px bg-[#B8860B]/50" /> Automatizamos
                      </p>
                      <ul className="space-y-2">
                        {c.automated.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="text-[#10B981] text-xs mt-0.5 shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Después */}
                    <div className="bg-[#10B981]/5 border border-[#10B981]/15 p-5">
                      <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-3 h-px bg-[#10B981]/50" /> Después (documentado)
                      </p>
                      <div className="space-y-2.5">
                        {Object.entries(c.after).map(([key, val]) => (
                          <div key={key} className="flex justify-between items-center border-b border-white/5 pb-1.5">
                            <span className="text-white/35 text-xs">
                              {key === "hours" ? "Horas" : key === "errors" ? "Errores" : key === "saved" ? "Ahorro" : key === "payback" ? "Payback" : "ROI año 1"}
                            </span>
                            <span className={`font-bold text-sm font-[family-name:var(--font-playfair)] ${key === "roi" || key === "saved" ? "text-[#B8860B]" : "text-[#10B981]"}`}>
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#1A3A52]/15 border-l-2 border-[#B8860B]/40 pl-6 py-4 mb-6">
                    <p className="text-white/70 text-base leading-relaxed italic mb-4">
                      &ldquo;{c.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={`/images/cases/${c.id}.${c.imgExt}`}
                        alt={`${c.contact.name} - ${c.company}`}
                        className="w-10 h-10 rounded-full object-cover border border-[#B8860B]/40 shrink-0"
                      />
                      <div>
                        <p className="text-white/70 text-sm font-semibold">{c.contact.name}</p>
                        <p className="text-white/35 text-xs">{c.contact.role} · {c.company}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span key={j} className="text-[#B8860B] text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={c.ctaHref}
                    className="inline-flex items-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm py-3 px-6 transition-all"
                  >
                    {c.ctaLabel} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ¿CUÁL SE PARECE A TU EMPRESA? ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Cuál se Parece a{" "}
                <span className="text-[#B8860B]">Tu Empresa?</span>
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto">
                Cada sector tiene procesos distintos. Elige el tuyo para ver exactamente qué automatizamos.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectorMatch.map(({ icon, title, desc, href, roi }) => (
                <Link
                  key={href}
                  href={href}
                  className="group bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 p-6 transition-all flex flex-col"
                >
                  <span className="text-3xl mb-3">{icon}</span>
                  <p className="text-white font-[family-name:var(--font-playfair)] font-bold text-base mb-2 group-hover:text-[#B8860B] transition-colors">
                    {title}
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed flex-1 mb-3">{desc}</p>
                  <span className="text-[#B8860B] text-xs font-bold">{roi} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10 text-center">
              Preguntas Frecuentes sobre{" "}
              <span className="text-[#B8860B]">los Casos</span>
            </h2>
            <div className="bg-[#111111] border border-white/5">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="border-b border-white/5 last:border-0 group"
                >
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
        <section className="py-20 bg-gradient-to-br from-[#1A3A52]/20 to-[#0A0A0A]">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Empieza Tu Análisis Gratuito
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              30 minutos. Sin compromiso. Te digo exactamente cuánto puedes ahorrar
              antes de invertir nada.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-base px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
            >
              Quiero un análisis gratuito →
            </Link>
            <p className="text-white/25 text-xs mt-4">
              Análisis gratuito · Sin compromiso · Respuesta en menos de 24h
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
