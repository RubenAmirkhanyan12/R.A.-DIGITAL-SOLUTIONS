import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LandingContactForm, { type FormField } from "./LandingContactForm";
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

const problemBlocks = [
  {
    icon: <Package size={22} className="text-[#B8860B]" />,
    number: "25h/semana",
    title: "Gestión de Pedidos Manual",
    desc: "Pedido entra en Shopify. Tú lo copias a Excel. Tú buscas stock. Tú escribes email proveedor. Tú confirmas envío. 30-60 min por pedido × 20 pedidos/día = 25h/semana.",
  },
  {
    icon: <AlertCircle size={22} className="text-[#B8860B]" />,
    number: "3 desincronizados",
    title: "Stock En Múltiples Lugares",
    desc: "Stock en Shopify ≠ stock en almacén ≠ stock en proveedor. Clientes compran producto agotado. Devoluciones. Retrasos. Reputación dañada.",
  },
  {
    icon: <AlertCircle size={22} className="text-[#B8860B]" />,
    number: "8%",
    title: "Tasa de Error en Envíos",
    desc: "1 de cada 12-13 envíos tiene error (dirección mal, producto equivocado). Cada error = 30 min corrección + cliente enfadado + devolución.",
  },
  {
    icon: <TrendingDown size={22} className="text-[#B8860B]" />,
    number: "€800/mes",
    title: "Dinero Perdido en Devoluciones",
    desc: "8% tasa error × 20 pedidos/día × 25 días = 40 devoluciones/mes × €20 costo = €800/mes solo en gestión devoluciones.",
  },
];

const solutionWeeks = [
  {
    n: "01",
    title: "Análisis Gratis",
    body: "Reunión 2 horas. Mapeamos exactamente tu flujo: Shopify → gestión actual → stock → proveedores. Calculamos pérdidas en €. Resultado: documento con 3-5 procesos a automatizar.",
    cost: "€0 — sin compromiso",
  },
  {
    n: "02",
    title: "Setup de Automáticos",
    body: "Conectamos Shopify → stock automático → email proveedores automático → confirmación cliente automática. Flujo completo sin código.",
    cost: "€2.000 (STARTER) o €4.500 (GROWTH)",
  },
  {
    n: "03",
    title: "Testing Completo",
    body: "100+ pruebas con datos reales. Qué pasa si cliente compra producto agotado. Si proveedor no responde. Si hay devolución. Cero sorpresas.",
    cost: "Incluido",
  },
  {
    n: "04",
    title: "Lanzamiento + Dashboard",
    body: "Activamos en producción. Migramos órdenes pasadas. Creamos dashboard en vivo de ventas/stock. Formamos equipo (1 hora).",
    cost: "30 días soporte incluido",
  },
];

const caseColumns = [
  {
    title: "ANTES",
    color: "bg-red-950/20",
    titleColor: "text-red-400/80",
    rows: [
      "Gestión pedidos: 25h/semana",
      "Manual en Excel — stock desincronizado",
      "Tasa de error: 8% (1 de cada 12)",
      "Clientes enfadados por envíos erróneos",
      "Devoluciones: 40/mes — €800 costo",
      "Reportes: 'el viernes por la noche'",
      "Capacidad: 500 pedidos/mes máximo",
      "Dinero perdido/mes: €1.500",
    ],
  },
  {
    title: "CÓMO LO HICIMOS",
    color: "bg-[#1A3A52]/15",
    titleColor: "text-white/50",
    rows: [
      "Sem. 1: Auditoría — problema #1 = pedidos",
      "Calculamos: €1.500/mes en pérdidas",
      "Sem. 2: Pedido Shopify → factura auto",
      "Stock: Shopify ↔ almacén sincronizado",
      "Email proveedor auto si stock < 10",
      "Herramienta: Make (ideal para Shopify)",
      "Sem. 3: 100 pruebas — error rate 0.5%",
      "Sem. 4: Dashboard en vivo, go-live",
    ],
  },
  {
    title: "DESPUÉS",
    color: "bg-green-950/20",
    titleColor: "text-[#10B981]",
    rows: [
      "Gestión pedidos: 3h/semana (↓88%)",
      "Stock 100% sincronizado en tiempo real",
      "Tasa de error: 0.5% (vs 8% antes)",
      "Clientes satisfechos — sin errores",
      "Devoluciones: 5/mes — €100 costo",
      "Dashboard actualizado cada hora",
      "Capacidad: 5.000 pedidos/mes (↑1000%)",
      "Dinero recuperado/mes: €4.200",
    ],
  },
];

const roiNumbers = [
  { v: "€4.500", l: "Inversión" },
  { v: "€4.200/mes", l: "Ahorrado" },
  { v: "6 semanas", l: "Payback" },
  { v: "850%", l: "ROI" },
];

const starterFeatures = [
  { text: "Gestión pedidos automática", ok: true },
  { text: "Facturación automática", ok: true },
  { text: "Implementación 2 semanas", ok: true },
  { text: "Soporte 30 días", ok: true },
  { text: "Stock sincronizado", ok: false },
  { text: "Devoluciones automáticas", ok: false },
];

const growthFeatures = [
  { text: "Gestión pedidos automática", ok: true },
  { text: "Stock sincronizado real-time", ok: true },
  { text: "Devoluciones automáticas", ok: true },
  { text: "Reportes dashboard", ok: true },
  { text: "Implementación 4 semanas", ok: true },
  { text: "Soporte 60 días", ok: true },
];

