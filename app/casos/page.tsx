import { pageMetadata } from "../lib/seo";
import {
  ASSUMPTIONS,
  formatEUR,
  OFFER,
  PLANS,
  REAL_CASES,
  roiNet,
  SCENARIOS,
  scenarioNumbers,
  SITE,
} from "../lib/site-config";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = pageMetadata({
  title: "Casos de uso de automatización para pymes | RASTECH",
  description:
    "Ejemplos de procesos que una pyme de Barcelona puede automatizar con n8n y Make: facturación, reportes, pedidos y cobros.",
  path: "/casos",
});

const weeksLabel = ASSUMPTIONS.weeksPerMonth.toString().replace(".", ",");
const NOTICE = `Escenarios ilustrativos con supuestos a la vista (${ASSUMPTIONS.hourlyCostEUR} €/h, ${weeksLabel} semanas/mes). Los resultados reales dependen de cada empresa. Cuando haya casos de clientes, los publicaré con su permiso por escrito.`;

const sectorMatch = [
  { icon: "🍽️", title: "Restaurantes y hostelería", desc: "Facturación, reservas, pedidos a proveedores y reportes diarios.", href: "/automatizar-restaurantes" },
  { icon: "🛍️", title: "E-commerce y tiendas online", desc: "Pedidos, devoluciones, stock, facturas y avisos al cliente.", href: "/automatizar-ecommerce" },
  { icon: "📊", title: "Agencias y consultoras", desc: "Reportes, facturación recurrente y gestión de clientes.", href: "/automatizar-agencias" },
  { icon: "⭐", title: "Tu sector", desc: "Despachos, clínicas, academias y servicios, a medida.", href: "/automatizar-otros" },
];

const faqs = [
  { q: "¿Son casos de clientes?", a: "No. Son escenarios ilustrativos para que veas qué se puede automatizar y cómo se calcula. Estoy empezando y, cuando haya casos de clientes, los publicaré con su permiso por escrito." },
  { q: "¿De dónde salen los números?", a: `De una fórmula que puedes comprobar: horas por semana × ${weeksLabel} semanas × ${ASSUMPTIONS.hourlyCostEUR} €/h. El plan es orientativo y su precio es el precio desde. Tu caso puede dar otra cifra, y por eso la calculamos juntos en la llamada gratuita.` },
  { q: "¿Cuánto tiempo tarda implementar una automatización?", a: `Entre 2 y 4 semanas según el plan: ${PLANS.map((p) => `${p.name}, ${p.weeks} semanas`).join("; ")}.` },
  { q: "¿Funcionará para mi sector?", a: `Depende de tus procesos más que del sector. Si no ves el tuyo aquí, reserva tu llamada: en ${OFFER.freeCallMinutes} minutos te digo si puedo ayudarte.` },
  { q: "¿Qué herramientas usas?", a: "Principalmente n8n y Make. Ambas se conectan con cientos de aplicaciones, como Gmail, Google Sheets, Shopify, Stripe o HubSpot." },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE.url },
        { "@type": "ListItem", "position": 2, "name": "Casos de uso", "item": `${SITE.url}/casos` },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Casos de uso de automatización",
      "itemListElement": SCENARIOS.map((c, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${c.sector}: ${c.title}`,
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
                Escenarios ilustrativos · Barcelona
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Casos de uso de automatización para pymes
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Cinco situaciones habituales, qué se automatizaría en cada una y cuánto podría suponer.
            </p>
            <p className="bg-[#B8860B]/10 border border-[#B8860B]/25 text-white/70 text-sm leading-relaxed max-w-2xl mx-auto px-5 py-4">
              {NOTICE}
            </p>
          </div>
        </section>

        {/* ── CASOS DE CLIENTES ── */}
        {REAL_CASES.length > 0 && (
          <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
              Casos de clientes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {REAL_CASES.map((c) => (
                <article key={c.company} className="bg-[#111111] border border-white/5 p-7">
                  <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-2">{c.sector}</p>
                  <h3 className="text-white font-bold text-lg mb-2">{c.company}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{c.summary}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── ESCENARIOS ── */}
        <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {SCENARIOS.map((c) => {
              const { plan, saving, payback } = scenarioNumbers(c);
              const rows = [
                ["Horas ahorradas", `${c.hoursPerWeek} h/semana`],
                ["Ahorro estimado", `${formatEUR(saving)}/mes`],
                ["Plan orientativo", `${plan.name}, desde ${formatEUR(plan.fromEUR)}`],
                ["Recuperación", `unos ${payback} días`],
                ["ROI neto, año 1", `${roiNet(saving * 12, plan.fromEUR)} %`],
              ];
              return (
                <article
                  key={c.id}
                  className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/15 transition-all overflow-hidden"
                >
                  <div className="px-8 py-5 border-b border-white/5 bg-[#0F0F0F]">
                    <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">{c.sector}</span>
                  </div>

                  <div className="p-8">
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
                      {c.title}
                    </h2>
                    <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-2xl">{c.problem}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-[#1A3A52]/10 border border-[#1A3A52]/30 p-5">
                        <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-4">
                          Qué se automatizaría
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

                      <div className="bg-[#10B981]/5 border border-[#10B981]/15 p-5">
                        <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">
                          Estimación con estos supuestos
                        </p>
                        <div className="space-y-2.5">
                          {rows.map(([label, value]) => (
                            <div key={label} className="flex justify-between items-center gap-4 border-b border-white/5 pb-1.5">
                              <span className="text-white/35 text-xs">{label}</span>
                              <span className="font-bold text-sm text-[#10B981] text-right">{value}</span>
                            </div>
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
              );
            })}
          </div>
        </section>

        {/* ── ¿CUÁL SE PARECE A TU EMPRESA? ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Cuál se parece a{" "}
                <span className="text-[#B8860B]">tu empresa?</span>
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto">
                Cada sector tiene procesos distintos. Elige el tuyo para ver qué se puede automatizar.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectorMatch.map(({ icon, title, desc, href }) => (
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
                  <span className="text-[#B8860B] text-xs font-bold">Ver sector →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10 text-center">
              Preguntas frecuentes sobre{" "}
              <span className="text-[#B8860B]">los casos de uso</span>
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
              Calculemos tu caso
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              {OFFER.freeCallMinutes} minutos, sin compromiso. Vemos tus horas reales antes de que inviertas nada.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-base px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
            >
              Reserva tu llamada →
            </Link>
            <p className="text-white/25 text-xs mt-4">
              Llamada gratuita · Sin compromiso · Respondo en {OFFER.responseTime}
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
