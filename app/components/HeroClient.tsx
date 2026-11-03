"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, ArrowRight, TrendingDown } from "lucide-react";
import { formatEUR, monthlySaving, OFFER, OWNER_INTRO, PLANS, SCENARIOS } from "../lib/site-config";

const trustSignals = [
  `Llamada gratuita de ${OFFER.freeCallMinutes} min`,
  "Precio cerrado antes de empezar",
  `Desde ${formatEUR(PLANS[0].fromEUR)}`,
];

const dashboardItems = [
  { label: "Facturación", was: "A mano" },
  { label: "Correos de seguimiento", was: "Uno a uno" },
  { label: "Reporte semanal", was: "Cada lunes" },
  { label: "Cobros y recordatorios", was: "De memoria" },
];

const example = SCENARIOS[0];
const exampleSaving = monthlySaving(example.hoursPerWeek);

export default function HeroClient() {
  const overlineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [overlineRef, headlineRef, subRef, trustRef, ctaRef, dashRef];
    els.forEach((ref, i) => {
      if (!ref.current) return;
      const el = ref.current;
      el.style.opacity = "0";
      el.style.transform = i === 5 ? "translateX(30px)" : "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.85s ease, transform 0.85s ease";
        el.style.opacity = "1";
        el.style.transform = "translate(0,0)";
      }, 150 + i * 140);
    });
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT: Text */}
        <div>
          {/* Overline */}
          <div ref={overlineRef} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
              Automatización de Procesos · Barcelona
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            <span className="block">Automatización de procesos</span>
            <span className="relative inline-block text-[#B8860B] mt-1">
              para pymes de Barcelona
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#B8860B] to-transparent" />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-white/65 leading-relaxed max-w-xl mb-4"
          >
            Conecto las herramientas que ya usas para que facturas, correos, reportes y
            cobros dejen de hacerse a mano. Sin programar y sin cambiar de herramientas.
          </p>

          {/* SEO intro paragraph */}
          <p className="text-sm text-white/45 leading-relaxed max-w-xl mb-8">
            {OWNER_INTRO}
          </p>

          {/* Trust signals */}
          <div ref={trustRef} className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="flex items-center gap-1.5 text-white/60 text-sm"
              >
                <CheckCircle size={13} className="text-[#10B981] shrink-0" />
                {signal}
              </span>
            ))}
          </div>

          {/* Sector quick-links */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-xs">
            <span className="text-white/25">Ver por sector:</span>
            <a href="/automatizar-restaurantes" className="text-[#B8860B]/70 hover:text-[#B8860B] transition-colors">
              Restaurantes →
            </a>
            <a href="/automatizar-ecommerce" className="text-[#B8860B]/70 hover:text-[#B8860B] transition-colors">
              E-commerce →
            </a>
            <a href="/automatizar-agencias" className="text-[#B8860B]/70 hover:text-[#B8860B] transition-colors">
              Agencias →
            </a>
            <a href="/casos" className="text-white/30 hover:text-white/60 transition-colors">
              Casos de uso →
            </a>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#como-funciona")}
              className="group inline-flex items-center gap-3 bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm px-7 py-4 tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(26,58,82,0.6)] active:scale-95"
            >
              Ver cómo trabajo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("#calculadora")}
              className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#D4A017] text-sm font-semibold transition-colors group"
            >
              <TrendingDown size={15} className="group-hover:-translate-y-0.5 transition-transform" />
              Calcular mi ahorro →
            </button>
          </div>
        </div>

        {/* RIGHT: Dashboard mockup */}
        <div ref={dashRef} className="hidden lg:block">
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-[#1A3A52]/20 blur-3xl rounded-2xl scale-110" />

            <div className="relative bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-[#0F172A]">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]/70" />
                <span className="ml-3 text-white/30 text-xs font-mono">
                  ejemplo ilustrativo · panel de automatización
                </span>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-3">
                {/* Header stat */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                      Horas liberadas por semana
                    </p>
                    <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#10B981] mt-1">
                      {example.hoursPerWeek} h
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs">Ahorro estimado/mes</p>
                    <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B] mt-1">
                      {formatEUR(exampleSaving)}
                    </p>
                  </div>
                </div>

                {/* Process list */}
                <div className="space-y-2.5">
                  {dashboardItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between bg-white/[0.04] border border-white/5 rounded-lg px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center">
                          <CheckCircle size={11} className="text-[#10B981]" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">{item.label}</p>
                          <p className="text-white/30 text-[10px]">Antes: {item.was}</p>
                        </div>
                      </div>
                      <span className="text-[#10B981] text-xs font-bold">Automático</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust badges */}
      <div className="mt-20 pt-8 border-t border-white/8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {[
            { value: `${OFFER.freeCallMinutes} min`, label: "Llamada gratuita" },
            { value: "Precio cerrado", label: "Antes de empezar" },
            { value: "2–4 semanas", label: "Según el plan" },
            { value: `${OFFER.guaranteeDays} días`, label: "Garantía" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                {value}
              </div>
              <div className="text-white/40 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
