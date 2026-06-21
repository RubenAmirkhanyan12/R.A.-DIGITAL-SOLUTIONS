import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";
import { Phone, CalendarCheck, Clock, AlertCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contacto" className="bg-[#0A0A0A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A52]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Urgency banner */}
        <AnimateOnScroll className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#B8860B]/10 border border-[#B8860B]/30 px-6 py-3">
            <AlertCircle size={14} className="text-[#B8860B] shrink-0" />
            <p className="text-[#B8860B] text-sm font-medium">
              <span className="font-bold">3 plazas disponibles</span> este trimestre ·
              <span className="text-white/60"> Implementaciones se agendan con 2 semanas de antelación</span>
            </p>
          </div>
        </AnimateOnScroll>

        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Primer paso gratuito
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Empieza Hoy.{" "}
            <span className="text-[#B8860B]">Sin Riesgos.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Análisis gratuito de 30 minutos. Te digo exactamente cuánto tiempo y dinero
            puedes recuperar. Sin compromiso de ningún tipo.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Options */}
          <AnimateOnScroll direction="left">
            <div className="space-y-5">
              {/* Option A: Main */}
              <div className="bg-[#B8860B]/8 border border-[#B8860B]/30 p-7 relative overflow-hidden group hover:border-[#B8860B]/50 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8860B]/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <CalendarCheck size={18} className="text-[#B8860B]" />
                    <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                      Opción A · Recomendado
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-3">
                    Análisis de Procesos (30 min · GRATIS)
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Videollamada donde analizamos tus procesos, calculamos cuánto pierdes
                    y proponemos qué automatizar primero. Al final sabes exactamente
                    qué ROI esperar antes de invertir nada.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1">✓ Sin compromiso</span>
                    <span className="flex items-center gap-1">✓ Resultado concreto</span>
                    <span className="flex items-center gap-1">✓ Sin coste inicial</span>
                  </div>
                </div>
              </div>

              {/* Option B: Phone */}
              <div className="bg-[#141414] border border-white/5 p-7 hover:border-white/15 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={18} className="text-white/35 group-hover:text-[#B8860B] transition-colors" />
                  <span className="text-white/35 text-xs font-bold tracking-widest uppercase">
                    Opción B · Si prefieres directo
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Llamada o WhatsApp
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  ¿Tienes una necesidad concreta y quieres hablar sin rodeos?
                  Llama o escribe por WhatsApp y lo resolvemos.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+34613361175"
                    className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-sm hover:text-[#D4A017] transition-colors"
                  >
                    +34 613 361 175
                  </a>
                  <a
                    href="mailto:info@rastech.es"
                    className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#B8860B] transition-colors"
                  >
                    info@rastech.es
                  </a>
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-start gap-4 pt-1">
                <Clock size={15} className="text-[#10B981] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/65 text-sm font-medium">
                    Respuesta garantizada en menos de 24 horas.
                  </p>
                  <p className="text-white/30 text-xs mt-0.5">
                    Si no es así, la primera hora de consultoría te sale completamente gratis.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll direction="right" delay={150}>
            <div className="bg-[#141414] border border-white/5 p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                Agendar Análisis Gratuito
              </h3>
              <p className="text-white/35 text-xs mb-7">
                Rellena el formulario · Respondo en menos de 24h · Sin spam
              </p>
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
