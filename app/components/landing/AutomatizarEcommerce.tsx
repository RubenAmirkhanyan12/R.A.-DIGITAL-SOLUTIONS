import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RelatedGuides from "./RelatedGuides";
import { GUIDES } from "../../lib/guides";
import { ASSUMPTIONS, formatEUR, OFFER, OFFER_SUMMARY, planById, SCENARIOS, scenarioNumbers } from "../../lib/site-config";
import LandingContactForm from "./LandingContactForm";
import FitCheck from "../FitCheck";
import VatNote from "../VatNote";
import {
  CheckCircle,
  X,
  Package,
  AlertCircle,
  RotateCcw,
  TrendingDown,
  ArrowRight,
  Calendar,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────── */

const scenario = SCENARIOS.find((c) => c.id === "ecommerce")!;
const { plan, saving, payback } = scenarioNumbers(scenario);
const plan1 = planById("starter");
const plan2 = planById("growth");

const problemBlocks = [
  {
    icon: <Package size={22} className="text-[#B8860B]" />,
    number: "Pedidos",
    title: "Gestión de pedidos manual",
    desc: "Cada pedido se copia a la hoja de almacén o al programa de gestión. Cada copia es una oportunidad de equivocarse.",
  },
  {
    icon: <AlertCircle size={22} className="text-[#B8860B]" />,
    number: "Stock",
    title: "Stock en varios sitios",
    desc: "Si la web, el almacén y otro canal no coinciden, acabas vendiendo un producto agotado.",
  },
  {
    icon: <AlertCircle size={22} className="text-[#B8860B]" />,
    number: "Envíos",
    title: "Errores en envíos",
    desc: "Una dirección incompleta o un producto equivocado se detectan cuando el cliente ya está esperando.",
  },
  {
    icon: <TrendingDown size={22} className="text-[#B8860B]" />,
    number: "Devoluciones",
    title: "Devoluciones a mano",
    desc: "Cada devolución implica varios pasos: aviso, reembolso y stock. Si falta uno, los números dejan de cuadrar.",
  },
];

const solutionWeeks = [
  {
    n: "01",
    title: "Llamada gratuita",
    body: `En ${OFFER.freeCallMinutes} minutos vemos tus procesos, estimamos cuánto te cuestan y decidimos qué conviene automatizar primero.`,
    cost: "Gratis y sin compromiso",
  },
  {
    n: "02",
    title: "Montaje de los flujos",
    body: "Conecto la tienda con el almacén, la factura y el aviso al proveedor, sin duplicar los correos que tu tienda ya envía.",
    cost: `desde ${formatEUR(plan1.fromEUR)} (${plan1.name}) o desde ${formatEUR(plan2.fromEUR)} (${plan2.name})`,
  },
  {
    n: "03",
    title: "Pruebas",
    body: "Pruebas con tus datos antes de activar: producto agotado, proveedor que no responde, devolución o pedido cancelado.",
    cost: "Incluido",
  },
  {
    n: "04",
    title: "Puesta en marcha + formación",
    body: `Activo los flujos y dedico ${OFFER.trainingHours} hora a formar a tu equipo. Dejo alertas automáticas si un flujo falla.`,
    cost: plan1.support,
  },
];

const caseColumns = [
  {
    title: "ANTES",
    color: "bg-red-950/20",
    titleColor: "text-red-400/80",
    rows: ["Pedidos copiados a mano", "Stock distinto en cada canal", "Direcciones sin revisar", "Devoluciones sin registro común"],
  },
  {
    title: "QUÉ SE AUTOMATIZARÍA",
    color: "bg-[#1A3A52]/15",
    titleColor: "text-white/50",
    rows: scenario.automated,
  },
  {
    title: "ESTIMACIÓN",
    color: "bg-green-950/20",
    titleColor: "text-[#10B981]",
    rows: [
      `${scenario.hoursPerWeek} h/semana menos de trabajo manual`,
      `${formatEUR(saving)}/mes de ahorro estimado`,
      `Plan orientativo: ${plan.name}`,
      `Supuestos: ${ASSUMPTIONS.hourlyCostEUR} €/h y ${ASSUMPTIONS.weeksPerMonth.toString().replace(".", ",")} semanas/mes`,
    ],
  },
];

const roiNumbers = [
  { v: formatEUR(plan.fromEUR), l: "Inversión desde" },
  { v: `${formatEUR(saving)}/mes`, l: "Ahorro estimado" },
  { v: `${payback} días`, l: "Recuperación" },
];

const starterFeatures = [
  { text: "Gestión de pedidos automática", ok: true },
  { text: "Facturación automática", ok: true },
  { text: "Soporte 30 días", ok: true },
  { text: "Stock entre canales", ok: false },
  { text: "Devoluciones automáticas", ok: false },
];

const growthFeatures = [
  { text: "Gestión de pedidos automática", ok: true },
  { text: "Stock entre canales", ok: true },
  { text: "Devoluciones automáticas", ok: true },
  { text: "Informe de ventas", ok: true },
  { text: "Soporte 60 días + revisión", ok: true },
];

const faqs = [
  {
    q: "¿Dejo de tener acceso a mi tienda si falla el automático?",
    a: "No. La tienda sigue funcionando igual. Si falla un flujo, recibes un aviso y puedes seguir a mano.",
  },
  {
    q: "¿Cómo se mantiene el stock entre canales?",
    a: "Decidimos qué sistema manda y trabajamos con ajustes de unidades, para que dos sistemas no se pisen.",
  },
  {
    q: "¿Y si mi proveedor no tiene API?",
    a: "Se le envía un correo cuando el stock baja del mínimo, igual que haces hoy pero sin tener que acordarte.",
  },
  {
    q: "¿Hay costes recurrentes?",
    a: "Mi trabajo es un pago único. Las herramientas como n8n o Make tienen su propia tarifa, que pagas directamente a ellas.",
  },
  {
    q: "¿Qué pasa si falla el automático?",
    a: `Dejo alertas automáticas si un flujo falla; respondo en ${OFFER.responseTime}. Mientras tanto, puedes seguir a mano sin perder datos.`,
  },
  {
    q: "¿Cuánto tiempo lleva implementarlo?",
    a: `Según el plan: ${plan1.name}, ${plan1.weeks} semanas; ${plan2.name}, ${plan2.weeks} semanas.`,
  },
  {
    q: "¿Es seguro? ¿Dónde van mis datos?",
    a: "Tus datos viajan cifrados (HTTPS) y se quedan en tus propias cuentas. Trabajo con tus datos conforme al RGPD.",
  },
];

const fit = {
  yes: [
    "Copias los pedidos a mano a la hoja de almacén o al programa de gestión.",
    "El stock no coincide entre la web, el almacén y otros canales.",
    "Avisas a mano a cada cliente del envío o de su devolución.",
  ],
  no: [
    "Recibes pocos pedidos y los gestionas en un rato.",
    "Tu plataforma ya hace todo esto sin copiar nada.",
    "Lo que te preocupa es la tienda en sí (diseño, pagos o anuncios), no la gestión de pedidos.",
  ],
};

/* ── Component ─────────────────────────────────────────────────── */

export default function AutomatizarEcommerce() {
  return (
    <>
      <div className="min-h-screen bg-[#0F0F0F]">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#B8860B]/4 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-[#B8860B]" />
                  <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                    Automatización · E-commerce · Barcelona
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#1A3A52]/60 border border-[#1A3A52] text-white/70 text-xs px-3 py-1.5 mb-5">
                  <CheckCircle size={11} className="text-[#10B981]" />
                  Shopify y WooCommerce
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                  Automatiza tu e-commerce en Barcelona: pedidos, stock y facturas sin copiar a mano
                </h1>

                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  Automatizo pedidos, stock, devoluciones y facturación en tiendas de Shopify y WooCommerce de Barcelona.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm tracking-wide px-7 py-4 transition-all hover:shadow-[0_0_25px_rgba(26,58,82,0.6)]"
                  >
                    <Calendar size={15} />
                    Reserva tu llamada
                  </a>
                  <span className="text-white/55 text-xs self-center">{OFFER_SUMMARY}</span>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col gap-4 mt-8 lg:mt-0">
                {[
                  { value: `${OFFER.freeCallMinutes} min`, label: "Llamada gratuita" },
                  { value: "Precio cerrado", label: "Antes de empezar" },
                  { value: `${OFFER.guaranteeDays} días`, label: "Garantía" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex-1 bg-[#1A3A52]/30 border border-[#1A3A52]/60 p-4 lg:p-5 text-center">
                    <p className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold text-[#B8860B]">{value}</p>
                    <p className="text-white/45 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMA ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Cuánto tiempo pierdes cada semana?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl leading-relaxed">
            Tu tienda ya hace parte del trabajo. Lo que suele faltar es lo que pasa entre aplicaciones.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {problemBlocks.map(({ icon, number, title, desc }) => (
              <div key={title} className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 p-7 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  {icon}
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">{number}</span>
                </div>
                <p className="text-white font-semibold text-[15px] mb-2">{title}</p>
                <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1A3A52] border border-[#1A3A52] p-7">
            <p className="text-white font-bold text-[15px] mb-1">
              Ejemplo ilustrativo: {scenario.hoursPerWeek} h/semana × {ASSUMPTIONS.weeksPerMonth.toString().replace(".", ",")} semanas × {ASSUMPTIONS.hourlyCostEUR} €/h ={" "}
              <span className="text-[#B8860B]">{formatEUR(saving)}/mes</span>
            </p>
            <p className="text-white/50 text-sm">Es una estimación; lo calculamos con tus horas reales en la llamada gratuita.</p>
          </div>
        </section>

        <FitCheck {...fit} />

        {/* ── SOLUCIÓN ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
              ¿Cómo lo haría en tu e-commerce?
            </h2>

            <div className="space-y-0">
              {solutionWeeks.map(({ n, title, body, cost }, i) => (
                <div
                  key={n}
                  className={`flex gap-6 p-7 border border-white/5 hover:border-[#B8860B]/20 transition-colors ${i < solutionWeeks.length - 1 ? "border-b-0" : ""}`}
                >
                  <div className="shrink-0 pt-0.5">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A3A52]/70 leading-none">{n}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="text-white font-bold text-[15px]">{title}</p>
                      <span className="text-[#B8860B] text-xs font-semibold border border-[#B8860B]/30 px-2 py-0.5">{cost}</span>
                    </div>
                    <p className="text-white/55 text-[15px] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EJEMPLO ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
            Ejemplo ilustrativo: {scenario.sector.toLowerCase()}
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 mb-8">
            {caseColumns.map(({ title, color, titleColor, rows }) => (
              <div key={title} className={`${color} p-6`}>
                <p className={`font-bold text-xs uppercase tracking-widest mb-5 ${titleColor}`}>{title}</p>
                <ul className="space-y-3">
                  {rows.map(row => (
                    <li key={row} className="text-white/60 text-[13px] leading-snug border-l-2 border-white/10 pl-3">
                      {row}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#B8860B]/8 border border-[#B8860B]/25 p-6 flex flex-wrap gap-8 justify-between items-center">
            <div className="flex flex-wrap gap-8">
              {roiNumbers.map(({ v, l }) => (
                <div key={l} className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">{v}</p>
                  <p className="text-white/45 text-xs mt-0.5">{l}</p>
                </div>
              ))}
            </div>
            <Link
              href="/blog/automatizar-pedidos-shopify-woocommerce"
              className="text-[#B8860B] text-sm hover:underline flex items-center gap-1 shrink-0"
            >
              Ver la guía de pedidos <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2">
              ¿Cuánto cuesta automatizar un e-commerce?
            </h2>
            <p className="text-white/50 text-[15px] mb-10">Precios desde, adaptados a tu caso. El precio exacto se cierra por escrito antes de empezar.</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-6">
              {/* STARTER */}
              <div className="bg-[#111111] border border-white/8 p-8">
                <p className="text-white/40 text-[11px] uppercase tracking-widest mb-1">Ideal pequeño</p>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-white/40 text-sm font-normal">desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">{formatEUR(plan1.fromEUR)}</span>
                </div>
                <div className="border-t border-white/8 pt-5 space-y-2.5 mb-6">
                  {starterFeatures.map(({ text, ok }) => (
                    <div key={text} className="flex items-center gap-2">
                      {ok
                        ? <CheckCircle size={14} className="text-[#10B981] shrink-0" />
                        : <X size={14} className="text-white/20 shrink-0" />}
                      <span className={`text-[14px] ${ok ? "text-white/70" : "text-white/25"}`}>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/3 border border-white/6 p-4 text-xs space-y-1.5 mb-5">
                  {[["Inversión desde", formatEUR(plan1.fromEUR)], ["Precio final", "según tu caso"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/35">{k}</span>
                      <span className="text-white/65 font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#form" className="block text-center border border-white/20 hover:border-[#B8860B]/50 text-white/65 hover:text-[#B8860B] font-bold text-sm py-3 transition-all">
                  Reserva tu llamada
                </a>
              </div>

              {/* GROWTH */}
              <div className="bg-[#111111] border-2 border-[#B8860B]/50 p-8 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-[#0F0F0F] text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                  Recomendado
                </span>
                <p className="text-[#B8860B] text-[11px] uppercase tracking-widest mb-1">Completo</p>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-[#B8860B]/60 text-sm font-normal">desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">{formatEUR(plan2.fromEUR)}</span>
                </div>
                <div className="border-t border-white/8 pt-5 space-y-2.5 mb-6">
                  {growthFeatures.map(({ text, ok }) => (
                    <div key={text} className="flex items-center gap-2">
                      {ok
                        ? <CheckCircle size={14} className="text-[#10B981] shrink-0" />
                        : <X size={14} className="text-white/20 shrink-0" />}
                      <span className={`text-[14px] ${ok ? "text-white/70" : "text-white/25"}`}>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1A3A52]/40 border border-[#1A3A52]/60 p-4 text-xs space-y-1.5 mb-5">
                  {[["Inversión desde", formatEUR(plan2.fromEUR)], ["Precio final", "según tu caso"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/45">{k}</span>
                      <span className="text-[#B8860B] font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#form" className="block text-center bg-[#B8860B] hover:bg-[#9A7009] text-[#0F0F0F] font-bold text-sm py-3 transition-all">
                  Reserva tu llamada
                </a>
              </div>
            </div>
            <VatNote className="mt-4" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            Preguntas frecuentes
          </h2>
          <div className="max-w-2xl space-y-0">
            {faqs.map(({ q, a }, i) => (
              <div key={q} className={`py-5 border-b border-white/6 ${i === 0 ? "border-t" : ""}`}>
                <p className="text-white font-semibold text-[15px] mb-2">{q}</p>
                <p className="text-white/55 text-[15px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA + FORM ── */}
        <section id="form" className="py-24 bg-gradient-to-br from-[#1A3A52]/20 to-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <LandingContactForm
              title="Llamada gratuita para tu e-commerce"
              description="Sin compromiso. Vemos cuánto te cuesta cada proceso antes de que inviertas nada."
              sector="ecommerce"
            />
          </div>
        </section>

        <RelatedGuides guides={[GUIDES.pedidosTienda, GUIDES.facturas, GUIDES.n8n]} hubLabel="Ver cómo se automatizan otros sectores en Barcelona" />

        <Footer />
      </div>
    </>
  );
}
