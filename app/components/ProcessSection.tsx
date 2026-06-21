import AnimateOnScroll from "./AnimateOnScroll";
import { Search, Lightbulb, FlaskConical, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    verb: "ANALIZAMOS",
    title: "Cartografiamos cada proceso",
    timing: "Semana 1 · Día 1",
    Icon: Search,
    description:
      "Sesión de trabajo de 2 horas donde mapeamos exactamente qué haces, cuánto tiempo tarda y cuánto cuesta. Sin suposiciones. Sin ventas. Solo análisis honesto de tu situación real.",
    outcome: "Mapa de procesos con coste de cada uno en €/mes",
    highlight: "100% gratis y sin compromiso",
  },
  {
    number: "02",
    verb: "DISEÑAMOS",
    title: "Construimos el sistema para ti",
    timing: "Semana 1 · Días 2-5",
    Icon: Lightbulb,
    description:
      "Con el mapa en mano, diseñamos los flujos automáticos específicos para tu negocio. Integramos con lo que ya usas: Gmail, WhatsApp Business, QuickBooks, Shopify, Google Sheets. Sin cambiar tus herramientas.",
    outcome: "Propuesta técnica + precio cerrado + inicio inmediato",
    highlight: "Precio cerrado, sin sorpresas",
  },
  {
    number: "03",
    verb: "TESTAMOS",
    title: "Probamos antes de producción",
    timing: "Semana 2 · Días 6-9",
    Icon: FlaskConical,
    description:
      "Creamos entorno de pruebas con casos reales. Simulamos cada escenario: facturas normales, facturas con error, emails que rebotan, clientes que no responden. Nada llega a producción sin pasar 100 pruebas.",
    outcome: "Sistema probado con tus propios datos reales",
    highlight: "Cero riesgos en producción",
  },
  {
    number: "04",
    verb: "IMPLEMENTAMOS",
    title: "Activamos sin interrumpir tu negocio",
    timing: "Semana 2 · Día 10-14",
    Icon: Rocket,
    description:
      "Lanzamiento sin downtime. Tu negocio sigue funcionando mientras activamos los procesos automáticos uno por uno. Tienes panel de control para ver el estado en tiempo real. 30 minutos de formación para tu equipo.",
    outcome: "Sistema en producción, equipo formado, tú en control",
    highlight: "Tu negocio no para ni un minuto",
  },
  {
    number: "05",
    verb: "OPTIMIZAMOS",
    title: "Mejoramos con datos reales",
    timing: "Semana 3 en adelante",
    Icon: TrendingUp,
    description:
      "Con las primeras semanas en producción ya tenemos datos reales. ¿Qué proceso tarda más? ¿Dónde hay cuellos de botella? Revisión express para afinar el sistema e ir añadiendo mejoras progresivas.",
    outcome: "El sistema mejora cada semana con datos de tu negocio",
    highlight: "30 días de soporte incluidos",
  },
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            El proceso
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            De 40h Manuales a{" "}
            <span className="text-[#B8860B]">5h Automáticas</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            5 pasos. 2 semanas. Proceso predecible sin sorpresas. Sabes exactamente
            qué pasa, cuándo y por qué en cada momento.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-12 bottom-12 w-px bg-gradient-to-b from-[#B8860B]/60 via-[#B8860B]/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 100} direction="left">
                <div className="group relative flex gap-6 md:gap-10">
                  {/* Step indicator */}
                  <div className="shrink-0 flex flex-col items-center gap-1 pt-6">
                    <div className="w-20 h-20 bg-[#1A3A52]/40 border border-[#B8860B]/30 group-hover:border-[#B8860B]/60 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-[#1A3A52]/60 relative z-10 bg-[#0F0F0F]">
                      <step.Icon size={20} className="text-[#B8860B] mb-1" />
                      <span className="text-[#B8860B] text-xs font-bold">{step.verb}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#111111] border border-white/5 group-hover:border-[#B8860B]/15 p-7 transition-all duration-300 overflow-hidden relative">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/40 to-[#B8860B]/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white/6 leading-none">
                            {step.number}
                          </span>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <span className="inline-block text-white/30 text-xs font-mono border border-white/10 px-2 py-1">
                          {step.timing}
                        </span>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="inline-block bg-[#B8860B]/10 border border-[#B8860B]/25 text-[#B8860B] text-xs font-bold px-3 py-1.5">
                          {step.highlight}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="flex items-start gap-2 pt-4 border-t border-white/5">
                      <span className="text-[#10B981] text-sm shrink-0">✓</span>
                      <p className="text-white/50 text-sm">{step.outcome}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Guarantee strip */}
        <AnimateOnScroll delay={550} className="mt-16">
          <div className="bg-[#1A3A52]/15 border border-[#1A3A52]/30 p-8 grid md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "2 semanas", label: "De cero a sistema funcionando" },
              { stat: "0 min", label: "Tiempo que pierdes en el proceso" },
              { stat: "30 días", label: "Soporte post-lanzamiento" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B] mb-1">
                  {stat}
                </p>
                <p className="text-white/45 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
