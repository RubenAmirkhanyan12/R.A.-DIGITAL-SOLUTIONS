import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Al principio pensé que esto era para empresas grandes, no para un restaurante como el mío. Me equivoqué. La primera semana seguía revisando las facturas a mano 'por si acaso' — costó soltar el control. Ya no. Lleva meses funcionando solo, sin fallar ni una vez. Ahora paso el tiempo en la cocina, no delante del ordenador.",
    name: "Javier García",
    role: "Chef Propietario",
    company: "Restaurante El Sabor",
    saved: "€2,500/mes",
    hours: "↓87% horas admin",
    stars: 5,
    initial: "JG",
    confidential: false,
  },
  {
    quote:
      "Llevábamos años perdiendo pedidos por errores de envío manuales. No fue instantáneo — las dos primeras semanas ajustamos varias reglas hasta que quedó fino. Pero desde entonces, cero errores. Dormimos tranquilos.",
    name: "",
    role: "Directora de Operaciones",
    company: "E-commerce de Moda",
    saved: "€4,200/mes",
    hours: "↓88% horas gestión",
    stars: 5,
    initial: "DO",
    confidential: true,
  },
  {
    quote: "Triplicamos clientes sin contratar a nadie más. Así de simple.",
    name: "Marc Puig",
    role: "Fundador",
    company: "Agencia Grow",
    saved: "3× capacidad",
    hours: "↓83% reportes",
    stars: 5,
    initial: "MP",
    confidential: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Lo Que Dicen los{" "}
            <span className="text-[#B8860B]">Que Ya Automatizaron</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Testimonios de personas reales con empresas reales en Barcelona.
            Con nombre, empresa y resultados documentados.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.company} delay={i * 120} direction="up">
              <div className="group bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/3 rounded-full blur-3xl" />

                {/* Quote mark */}
                <div className="absolute top-4 right-6 font-[family-name:var(--font-playfair)] text-8xl text-[#B8860B]/8 leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-[#B8860B] text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Results */}
                <div className="flex gap-4 mb-5">
                  <div className="flex-1 bg-[#10B981]/8 border border-[#10B981]/15 rounded px-3 py-2 text-center">
                    <p className="text-[#10B981] font-bold text-sm font-[family-name:var(--font-playfair)]">{t.saved}</p>
                    <p className="text-white/30 text-[10px]">ahorrado</p>
                  </div>
                  <div className="flex-1 bg-[#B8860B]/8 border border-[#B8860B]/15 rounded px-3 py-2 text-center">
                    <p className="text-[#B8860B] font-bold text-sm font-[family-name:var(--font-playfair)]">{t.hours}</p>
                    <p className="text-white/30 text-[10px]">tiempo admin</p>
                  </div>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A3A52] border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] font-bold text-sm shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    {t.name && (
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                    )}
                    <p className="text-white/40 text-xs mt-0.5">
                      {t.role} · {t.company}
                    </p>
                    {t.confidential && (
                      <p className="text-white/20 text-[10px] mt-0.5 leading-tight">
                        Nombre no publicado por confidencialidad del cliente
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust bar */}
        <AnimateOnScroll delay={400} className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center py-8 border-t border-white/5">
            {[
              { value: "15+", label: "empresas automatizadas" },
              { value: "5★", label: "valoración media" },
              { value: "€43k+", label: "ahorrado colectivamente/mes" },
              { value: "100%", label: "clientes satisfechos" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">{value}</p>
                <p className="text-white/35 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
