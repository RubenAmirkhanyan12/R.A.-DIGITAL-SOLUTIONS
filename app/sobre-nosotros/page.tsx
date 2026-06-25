import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "../components/AnimateOnScroll";
import {
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";

/* ── Metadata ────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Rubén Amirkhanyan | Especialista Automatización Barcelona | RASTECH",
  description:
    "Ingeniero informático especializado en automatización de procesos para empresas Barcelona. Reduce 40h/mes de trabajo manual. Analiza tu situación gratis.",
  keywords:
    "Rubén Amirkhanyan, automatización procesos Barcelona, especialista automatización, RASTECH, ingeniero informático",
  openGraph: {
    title: "Rubén Amirkhanyan | Especialista Automatización Barcelona | RASTECH",
    description:
      "Ingeniero informático especializado en automatización de procesos para empresas Barcelona. Reduce 40h/mes de trabajo manual.",
    type: "profile",
    locale: "es_ES",
  },
  alternates: { canonical: "https://ras-tech.es/sobre-nosotros" },
};

/* ── JSON-LD ─────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rubén Amirkhanyan",
  jobTitle: "Ingeniero Informático, Fundador RASTECH",
  areaServed: "Barcelona, España",
  email: "rubenamirkhanyan12@gmail.com",
  telephone: "+34 613 361 115",
  worksFor: {
    "@type": "Organization",
    name: "RASTECH",
    url: "https://ras-tech.es",
  },
  description: "Especialista en automatización de procesos para empresas Barcelona",
};

/* ── Specialties data ────────────────────────────────────────── */
const specialties = [
  {
    title: "Automatización de procesos manuales",
    body: "Facturación, CRM, emails, reportes, seguimiento clientes. Los procesos que comen 30–50 % del tiempo administrativo.",
  },
  {
    title: "Integraciones entre sistemas",
    body: "ERP → Contabilidad → CRM → Tienda online. Una fuente de verdad. Cero duplicación de datos.",
  },
  {
    title: "Flujos de trabajo inteligentes",
    body: "Decisiones automáticas según lógica de negocio. Sin código complejo. Mantenible por tu equipo.",
  },
  {
    title: "Soluciones escalables",
    body: "Desde 5 personas hasta 200. Crecen con tu empresa. No necesitas rediseñar en año 2.",
  },
];

const stats = [
  { value: "20+",     label: "Empresas Barcelona con las que hemos trabajado" },
  { value: "40+",     label: "Procesos automatizados exitosamente" },
  { value: "€28.000", label: "Ahorro promedio por empresa al año" },
  { value: "95%",     label: "Tasa de satisfacción (referencias verificables)" },
];

const steps = [
  {
    n: "01",
    title: "AUDITORÍA INICIAL",
    sub: "1 sesión · 100 % gratis",
    body: "Videollamada 60 minutos. Mapeamos tus procesos exactos. Identificamos dónde pierdes horas. Calculamos ahorro potencial. No hay obligación de continuar.",
  },
  {
    n: "02",
    title: "PROPUESTA CLARA",
    sub: "",
    body: "Te decimos: «Automaticemos primero ESTO (máximo impacto)». Costo estimado. Timeline exacto. Qué incluye. Qué no.",
  },
  {
    n: "03",
    title: "IMPLEMENTACIÓN",
    sub: "",
    body: "Montamos el flujo automático. Lo testeamos con tus datos reales. Lo validamos contigo. Formación incluida.",
  },
  {
    n: "04",
    title: "TRANSFERENCIA & SOPORTE",
    sub: "",
    body: "Tu equipo maneja el sistema. Nosotros apoyamos — sin crear dependencia. Soporte incluido según plan (30, 60 o ilimitado días).",
  },
];

/* ── Sidebar component ───────────────────────────────────────── */
function ContactSidebar() {
  return (
    <aside className="bg-[#F8F9FA]/5 border border-white/8 p-8 flex flex-col gap-6">
      {/* Avatar placeholder */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#1A3A52] border-2 border-[#B8860B]/40 flex items-center justify-center shrink-0">
          <span className="text-[#B8860B] font-bold text-xl font-[family-name:var(--font-playfair)]">
            RA
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">Rubén Amirkhanyan</p>
          <p className="text-white/40 text-xs mt-0.5">Fundador · RASTECH</p>
        </div>
      </div>

      {/* Primary CTA */}
      <a
        href="/#contacto"
        className="flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-[15px] tracking-wide py-4 px-6 rounded-[6px] transition-all hover:shadow-[0_0_20px_rgba(184,134,11,0.4)] text-center"
      >
        <Calendar size={16} />
        Agendar Auditoría Gratuita
      </a>

      <p className="text-white/35 text-xs text-center -mt-2">
        Sin compromiso · Respuesta en &lt;24h
      </p>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Contact info */}
      <div className="flex flex-col gap-3">
        <a
          href="mailto:rubenamirkhanyan12@gmail.com"
          className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-[#B8860B] transition-colors break-all"
        >
          <Mail size={13} className="shrink-0" />
          rubenamirkhanyan12@gmail.com
        </a>
        <a
          href="tel:+34613361115"
          className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-[#B8860B] transition-colors"
        >
          <Phone size={13} className="shrink-0" />
          +34 613 361 115
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Quick trust signals */}
      <ul className="flex flex-col gap-2.5">
        {[
          "20+ empresas Barcelona",
          "Implementación en 2–3 semanas",
          "ROI medible desde el mes 1",
          "GDPR compliant por defecto",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 text-[13px] text-white/50">
            <CheckCircle size={13} className="text-[#B8860B] mt-0.5 shrink-0" />
            {t}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Internal links */}
      <div className="flex flex-col gap-2">
        <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold mb-1">
          Explorar
        </p>
        {[
          { label: "Ver casos de éxito", href: "/#casos" },
          { label: "Ver precios", href: "/#precios" },
          { label: "Blog de automatización", href: "/blog" },
        ].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-1.5 text-[13px] text-white/45 hover:text-[#B8860B] transition-colors"
          >
            <ArrowRight size={11} />
            {label}
          </a>
        ))}
      </div>
    </aside>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function SobreNosotros() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0F0F0F]">

        {/* ── Hero band ──────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-16 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
          <div className="absolute top-16 right-16 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                Sobre RASTECH
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Rubén Amirkhanyan
            </h1>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#B8860B] mb-6 leading-snug">
              Ingeniero Informático · Dirijo RASTECH · Especialista Automatización Barcelona
            </h2>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Automatizamos procesos manuales en empresas Barcelona.
              Pasamos 40 horas/mes a 5 horas automáticas.
              Sin cambiar herramientas. Sin programar. Resultados medibles.
            </p>
          </div>
        </section>

        {/* ── Main 2-column layout ───────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* ══ LEFT COLUMN — content ════════════════════════ */}
            <div className="flex flex-col gap-16">

              {/* ── S2: Quién Soy ─────────────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="quien-soy">
                  <h2
                    id="quien-soy"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-7"
                  >
                    Quién Soy
                  </h2>

                  <div className="prose-section space-y-5 text-white/65 text-[16px] leading-[1.85]">
                    <p>
                      <strong className="text-white">Soy ingeniero informático.</strong>
                    </p>
                    <p>
                      Pasé 5 años viendo empresas Barcelona perder 30–40 horas cada semana en
                      tareas que podrían ser automáticas:
                    </p>
                    <ul className="space-y-2 pl-0">
                      {[
                        "Facturación manual en Excel (copiar datos, validar, enviar)",
                        "Emails repetitivos (mismos datos, distintos clientes)",
                        "Copiar información entre sistemas (CRM → Facturación → Emails)",
                        "Reportes que se hacen los lunes a las 7am (antes de que llegue el equipo)",
                        "Procesos que no escalan (no puedes crecer sin contratar más gente)",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-[#B8860B] mt-1.5 shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>
                      Decidí especializar RASTECH en resolver eso. No en vender herramientas.
                      En liberar horas que tu equipo está malgastando.
                    </p>
                    <p>
                      Ahora dirijo RASTECH, un equipo que automatiza procesos reales para empresas
                      Barcelona. Usamos herramientas modernas (n8n, Make, APIs, integraciones).
                      Nos enfocamos en UN resultado: dinero y tiempo ahorrados, medibles en números.
                    </p>
                  </div>
                </section>
              </AnimateOnScroll>

              {/* ── S3: Por qué somos diferentes ──────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="diferente">
                  <h2
                    id="diferente"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-7"
                  >
                    Por Qué RASTECH Es Diferente
                  </h2>
                  <p className="text-white/60 text-[16px] leading-relaxed mb-6">
                    No somos consultora genérica que hace «de todo».
                  </p>
                  <p className="text-[#B8860B] font-semibold text-[16px] mb-6">
                    RASTECH se especializa en:
                  </p>

                  <div className="bg-[#1A3A52]/10 border border-[#1A3A52]/40 p-7 space-y-7 mb-7">
                    {specialties.map(({ title, body }) => (
                      <div key={title}>
                        <p className="text-white font-semibold text-[16px] flex items-start gap-2 mb-2">
                          <CheckCircle size={16} className="text-[#B8860B] mt-0.5 shrink-0" />
                          {title}
                        </p>
                        <p className="text-white/50 text-[14px] leading-relaxed pl-6">{body}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-white font-semibold text-[16px] leading-relaxed border-l-2 border-[#B8860B] pl-4">
                    Diferenciador clave: analizamos tu proceso, no te vendemos herramientas.
                    Resultado: implementas → ves ahorro → pagas. En ese orden.
                  </p>
                </section>
              </AnimateOnScroll>

              {/* ── S4: Filosofía ─────────────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="filosofia">
                  <h2
                    id="filosofia"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-7"
                  >
                    Nuestra Filosofía
                  </h2>
                  <div className="space-y-5 text-white/65 text-[16px] leading-[1.85]">
                    <p>
                      En RASTECH creemos que «automatizar»{" "}
                      <strong className="text-white">NO es instalar un robot</strong> que haga lo
                      mismo que antes pero más rápido.
                    </p>
                    <blockquote className="border-l-3 border-[#B8860B] pl-5 py-1">
                      <p className="text-[#B8860B] font-semibold text-[18px] leading-relaxed italic">
                        Es liberar tiempo humano para que tu equipo haga lo que importa.
                      </p>
                    </blockquote>
                    <p>
                      No automatizamos tareas superficiales que «estaría bien» hacer rápido.
                      Vamos al núcleo: procesos que afectan directamente productividad, calidad,
                      rentabilidad.
                    </p>
                    <ul className="space-y-2 pl-0">
                      {[
                        "Herramientas modernas: n8n, Make, APIs",
                        "Datos seguros en Europa (GDPR compliant por defecto)",
                        "Soporte en español, con Account Manager dedicado",
                        "Cero dependencia: el código es tuyo desde el minuto uno",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle size={14} className="text-[#B8860B] mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </AnimateOnScroll>

              {/* ── S5: Números ───────────────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="numeros">
                  <h2
                    id="numeros"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-8"
                  >
                    Números Reales
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map(({ value, label }, i) => (
                      <div
                        key={value}
                        className={`p-6 text-center border ${
                          i % 2 === 0
                            ? "bg-[#1A3A52] border-[#1A3A52]"
                            : "bg-[#1A3A52]/40 border-[#1A3A52]/60"
                        }`}
                      >
                        <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#B8860B] mb-2">
                          {value}
                        </p>
                        <p className="text-white/60 text-[13px] leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/35 text-[13px] text-center">
                    <strong className="text-white/50">Tiempo medio implementación:</strong> 2–6
                    semanas &nbsp;·&nbsp;{" "}
                    <strong className="text-white/50">ROI típico:</strong> 3–6 meses
                  </p>
                </section>
              </AnimateOnScroll>

              {/* ── S6: Cómo trabajamos ───────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="como-trabajamos">
                  <h2
                    id="como-trabajamos"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-8"
                  >
                    Cómo Trabajamos Con Empresas Barcelona
                  </h2>

                  <div className="space-y-0">
                    {steps.map(({ n, title, sub, body }, i) => (
                      <div
                        key={n}
                        className={`flex gap-6 p-6 border border-white/5 hover:border-[#B8860B]/20 transition-colors ${
                          i !== steps.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <div className="shrink-0 pt-0.5">
                          <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A3A52]/60 leading-none">
                            {n}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-[15px] tracking-wide mb-0.5">
                            {title}
                            {sub && (
                              <span className="text-[#B8860B] font-normal text-[13px] ml-2">
                                · {sub}
                              </span>
                            )}
                          </p>
                          <p className="text-white/55 text-[15px] leading-[1.8] mt-2">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </AnimateOnScroll>

              {/* ── S7: CTA ───────────────────────────────────── */}
              <AnimateOnScroll direction="up">
                <section
                  aria-labelledby="empecemos"
                  className="bg-gradient-to-br from-[#1A3A52]/30 to-[#1A3A52]/10 border border-[#1A3A52]/50 p-10"
                >
                  <h2
                    id="empecemos"
                    className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-5"
                  >
                    Empecemos
                  </h2>
                  <p className="text-white/60 text-[16px] leading-relaxed mb-4">
                    ¿Tu equipo gasta 30+ horas/mes en tareas manuales?
                  </p>
                  <p className="text-white/60 text-[16px] leading-relaxed mb-8">
                    Podría funcionar algo similar con tu empresa.
                    Hablemos 15 minutos — sin compromiso.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/#contacto"
                      className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-[15px] tracking-wide px-7 py-4 rounded-[6px] transition-all hover:shadow-[0_0_24px_rgba(184,134,11,0.4)]"
                    >
                      <Calendar size={16} />
                      Agendar auditoría gratuita
                    </a>
                    <Link
                      href="/#casos"
                      className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:border-[#B8860B]/50 hover:text-[#B8860B] font-semibold text-[15px] px-7 py-4 rounded-[6px] transition-all"
                    >
                      Ver casos de éxito
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </section>
              </AnimateOnScroll>
            </div>

            {/* ══ RIGHT COLUMN — sticky sidebar ════════════════ */}
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <ContactSidebar />

              {/* Expertise tags */}
              <div className="mt-6 p-6 border border-white/5">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold mb-4">
                  Tecnologías
                </p>
                <div className="flex flex-wrap gap-2">
                  {["n8n", "Make", "REST APIs", "Google Sheets", "Shopify", "QuickBooks", "WhatsApp Business", "Gmail API", "GDPR"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[12px] text-white/40 bg-white/[0.04] border border-white/8 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
