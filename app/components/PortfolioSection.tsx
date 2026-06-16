import AnimateOnScroll from "./AnimateOnScroll";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

const cases = [
  {
    sector: "Logística",
    title: "Gestión de Rutas Automatizada",
    situation:
      "Empresa de 30 personas gestionando rutas en Excel. 15 horas/semana en tareas manuales, errores constantes en asignación de pedidos.",
    solution:
      "Sistema de gestión de rutas automatizado con dashboard para supervisores, asignación automática de pedidos y alertas en tiempo real.",
    results: [
      { icon: "down", label: "Tiempo en gestión", value: "↓ 40%" },
      { icon: "down", label: "Errores de entrega", value: "↓ 30%" },
      { icon: "up", label: "Entregas/día", value: "↑ 25%" },
      { icon: "roi", label: "ROI", value: "2 meses" },
    ],
    duration: "8 semanas",
  },
  {
    sector: "Consultoría Marketing",
    title: "Web de Captación de Leads",
    situation:
      "Consultoría con web desactualizada. 0 leads/mes generados desde la web, a pesar de presencia activa y servicios de calidad.",
    solution:
      "Rediseño web completo con optimización para conversión, formularios inteligentes y SEO base desde el primer día.",
    results: [
      { icon: "up", label: "Tráfico web", value: "↑ 60%" },
      { icon: "up", label: "Leads desde web", value: "↑ 45%" },
      { icon: "up", label: "Proyectos anuales", value: "+€150k" },
      { icon: "roi", label: "ROI", value: "1 mes" },
    ],
    duration: "6 semanas",
  },
  {
    sector: "SaaS / Startup",
    title: "Escalamiento Sin Contratar",
    situation:
      "Startup pequeño con grandes objetivos. El crecimiento estaba limitado por procesos manuales: imposible escalar sin triplicar el equipo.",
    solution:
      "Automatización de workflows críticos, dashboard operativo, integraciones entre sistemas y reportes automáticos diarios.",
    results: [
      { icon: "up", label: "Capacidad operativa", value: "↑ 300%" },
      { icon: "up", label: "Productividad equipo", value: "↑ 60%" },
      { icon: "up", label: "Escalamiento 6 meses", value: "3x" },
      { icon: "roi", label: "ROI", value: "1.5 meses" },
    ],
    duration: "10 semanas",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Portafolio
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Casos de{" "}
            <span className="text-[#B8860B]">Éxito Reales</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Situaciones reales, soluciones específicas, resultados medibles.
          </p>
        </AnimateOnScroll>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.title} delay={i * 120} direction="up">
              <div className="bg-[#141414] border border-white/5 hover:border-[#B8860B]/20 transition-all duration-300 overflow-hidden group">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left: situation & solution */}
                  <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                        {c.sector}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="flex items-center gap-1 text-white/40 text-xs">
                        <Clock size={10} />
                        {c.duration}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-4">
                      {c.title}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-1">
                          Situación
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {c.situation}
                        </p>
                      </div>
                      <div className="border-t border-white/5 pt-3">
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-1">
                          Solución
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {c.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: results */}
                  <div className="p-8 bg-[#1A3A52]/10">
                    <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-6">
                      Resultados
                    </p>
                    <div className="space-y-4">
                      {c.results.map((r) => (
                        <div key={r.label} className="flex items-center justify-between gap-4">
                          <span className="text-white/50 text-sm">{r.label}</span>
                          <span
                            className={`font-[family-name:var(--font-playfair)] font-bold text-lg ${
                              r.icon === "roi"
                                ? "text-[#B8860B]"
                                : r.icon === "up"
                                  ? "text-emerald-400"
                                  : "text-red-400"
                            }`}
                          >
                            {r.value}
                          </span>
                        </div>
                      ))}
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
