"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    q: "¿Necesito saber programar o tener equipo técnico?",
    a: "No. Esa es precisamente la razón de existir de RASTECH. Nos encargamos de todo lo técnico: análisis, diseño, implementación y formación. Tu equipo solo necesita usar las herramientas que ya usa (Gmail, WhatsApp, Excel) —el sistema trabaja detrás de escena.",
  },
  {
    q: "¿Cuánto tiempo tarda implementar?",
    a: "Depende del paquete: STARTER (2-3 procesos) se implementa en 3 semanas. GROWTH (5-7 procesos) en 6 semanas. ENTERPRISE con timeline personalizado. La primera semana es análisis gratuito. En la segunda ya tienes propuesta y precio cerrado.",
  },
  {
    q: "¿Necesito cambiar mis herramientas actuales?",
    a: "No necesariamente. Integramos con +200 herramientas: Gmail, Outlook, WhatsApp Business, Google Sheets, QuickBooks, Factusol, Shopify, WooCommerce, Salesforce, HubSpot, entre otras. Automatizamos lo que ya tienes, no te obligamos a cambiar nada.",
  },
  {
    q: "¿Es seguro? ¿Dónde van mis datos?",
    a: "Sí. Encriptación end-to-end, backups diarios automáticos, accesos controlados por permisos. Cumplimiento GDPR completo. Los datos siempre están en tu cuenta (Gmail, Google Drive, etc.) —nosotros no almacenamos datos de tu negocio en servidores propios.",
  },
  {
    q: "¿Qué pasa si el sistema falla?",
    a: "Sistema de alertas 24/7: si algo falla, te llega notificación inmediata. Acceso a soporte en menos de 2 horas durante el período de garantía. Los flujos automáticos tienen fallbacks: si falla el automático, el proceso vuelve al manual temporalmente sin pérdida de información.",
  },
  {
    q: "¿Cómo sé que realmente voy a recuperar la inversión?",
    a: "Calculamos el ROI antes de empezar. En el análisis gratuito medimos cuántas horas y dinero pierdes en cada proceso. Si los números no justifican la inversión, te lo decimos. No aceptamos proyectos donde el ROI no sea claro y demostrable en menos de 6 meses.",
  },
  {
    q: "¿Qué incluye el soporte post-implementación?",
    a: "STARTER: 30 días de soporte incluido. GROWTH: 60 días + revisión de optimización al mes. ENTERPRISE: retainer mensual disponible. El soporte cubre: ajustes menores, resolución de errores, formación adicional del equipo y pequeñas mejoras. Cambios mayores tienen presupuesto adicional.",
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
            Tus Dudas.{" "}
            <span className="text-[#B8860B]">Resueltas.</span>
          </h2>
          <p className="text-white/50 text-base">
            Si tu pregunta no está aquí, escríbeme directamente a info@rastech.es
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="bg-[#111111] border border-white/5 px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </AnimateOnScroll>

        {/* Still have questions */}
        <AnimateOnScroll delay={200} className="mt-10 text-center">
          <p className="text-white/35 text-sm mb-4">
            ¿Tienes una pregunta que no está aquí?
          </p>
          <a
            href="mailto:info@rastech.es"
            className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#D4A017] text-sm font-semibold transition-colors"
          >
            info@rastech.es →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