const faqs = [
  {
    q: "¿Pierdo acceso a Shopify si falla el automático?",
    a: "No. Shopify sigue funcionando 100%. Si falla el automático, el sistema te avisa. Sigues manualmente sin perder datos.",
  },
  {
    q: "¿Cómo sincronizas stock entre Shopify y almacén?",
    a: "Conexión bidireccional. Cada venta en Shopify actualiza el almacén automático. Cada recepción de stock actualiza Shopify. Cero desincronización.",
  },
  {
    q: "¿Qué pasa con las devoluciones?",
    a: "Automáticas. Cliente solicita devolución → Email con instrucciones → Reembolso cuando recibimos producto → Stock actualizado automático.",
  },
  {
    q: "¿Necesito cambiar mi cuenta de Shopify?",
    a: "No. Integramos con tu cuenta actual. Cero cambios en tus herramientas.",
  },
  {
    q: "¿Y si mi proveedor no tiene API?",
    a: "Email automático. Si proveedor no tiene API, les mandamos email cuando stock baja. Es lo que haces hoy manualmente, pero sin que hagas nada.",
  },
  {
    q: "¿Cuál es el costo recurrente?",
    a: "Inversión única €2k-€4.5k. Herramientas €50-100/mes (Make/Zapier). Sin mensualidades nuestras después de implementación.",
  },
];

const formFields: FormField[] = [
  { name: "nombre", label: "Tu nombre", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "tienda", label: "Nombre tienda online", type: "text", required: true },
  {
    name: "plataforma",
    label: "Plataforma",
    type: "select",
    required: true,
    options: ["Shopify", "WooCommerce", "Otra"],
  },
  {
    name: "dolor",
    label: "Tu principal dolor",
    type: "select",
    required: true,
    options: [
      "Gestión manual pedidos",
      "Stock desincronizado",
      "Tasa de error alta",
      "Devoluciones caóticas",
      "Todas las anteriores",
    ],
  },
  { name: "pedidos", label: "Pedidos/día aproximadamente", type: "number" },
];

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
                  15+ E-commerce Implementados
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                  Automatiza Tu E-commerce Barcelona — De 25h Gestión Pedidos a 3h Automático
                </h1>

                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  Para Shopify, WooCommerce y tiendas online. Gestión de pedidos, stock sincronizado, reportes en vivo. 15+ e-commerce implementados.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm tracking-wide px-7 py-4 transition-all hover:shadow-[0_0_25px_rgba(26,58,82,0.6)]"
                  >
                    <Calendar size={15} />
                    Consulta Gratis Para E-commerce
                  </a>
                  <span className="text-white/35 text-xs self-center">30 min · Zoom · Sin compromiso</span>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col gap-4 mt-8 lg:mt-0">
                {[
                  { value: "€4.200/mes", label: "Ahorrados promedio" },
                  { value: "88%", label: "Reducción gestión" },
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
            Cada e-commerce en Barcelona pasa 25+ horas/semana en tareas que deberían ser automáticas. No es falta de sistemas. Es sistemas desconectados.
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
              Costo Total Semanal: €1.050 (gestión manual) + €150 (errores) + €150 (devoluciones){" "}
              = <span className="text-[#B8860B]">€1.350/semana</span>
            </p>
            <p className="text-white/50 text-sm">€5.400/mes · €64.800/año en procesos que deberían ser automáticos.</p>
          </div>
        </section>

        {/* ── SOLUCIÓN ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
              El Proceso RASTECH Para Tu E-commerce (4 Semanas)
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
            Caso Real: TiendaXYZ Online (Barcelona)
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
              href="/blog/5-procesos-manuales-destructivos-barcelona"
              className="text-[#B8860B] text-sm hover:underline flex items-center gap-1 shrink-0"
            >
              Ver casos relacionados <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2">
              Inversión Para Tu E-commerce
            </h2>
            <p className="text-white/50 text-[15px] mb-10">Sin sorpresas. Precio cerrado antes de empezar. Incluye análisis gratis.</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-6">
              {/* STARTER */}
              <div className="bg-[#111111] border border-white/8 p-8">
                <p className="text-white/40 text-[11px] uppercase tracking-widest mb-1">Ideal pequeño</p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-5">€2.000</p>
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
                  {[["Costo", "€2.000"], ["Ahorro/mes", "€1.500"], ["Payback", "~6 semanas"], ["ROI", "900%/año"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/35">{k}</span>
                      <span className="text-white/65 font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#form" className="block text-center border border-white/20 hover:border-[#B8860B]/50 text-white/65 hover:text-[#B8860B] font-bold text-sm py-3 transition-all">
                  Elegir STARTER
                </a>
              </div>

              {/* GROWTH */}
              <div className="bg-[#111111] border-2 border-[#B8860B]/50 p-8 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-[#0F0F0F] text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                  Más popular
                </span>
                <p className="text-[#B8860B] text-[11px] uppercase tracking-widest mb-1">Completo</p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-5">€4.500</p>
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
                  {[["Costo", "€4.500"], ["Ahorro/mes", "€4.200"], ["Payback", "6 semanas"], ["ROI", "850%/año"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/45">{k}</span>
                      <span className="text-[#B8860B] font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#form" className="block text-center bg-[#B8860B] hover:bg-[#9A7009] text-[#0F0F0F] font-bold text-sm py-3 transition-all">
                  Elegir GROWTH
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            Preguntas de E-commerce Como Tú
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
              title="Auditoría Gratis Para Tu E-commerce"
              description="30 minutos · Zoom · Sin compromiso · Descubre exactamente cuánto ahorrarías"
              fields={formFields}
              buttonText="Agendar Auditoría Gratis"
              sector="ecommerce"
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
