import AnimateOnScroll from "./AnimateOnScroll";
import { FileText, Mail, BarChart2, CreditCard, Users } from "lucide-react";
import { ASSUMPTIONS, formatEUR, monthlySaving, PROCESS_HOURS } from "../lib/site-config";

const problems = [
  {
    Icon: FileText,
    number: "01",
    title: "Facturación manual",
    hours: PROCESS_HOURS.facturacion,
    body: "Abrir la plantilla, copiar los datos del cliente, calcular totales y enviar por correo. Y cuando alguien pregunta por su factura, buscarla en el historial.",
    after: "La factura se crea en tu programa y se envía sola a partir de la venta.",
  },
  {
    Icon: Mail,
    number: "02",
    title: "Correos de seguimiento",
    hours: PROCESS_HOURS.emails,
    body: "«¿Cuándo está listo mi pedido?», recordatorios de pago, confirmaciones de cita. Casi todos se parecen y casi todos se escriben a mano.",
    after: "Secuencias automáticas: cada cliente recibe el correo que toca en su momento.",
  },
  {
    Icon: BarChart2,
    number: "03",
    title: "Reportes del lunes",
    hours: PROCESS_HOURS.reportes,
    body: "Abrir el CRM, copiar ventas, calcular márgenes, montar el gráfico y enviarlo. Lo mismo cada semana, con el riesgo de copiar mal un número.",
    after: "El informe se prepara solo y llega a tu correo el día que decidas.",
  },
  {
    Icon: CreditCard,
    number: "04",
    title: "Cobros y pagos",
    hours: PROCESS_HOURS.cobros,
    body: "¿Me han pagado ya? ¿A quién le toca recordatorio? ¿Cuándo vence esta factura? Sin un sistema, esas preguntas dependen de que alguien se acuerde.",
    after: "Cobros registrados, recordatorios escalonados y aviso cuando hace falta llamar.",
  },
  {
    Icon: Users,
    number: "05",
    title: "Seguimiento de clientes",
    hours: PROCESS_HOURS.seguimiento,
    body: "Alguien pide presupuesto el martes y el viernes nadie le ha llamado. No porque no te importe, sino porque nada te avisa a tiempo.",
    after: "Avisos automáticos para que ninguna solicitud se quede sin respuesta.",
  },
];

const totalHours = problems.reduce((sum, p) => sum + p.hours, 0);
const yearlyCost = problems.reduce((sum, p) => sum + monthlySaving(p.hours), 0) * 12;

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
            El coste de los procesos manuales{" "}
            <span className="text-[#EF4444]">en una pyme</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Ejemplo ilustrativo con horas modestas y supuestos a la vista:{" "}
            {ASSUMPTIONS.hourlyCostEUR} €/h y {ASSUMPTIONS.weeksPerMonth.toString().replace(".", ",")} semanas/mes.
            Cambia los números por los tuyos en la calculadora.
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
                            Ejemplo: {p.hours} h/semana
                          </span>
                          <span className="text-white/30">·</span>
                          <span className="text-[#EF4444] font-bold font-mono">
                            Coste: {formatEUR(monthlySaving(p.hours))}/mes
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
                      Automatizado
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
              Coste de no hacer nada en este ejemplo
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#EF4444] mb-2">
              {formatEUR(yearlyCost)} / año
            </p>
            <p className="text-white/40 text-sm">
              Suma de las cinco partidas: {totalHours} h/semana. Es una estimación; el tuyo dependerá de tus horas reales.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
