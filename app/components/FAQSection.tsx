"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { OFFER, PLANS, SITE } from "../lib/site-config";

const faqs = [
  {
    q: "¿Necesito saber programar o tener equipo técnico?",
    a: "No. Me encargo de lo técnico: análisis, diseño, puesta en marcha y formación. Tu equipo sigue usando sus herramientas de siempre, como Gmail, WhatsApp o Excel.",
  },
  {
    q: "¿Cuánto tiempo tarda implementar?",
    a: `Depende del plan: ${PLANS.map((p) => `${p.name} (${p.processes} procesos), ${p.weeks} semanas`).join("; ")}. Primero hacemos la llamada gratuita y después recibes la propuesta con el precio cerrado.`,
  },
  {
    q: "¿Necesito cambiar mis herramientas actuales?",
    a: "Normalmente no. n8n y Make se conectan con cientos de aplicaciones, como Gmail, Outlook, Google Sheets, Shopify, WooCommerce o HubSpot. Si la tuya no aparece, reviso si tiene API antes de proponerte nada.",
  },
  {
    q: "¿Es seguro? ¿Dónde van mis datos?",
    a: "Tus datos viajan cifrados (HTTPS) y se quedan en tus propias cuentas. Trabajo con tus datos conforme al RGPD y uso accesos con los permisos justos.",
  },
  {
    q: "¿Qué pasa si el sistema falla?",
    a: `Dejo alertas automáticas si un flujo falla; respondo en ${OFFER.responseTime}. Mientras tanto, la tarea puede hacerse a mano como hasta ahora.`,
  },
  {
    q: "¿Cómo sé si voy a recuperar la inversión?",
    a: `En la llamada gratuita estimamos tus horas y su coste. Si los números no lo justifican, te lo digo. Además: ${OFFER.guarantee}`,
  },
  {
    q: "¿Qué incluye el soporte después de la entrega?",
    a: `${PLANS.map((p) => `${p.name}: ${p.support}`).join(". ")}. ${OFFER.noHiddenCosts}`,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-white/80 group-hover:text-white font-medium text-sm pr-6 transition-colors leading-relaxed">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-white/10 group-hover:border-[#B8860B]/40 transition-colors">
          {open ? (
            <Minus size={12} className="text-[#B8860B]" />
          ) : (
            <Plus size={12} className="text-white/40" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/55 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">
            Preguntas sobre automatización de procesos{" "}
            <span className="text-[#B8860B]">en Barcelona</span>
          </h2>
          <p className="text-white/50 text-base">
            Si tu pregunta no está aquí, escríbeme directamente a {SITE.email}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="bg-[#111111] border border-white/5 px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimateOnScroll>

        {/* Blog guides */}
        <AnimateOnScroll delay={200} className="mt-10">
          <div className="bg-[#111111] border border-white/5 px-8 py-6">
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Guías relacionadas
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Cuánto cuesta automatizar procesos en Barcelona", "/blog/cuanto-cuesta-automatizar-barcelona"],
                ["Cómo automatizar la facturación de una asesoría", "/blog/automatizacion-facturacion-40h-4h"],
                ["7 errores al automatizar una empresa y cómo evitarlos", "/blog/errores-automatizar-empresa-barcelona"],
                ["n8n vs Make vs Zapier: cuál elegir en 2026", "/blog/n8n-vs-make-vs-zapier-barcelona"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-start gap-2 text-white/45 hover:text-[#B8860B] text-sm transition-colors group"
                >
                  <span className="text-[#B8860B] mt-0.5 shrink-0">→</span>
                  <span className="group-hover:underline leading-relaxed">{label}</span>
                </a>
              ))}
            </div>
            <p className="text-white/45 text-sm mt-5">
              Si prefieres verlo por sectores, mira la página de{" "}
              <Link href="/automatizar" className="text-[#B8860B] hover:underline">
                automatización de procesos en Barcelona
              </Link>
              .
            </p>
          </div>
        </AnimateOnScroll>

        {/* Still have questions */}
        <AnimateOnScroll delay={300} className="mt-10 text-center">
          <p className="text-white/35 text-sm mb-4">
            ¿Tienes una pregunta que no está aquí?
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#D4A017] text-sm font-semibold transition-colors"
          >
            {SITE.email} →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
