"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    q: "¿Cuánto cuesta?",
    a: "Cada proyecto es diferente, por eso el primer paso —la auditoría— es completamente gratuita. Estudiamos tu caso en profundidad y te entregamos un presupuesto exacto, sin sorpresas. Los proyectos parten desde €1.000 y el precio final depende exclusivamente de lo que tu negocio necesita. Nada más, nada menos.",
  },
  {
    q: "¿Cuánto tiempo tarda?",
    a: "Depende de la complejidad del proyecto. Un proyecto sencillo puede estar listo en 1 semana; uno más completo puede llevar hasta 6 semanas. En la propuesta estratégica te doy un timeline exacto y realista antes de empezar.",
  },
  {
    q: "¿Incluye mantenimiento?",
    a: "Sí. Los primeros 30 días post-lanzamiento incluyen soporte sin coste adicional. A partir de ahí, si necesitas mantenimiento o mejoras continuas, lo hablamos y acordamos un precio justo según tus necesidades reales.",
  },
  {
    q: "¿Es realmente 100% personalizado?",
    a: "100%. Cada web, cada app, cada automatización es custom desde cero. Nada de templates genéricos ni plugins de terceros cuando no es necesario. Cada pixel está pensado para tu caso específico.",
  },
  {
    q: "¿Qué pasa si el resultado no me convence?",
    a: "Trabajamos de forma iterativa. Ves avances reales cada 2 semanas y tu feedback es nuestro norte en cada sprint. Si algo no te gusta, lo cambiamos antes de seguir. No hay sorpresas al final.",
  },
  {
    q: "¿Trabajas solo o tienes equipo?",
    a: "Para proyectos estándar trabajo solo, lo que garantiza máxima coherencia. Para proyectos mayores cuento con red de colaboradores especializados. En todos los casos, tú tienes un único punto de contacto.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "Documento todo el sistema, formo a tu equipo y ofrezco soporte activo 30 días. Luego puedes gestionar con autonomía o contratar un retainer para mejoras continuas.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white/80 group-hover:text-white font-medium text-sm pr-4 transition-colors">
          {q}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-white/10 group-hover:border-[#B8860B]/40 transition-colors">
          {open ? (
            <Minus size={12} className="text-[#B8860B]" />
          ) : (
            <Plus size={12} className="text-white/40" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/50 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas{" "}
            <span className="text-[#B8860B]">Frecuentes</span>
          </h2>
          <p className="text-white/50 text-base">
            Si tu pregunta no está aquí, escríbeme directamente.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="bg-[#141414] border border-white/5 px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
