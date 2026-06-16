import AnimateOnScroll from "./AnimateOnScroll";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    number: "01",
    headline: "Web que convierte. Que vende. Que crece contigo.",
    result: "+40% leads en 3 meses",
    items: [
      "Diseño moderno que inspira confianza",
      "Optimizada para móvil (60% del tráfico)",
      "SEO base (apareces en Google cuando importa)",
      "Formularios que convierten, no asustan",
      "Analytics integrado (ves quién visita)",
    ],
  },
  {
    number: "02",
    headline: "Libera 20+ horas/semana de tu equipo.",
    result: "De 15h a 30 minutos en procesos clave",
    items: [
      "Dashboard centralizado (datos en un lugar)",
      "Automatizaciones inteligentes sin intervención",
      "Reportes automáticos listos cada mañana",
      "Escalamiento sin límite: crece la empresa, no el trabajo",
    ],
  },
  {
    number: "03",
    headline: "Toma decisiones basadas en datos reales.",
    result: "+35% eficiencia operativa",
    items: [
      "Dashboard ejecutivo (ves TODO de un vistazo)",
      "Segmentación de clientes: quién compra, cuándo, por qué",
      "Predicciones: sabe qué pasará antes que pase",
      "Reportes automatizados sin que hagas nada",
    ],
  },
  {
    number: "04",
    headline: "Mientras otros usan Excel, TÚ escalas.",
    result: "Multiplica capacidad sin multiplicar equipo",
    items: [
      "Herramientas que tu competencia NO tiene",
      "Automatizaciones que ahorran tiempo real",
      "Datos en tiempo real (ellos deciden 1 semana tarde)",
      "Escalamiento exponencial vs. crecimiento lineal",
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            La Solución
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transformación Digital{" "}
            <span className="text-[#B8860B]">Medible</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Para cada problema, una solución concreta con resultados
            específicos.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <AnimateOnScroll
              key={solution.number}
              delay={i * 100}
              direction="up"
            >
              <div className="group bg-[#1A3A52]/10 border border-[#1A3A52]/30 hover:border-[#B8860B]/40 p-8 transition-all duration-300 hover:bg-[#1A3A52]/20 relative overflow-hidden">
                {/* Gold glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#B8860B]/30 shrink-0 leading-none">
                      {solution.number}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                      {solution.headline}
                    </h3>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[#B8860B] mt-0.5"
                        />
                        <span className="text-white/70 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#B8860B]/20">
                    <p className="text-[#B8860B] text-sm font-bold">
                      Resultado típico: {solution.result}
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
