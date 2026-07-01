import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
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

const problemBlocks = [
  {
    icon: <FileText size={22} className="text-[#B8860B]" />,
    number: "40h/semana",
    title: "Facturación Manual",
    desc: "10-20 facturas/día × 30 minutos cada una = 40 horas semanales. Sin contar errores (1 de cada 10 facturas falla). Costo: €1.200/semana.",
  },
  {
    icon: <Phone size={22} className="text-[#B8860B]" />,
    number: "3 sistemas",
    title: "Reservas Fragmentadas",
    desc: "Teléfono, email, Google Business, WhatsApp. El camarero busca en 3 lugares. Reservas olvidadas. Mesas dobles booked. Clientes enfadados.",
  },
  {
    icon: <ShoppingBag size={22} className="text-[#B8860B]" />,
    number: "20 minutos",
    title: "Pedidos a Proveedores",
    desc: "Buscar número proveedor, redactar email, enviar, esperar respuesta, confirmar. 20 minutos × 3-4 proveedores = 1 hora/día.",
  },
  {
    icon: <TrendingDown size={22} className="text-[#B8860B]" />,
    number: "€1.500",
    title: "Dinero No Cobrado",
    desc: "Sin sistema de cobro automático, pierdes €100-200/día en facturas impagas. €1.500/mes no cobrados a tiempo.",
  },
];

const solutionWeeks = [
  {
    n: "01",
    title: "Análisis Gratis",
    body: "Reunión 2 horas. Mapeamos exactamente qué pierdes en facturación, reservas, pedidos. Calculamos coste en €. Resultado: documento con 3-5 procesos a automatizar.",
    cost: "€0 — sin compromiso",
  },
  {
    n: "02",
    title: "Diseño de Workflows",
    body: "Creamos los procesos automáticos visuales (sin código). Facturación: pedido → factura → envío. Reservas: teléfono/email/web → calendario único.",
    cost: "€1.500 (STARTER) o €3.500 (GROWTH)",
  },
  {
    n: "03",
    title: "Testing Completo",
    body: "100+ pruebas con datos reales. Qué pasa si hay error. Si se cae conexión. Si cliente cancela. Nada va a producción sin validar.",
    cost: "Incluido",
  },
  {
    n: "04",
    title: "Lanzamiento + Formación",
    body: "Activamos sistemas en tu negocio. Migramos datos reales. Formamos equipo (1 hora). Monitoreo los primeros días.",
    cost: "30 días soporte incluido",
  },
];

const caseColumns = [
  {
    title: "ANTES",
    color: "bg-red-950/20",
    titleColor: "text-red-400/80",
    rows: [
      "Facturación: 30 min/factura",
      "10 facturas/día = 40h/semana",
      "Reservas en 3 sistemas distintos",
      "Pedidos proveedores: 1h/día manual",
      "Admin total: 50h/semana",
      "Errores: 8-10/semana",
      "Chef Javier: 90% en admin, 10% en cocina",
      "Dinero perdido/mes: €2.000",
    ],
  },
  {
    title: "CÓMO LO HICIMOS",
    color: "bg-[#1A3A52]/15",
    titleColor: "text-white/50",
    rows: [
      "Sem. 1: Auditoría — problema #1 = facturación",
      "Calculamos: €2.000/mes en pérdidas",
      "Sem. 2: Facturación pedido → factura auto",
      "Reservas: central única (tel+email+web)",
      "Herramienta: n8n (ideal para restaurantes)",
      "Sem. 3: 100 pruebas con datos reales",
      "0 errores después de fixes",
      "Sem. 4: Go-live, equipo formado",
    ],
  },
  {
    title: "DESPUÉS",
    color: "bg-green-950/20",
    titleColor: "text-[#10B981]",
    rows: [
      "Facturación: 0 min — automático",
      "Cero errores, cero intervención",
      "Reservas: 1 sistema centralizado",
      "Confirmaciones automáticas al cliente",
      "Pedidos: stock bajo → email auto proveedor",
      "Admin total: 5h/semana (↓87%)",
      "Chef Javier: 100% en cocina",
      "Dinero recuperado/mes: €2.500",
    ],
  },
];

const roiNumbers = [
  { v: "€3.500", l: "Inversión" },
  { v: "€2.500/mes", l: "Ahorrado" },
  { v: "26 días", l: "Payback" },
  { v: "1.200%", l: "ROI" },
];

const starterFeatures = [
  { text: "Análisis de procesos (gratis)", ok: true },
  { text: "Facturación automática", ok: true },
  { text: "Implementación 2 semanas", ok: true },
  { text: "Soporte 30 días", ok: true },
  { text: "Reservas automáticas", ok: false },
  { text: "Pedidos proveedores", ok: false },
];

const growthFeatures = [
  { text: "Análisis de procesos (gratis)", ok: true },
  { text: "Facturación automática", ok: true },
  { text: "Reservas centralizadas", ok: true },
  { text: "Pedidos proveedores automáticos", ok: true },
  { text: "Implementación 4 semanas", ok: true },
  { text: "Soporte 60 días + consultoría", ok: true },
];

