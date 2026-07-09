import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const tiers = [
  {
    label: "STARTER",
    tagline: "Para empezar a ahorrar rápido",
    price: "€700",
    desc: "1-2 procesos · 2 semanas · 30 días soporte",
    highlight: false,
  },
  {
    label: "GROWTH",
    tagline: "El más elegido — sistema completo",
    price: "€1.150",
    desc: "3-5 procesos · 2-3 semanas · 60 días soporte",
    highlight: true,
  },
  {
    label: "ENTERPRISE",
    tagline: "Transformación completa de procesos",
    price: "€1.650",
    desc: "6+ procesos · 3-4 semanas · retainer mensual",
    highlight: false,
  },
];

const sectors = [
  { label: "Restaurantes", desde: "€700", hasta: "€1.150", href: "/automatizar-restaurantes" },
  { label: "E-commerce",   desde: "€850", hasta: "€1.300", href: "/automatizar-ecommerce" },
  { label: "Agencias",     desde: "€1.100", hasta: "€1.650", href: "/automatizar-agencias" },
  { label: "Tu sector",    desde: "Presupuesto", hasta: "personalizado", href: "/automatizar-otros" },
];

export default function PricingSection() {
  return (
    <section id="precios" className="bg-[#080808] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-[#B8860B] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Inversión transparente
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Precio Automatización Procesos Barcelona:{" "}
            <span className="text-[#B8860B]">Desde €700 Según Tu Caso</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada empresa automatiza procesos diferentes. Los precios varían según tu sector y complejidad.
            El análisis inicial siempre es{" "}
            <span className="text-white/70 font-medium">gratuito y sin compromiso</span>.
          </p>
        </AnimateOnScroll>

        {/* ── 3 TIERS ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((t, i) => (
            <AnimateOnScroll key={t.label} delay={i * 100} direction="up">
              <div
                className={`p-8 flex flex-col gap-3 transition-all ${
                  t.highlight
                    ? "bg-[#1A3A52] border-2 border-[#B8860B]/60 shadow-[0_0_40px_rgba(184,134,11,0.12)]"
                    : "bg-[#111111] border border-white/5 hover:border-white/15"
                }`}
              >
                {t.highlight && (
                  <span className="text-[#B8860B] text-[10px] font-bold tracking-widest uppercase">
                    Recomendado
                  </span>
                )}
                <p className={`text-xs font-bold tracking-[0.22em] uppercase ${t.highlight ? "text-[#B8860B]" : "text-white/35"}`}>
                  {t.label}
                </p>
                <p className="text-white/55 text-sm">{t.tagline}</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className={`text-sm font-normal ${t.highlight ? "text-[#B8860B]/60" : "text-white/35"}`}>desde</span>
                  <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white">{t.price}</span>
                </div>
                <p className={`text-xs leading-relaxed ${t.highlight ? "text-white/55" : "text-white/35"}`}>{t.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── NOTA SECTORES ── */}
        <AnimateOnScroll delay={300}>
          <div className="bg-[#1A3A52]/10 border border-[#1A3A52]/40 p-8 mb-10">
            <p className="text-white font-bold text-[15px] mb-5">
              El precio final depende de tu sector y procesos — hablamos y lo acordamos juntos:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map(({ label, desde, hasta, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group bg-white/[0.03] hover:bg-[#1A3A52]/30 border border-white/8 hover:border-[#B8860B]/20 p-4 transition-all"
                >
                  <p className="text-[#B8860B] font-bold text-sm mb-1 group-hover:underline">{label}</p>
                  <p className="text-white/55 text-xs">
                    {label === "Tu sector" ? `${desde} ${hasta}` : `${desde} — ${hasta}`}
                  </p>
                </Link>
              ))}
            </div>
            <p className="text-white/35 text-xs mt-5 leading-relaxed">
              Cada empresa es diferente. Analizamos tu caso y te damos un número exacto antes de empezar. Sin sorpresas.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── CTAs ── */}
        <AnimateOnScroll delay={400} className="text-center">
          <p className="text-white/60 text-sm mb-6">¿Cuál es tu sector?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/automatizar-restaurantes"
              className="bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm py-3 px-6 transition-all"
            >
              Restaurantes
            </Link>
            <Link
              href="/automatizar-ecommerce"
              className="bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm py-3 px-6 transition-all"
            >
              E-commerce
            </Link>
            <Link
              href="/automatizar-agencias"
              className="bg-[#1A3A52] hover:bg-[#22496A] text-white font-bold text-sm py-3 px-6 transition-all"
            >
              Agencias
            </Link>
            <Link
              href="/automatizar-otros"
              className="border border-white/20 hover:border-[#B8860B]/50 hover:text-[#B8860B] text-white/70 font-bold text-sm py-3 px-6 transition-all"
            >
              Otro sector
            </Link>
          </div>

          <p className="text-white/25 text-xs mt-8 max-w-lg mx-auto leading-relaxed">
            El análisis inicial es siempre gratuito y sin compromisos.
            Hablamos, analizamos y te damos un número exacto antes de empezar.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
