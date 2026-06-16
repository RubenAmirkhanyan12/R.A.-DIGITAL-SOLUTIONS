import AnimateOnScroll from "./AnimateOnScroll";

const problems = [
  {
    icon: "📊",
    headline: "Tu web parece de 2015. Y actúa como tal.",
    body: "Tu competencia está online. Realmente online. Tu web es… obsoleta.\n\nClientes potenciales ven tu web → Piensan «empresa antigua» → Entran en la web del competidor → Se van.",
    consequence:
      "Pierdes clientes sin saber por qué. Gastas dinero en marketing que muere en una web mediocre.",
  },
  {
    icon: "📋",
    headline: "¿Sigues usando Excel para TODO?",
    body: "Si tu empresa gestiona clientes, proyectos o datos en Excel:\n\n← 15+ horas/semana en tareas manuales\n← Errores que cuestan dinero\n← Información dispersa sin control\n← Escalamiento imposible",
    consequence: "¿Cuánto dinero pierdes cada mes en horas perdidas?",
  },
  {
    icon: "📉",
    headline: "No sabes cuántos clientes tienes. De verdad.",
    body: "Si no tienes dashboard o analítica:\n\n← No sabes quién compra (demografía, ubicación, horario)\n← No sabes qué atrae (qué página genera conversión)\n← No optimizas (gastas en lo que NO funciona)\n← Tomas decisiones a ciegas",
    consequence:
      "Cada euro de marketing puede estar yendo al canal equivocado.",
  },
  {
    icon: "⚡",
    headline: "Mientras lees esto, tu competencia está escalando.",
    body: "Cada día que pasas sin solución digital:\n\n← Tu competencia automatiza\n← Tu competencia crece\n← Tu competencia te pasa\n← Pierdes oportunidades de mercado",
    consequence:
      "La ventana para actuar se cierra. Los primeros en digitalizar llevan meses de ventaja.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problemas" className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            El Problema
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Cuándo Necesitas Una{" "}
            <span className="text-[#B8860B]">Solución Digital?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Identifica si tu empresa está dejando dinero sobre la mesa
            ahora mismo.
          </p>
        </AnimateOnScroll>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <AnimateOnScroll
              key={problem.headline}
              delay={i * 100}
              direction="up"
            >
              <div className="group relative bg-[#141414] border border-white/5 hover:border-[#8B0000]/40 p-8 transition-all duration-300 hover:bg-[#1a0a0a] overflow-hidden">
                {/* Warning glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/0 to-[#8B0000]/0 group-hover:from-[#8B0000]/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl shrink-0">{problem.icon}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white group-hover:text-[#F8F9FA] transition-colors">
                      {problem.headline}
                    </h3>
                  </div>

                  <div className="mb-4 space-y-1">
                    {problem.body.split("\n").map((line, j) => (
                      <p
                        key={j}
                        className={`text-sm leading-relaxed ${
                          line.startsWith("←")
                            ? "text-white/50 pl-2 font-mono"
                            : "text-white/60"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#8B0000]/20">
                    <p className="text-[#8B0000]/90 text-sm font-medium italic">
                      → {problem.consequence}
                    </p>
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
