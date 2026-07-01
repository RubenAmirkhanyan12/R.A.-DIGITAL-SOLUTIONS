import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LandingContactForm, { type FormField } from "./LandingContactForm";
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

const problemBlocks = [
  {
    icon: <BarChart2 size={22} className="text-[#B8860B]" />,
    number: "6h/cliente",
    title: "Reportes Manuales",
    desc: "Cada viernes: 2h en Google Analytics + 2h en Facebook Ads + 2h en conversiones. Por 5 clientes = 10h/semana solo en reportes. Después tienes que enviarlos.",
  },
  {
    icon: <FileText size={22} className="text-[#B8860B]" />,
    number: "30 min",
    title: "Facturas Recurrentes Manuales",
    desc: "5 clientes × 30 min generando factura = 2.5h/mes. Sin contar correcciones. Dinero que debería ser automático.",
  },
  {
    icon: <Bell size={22} className="text-[#B8860B]" />,
    number: "15 hitos/mes",
    title: "Seguimiento de Hitos Olvidado",
    desc: "Hito de cliente se pasa. Entrega se retrasa. Cliente se entera cuando pregunta. Mala comunicación. Confianza rota.",
  },
  {
    icon: <Users size={22} className="text-[#B8860B]" />,
    number: "Imposible escalar",
    title: "No Puedes Crecer Sin Contratar",
    desc: "Quieres 15 clientes. Necesitarías 3 empleados admin más (€20k/mes en nómina). O automatizas y escalas con el mismo equipo.",
  },
];

const solutionWeeks = [
  {
    n: "01",
    title: "Auditoría Gratis",
    body: "Mapeamos exactamente tu flujo actual: clientes, plataformas (GA, Ads, etc.), cálculos manuales. Resultado: documento con 3-5 automáticos de mayor impacto.",
    cost: "€0 — sin compromiso",
  },
  {
    n: "02",
    title: "Setup Dashboards",
    body: "Conectamos Google Analytics → Ads → Conversiones → Dashboard por cliente. Luego reportes automáticos cada lunes 8am. Sin que toques nada.",
    cost: "desde €1.100 (GROWTH) o desde €1.650 (ENTERPRISE)",
  },
  {
    n: "03",
    title: "Testing Completo",
    body: "100+ pruebas con datos reales. Qué pasa si cliente no pagó. Si hay error en datos. Si Google cambia API. Cero sorpresas.",
    cost: "Incluido",
  },
  {
    n: "04",
    title: "Lanzamiento",
    body: "Dashboards en vivo. Facturas automáticas (Stripe). Alertas hitos automáticas. Equipo formado en 1 hora.",
    cost: "30 días soporte incluido",
  },
];

const caseColumns = [
  {
    title: "ANTES",
    color: "bg-red-950/20",
    titleColor: "text-red-400/80",
    rows: [
      "Clientes activos: 5 máximo",
      "6h/cliente/semana = 30h admin",
      "Reportes: 'la pesadilla del viernes'",
      "Datos siempre 3 días atrasados",
      "Facturas: manual + olvidos + errores",
      "Hitos olvidados — clientes esperan",
      "Marc quería 15 clientes — imposible",
      "Dinero perdido/mes: €2.000",
    ],
  },
  {
    title: "CÓMO LO HICIMOS",
    color: "bg-[#1A3A52]/15",
    titleColor: "text-white/50",
    rows: [
      "Sem. 1: Auditoría — reportes #1 problema",
      "Calculamos: €2.000/mes en pérdidas",
      "Sem. 2: GA + Ads → dashboard cliente",
      "Reporte email auto cada lunes 8am",
      "Facturas: Stripe automático mensual",
      "Alertas: hito vence → email cliente auto",
      "Sem. 3: 100 pruebas con datos reales",
      "Sem. 4: Go-live, Marc tiene 15 clientes",
    ],
  },
  {
    title: "DESPUÉS",
    color: "bg-green-950/20",
    titleColor: "text-[#10B981]",
    rows: [
      "Clientes activos: 15 (mismo equipo)",
      "1h/cliente/semana = 15h admin (↓87%)",
      "Dashboards en tiempo real",
      "Clientes ven resultados sin pedir",
      "Facturas: 100% automáticas — cero olvidos",
      "Hitos: 100% on-time con alertas auto",
      "Marc: 40h/semana (vs 100h antes)",
      "Dinero recuperado/mes: €3.500",
    ],
  },
];

const roiNumbers = [
  { v: "€7.500", l: "Inversión" },
  { v: "€3.500/mes", l: "Ahorrado" },
  { v: "21 días", l: "Payback" },
  { v: "1.800%", l: "ROI" },
];

const growthFeatures = [
  { text: "Dashboards automáticos (standard)", ok: true },
  { text: "Facturas recurrentes automáticas", ok: true },
  { text: "Implementación 2 semanas", ok: true },
  { text: "Soporte 30 días", ok: true },
  { text: "Alertas hitos automáticas", ok: false },
  { text: "Integraciones custom (Slack, etc.)", ok: false },
];

const enterpriseFeatures = [
  { text: "Dashboards por cliente (custom)", ok: true },
  { text: "Facturas recurrentes automáticas", ok: true },
  { text: "Alertas hitos automáticas", ok: true },
  { text: "Integraciones custom (Slack, Discord…)", ok: true },
  { text: "Implementación 4 semanas", ok: true },
  { text: "Soporte dedicado", ok: true },
];

