import AnimateOnScroll from "./AnimateOnScroll";
import { Search, Lightbulb, FlaskConical, Rocket, TrendingUp } from "lucide-react";
import { DELIVERY_LABEL, OFFER } from "../lib/site-config";

const steps = [
  {
    number: "01",
    verb: "ANALIZO",
    title: "Mapeo cada proceso",
    timing: `Llamada gratuita de ${OFFER.freeCallMinutes} min`,
    Icon: Search,
    description:
      "Vemos juntos qué haces, cuánto tiempo te lleva y cuánto te cuesta. Sin suposiciones y sin compromiso.",
    outcome: "Qué conviene automatizar primero y qué no merece la pena",
    highlight: "Gratis y sin compromiso",
  },
  {
    number: "02",
    verb: "DISEÑO",
    title: "Preparo el sistema para ti",
    timing: "Propuesta por escrito",
    Icon: Lightbulb,
    description:
      "Con ese mapa diseño los flujos para tu negocio con n8n o Make, integrados con lo que ya usas: Gmail, WhatsApp Business, Google Sheets o tu programa de gestión.",
    outcome: "Propuesta técnica y precio cerrado",
    highlight: "Precio cerrado antes de empezar",
  },
  {
    number: "03",
    verb: "PRUEBO",
    title: "Compruebo antes de activar",
    timing: "Antes de ponerlo en marcha",
    Icon: FlaskConical,
    description:
      "Hago pruebas con tus datos antes de activar: casos normales, documentos con errores, correos que rebotan y clientes que no responden.",
    outcome: "Sistema probado con ejemplos de tu negocio",
    highlight: "Pruebas con tus datos",
  },
  {
    number: "04",
    verb: "ACTIVO",
    title: "Lo pongo en marcha sin parar tu negocio",
    timing: `Formación de ${OFFER.trainingHours} hora`,
    Icon: Rocket,
    description:
      `Activo los procesos uno por uno mientras sigues trabajando. Dejo alertas automáticas si un flujo falla y dedico ${OFFER.trainingHours} hora a formar a tu equipo.`,
    outcome: "Sistema en marcha y equipo formado",
    highlight: "Alertas si un flujo falla",
  },
  {
    number: "05",
    verb: "AJUSTO",
    title: "Afino con el uso real",
    timing: "Durante el soporte del plan",
    Icon: TrendingUp,
    description:
      `Con las primeras semanas de uso veo qué tarda más y dónde hay cuellos de botella. Durante el soporte respondo en ${OFFER.responseTime}.`,
    outcome: "Ajustes según cómo se usa de verdad",
    highlight: "Soporte incluido según plan",
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
            Cómo se automatiza{" "}
            <span className="text-[#B8860B]">un proceso, paso a paso</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Cinco pasos y entre 2 y 4 semanas según el plan. Sabes qué pasa en cada momento.
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
              { stat: DELIVERY_LABEL, label: "Según el plan" },
              { stat: "Precio cerrado", label: "Antes de empezar" },
              { stat: `${OFFER.guaranteeDays} días`, label: "Garantía" },
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
