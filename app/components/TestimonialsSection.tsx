import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Rubén no es solo un developer. Es un consultor que entiende el negocio. Propuso una solución que no le pedí, pero que necesitaba. Los resultados fueron +40% de eficiencia. Profesionalidad de principio a fin. Recomendamos sin dudas a cualquier empresa seria.",
    name: "Juan García",
    role: "CEO",
    company: "Tech Solutions",
    stars: 5,
  },
  {
    quote:
      "Invertimos en solución digital pensando que gastaríamos mucho. Se pagó en 2 meses. Ahora nuestro equipo trabaja 15 horas menos a la semana en tareas manuales. Eso es dinero real que antes tirábamos.",
    name: "María López",
    role: "Directora de Operaciones",
    company: "LogísticaX",
    stars: 5,
  },
  {
    quote:
      "Éramos una startup pequeña con grandes sueños. Escalar parecía imposible sin triplicar el staff. Rubén creó un sistema que nos permitió crecer 3x sin contratar a nadie más. Hoy gestionamos 10x más con el mismo equipo.",
    name: "Carlos Pérez",
    role: "Fundador",
    company: "StartupX",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo Que Dicen{" "}
            <span className="text-[#B8860B]">Nuestros Clientes</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Resultados reales de empresas que decidieron actuar.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 150} direction="up">
              <div className="group bg-[#141414] border border-white/5 hover:border-[#B8860B]/25 p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                {/* Quote mark */}
                <div className="absolute top-4 right-6 font-[family-name:var(--font-playfair)] text-8xl text-[#B8860B]/10 leading-none select-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-[#B8860B] text-sm">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
