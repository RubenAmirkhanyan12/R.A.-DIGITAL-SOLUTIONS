import AnimateOnScroll from "./AnimateOnScroll";

const phases = [
  {
    phase: "Fase 01",
    title: "Auditoría Profunda",
    timing: "Semana 1 · GRATIS",
    description:
      "Sesión de 2 horas donde entendemos tu negocio, procesos, restricciones y objetivos reales. Analizamos tu tecnología actual, competencia y oportunidades específicas.",
    outcome: "Documento claro de qué necesitas realmente",
    highlight: "Gratis y sin compromisos",
  },
  {
    phase: "Fase 02",
    title: "Propuesta Estratégica",
    timing: "Semana 2",
    description:
      "Te presentamos la solución específica para TI: qué incluye, timeline exacto, precio claro. Explicamos por qué esa solución y no otra.",
    outcome: "Sabes exactamente qué esperar antes de empezar",
    highlight: "Claridad total",
  },
  {
    phase: "Fase 03",
    title: "Desarrollo Iterativo",
    timing: "Semanas 3–8",
    description:
      "Sprints de 2 semanas con updates constantes. Ves avances en vivo —no «espera 3 meses». Feedback continuo, ajustes rápidos. Tú tienes el control en cada paso.",
    outcome: "Producto que REALMENTE necesitas",
    highlight: "Tú ves cada avance",
  },
  {
    phase: "Fase 04",
    title: "Testing & Refinamiento",
    timing: "Semana 9",
    description:
      "Testing exhaustivo: buscamos errores antes que el cliente los encuentre. Optimización final y documentación completa del sistema.",
    outcome: "Sistema robusto, sin sorpresas post-lanzamiento",
    highlight: "Cero sorpresas",
  },
  {
    phase: "Fase 05",
    title: "Lanzamiento & Soporte",
    timing: "Semana 10+",
    description:
      "Lanzamiento sin downtime (cero interrupciones a tu operación). Training del equipo para que manejes la herramienta con autonomía. Soporte 30 días gratis.",
    outcome: "Sistema operativo, equipo listo, tú en control",
    highlight: "30 días de soporte gratis",
  },
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Transparencia
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cómo{" "}
            <span className="text-[#B8860B]">Trabajamos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Proceso claro y predecible. Sabes qué pasa, cuándo y por qué en
            cada momento.
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B8860B]/40 via-[#B8860B]/20 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {phases.map((phase, i) => {
              const isEven = i % 2 === 0;
              return (
                <AnimateOnScroll
                  key={phase.phase}
                  delay={i * 120}
                  direction={isEven ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content box */}
                    <div
                      className={`flex-1 sm:pl-16 md:pl-0 ${
                        isEven
                          ? "md:pr-16 md:text-right"
                          : "md:pl-16 md:text-left"
                      }`}
                    >
                      <div
                        className={`bg-[#141414] border border-white/5 hover:border-[#B8860B]/20 p-6 transition-all duration-300 group relative overflow-hidden ${
                          isEven ? "md:ml-0" : ""
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/0 to-[#B8860B]/0 group-hover:from-[#B8860B]/5 group-hover:to-transparent transition-all duration-500" />

                        <div className="relative z-10">
                          <div
                            className={`flex items-center gap-3 mb-3 ${
                              isEven
                                ? "md:flex-row-reverse"
                                : ""
                            }`}
                          >
                            <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                              {phase.phase}
                            </span>
                            <span className="text-white/30 text-xs">
                              {phase.timing}
                            </span>
                          </div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-3">
                            {phase.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed mb-4">
                            {phase.description}
                          </p>
                          <div
                            className={`flex items-center gap-2 pt-3 border-t border-white/5 ${
                              isEven ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-[#B8860B] text-xs">✓</span>
                            <span className="text-white/50 text-xs">
                              {phase.outcome}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#B8860B] border-2 border-[#0F0F0F] shadow-[0_0_12px_rgba(184,134,11,0.5)] z-10 hidden sm:block" />

                    {/* Empty half for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
