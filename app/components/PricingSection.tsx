import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import VatNote from "./VatNote";
import { formatEUR, OFFER, PLANS } from "../lib/site-config";
import { CONTACT_HREF } from "../lib/seo";

const tiers = PLANS.map((plan) => ({
  label: plan.name,
  price: formatEUR(plan.fromEUR),
  processes: `${plan.processes} procesos`,
  timeline: `${plan.weeks} semanas`,
  support: plan.support,
  highlight: Boolean(plan.recommended),
}));

export default function PricingSection() {
  return (
    <section id="precios" className="bg-[#080808] py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll className="text-center mb-12">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Inversión transparente
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Precio de automatización de procesos:{" "}
            <span className="text-[#B8860B]">desde {formatEUR(PLANS[0].fromEUR)} según tu caso</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            El precio exacto se cierra en la llamada gratuita.{" "}
            <span className="text-white/70 font-medium">Sin sorpresas.</span>
          </p>
        </AnimateOnScroll>

        {/* 3 tiers — compact */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {tiers.map((t, i) => (
            <AnimateOnScroll key={t.label} delay={i * 80} direction="up">
              <div
                className={`p-7 flex flex-col gap-2 transition-all relative ${
                  t.highlight
                    ? "bg-[#1A3A52] border-2 border-[#B8860B]/60 shadow-[0_0_30px_rgba(184,134,11,0.10)]"
                    : "bg-[#111111] border border-white/5 hover:border-white/12"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#B8860B] text-black text-[9px] font-bold tracking-widest uppercase px-3 py-1">
                      Recomendado
                    </span>
                  </div>
                )}
                <p className={`text-xs font-bold tracking-[0.22em] uppercase ${t.highlight ? "text-[#B8860B]" : "text-white/35"}`}>
                  {t.label}
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className={`text-xs ${t.highlight ? "text-[#B8860B]/60" : "text-white/30"}`}>desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">{t.price}</span>
                </div>
                <div className="space-y-1 mt-2 text-xs text-white/40">
                  <p>⚙ {t.processes}</p>
                  <p>⏱ {t.timeline}</p>
                  <p>🛟 {t.support}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <VatNote className="text-center -mt-4 mb-8" />

        {/* CTA to full pricing page */}
        <AnimateOnScroll delay={250} className="text-center">
          <p className="text-white/40 text-sm mb-5">
            Cada empresa automatiza procesos diferentes.{" "}
            <span className="text-white/60">La llamada inicial es gratuita.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/precios"
              className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-sm px-8 py-4 transition-all hover:shadow-[0_0_24px_rgba(184,134,11,0.35)]"
            >
              Ver planes completos con detalles →
            </Link>
            <Link
              href={CONTACT_HREF}
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#B8860B]/40 text-white/60 hover:text-white font-bold text-sm px-8 py-4 transition-all"
            >
              Reserva tu llamada
            </Link>
          </div>
          <p className="text-white/20 text-xs mt-4">
            {OFFER.guarantee}
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
