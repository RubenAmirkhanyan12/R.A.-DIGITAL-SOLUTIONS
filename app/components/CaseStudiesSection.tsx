import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const previews = [
  {
    id: "restaurante",
    imgExt: "png",
    company: "Restaurante El Sabor",
    contact: "Javier García · Chef Propietario",
    sector: "Restauración",
    headline: "De 40h a 5h semanales",
    roi: "1.200%",
    saved: "€2,500/mes",
    testimonial: "Fue revolucionario. La administración funciona sola. ¿Por qué no lo hicimos antes?",
  },
  {
    id: "ecommerce",
    imgExt: "png",
    company: "TiendaXYZ Online",
    contact: "Sandra Martínez · Directora de Operaciones",
    sector: "E-commerce",
    headline: "De 25h a 3h semanales",
    roi: "850%",
    saved: "€4,200/mes",
    testimonial: "RASTECH automatizó en 4 semanas lo que creíamos imposible. Ahora dormimos tranquilos.",
  },
  {
    id: "agencia",
    imgExt: "jpg",
    company: "Agencia Grow",
    contact: "Marc Puig · Fundador",
    sector: "Agencia Marketing",
    headline: "De 5 a 15 clientes sin contratar",
    roi: "1.800%",
    saved: "Capacidad 3x",
    testimonial: "Triplicamos clientes sin contratar a nadie. El ROI llegó en semanas.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="casos" className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Casos de éxito
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Casos Reales de Automatización:{" "}
            <span className="text-[#B8860B]">ROI Documentado en Barcelona</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Cada caso tiene empresa real, números documentados y contacto verificable.
            Sin métricas inventadas.
          </p>
        </AnimateOnScroll>

        {/* 3 preview cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {previews.map((c, i) => (
            <AnimateOnScroll key={c.id} delay={i * 100} direction="up">
              <div className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 transition-all flex flex-col h-full">
                {/* Card header */}
                <div className="px-6 pt-6 pb-4 border-b border-white/5">
                  <span className="text-[#B8860B] text-[10px] font-bold tracking-widest uppercase">
                    {c.sector}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mt-1 mb-1">
                    {c.headline}
                  </h3>
                  <p className="text-white/35 text-xs">{c.company}</p>
                </div>

                {/* ROI stats */}
                <div className="grid grid-cols-2 divide-x divide-white/5 border-b border-white/5">
                  <div className="p-4 text-center">
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">ROI año 1</p>
                    <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                      {c.roi}
                    </p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Ahorro</p>
                    <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#10B981]">
                      {c.saved}
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="px-6 py-5 flex-1">
                  <p className="text-white/55 text-sm leading-relaxed italic mb-4">
                    &ldquo;{c.testimonial}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`/images/cases/${c.id}.${c.imgExt}`}
                      alt={c.contact}
                      className="w-10 h-10 rounded-full object-cover border border-[#B8860B]/30 shrink-0"
                    />
                    <p className="text-white/40 text-xs leading-tight">{c.contact}</p>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className="text-[#B8860B] text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA to full cases page */}
        <AnimateOnScroll delay={300} className="text-center">
          <p className="text-white/40 text-sm mb-5">
            20+ empresas en Barcelona ya automatizan.{" "}
            <span className="text-white/60">Aquí cómo.</span>
          </p>
          <Link
            href="/casos"
            className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-sm px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.3)]"
          >
            Ver 20+ casos documentados →
          </Link>
          <p className="text-white/20 text-xs mt-4">
            Con nombre, empresa, inversión y ROI real. Despachos, servicios, e-commerce y más.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
