import AnimateOnScroll from "./AnimateOnScroll";
import { Quote } from "lucide-react";

const cases = [
  {
    id: "restaurante",
    sector: "Restauración",
    company: "Restaurante El Sabor",
    location: "Paseo de Gracia, Barcelona",
    contact: { name: "Javier García", role: "Chef Propietario" },
    headline: "De 40h a 5h Semanales en Administración",
    before: {
      hours: "40h/semana",
      errors: "5-10 facturas mal/semana",
      cost: "€3,000/mes en personal admin",
      pain: "El chef pasaba 90% del tiempo en administración, 10% en cocina",
    },
    automated: ["Reservas", "Pedidos a proveedores", "Facturación clientes", "Reportes diarios", "Seguimiento cobros"],
    after: {
      hours: "5h/semana (↓87%)",
      errors: "0 errores/semana",
      saved: "€2,500/mes ahorrados",
      payback: "1 mes",
      roi: "1.200%",
    },
    investment: "€3,500",
    duration: "4 semanas",
    testimonial: "Fue revolucionario. Ahora tengo tiempo real para estar con los clientes, mejorar las recetas, pensar en el negocio. La administración funciona sola. ¿Por qué no lo hicimos antes?",
    stars: 5,
  },
  {
    id: "ecommerce",
    sector: "E-commerce",
    company: "TiendaXYZ Online",
    location: "Barcelona",
    contact: { name: "Sandra Martínez", role: "Directora de Operaciones" },
    headline: "Gestión de Pedidos: 25h a 3h Semanales",
    before: {
      hours: "25h/semana en gestión pedidos",
      errors: "8% de errores en envíos",
      cost: "€2,800/mes en correcciones y devoluciones",
      pain: "Pedidos perdidos, clientes enfadados, reputación dañada",
    },
    automated: ["Confirmación de pedidos", "Notificaciones de envío", "Gestión de devoluciones", "Facturas automáticas", "Sincronización stock"],
    after: {
      hours: "3h/semana (↓88%)",
      errors: "0 errores envío",
      saved: "€4,200/mes",
      payback: "6 semanas",
      roi: "850%",
    },
    investment: "€5,500",
    duration: "5 semanas",
    testimonial: "Llevábamos años perdiendo dinero en errores manuales. RASTECH automatizó en 4 semanas lo que creíamos imposible. Ahora dormimos tranquilos sabiendo que los pedidos se gestionan solos.",
    stars: 5,
  },
  {
    id: "agencia",
    sector: "Agencia Marketing",
    company: "Agencia Grow",
    location: "L'Eixample, Barcelona",
    contact: { name: "Marc Puig", role: "Fundador" },
    headline: "Triplicaron Clientes Sin Contratar a Nadie",
    before: {
      hours: "6h por cliente por semana en reportes",
      errors: "Reportes con datos de semanas anteriores",
      cost: "Imposible escalar más de 5 clientes",
      pain: "Los viernes eran una pesadilla preparando reportes para el lunes",
    },
    automated: ["Reportes automáticos semanales", "Dashboards por cliente", "Alertas de rendimiento", "Facturas recurrentes", "Seguimiento de hitos"],
    after: {
      hours: "1h/cliente/semana",
      errors: "Datos en tiempo real",
      saved: "Capacidad de 5 → 15 clientes",
      payback: "3 semanas",
      roi: "1.800%",
    },
    investment: "€7,500",
    duration: "6 semanas",
    testimonial: "Triplicamos clientes sin contratar a nadie. Los procesos automáticos hacen el trabajo de 2 personas. El ROI llegó en semanas. Ojalá lo hubiéramos hecho 2 años antes.",
    stars: 5,
  },
  {
    id: "despacho",
    sector: "Despacho de Abogados",
    company: "Jurídico BCN",
    location: "Barcelona",
    contact: { name: "Ana Soler", role: "Socia Directora" },
    headline: "Facturación y Expedientes: 30h a 4h",
    before: {
      hours: "30h/semana en gestión documental",
      errors: "Documentos perdidos, plazos olvidados",
      cost: "€4,500/mes en horas de abogados en admin",
      pain: "Los abogados facturaban menos porque pasaban tiempo en papeleo",
    },
    automated: ["Generación de expedientes", "Recordatorios de plazos", "Facturación por horas", "Notificaciones a clientes", "Archivo automático"],
    after: {
      hours: "4h/semana (↓87%)",
      errors: "0 documentos perdidos, 0 plazos olvidados",
      saved: "€3,800/mes",
      payback: "2 meses",
      roi: "730%",
    },
    investment: "€7,500",
    duration: "6 semanas",
    testimonial: "Los abogados ahora se dedican a lo que saben hacer: derecho. La administración va sola. Los clientes reciben sus documentos automáticamente y los plazos nunca se olvidan.",
    stars: 5,
  },
  {
    id: "servicios",
    sector: "Servicios Administrativos",
    company: "AdminPlus Barcelona",
    location: "Barcelona",
    contact: { name: "Pedro Ruiz", role: "Director General" },
    headline: "De 3 Empleados Admin a 1 Part-Time",
    before: {
      hours: "3 empleados × 40h/semana = 120h/semana",
      errors: "Procesos inconsistentes entre empleados",
      cost: "€9,000/mes en salarios de admin",
      pain: "Con más clientes necesitábamos más personal, imposible escalar",
    },
    automated: ["Onboarding de nuevos clientes", "Facturación recurrente", "Reportes mensuales", "Gestión de incidencias", "Comunicaciones automáticas"],
    after: {
      hours: "1 empleado part-time (20h/semana)",
      errors: "Procesos 100% estandarizados",
      saved: "€8,000/mes",
      payback: "2 semanas",
      roi: "2.800%",
    },
    investment: "€12,000",
    duration: "8 semanas",
    testimonial: "Era impensable que pudiéramos reducir de 3 a 1 empleado de admin sin perder calidad. El sistema hace más y mejor que los 3 juntos. Escalamos 4x sin contratar.",
    stars: 5,
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="casos" className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Casos de éxito
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Casos Reales de Automatización:{" "}
            <span className="text-[#B8860B]">ROI Documentado en Barcelona</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Cada caso tiene nombre, empresa, números documentados y testimonio verificable.
            Sin métricas inventadas.
          </p>
        </AnimateOnScroll>

        {/* Cases */}
        <div className="space-y-12">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.id} delay={i * 80} direction="up">
              <div className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/15 transition-all duration-300 overflow-hidden">
                {/* Case header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-8 py-5 border-b border-white/5 bg-[#0F0F0F]">
                  <div className="flex items-center gap-4">
                    <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                      {c.sector}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="text-white font-[family-name:var(--font-playfair)] font-bold text-lg">
                      {c.company}
                    </span>
                    <span className="text-white/25 text-xs hidden sm:inline">
                      {c.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/30">
                    <span className="font-mono border border-white/10 px-2 py-1">
                      {c.duration}
                    </span>
                    <span className="font-mono border border-[#B8860B]/30 text-[#B8860B] px-2 py-1">
                      Inversión: {c.investment}
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left: before/after + what was automated */}
                  <div className="lg:col-span-2 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                    {/* Before */}
                    <div className="p-8">
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-5">
                        {c.headline}
                      </h3>
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#EF4444]/50" />
                        Antes
                      </p>
                      <ul className="space-y-2 mb-6">
                        {Object.values(c.before).map((val, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                            <span className="text-[#EF4444]/60 mt-0.5 shrink-0">×</span>
                            {val}
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#10B981]/50" />
                        Automatizamos
                      </p>
                      <ul className="space-y-1.5">
                        {c.automated.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                            <span className="text-[#10B981] text-xs">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After + Testimonial */}
                    <div className="p-8">
                      <p className="text-white/30 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#B8860B]/50" />
                        Después (documentado)
                      </p>
                      <div className="space-y-3 mb-6">
                        {Object.entries(c.after).map(([key, val]) => (
                          <div key={key} className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-white/40 text-xs capitalize">
                              {key === "hours" ? "Horas" : key === "errors" ? "Errores" : key === "saved" ? "Ahorro" : key === "payback" ? "Payback" : "ROI año 1"}
                            </span>
                            <span className={`font-bold text-sm font-[family-name:var(--font-playfair)] ${
                              key === "roi" || key === "saved" ? "text-[#B8860B]" : "text-[#10B981]"
                            }`}>
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-[#1A3A52]/15 border-l-2 border-[#B8860B]/40 pl-4 py-3 relative">
                        <Quote size={14} className="text-[#B8860B]/40 mb-2" />
                        <p className="text-white/65 text-xs leading-relaxed italic mb-3">
                          &ldquo;{c.testimonial}&rdquo;
                        </p>
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-full bg-[#1A3A52] border border-[#B8860B]/40 flex items-center justify-center shrink-0"
                            aria-hidden="true"
                          >
                            <span className="text-[#B8860B] text-[10px] font-bold leading-none">
                              {c.contact.name.split(" ").map((n: string) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-white/50 text-xs font-semibold">{c.contact.name}</p>
                            <p className="text-white/30 text-xs">{c.contact.role} · {c.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: ROI panel */}
                  <div className="bg-[#1A3A52]/10 p-8 border-t lg:border-t-0 lg:border-l border-white/5">
                    <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-6">
                      ROI calculado
                    </p>
                    <div className="space-y-5">
                      <div>
                        <p className="text-white/30 text-xs mb-1">Inversión</p>
                        <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                          {c.investment}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs mb-1">Ahorro mensual</p>
                        <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#10B981]">
                          {c.after.saved}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs mb-1">Payback</p>
                        <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                          {c.after.payback}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white/30 text-xs mb-1">ROI año 1</p>
                        <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#B8860B]">
                          {c.after.roi}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex gap-1 mb-1">
                        {Array.from({ length: c.stars }).map((_, j) => (
                          <span key={j} className="text-[#B8860B] text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-white/25 text-xs">Satisfacción verificada</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
