import AnimateOnScroll from "./AnimateOnScroll";
import { BadgeCheck, FlaskConical, ShieldCheck } from "lucide-react";
import { DELIVERY_LABEL, OFFER } from "../lib/site-config";

const commitments = [
  {
    Icon: BadgeCheck,
    title: "Precio cerrado antes de empezar",
    body: `Sabes lo que vas a pagar antes de decidir. ${OFFER.noHiddenCosts}`,
  },
  {
    Icon: FlaskConical,
    title: "Pruebas con tus datos antes de activar",
    body: "Compruebo cada flujo con ejemplos de tu negocio, incluidos los casos raros, y lo revisas conmigo antes de que funcione de verdad.",
  },
  {
    Icon: ShieldCheck,
    title: `Garantía de ${OFFER.guaranteeDays} días`,
    body: OFFER.guarantee,
  },
];

const facts = [
  { value: `${OFFER.freeCallMinutes} min`, label: "Llamada gratuita" },
  { value: "Precio cerrado", label: "Antes de empezar" },
  { value: DELIVERY_LABEL, label: "Según el plan" },
  { value: `${OFFER.guaranteeDays} días`, label: "Garantía" },
];

export default function HowIWorkSection() {
  return (
    <section className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Cómo trabajo
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Tres compromisos{" "}
            <span className="text-[#B8860B]">por escrito</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {commitments.map(({ Icon, title, body }, i) => (
            <AnimateOnScroll key={title} delay={i * 100} direction="up">
              <div className="bg-[#111111] border border-white/5 p-7 h-full">
                <Icon size={22} className="text-[#B8860B] mb-4" />
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="bg-[#1A3A52]/15 border border-[#1A3A52]/30 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#B8860B] mb-1">
                  {value}
                </p>
                <p className="text-white/45 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
