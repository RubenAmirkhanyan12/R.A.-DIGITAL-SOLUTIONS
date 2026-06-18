"use client";

import { useState } from "react";
import { ArrowRight, TrendingDown, TrendingUp, Zap } from "lucide-react";

export default function ROICalculator() {
  const [hours, setHours] = useState(40);
  const [hourCost, setHourCost] = useState(25);

  const weeksPerMonth = 4.33;
  const reductionRate = 0.85;
  const monthlyWaste = Math.round(hours * hourCost * weeksPerMonth);
  const monthlySavings = Math.round(monthlyWaste * reductionRate);
  const annualSavings = monthlySavings * 12;
  const investmentStarter = 3500;
  const paybackWeeks = Math.ceil(investmentStarter / (monthlySavings / weeksPerMonth));

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calculadora" className="bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1A3A52]/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <Zap size={12} />
            Calculadora ROI
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            ¿Cuánto Pierdes{" "}
            <span className="text-[#B8860B]">Cada Mes?</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Mueve los sliders. Ve el resultado en tiempo real.
            Sin formularios, sin datos personales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Inputs */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 space-y-8">
            {/* Hours slider */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-white/70 text-sm font-medium">
                  Horas/semana en tareas administrativas
                </label>
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                  {hours}h
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 appearance-none cursor-pointer rounded-full"
                style={{
                  background: `linear-gradient(to right, #B8860B ${((hours - 5) / 95) * 100}%, rgba(255,255,255,0.1) ${((hours - 5) / 95) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-white/25 text-xs mt-2">
                <span>5h</span>
                <span>100h</span>
              </div>
              <p className="text-white/35 text-xs mt-2">
                Media en España: <span className="text-white/55">40h/semana</span>
              </p>
            </div>

            {/* Hour cost slider */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-white/70 text-sm font-medium">
                  Coste de tu hora (salario + overhead)
                </label>
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                  €{hourCost}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={150}
                step={5}
                value={hourCost}
                onChange={(e) => setHourCost(Number(e.target.value))}
                className="w-full h-2 appearance-none cursor-pointer rounded-full"
                style={{
                  background: `linear-gradient(to right, #B8860B ${((hourCost - 10) / 140) * 100}%, rgba(255,255,255,0.1) ${((hourCost - 10) / 140) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-white/25 text-xs mt-2">
                <span>€10</span>
                <span>€150</span>
              </div>
              <p className="text-white/35 text-xs mt-2">
                Incluye salario + costes sociales + espacio de trabajo
              </p>
            </div>

            {/* Context */}
            <div className="bg-white/[0.04] border border-white/8 p-4">
              <p className="text-white/40 text-xs leading-relaxed">
                Cálculo basado en una <span className="text-white/60">reducción del 85%</span> de horas
                administrativas, validado en 15+ implementaciones reales en Barcelona.
              </p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="space-y-4">
            {/* Current cost */}
            <div className="bg-[#EF4444]/8 border border-[#EF4444]/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingDown size={16} className="text-[#EF4444]" />
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  Lo que pierdes ahora cada mes
                </p>
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#EF4444]">
                €{monthlyWaste.toLocaleString("es-ES")}
              </p>
              <p className="text-white/35 text-xs mt-2">
                {hours}h × €{hourCost}/h × {weeksPerMonth} semanas = dinero en tareas manuales
              </p>
            </div>

            {/* Savings */}
            <div className="bg-[#10B981]/8 border border-[#10B981]/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp size={16} className="text-[#10B981]" />
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  Lo que ahorrarías cada mes con RASTECH
                </p>
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#10B981]">
                €{monthlySavings.toLocaleString("es-ES")}
              </p>
              <p className="text-white/35 text-xs mt-2">
                85% de reducción documentada en casos reales Barcelona
              </p>
            </div>

            {/* Annual + Payback */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.05] border border-white/10 p-5">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Ahorro anual</p>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                  €{annualSavings.toLocaleString("es-ES")}
                </p>
              </div>
              <div className="bg-white/[0.05] border border-white/10 p-5">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Payback STARTER</p>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                  {paybackWeeks <= 4
                    ? `${paybackWeeks} sem`
                    : paybackWeeks <= 20
                    ? `${Math.ceil(paybackWeeks / 4)} meses`
                    : ">5 meses"}
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="w-full group flex items-center justify-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-sm tracking-wide px-6 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,134,11,0.4)] active:scale-[0.99]"
            >
              Implementar esto
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-white/25 text-xs text-center">
              Análisis gratuito de 30 min · Sin compromiso · Respuesta en &lt;24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
