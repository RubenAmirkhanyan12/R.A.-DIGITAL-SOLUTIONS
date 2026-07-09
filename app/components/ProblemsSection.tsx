import AnimateOnScroll from "./AnimateOnScroll";
import { FileText, Mail, BarChart2, CreditCard, Users } from "lucide-react";

const problems = [
  {
    Icon: FileText,
    number: "01",
    title: "Facturación Manual",
    before: "30 min por factura",
    scale: "20 facturas/día = 10 horas",
    cost: "€300/día · €6,000/mes",
    body: "Abrir Excel. Buscar plantilla. Copiar datos del cliente. Calcular totales. Enviar por email. Esperar confirmación. Y cuando el cliente pregunta «¿dónde está mi factura?», empezar de cero buscando en el historial.",
    after: "Factura generada y enviada en 0 segundos. Sin intervención humana.",
  },
  {
    Icon: Mail,
    number: "02",
    title: "Emails de Seguimiento",
    before: "2-3 horas/día en email",
    scale: "40+ emails repetitivos",
    cost: "€1,800/mes en tiempo perdido",
    body: "«¿Cuándo está listo mi pedido?» «Recordatorio de pago pendiente» «Confirmación de cita» «Gracias por tu compra» «¿Cómo fue tu experiencia?» Todos iguales. Todos manuales. Todos robándote tiempo.",
    after: "Secuencias automáticas. El cliente recibe el email correcto en el momento correcto.",
  },
  {
    Icon: BarChart2,
    number: "03",
    title: "Reportes del Lunes",
    before: "3 horas cada lunes por la mañana",
    scale: "Sin datos = decisiones a ciegas",
    cost: "€600/mes en horas + errores de decisión",
    body: "Cada lunes a las 9: abrir Excel, copiar ventas del CRM, calcular márgenes, hacer gráfico, exportar PDF, enviarlo a socio. Tres horas para lo mismo de siempre. Con el 20% de probabilidad de que algún número esté mal.",
    after: "Dashboard en vivo. El informe llega automático a tu email los lunes a las 7:00.",
  },
  {
    Icon: CreditCard,
    number: "04",
    title: "Cobros y Pagos",
    before: "Desorden administrativo total",
    scale: "Facturas no cobradas: media €4,200/mes",
    cost: "Mora, estrés y tiempo de gestión",
    body: "«¿Me pagaron ya?» «¿A quién le toca recordatorio?» «¿Cuándo vence esta factura?» Sin sistema: cheques perdidos, pagos duplicados, clientes morosos que se olvidan porque nadie les recuerda. Dinero que se queda en el aire.",
    after: "Cobros rastreados. Recordatorios automáticos. Alertas cuando algo falla.",
  },
  {
    Icon: Users,
    number: "05",
    title: "Seguimiento de Clientes",
    before: "Clientes que se olvidan",
    scale: "30% de clientes potenciales perdidos",
    cost: "€X,000/mes en oportunidades no capturadas",
    body: "Alguien pide presupuesto el martes. El viernes nadie le ha llamado. El lunes siguiente ya contrató a tu competencia. Pasa más de lo que crees. No porque no te importe: porque no tienes sistema que te avise a tiempo.",
    after: "Alertas automáticas. Seguimiento sistematizado. Cero leads olvidados.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problemas" className="bg-[#080808] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-[#EF4444] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            ¿Te reconoces aquí?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            El Coste Real: Procesos Manuales{" "}
            <span className="text-[#EF4444]">Que Te Cuestan €43k/Año en Barcelona</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            No es falta de trabajo duro. Es trabajo innecesario. Cada uno de estos
            problemas tiene coste real, documentado, eliminable.
          </p>
        </AnimateOnScroll>

        {/* Problems */}
        <div className="space-y-6">
          {problems.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 80} direction="up">
              <div className="group relative bg-[#111111] border border-white/5 hover:border-[#EF4444]/20 transition-all duration-300 overflow-hidden">
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EF4444]/0 via-[#EF4444]/60 to-[#EF4444]/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="grid md:grid-cols-[1fr_auto] gap-0">
                  {/* Main content */}
                  <div className="p-8">
                    <div className="flex items-start gap-5 mb-5">
                      {/* Number + Icon */}
                      <div className="shrink-0 flex flex-col items-center gap-2">
                        <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white/8 leading-none">
                          {p.number}
                        </span>
                        <div className="w-10 h-10 bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center">
                          <p.Icon size={18} className="text-[#EF4444]/70" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-white mb-1">
                          {p.title}
                        </h3>
                        {/* Quick stats */}
                        <div className="flex flex-wrap gap-4 text-xs mb-4">
                          <span className="text-[#EF4444]/80 font-mono">
                            Antes: {p.before}
                          </span>
                          <span className="text-white/30">·</span>
                          <span className="text-orange-400/70 font-mono">
                            Escala: {p.scale}
                          </span>
                          <span className="text-white/30">·</span>
                          <span className="text-[#EF4444] font-bold font-mono">
                            Coste: {p.cost}
                          </span>
                        </div>
                        <p className="text-white/55 text-sm leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: After */}
                  <div className="md:w-72 bg-[#10B981]/5 border-l border-[#10B981]/10 p-8 flex flex-col justify-center">
                    <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-3">
                      Con RASTECH
                    </p>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {p.after}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Total cost callout */}
        <AnimateOnScroll delay={500} className="mt-12">
          <div className="bg-[#EF4444]/5 border border-[#EF4444]/20 p-8 text-center">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
              Costo total de no hacer nada
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#EF4444] mb-2">
              €43,200 / año
            </p>
            <p className="text-white/40 text-sm">
              En tiempo, errores y oportunidades perdidas. Calculado sobre empresa media Barcelona.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
