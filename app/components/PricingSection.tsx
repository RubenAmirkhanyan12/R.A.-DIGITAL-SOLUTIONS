import AnimateOnScroll from "./AnimateOnScroll";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    tagline: "Para empezar a ahorrar rápido",
    price: "€550",
    priceNote: "precio a medida",
    roi: "Primera automatización en 2 semanas",
    highlight: false,
    processes: "1-2 procesos",
    duration: "2 semanas",
    support: "30 días",

    features: [
      "Análisis de procesos (gratis)",
      "Automatización de 1-2 procesos clave",
      "Facturación O emails O reportes",
      "Integración con tus herramientas",
      "Panel de control básico",
      "Formación de equipo (1h)",
      "Soporte 30 días",
    ],
    notIncluded: [
      "Integración multiherramienta",
      "Dashboard personalizado",
      "Consultoría estratégica",
    ],
    cta: "Analizar mi situación",
    ideal: "Restaurante, tienda o despacho pequeño queriendo automatizar lo más urgente.",
  },
  {
    name: "GROWTH",
    tagline: "El más elegido por empresas Barcelona",
    price: "€2.600",
    priceNote: "precio a medida",
    roi: "Sistema completo en 2 semanas",
    highlight: true,
    processes: "3-5 procesos",
    duration: "2-3 semanas",
    support: "60 días",
    features: [
      "Análisis de procesos (gratis)",
      "Automatización de 3-5 procesos",
      "Sistema completo integrado",
      "Integración multiherramienta avanzada",
      "Dashboard personalizado en vivo",
      "Alertas y notificaciones inteligentes",
      "Formación de equipo (2h)",
      "Consultoría estratégica incluida",
      "Soporte 60 días",
      "Revisión de optimización semana 3",
    ],
    notIncluded: [],
    cta: "Solicitar consulta gratuita",
    ideal: "Agencia, e-commerce o empresa de servicios lista para escalar.",
  },
  {
    name: "ENTERPRISE",
    tagline: "Para transformación completa",
    price: "€5.150",
    priceNote: "precio a medida",
    roi: "Implementación en 2-3 semanas",
    highlight: false,
    processes: "6+ procesos",
    duration: "3-4 semanas",
    support: "Retainer mensual",
    features: [
      "Todo lo de GROWTH",
      "6+ procesos automatizados",
      "Integración total de sistemas",
      "API personalizada si necesaria",
      "Retainer mensual disponible",
      "Soporte dedicado prioritario",
      "Revisiones mensuales incluidas",
      "Escalabilidad garantizada",
      "Onboarding del equipo completo",
      "SLA de uptime garantizado",
    ],
    notIncluded: [],
    cta: "Hablar de mi caso",
    ideal: "Empresa mediana con múltiples departamentos y necesidad de integración total.",
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="bg-[#080808] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Transparencia total
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Precios Claros.{" "}
            <span className="text-[#B8860B]">Sin Sorpresas.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Precios desde, adaptados a tu proyecto real. Sin mensualidades ocultas.
            El análisis inicial siempre es <span className="text-white/70 font-medium">gratuito y sin compromiso</span>.
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 100} direction="up">
              <div
                className={`relative flex flex-col h-full transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#1A3A52] border-2 border-[#B8860B]/60 shadow-[0_0_40px_rgba(184,134,11,0.15)]"
                    : "bg-[#111111] border border-white/5 hover:border-white/15"
                }`}
              >
                {/* Recommended badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#B8860B] text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest">
                      <Star size={10} fill="currentColor" />
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Plan name */}
                  <div className="mb-6">
                    <p className={`text-xs font-bold tracking-[0.25em] uppercase mb-2 ${
                      plan.highlight ? "text-[#B8860B]" : "text-white/40"
                    }`}>
                      {plan.name}
                    </p>
                    <p className="text-white/60 text-sm mb-5">{plan.tagline}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-white/40 text-sm font-normal">desde</span>
                      <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-white/35 text-xs">{plan.priceNote}</p>
                    <p className={`text-sm font-semibold mt-2 ${
                      plan.highlight ? "text-[#10B981]" : "text-[#10B981]/70"
                    }`}>
                      {plan.roi}
                    </p>
                  </div>

                  {/* Quick specs */}
                  <div className={`flex flex-wrap gap-3 mb-6 pb-6 border-b ${
                    plan.highlight ? "border-white/20" : "border-white/5"
                  }`}>
                    {[
                      { label: "Procesos", val: plan.processes },
                      { label: "Duración", val: plan.duration },
                      { label: "Soporte", val: plan.support },
                    ].map(({ label, val }) => (
                      <div key={label} className={`text-center px-3 py-2 flex-1 min-w-[80px] ${
                        plan.highlight ? "bg-white/10" : "bg-white/[0.03]"
                      }`}>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">{label}</p>
                        <p className="text-white text-xs font-semibold mt-0.5">{val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={13} className={`mt-0.5 shrink-0 ${
                          plan.highlight ? "text-[#10B981]" : "text-[#10B981]/70"
                        }`} />
                        <span className="text-white/70">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                        <span className="text-white/30 mt-0.5 shrink-0 text-xs">×</span>
                        <span className="text-white/40 line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal for */}
                  <p className={`text-xs leading-relaxed mb-6 p-3 ${
                    plan.highlight ? "bg-white/10 text-white/60" : "bg-white/[0.03] text-white/40"
                  }`}>
                    Ideal para: {plan.ideal}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className={`block text-center font-bold text-sm tracking-wide px-6 py-4 transition-all duration-200 ${
                      plan.highlight
                        ? "bg-[#B8860B] hover:bg-[#9A7009] text-white hover:shadow-[0_0_25px_rgba(184,134,11,0.4)]"
                        : "border border-white/20 text-white hover:border-[#B8860B]/50 hover:text-[#B8860B]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimateOnScroll delay={400} className="mt-12 text-center">
          <p className="text-white/30 text-sm max-w-xl mx-auto">
            El análisis inicial es <span className="text-white/50 font-medium">siempre gratuito y sin compromisos</span>.
            El precio final depende del alcance concreto — hablamos, analizamos y te damos un número exacto antes de empezar.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