const faqs = [
  {
    q: "¿Necesito saber programar o tecnología?",
    a: "No. Usamos Zapier que es visual. Arrastras bloques, conectas apps. Cero código. Si una camarera puede usar WhatsApp, puede entender el sistema.",
  },
  {
    q: "¿Qué pasa si falla el automático?",
    a: "Fallbacks. Si falla facturación automática, el sistema te avisa por email. Sigues manualmente sin perder datos. Uptime 99.9% documentado.",
  },
  {
    q: "¿Tengo que cambiar mis herramientas?",
    a: "No. Integramos con lo que ya usas. Si facturas en QuickBooks, conectamos QuickBooks. Zapier soporta 5.000+ apps.",
  },
  {
    q: "¿Cuánto tiempo lleva implementar?",
    a: "4 semanas típico. Semana 1 análisis. Semana 2-3 setup. Semana 4 testing y lanzamiento. Puedes ver resultados desde semana 2.",
  },
  {
    q: "¿Es seguro? ¿Dónde van mis datos de clientes?",
    a: "Encriptación end-to-end. Cumplimiento GDPR 100%. Datos en tu cuenta (QuickBooks, Gmail, etc.), no en servidores nuestros. Backups diarios automáticos.",
  },
  {
    q: "¿Qué si necesito cambios después de implementar?",
    a: "30-60 días de soporte incluido. Ajustes menores gratis. Cambios mayores con presupuesto. Típicamente el sistema funciona desde día 1.",
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
                  20+ Restaurantes Barcelona
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                  Automatiza Tu Restaurante Barcelona — De 40h Facturación a 5h Automático
                </h1>

                <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                  Especialistas en automatización para restaurantes, bares y catering Barcelona. 20+ implementados. Payback 1 mes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm tracking-wide px-7 py-4 transition-all hover:shadow-[0_0_25px_rgba(26,58,82,0.6)]"
                  >
                    <Calendar size={15} />
                    Consulta Gratis Para Restaurantes
                  </a>
                  <span className="text-white/35 text-xs self-center">30 min · Zoom · Sin compromiso</span>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col gap-4 mt-8 lg:mt-0">
                {[
                  { value: "€2.500/mes", label: "Ahorrados promedio" },
                  { value: "87%", label: "Reducción horas admin" },
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
            Cada restaurante en Barcelona pasa 40+ horas/semana en tareas que deberían ser automáticas. No es falta de disciplina. Es falta de sistema.
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
              Costo Total Semanal: €1.200 (facturación) + €300 (reservas) + €200 (pedidos) + €350 (cobros){" "}
              = <span className="text-[#B8860B]">€2.050/semana</span>
            </p>
            <p className="text-white/50 text-sm">€8.200/mes · €98.400/año en procesos que deberían ser automáticos.</p>
          </div>
        </section>

        {/* ── SOLUCIÓN ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-10">
              El Proceso RASTECH Para Tu Restaurante (4 Semanas)
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
            Caso Real: Restaurante El Sabor (Paseo de Gracia, Barcelona)
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
              Ver caso completo en blog <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2">
              Inversión Para Tu Restaurante
            </h2>
            <p className="text-white/50 text-[15px] mb-10">Sin sorpresas. Precio cerrado antes de empezar. Incluye análisis gratis.</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-6">
              {/* STARTER */}
              <div className="bg-[#111111] border border-white/8 p-8">
                <p className="text-white/40 text-[11px] uppercase tracking-widest mb-1">Ideal pequeño</p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-5">€1.500</p>
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
                  {[["Costo", "€1.500"], ["Ahorro/mes", "€1.200"], ["Payback", "6 semanas"], ["ROI", "960%/año"]].map(([k, v]) => (
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
                  Elegir STARTER
                </a>
              </div>

              {/* GROWTH */}
              <div className="bg-[#111111] border-2 border-[#B8860B]/50 p-8 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-[#0F0F0F] text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                  Más popular
                </span>
                <p className="text-[#B8860B] text-[11px] uppercase tracking-widest mb-1">Completo</p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-5">€3.500</p>
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
                  {[["Costo", "€3.500"], ["Ahorro/mes", "€2.500"], ["Payback", "~1 mes"], ["ROI", "1.200%/año"]].map(([k, v]) => (
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
                  Elegir GROWTH
                </a>
              </div>
            </div>

            <p className="text-white/40 text-[13px] max-w-xl leading-relaxed">
              El 80% de restaurantes Barcelona elige GROWTH. Razón: recupera la inversión en menos de 30 días y automatiza TODO, no solo facturación.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-10">
            Preguntas de Restaurantes Como Tú
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
              title="Auditoría Gratis Para Tu Restaurante"
              description="30 minutos · Zoom · Sin compromiso · Descubre exactamente cuánto ahorrarías"
              fields={formFields}
              buttonText="Agendar Auditoría Gratis"
              sector="restaurantes"
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
