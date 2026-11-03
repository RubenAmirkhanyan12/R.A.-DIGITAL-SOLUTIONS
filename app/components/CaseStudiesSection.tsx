import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { formatEUR, SCENARIOS, scenarioNumbers } from "../lib/site-config";

const previews = SCENARIOS.slice(0, 3);

export default function CaseStudiesSection() {
  return (
    <section id="casos" className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Casos de uso
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Qué se puede automatizar{" "}
            <span className="text-[#B8860B]">según tu negocio</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Escenarios ilustrativos con supuestos a la vista. Los resultados reales dependen de cada empresa.
          </p>
        </AnimateOnScroll>

        {/* 3 preview cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {previews.map((c, i) => {
            const { plan, saving, payback } = scenarioNumbers(c);
            return (
              <AnimateOnScroll key={c.id} delay={i * 100} direction="up">
                <div className="bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 transition-all flex flex-col h-full">
                  <div className="px-6 pt-6 pb-4 border-b border-white/5">
                    <span className="text-[#B8860B] text-[10px] font-bold tracking-widest uppercase">
                      {c.sector}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mt-1">
                      {c.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-white/5 border-b border-white/5">
                    <div className="p-4 text-center">
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Horas/semana</p>
                      <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                        {c.hoursPerWeek} h
                      </p>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Ahorro/mes</p>
                      <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#10B981]">
                        {formatEUR(saving)}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-5 flex-1">
                    <p className="text-white/55 text-sm leading-relaxed mb-4">{c.problem}</p>
                    <p className="text-white/35 text-xs">
                      Plan orientativo: {plan.name} · Se recupera en unos {payback} días
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA to full cases page */}
        <AnimateOnScroll delay={300} className="text-center">
          <Link
            href="/casos"
            className="inline-flex items-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-sm px-8 py-4 transition-all hover:shadow-[0_0_30px_rgba(184,134,11,0.3)]"
          >
            Ver todos los casos de uso →
          </Link>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
