import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Fue revolucionario. Antes pasaba horas en facturas y emails. Ahora el sistema lo hace solo y yo puedo estar en la cocina, con los clientes, haciendo lo que de verdad me importa. El ROI fue en el primer mes.",
    name: "Javier García",
    role: "Chef Propietario",
    company: "Restaurante El Sabor",
    location: "Paseo de Gracia, Barcelona",
    saved: "€2,500/mes",
    hours: "↓87% horas admin",
    stars: 5,
    initial: "JG",
  },
  {
    quote:
      "Llevábamos años perdiendo dinero en errores manuales de envío. RASTECH automatizó en 4 semanas lo que creíamos imposible. Ahora dormimos tranquilos sabiendo que cada pedido se procesa perfectamente, sin intervención humana.",
    name: "Sandra Martínez",
    role: "Directora de Operaciones",
    company: "TiendaXYZ Online",
    location: "Barcelona",
    saved: "€4,200/mes",
    hours: "↓88% horas gestión",
    stars: 5,
    initial: "SM",
  },
  {
    quote:
      "Triplicamos clientes sin contratar a nadie. Los reportes automáticos hacen el trabajo de 2 personas. Marc y yo ahora pensamos en estrategia, no en Excel. El payback llegó en 3 semanas. Increíble.",
    name: "Marc Puig",
    role: "Fundador",
    company: "Agencia Grow",
    location: "L'Eixample, Barcelona",
    saved: "3× capacidad",
    hours: "↓83% reportes",
    stars: 5,
    initial: "MP",
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
            <AnimateOnScroll key={t.name} delay={i * 120} direction="up">
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
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {t.role} · {t.company}
                    </p>
                    <p className="text-white/25 text-[10px]">{t.location}</p>
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
