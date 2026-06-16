import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";
import { Phone, CalendarCheck, Clock } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contacto" className="bg-[#0A0A0A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A52]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Primeros Pasos
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Empieza Hoy.{" "}
            <span className="text-[#B8860B]">Sin Riesgos.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            El primer paso es gratuito. Hablamos, analizamos tu situación y te
            digo exactamente si puedo ayudarte.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Options */}
          <AnimateOnScroll direction="left">
            <div className="space-y-6">
              {/* Option A */}
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/25 p-7 relative overflow-hidden group hover:border-[#B8860B]/50 transition-all">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#B8860B]/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <CalendarCheck size={20} className="text-[#B8860B]" />
                    <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                      Opción A · Recomendado
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                    Auditoría Estratégica (2h · GRATIS)
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Analizamos tu situación específica y proponemos solución
                    concreta sin compromisos. Los clientes típicamente descubren
                    que están perdiendo{" "}
                    <span className="text-white">€10k–50k/mes</span> en
                    ineficiencias que no veían.
                  </p>
                </div>
              </div>

              {/* Option B */}
              <div className="bg-[#141414] border border-white/5 p-7 hover:border-white/15 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={20} className="text-white/40 group-hover:text-[#B8860B] transition-colors" />
                  <span className="text-white/40 text-xs font-bold tracking-widest uppercase">
                    Opción B · Si prefieres ir rápido
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Llamada Telefónica o WhatsApp · GRATIS
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  ¿Tienes una necesidad concreta y quieres hablar directamente?
                  Contacta por llamada o WhatsApp y hablamos sin rodeos.
                </p>
                <a
                  href="tel:+34613361175"
                  className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-sm hover:text-[#D4A017] transition-colors"
                >
                  +34 613 361 175
                </a>
              </div>

              {/* Guarantee */}
              <div className="flex items-start gap-4 pt-2">
                <Clock size={16} className="text-[#B8860B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70 text-sm font-medium">
                    Respuesta garantizada en menos de 24 horas.
                  </p>
                  <p className="text-white/30 text-xs mt-0.5">
                    Si no es así, la primera hora de consultoría es completamente gratis.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll direction="right" delay={150}>
            <div className="bg-[#141414] border border-white/5 p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                Agenda Tu Auditoría
              </h3>
              <p className="text-white/40 text-xs mb-6">
                Rellena el formulario y te contacto en menos de 24h
              </p>
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
