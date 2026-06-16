import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    label: "Para empresas medianas/grandes",
    title: "Transformación Digital",
    problem:
      "Tu empresa usa 15 herramientas diferentes. Datos no sincronizados, procesos ineficientes, equipo desbordado.",
    what: "Auditoría completa → Estrategia integrada → Sistema centralizado que conecta TODO.",
    results: [
      "Sistema unificado",
      "+40% eficiencia",
      "20h/semana liberadas",
      "Escalamiento sin límite",
    ],
    tech: "Dashboard custom · Integraciones API · Automatizaciones inteligentes · Analytics real-time",
    price: "€800 – €12.000",
  },
  {
    label: "Para pequeño/mediano negocio",
    title: "Web de Conversión",
    problem:
      "Web vieja que no genera leads. Clientes no confían. No sabes por qué no convierte.",
    what: "Rediseño completo → Optimización conversión → SEO base → Analytics integrado.",
    results: [
      "Web moderna",
      "+35% leads",
      "+50% confianza",
      "Datos en dashboard",
    ],
    tech: "React/Next.js · Diseño responsivo · Formularios inteligentes · Google Analytics",
    price: "€500 – €10.000",
  },
  {
    label: "Para cualquier empresa",
    title: "Automatización de Procesos",
    problem:
      "20+ horas/semana en tareas manuales. Errores que cuestan dinero. Imposible escalar.",
    what: "Análisis procesos → Diseño automatización → Implementación sin interrupciones.",
    results: [
      "Procesos 10x más rápidos",
      "Cero errores manuales",
      "Escalamiento infinito",
    ],
    tech: "Workflows automáticos · Integraciones de datos · Alertas inteligentes",
    price: "€600 – €8.000",
  },
  {
    label: "Para necesidades específicas",
    title: "App Personalizada",
    problem:
      "Tu necesidad es ESPECÍFICA. No existe solución genérica. Necesitas herramienta custom.",
    what: "Consulta profunda → Diseño custom → Desarrollo iterativo → App lista para producción.",
    results: [
      "Herramienta solo para ti",
      "Escalable",
      "Mantenible",
      "Flexible",
    ],
    tech: "React · Node.js · MongoDB · AWS · Integraciones API · Mobile-ready",
    price: "€300 – €9.000",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Servicios
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo Que{" "}
            <span className="text-[#B8860B]">Realizamos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            No vendemos horas. Entregamos resultados medibles y documentados.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 100} direction="up">
              <div className="group relative bg-[#141414] border border-white/5 hover:border-[#B8860B]/30 p-8 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[#B8860B]/60 text-xs font-bold tracking-widest uppercase mb-3">
                    {service.label}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4 p-3 bg-[#8B0000]/10 border-l-2 border-[#8B0000]/40">
                    <p className="text-white/60 text-sm italic">{service.problem}</p>
                  </div>

                  {/* What we do */}
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {service.what}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.results.map((r) => (
                      <span
                        key={r}
                        className="text-xs font-medium text-[#B8860B] bg-[#B8860B]/10 border border-[#B8860B]/20 px-2.5 py-1"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* Tech */}
                  <p className="text-white/30 text-xs mb-5 font-mono flex-1">
                    {service.tech}
                  </p>

                  {/* Price */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-white/40 text-xs uppercase tracking-wider">
                      Desde
                    </span>
                    <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#B8860B]">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimateOnScroll delay={400}>
          <p className="text-center text-white/30 text-sm mt-10 max-w-2xl mx-auto">
            Cada proyecto es 100% personalizado. Los precios son indicativos.
            Hablaremos tu caso específico y haremos una propuesta exacta para ti.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
