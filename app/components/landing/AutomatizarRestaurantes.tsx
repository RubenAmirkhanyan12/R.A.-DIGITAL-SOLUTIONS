import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RelatedGuides from "./RelatedGuides";
import { GUIDES } from "../../lib/guides";
import { ASSUMPTIONS, formatEUR, OFFER, planById, roiNet, SCENARIOS, scenarioNumbers } from "../../lib/site-config";
import LandingContactForm, { type FormField } from "./LandingContactForm";
import {
  CheckCircle,
  X,
  FileText,
  Phone,
  ShoppingBag,
  TrendingDown,
  ArrowRight,
  Calendar,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────── */

const scenario = SCENARIOS.find((c) => c.id === "restaurante")!;
const { plan, saving, payback } = scenarioNumbers(scenario);
const plan1 = planById("starter");
const plan2 = planById("growth");

const problemBlocks = [
  {
    icon: <FileText size={22} className="text-[#B8860B]" />,
    number: "Facturación",
    title: "Facturación manual",
    desc: "Cada factura hay que prepararla, enviarla y archivarla a mano, normalmente al final de un turno largo.",
  },
  {
    icon: <Phone size={22} className="text-[#B8860B]" />,
    number: "Reservas",
    title: "Reservas fragmentadas",
    desc: "Teléfono, correo, web y WhatsApp. Si no están en un solo sitio, es fácil olvidar una o asignar dos veces la misma mesa.",
  },
  {
    icon: <ShoppingBag size={22} className="text-[#B8860B]" />,
    number: "Proveedores",
    title: "Pedidos a proveedores",
    desc: "Contar el stock, redactar el pedido, enviarlo y confirmar. Cuando se olvida un producto, falta en cocina.",
  },
  {
    icon: <TrendingDown size={22} className="text-[#B8860B]" />,
    number: "Cobros",
    title: "Cobros pendientes",
    desc: "Si trabajas con empresas o catering, nadie te avisa de qué factura ha vencido si no la estás mirando.",
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
    title: "Diseño de los flujos",
    body: "Facturación: venta → factura → envío. Reservas: teléfono, correo y web → un solo calendario.",
    cost: `desde ${formatEUR(plan1.fromEUR)} (${plan1.name}) o desde ${formatEUR(plan2.fromEUR)} (${plan2.name})`,
  },
  {
    n: "03",
    title: "Pruebas",
    body: "Pruebas con tus datos antes de activar: qué pasa si hay un error, si se cae una conexión o si un cliente cancela.",
    cost: "Incluido",
  },
  {
    n: "04",
    title: "Puesta en marcha + formación",
    body: `Activo los flujos en tu negocio y dedico ${OFFER.trainingHours} hora a formar a tu equipo. Dejo alertas automáticas si un flujo falla.`,
    cost: plan1.support,
  },
];

const caseColumns = [
  {
    title: "ANTES",
    color: "bg-red-950/20",
    titleColor: "text-red-400/80",
    rows: ["Facturas preparadas a mano", "Reservas en varios canales", "Pedidos a proveedores uno a uno", "Sin aviso de cobros pendientes"],
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
  { v: `${roiNet(saving * 12, plan.fromEUR)} %`, l: "ROI neto, año 1" },
];

const starterFeatures = [
  { text: "Llamada gratuita", ok: true },
  { text: "Facturación automática", ok: true },
  { text: "Soporte 30 días", ok: true },
  { text: "Reservas centralizadas", ok: false },
  { text: "Pedidos a proveedores", ok: false },
];

const growthFeatures = [
  { text: "Llamada gratuita", ok: true },
  { text: "Facturación automática", ok: true },
  { text: "Reservas centralizadas", ok: true },
  { text: "Pedidos a proveedores automáticos", ok: true },
  { text: "Soporte 60 días + revisión", ok: true },
];

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "No. Monto los flujos con n8n o Make y tu equipo sigue trabajando con sus herramientas de siempre.",
  },
  {
    q: "¿Tengo que cambiar mis herramientas?",
    a: "Normalmente no. Conecto lo que ya usas. Si tu programa no tiene API, buscamos otra vía o te digo que no compensa.",
  },
  {
    q: "¿Se pueden pedir productos frescos automáticamente?",
    a: "Con el género seco funciona bien un mínimo de stock. Con el fresco pesa más la previsión de reservas, así que suelo dejar una revisión tuya antes de enviar el pedido.",
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

const formFields: FormField[] = [
  { name: "nombre", label: "Tu nombre", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "restaurante", label: "Nombre restaurante", type: "text", required: true },
  {
    name: "tipo",
    label: "Tipo de restaurante",
    type: "select",
    required: true,
    options: ["Restaurante", "Bar", "Catering", "Otro"],
  },
  {
    name: "dolor",
    label: "Tu principal dolor",
    type: "select",
    required: true,
    options: [
      "Facturación manual",
      "Reservas fragmentadas",
      "Pedidos proveedores",
      "Dinero no cobrado",
      "Todas las anteriores",
    ],
  },
  { name: "facturas", label: "Facturas/día aproximadamente", type: "number" },
];

/* ── Component ─────────────────────────────────────────────────── */

export default function AutomatizarRestaurantes() {
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
                    Automatización · Restaurantes · Barcelona
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#1A3A52]/60 border border-[#1A3A52] text-white/70 text-xs px-3 py-1.5 mb-5">
                  <CheckCircle size={11} className="text-[#10B981]" />
                  Restaurantes, bares y catering
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                  Automatiza Tu Restaurante Barcelona — De 40h Facturación a 5h Automático
                </h1>

                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  Automatizo facturas, reservas y pedidos a proveedores en restaurantes, bares y catering de Barcelona, con las herramientas que ya usas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm tracking-wide px-7 py-4 transition-all hover:shadow-[0_0_25px_rgba(26,58,82,0.6)]"
                  >
                    <Calendar size={15} />
                    Reserva tu llamada
                  </a>
                  <span className="text-white/35 text-xs self-center">{OFFER.freeCallMinutes} min · Sin compromiso</span>
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
            Las tareas se reparten entre la cocina, la sala y el ordenador, y casi todas se repiten igual cada semana.
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

        {/* ── SOLUCIÓN ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
              Cómo lo haría en tu restaurante
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
              href="/blog/automatizacion-facturacion-40h-4h"
              className="text-[#B8860B] text-sm hover:underline flex items-center gap-1 shrink-0"
            >
              Ver un ejemplo de facturación <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2">
              Inversión para tu restaurante
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
                <a
                  href="#form"
                  className="block text-center border border-white/20 hover:border-[#B8860B]/50 text-white/65 hover:text-[#B8860B] font-bold text-sm py-3 transition-all"
                >
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
                <a
                  href="#form"
                  className="block text-center bg-[#B8860B] hover:bg-[#9A7009] text-[#0F0F0F] font-bold text-sm py-3 transition-all"
                >
                  Reserva tu llamada
                </a>
              </div>
            </div>

            <p className="text-white/40 text-[13px] max-w-xl leading-relaxed">
              El precio final se cierra por escrito antes de empezar. Depende del alcance y de las herramientas que ya usas. </p>
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
              title="Llamada gratuita para tu restaurante"
              description="Sin compromiso. Vemos cuánto te cuesta cada proceso antes de que inviertas nada."
              fields={formFields}
              buttonText="Reserva tu llamada"
              sector="restaurantes"
            />
          </div>
        </section>

        <RelatedGuides guides={[GUIDES.pedidosRestaurante, GUIDES.facturas, GUIDES.cobros]} hubLabel="Ver qué se automatiza en otros sectores" />

        <Footer />
      </div>
    </>
  );
}
