import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RelatedGuides from "./RelatedGuides";
import { GUIDES } from "../../lib/guides";
import { ASSUMPTIONS, formatEUR, OFFER, OFFER_SUMMARY, planById, SCENARIOS, scenarioNumbers } from "../../lib/site-config";
import LandingContactForm from "./LandingContactForm";
import FitCheck from "../FitCheck";
import {
  CheckCircle,
  X,
  BarChart2,
  FileText,
  Bell,
  Users,
  ArrowRight,
  Calendar,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────── */

const scenario = SCENARIOS.find((c) => c.id === "agencia")!;
const { plan, saving, payback } = scenarioNumbers(scenario);
const plan1 = planById("growth");
const plan2 = planById("enterprise");

const problemBlocks = [
  {
    icon: <BarChart2 size={22} className="text-[#B8860B]" />,
    number: "Reportes",
    title: "Reportes manuales",
    desc: "Entrar en cada plataforma, copiar datos a una plantilla y revisar que no se cuele nada de otro cliente.",
  },
  {
    icon: <FileText size={22} className="text-[#B8860B]" />,
    number: "Facturas",
    title: "Facturas recurrentes",
    desc: "Son iguales cada mes, pero alguien tiene que acordarse de emitirlas y enviarlas.",
  },
  {
    icon: <Bell size={22} className="text-[#B8860B]" />,
    number: "Hitos",
    title: "Seguimiento de hitos",
    desc: "Si un hito se pasa, el cliente se entera cuando pregunta. Un aviso a tiempo evita esa conversación.",
  },
  {
    icon: <Users size={22} className="text-[#B8860B]" />,
    number: "Capacidad",
    title: "Crecer sin más operativa",
    desc: "Si cada cliente nuevo añade horas de administración, crecer obliga a contratar antes de tiempo.",
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
    title: "Montaje de los reportes",
    body: "Conecto Google Analytics, las plataformas de anuncios y la plantilla de informe de cada cliente, con revisión del responsable antes de enviar.",
    cost: `desde ${formatEUR(plan1.fromEUR)} (${plan1.name}) o desde ${formatEUR(plan2.fromEUR)} (${plan2.name})`,
  },
  {
    n: "03",
    title: "Pruebas",
    body: "Pruebas con tus datos antes de activar: permisos caducados, datos incompletos o cliente sin una de las fuentes.",
    cost: "Incluido",
  },
  {
    n: "04",
    title: "Puesta en marcha + formación",
    body: `Activo facturas recurrentes y avisos de hitos, y dedico ${OFFER.trainingHours} hora a formar a tu equipo. Dejo alertas automáticas si un flujo falla.`,
    cost: plan1.support,
  },
];

const caseColumns = [
  {
    title: "ANTES",
    color: "bg-red-950/20",
    titleColor: "text-red-400/80",
    rows: ["Datos copiados plataforma a plataforma", "Facturas recurrentes a mano", "Hitos en la memoria de cada persona", "Operativa que crece con cada cliente"],
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

const growthFeatures = [
  { text: "Reportes automáticos", ok: true },
  { text: "Facturas recurrentes", ok: true },
  { text: "Soporte 60 días + revisión", ok: true },
  { text: "Avisos de hitos", ok: false },
  { text: "Integraciones a medida", ok: false },
];

const enterpriseFeatures = [
  { text: "Reportes por cliente", ok: true },
  { text: "Facturas recurrentes", ok: true },
  { text: "Avisos de hitos", ok: true },
  { text: "Integraciones a medida (Slack…)", ok: true },
  { text: "Retainer mensual opcional", ok: true },
];

const faqs = [
  {
    q: "¿Mis clientes tienen que hacer algo?",
    a: "No. Reciben el informe como hasta ahora, después de que lo revise el responsable de la cuenta.",
  },
  {
    q: "¿Y si un cliente no usa alguna plataforma?",
    a: "Conectamos solo lo que use. La plantilla se adapta a sus fuentes.",
  },
  {
    q: "¿Puedo empezar por un plan y ampliar después?",
    a: "Sí. Lo ya montado se aprovecha y el resto se presupuesta por escrito.",
  },
  {
    q: "¿Se pueden personalizar las métricas por cliente?",
    a: "Sí, dentro de una plantilla común con pocas variantes. Es lo que hace que el sistema sea fácil de mantener.",
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
    "El informe mensual de cada cliente te lleva horas de copiar datos.",
    "Emites a mano facturas recurrentes que son iguales cada mes.",
    "Te enteras tarde de hitos o entregas que se pasan de fecha.",
  ],
  no: [
    "Tienes pocos clientes y cada informe es distinto.",
    "Tu herramienta de gestión ya prepara los informes y las facturas.",
    "Lo que necesitas es mejorar las campañas, no la operativa.",
  ],
};

/* ── Component ─────────────────────────────────────────────────── */

export default function AutomatizarAgencias() {
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
                    Automatización · Agencias · Barcelona
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#1A3A52]/60 border border-[#1A3A52] text-white/70 text-xs px-3 py-1.5 mb-5">
                  <CheckCircle size={11} className="text-[#10B981]" />
                  Marketing, diseño y desarrollo
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                  Automatización para agencias en Barcelona: reportes, facturas y seguimiento sin trabajo manual
                </h1>

                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  Automatizo reportes, facturas recurrentes y seguimiento de hitos en agencias de Barcelona, para que el equipo dedique menos tiempo a la operativa.
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
            La operativa crece con cada cliente nuevo, aunque el trabajo sea siempre el mismo.
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
              ¿Cómo lo haría en tu agencia?
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
              href="/blog/reportes-automaticos-para-agencias-de-marketing"
              className="text-[#B8860B] text-sm hover:underline flex items-center gap-1 shrink-0"
            >
              Ver la guía de reportes <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2">
              ¿Cuánto cuesta automatizar una agencia?
            </h2>
            <p className="text-white/50 text-[15px] mb-10">Precios desde, adaptados a tu caso. El precio exacto se cierra por escrito antes de empezar.</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-6">
              {/* GROWTH */}
              <div className="bg-[#111111] border border-white/8 p-8">
                <p className="text-white/40 text-[11px] uppercase tracking-widest mb-1">Ideal 3-8 clientes</p>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-white/40 text-sm font-normal">desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">{formatEUR(plan1.fromEUR)}</span>
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

              {/* ENTERPRISE */}
              <div className="bg-[#111111] border-2 border-[#B8860B]/50 p-8 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-[#0F0F0F] text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                  Recomendado
                </span>
                <p className="text-[#B8860B] text-[11px] uppercase tracking-widest mb-1">9+ clientes</p>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-[#B8860B]/60 text-sm font-normal">desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">{formatEUR(plan2.fromEUR)}</span>
                </div>
                <div className="border-t border-white/8 pt-5 space-y-2.5 mb-6">
                  {enterpriseFeatures.map(({ text, ok }) => (
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
              title="Llamada gratuita para tu agencia"
              description="Sin compromiso. Vemos cuánto te cuesta cada proceso antes de que inviertas nada."
              sector="agencias"
            />
          </div>
        </section>

        <RelatedGuides guides={[GUIDES.reportes, GUIDES.cobros, GUIDES.n8n]} hubLabel="Ver qué más se puede automatizar en tu empresa" />

        <Footer />
      </div>
    </>
  );
}