const faqs = [
  {
    q: "¿Mis clientes necesitan hacer algo?",
    a: "No. Dashboard automático. Ellos ven resultados sin hacer nada. Tú tampoco haces nada. El sistema lo gestiona 24/7.",
  },
  {
    q: "¿Qué pasa si cliente usa Ads pero no Analytics?",
    a: "Flexible. Conectamos lo que uses: GA + Ads + Conversiones + cualquier plataforma. El sistema se adapta, no al revés.",
  },
  {
    q: "¿Y si necesito reporte personalizado por cliente?",
    a: "Dashboard base es estándar. Pero puedes definir qué métricas aparecen por cliente. Algunos quieren ROI, otros conversiones. Flexible total.",
  },
  {
    q: "¿Puedo empezar en GROWTH y migrar a ENTERPRISE?",
    a: "Sí. Si empiezas con GROWTH y creces a 15 clientes, migras a ENTERPRISE. Pagas solo la diferencia. Nada se pierde ni se repite.",
  },
  {
    q: "¿Qué pasa con datos históricos?",
    a: "Migramos. Dashboard tendrá datos de últimos 12 meses. No pierdes historiales.",
  },
  {
    q: "¿Necesito agregar un empleado para gestionar esto?",
    a: "No. De hecho, quitas trabajo a empleados existentes. Sistema automático. El equipo se enfoca en estrategia, no en data entry.",
  },
];

const formFields: FormField[] = [
  { name: "nombre", label: "Tu nombre", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "agencia", label: "Nombre agencia", type: "text", required: true },
  {
    name: "tipo",
    label: "Tipo de agencia",
    type: "select",
    required: true,
    options: ["Marketing", "Diseño", "Desarrollo", "Otro"],
  },
  { name: "clientes", label: "Clientes activos ahora", type: "number" },
  {
    name: "dolor",
    label: "Tu principal dolor",
    type: "select",
    required: true,
    options: [
      "Reportes manuales",
      "Facturas manual",
      "Hitos olvidados",
      "No puedo escalar sin contratar",
      "Todas las anteriores",
    ],
  },
];

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
                  12+ Agencias Implementadas
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                  Escala Tu Agencia Sin Contratar — Automatiza Reportes, Facturas, Seguimiento
                </h1>

                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  Agencias marketing, diseño y desarrollo Barcelona que triplicaron clientes sin nuevo hiring. 12+ implementadas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm tracking-wide px-7 py-4 transition-all hover:shadow-[0_0_25px_rgba(26,58,82,0.6)]"
                  >
                    <Calendar size={15} />
                    Consulta Gratis Para Agencias
                  </a>
                  <span className="text-white/35 text-xs self-center">30 min · Zoom · Sin compromiso</span>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col gap-4 mt-8 lg:mt-0">
                {[
                  { value: "15 clientes", label: "vs 5 antes (mismo equipo)" },
                  { value: "87%", label: "Menos horas admin" },
                  { value: "4 semanas", label: "Implementación" },
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
            ¿Cuánto Tiempo Pierdes Cada Semana?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl leading-relaxed">
            Cada agencia en Barcelona pasa 30+ horas/semana en tareas administrativas. No porque no sepas ejecutar. Porque la operación es caótica.
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
              Costo Total Semanal: €750 (reportes) + €200 (facturas) + €300 (seguimiento){" "}
              = <span className="text-[#B8860B]">€1.250/semana</span>
            </p>
            <p className="text-white/50 text-sm">€5.000/mes · €60.000/año en tareas que se pueden automatizar.</p>
          </div>
        </section>

        {/* ── SOLUCIÓN ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
              El Proceso RASTECH Para Tu Agencia (4 Semanas)
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

        {/* ── CASO REAL ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
            Caso Real: Agencia Grow (L'Eixample, Barcelona)
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
              href="/blog/automatizacion-procesos-barcelona"
              className="text-[#B8860B] text-sm hover:underline flex items-center gap-1 shrink-0"
            >
              Ver guía de automatización <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2">
              Inversión Para Tu Agencia
            </h2>
            <p className="text-white/50 text-[15px] mb-10">Precios desde, adaptados a tu caso real. Hablamos, analizamos y acordamos juntos — análisis siempre gratis.</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-6">
              {/* GROWTH */}
              <div className="bg-[#111111] border border-white/8 p-8">
                <p className="text-white/40 text-[11px] uppercase tracking-widest mb-1">Ideal 3-8 clientes</p>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-white/40 text-sm font-normal">desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">€1.100</span>
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
                  {[["Inversión desde", "€1.100"], ["Ahorro/mes", "€1.500"], ["Precio final", "según tu caso"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/35">{k}</span>
                      <span className="text-white/65 font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#form" className="block text-center border border-white/20 hover:border-[#B8860B]/50 text-white/65 hover:text-[#B8860B] font-bold text-sm py-3 transition-all">
                  Elegir GROWTH
                </a>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-[#111111] border-2 border-[#B8860B]/50 p-8 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-[#0F0F0F] text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                  Más popular
                </span>
                <p className="text-[#B8860B] text-[11px] uppercase tracking-widest mb-1">9+ clientes</p>
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-[#B8860B]/60 text-sm font-normal">desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">€1.650</span>
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
                  {[["Inversión desde", "€1.650"], ["Ahorro/mes", "€3.500"], ["Precio final", "según tu caso"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/45">{k}</span>
                      <span className="text-[#B8860B] font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#form" className="block text-center bg-[#B8860B] hover:bg-[#9A7009] text-[#0F0F0F] font-bold text-sm py-3 transition-all">
                  Elegir ENTERPRISE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            Preguntas de Agencias Como La Tuya
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
              title="Auditoría Gratis Para Tu Agencia"
              description="30 minutos · Zoom · Sin compromiso · Descubre cuánto podrías escalar"
              fields={formFields}
              buttonText="Agendar Auditoría Gratis"
              sector="agencias"
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
