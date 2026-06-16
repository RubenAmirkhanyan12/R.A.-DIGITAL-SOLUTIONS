"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, CheckCircle } from "lucide-react";

const trustBadges = [
  "Ingeniero Informático",
  "Máxima Profesionalidad",
  "Resultados Garantizados",
];

export default function HeroClient() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef, subRef, badgesRef, ctaRef];
    els.forEach((ref, i) => {
      if (!ref.current) return;
      const el = ref.current;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  const scrollToHow = () => {
    document.querySelector("#como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center lg:text-left">
      <div className="max-w-4xl">
        {/* Trust strip */}
        <div ref={badgesRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 text-[#B8860B] text-xs font-semibold tracking-widest uppercase"
            >
              <CheckCircle size={12} className="shrink-0" />
              {badge}
            </span>
          ))}
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
        >
          Soluciones Digitales Que{" "}
          <span className="relative inline-block">
            <span className="text-[#B8860B]">Transforman</span>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B8860B]/50" />
          </span>{" "}
          Tu Negocio
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
        >
          Cada pixel, cada línea de código, diseñado para generar resultados.
          Webs y apps{" "}
          <span className="text-white font-medium">100% personalizadas</span>{" "}
          que hacen lo que{" "}
          <span className="text-white font-medium">NECESITAS</span>, no lo que
          alguien más hizo.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group relative bg-[#B8860B] hover:bg-[#D4A017] text-white font-bold text-base px-8 py-4 tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,134,11,0.4)] active:scale-95"
          >
            Descubre Cómo Transformamos Negocios
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform" />
          </button>

          <button
            onClick={scrollToHow}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors group"
          >
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
            Ver cómo funciona
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
          {[
            { value: "+40%", label: "Más leads" },
            { value: "20h", label: "Ahorradas/semana" },
            { value: "100%", label: "Personalizado" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B]">
                {value}
              </div>
              <div className="text-white/50 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-[#B8860B]/60 to-transparent mx-auto" />
      </div>
    </div>
  );
}
