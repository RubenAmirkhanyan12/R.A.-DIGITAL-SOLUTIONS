import AnimateOnScroll from "./AnimateOnScroll";

const values = [
  {
    title: "Profesionalidad",
    desc: "Cada proyecto es TOP tier. No existe el trabajo mediocre.",
  },
  {
    title: "Transparencia",
    desc: "Sabes qué, cuándo y cuánto antes de empezar. Siempre.",
  },
  {
    title: "Resultados",
    desc: "No cobramos por horas. Cobramos por resultados medibles.",
  },
  {
    title: "Flexibilidad",
    desc: "Cada cliente es diferente. Cada solución es 100% custom.",
  },
  {
    title: "Confianza",
    desc: "Tu problema es nuestro. Lo solucionamos juntos, sin excusas.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <AnimateOnScroll direction="left">
            <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Sobre Rubén
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-6">
              El Ingeniero Que{" "}
              <span className="text-[#B8860B]">Resuelve Problemas</span>
            </h2>

            <div className="space-y-4 text-white/60 text-base leading-relaxed mb-8">
              <p>
                Soy <span className="text-white font-medium">Rubén Amirkhanyan Svazyan</span>.
                Ingeniero Informático.
              </p>
              <p className="text-white/80 font-medium">
                No creo webs. Resuelvo problemas empresariales.
              </p>
              <p>
                Empecé porque vi que muchas empresas tienen soluciones genéricas
                que no funcionan para sus casos específicos. Plug-and-play que
                nunca encaja del todo. Software de 30€/mes que resuelve el 70%
                y deja el 30% crítico al aire.
              </p>
              <p>
                Hoy ayudo empresas a automatizar lo manual, a escalar lo que les
                estanca, a vender más con menor costo.
              </p>
              <p className="text-white/50 italic">
                Recién empecé en esto. Pero con máxima profesionalidad y
                compromiso absoluto con cada proyecto.
              </p>
              <div className="pt-2 border-t border-white/10 space-y-2">
                <p className="text-white/80">
                  Busco clientes que entienden que{" "}
                  <span className="text-white font-medium">
                    invertir en soluciones de calidad es invertir en el futuro
                    de su negocio
                  </span>
                  .
                </p>
                <p className="text-white/60">
                  Si buscas a alguien que{" "}
                  <span className="text-white">REALMENTE</span> entienda tu
                  negocio, que proponga soluciones que funcionan, y que las
                  explique clara y honestamente,{" "}
                  <span className="text-[#B8860B] font-medium">
                    probablemente sí
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/50">
              <span>✉ ruben.amirkhanyan@estudiantat.upc.edu</span>
              <span>🔗 LinkedIn disponible</span>
            </div>
          </AnimateOnScroll>

          {/* Right: Values */}
          <AnimateOnScroll direction="right" delay={200}>
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#B8860B]/20 hidden lg:block" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#B8860B]/10 hidden lg:block" />

              <div className="relative bg-[#141414] border border-white/5 p-8">
                <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-6">
                  Mis Valores
                </p>
                <div className="space-y-5">
                  {values.map((value, i) => (
                    <div
                      key={value.title}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center text-[#B8860B] text-xs font-bold group-hover:bg-[#B8860B]/20 transition-colors">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {value.title}
                        </h4>
                        <p className="text-white/50 text-xs leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
