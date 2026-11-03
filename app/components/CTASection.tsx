import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";
import ContactAlternatives from "./ContactAlternatives";
import NextSteps from "./NextSteps";
import { Phone, CalendarCheck } from "lucide-react";
import { OFFER, SITE } from "../lib/site-config";

export default function CTASection() {
  return (
    <section id="contacto" className="bg-[#0A0A0A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A52]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Primer paso gratuito
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Cuéntame qué{" "}
            <span className="text-[#B8860B]">quieres automatizar</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Llamada gratuita de {OFFER.freeCallMinutes} minutos. Vemos cuánto tiempo y dinero
            se te va en cada proceso y te digo si merece la pena automatizarlo.
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
                    Llamada gratuita de {OFFER.freeCallMinutes} minutos
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Analizamos tus procesos, estimamos cuánto te cuestan y vemos qué
                    conviene automatizar primero. Sales con una idea clara antes de invertir nada.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1">✓ Sin compromiso</span>
                    <span className="flex items-center gap-1">✓ Propuesta por escrito</span>
                    <span className="flex items-center gap-1">✓ Precio cerrado</span>
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
                  {SITE.whatsappEnabled ? "Llamada o WhatsApp" : "Llamada o correo"}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  ¿Tienes una necesidad concreta y quieres hablar sin rodeos?
                  {SITE.whatsappEnabled ? " Llámame o escríbeme por WhatsApp." : " Llámame o escríbeme un correo."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-sm hover:text-[#D4A017] transition-colors"
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#B8860B] transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <NextSteps />
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll direction="right" delay={150}>
            <div className="bg-[#141414] border border-white/5 p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                Reserva tu llamada
              </h3>
              <p className="text-white/35 text-xs mb-7">
                Rellena el formulario · Respondo en {OFFER.responseTime} · Sin spam
              </p>
              <ContactForm />
              <ContactAlternatives className="mt-5" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
