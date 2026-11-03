import { pageMetadata } from "../lib/seo";
import Link from "next/link";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import { OFFER, OWNER_INTRO, PLANS, SITE } from "../lib/site-config";

/* ── Metadata ────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "Sobre Rubén Amirkhanyan: automatización con n8n | RASTECH",
  description:
    "Quién está detrás de RASTECH: soy Rubén Amirkhanyan y automatizo procesos con n8n y Make para pymes de Barcelona. Así trabajo.",
  path: "/sobre-nosotros",
  type: "profile",
});

/* ── JSON-LD: Person ─────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.owner,
  jobTitle: SITE.credential,
  areaServed: "Barcelona, España",
  email: SITE.email,
  telephone: SITE.phone,
  url: `${SITE.url}/sobre-nosotros`,
  knowsAbout: [
    "n8n",
    "Make",
    "Automatización de procesos",
    "Integraciones de software",
  ],
  workLocation: {
    "@type": "Place",
    name: "Barcelona, España",
  },
  worksFor: {
    "@type": "Organization",
    name: "RASTECH",
    url: SITE.url,
  },
  description: OWNER_INTRO,
};

/* ── JSON-LD: FAQPage ────────────────────────────────────────── */
const faqs = [
  {
    q: "¿Con qué herramientas trabajas?",
    a: "Principalmente n8n y Make. Elijo según tu caso: n8n cuando importa controlar dónde están los datos o la lógica se complica, y Make cuando prima la sencillez.",
  },
  {
    q: "¿Solo trabajas con empresas de Barcelona?",
    a: "Me centro en pymes de Barcelona y su área metropolitana.",
  },
  {
    q: "¿Cuánto tarda una automatización?",
    a: `Entre 2 y 4 semanas según el plan: ${PLANS.map((p) => `${p.name}, ${p.weeks} semanas`).join("; ")}.`,
  },
  {
    q: "¿Tienes experiencia con clientes?",
    a: "Estoy empezando. Por eso los ejemplos de esta web son ilustrativos y cuido cada proyecto de principio a fin. Cuando haya casos de clientes, los publicaré con su permiso por escrito.",
  },
  {
    q: "¿Necesito cambiar mis herramientas actuales?",
    a: "Normalmente no. Trabajo con lo que ya usas, como Gmail, Google Sheets o tu programa de gestión, y lo conecto.",
  },
  {
    q: "¿Qué pasa si algo falla después de la entrega?",
    a: `Dejo alertas automáticas si un flujo falla; respondo en ${OFFER.responseTime}. Cada plan incluye soporte, y ${OFFER.guarantee.charAt(0).toLowerCase()}${OFFER.guarantee.slice(1)}`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ── Specialties data ────────────────────────────────────────── */
const specialties = [
  {
    title: "Automatización de procesos manuales",
    body: "Facturación, correos, reportes y seguimiento de clientes: las tareas repetitivas de cada semana.",
  },
  {
    title: "Integraciones entre sistemas",
    body: "Conecto tu tienda, tu programa de gestión y tu correo para que el mismo dato no se copie varias veces.",
  },
  {
    title: "Flujos que tu equipo entiende",
    body: "Flujos documentados, con alertas si fallan y formación para quien los vaya a usar.",
  },
];

const facts = [
  { value: `${OFFER.freeCallMinutes} min`, label: "Llamada gratuita" },
  { value: "Precio cerrado", label: "Antes de empezar" },
  { value: "2–4 semanas", label: "Según el plan" },
  { value: `${OFFER.guaranteeDays} días`, label: "Garantía" },
];

const steps = [
  {
    n: "01",
    title: "Llamada gratuita",
    sub: `${OFFER.freeCallMinutes} minutos`,
    body: "Vemos tus procesos, dónde se te van las horas y si merece la pena automatizarlos. Sin obligación de continuar.",
  },
  {
    n: "02",
    title: "Propuesta por escrito",
    sub: "",
    body: `Qué automatizaría primero, qué incluye, qué no y el precio cerrado. ${OFFER.noHiddenCosts}`,
  },
  {
    n: "03",
    title: "Montaje y pruebas",
    sub: "",
    body: "Monto los flujos y hago pruebas con tus datos antes de activar. Lo revisamos juntos.",
  },
  {
    n: "04",
    title: "Entrega y soporte",
    sub: "",
    body: `Dedico ${OFFER.trainingHours} hora a formar a tu equipo y te acompaño durante el soporte de tu plan.`,
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
          <p className="text-white font-semibold text-sm leading-tight">{SITE.owner}</p>
          <p className="text-white/40 text-xs mt-0.5">{SITE.credential}</p>
        </div>
      </div>

      {/* Primary CTA */}
      <a
        href="/#contacto"
        className="flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-[15px] tracking-wide py-4 px-6 rounded-[6px] transition-all hover:shadow-[0_0_20px_rgba(184,134,11,0.4)] text-center"
      >
        <Calendar size={16} />
        Reserva tu llamada
      </a>

      <p className="text-white/35 text-xs text-center -mt-2">
        Sin compromiso · Respondo en {OFFER.responseTime}
      </p>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Contact info */}
      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${SITE.email}`}
          className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-[#B8860B] transition-colors break-all"
        >
          <Mail size={13} className="shrink-0" />
          {SITE.email}
        </a>
        <a
          href={SITE.phoneHref}
          className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-[#B8860B] transition-colors"
        >
          <Phone size={13} className="shrink-0" />
          {SITE.phone}
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Quick trust signals */}
      <ul className="flex flex-col gap-2.5">
        {[
          `Llamada gratuita de ${OFFER.freeCallMinutes} min`,
          "Precio cerrado antes de empezar",
          "Implementación en 2–4 semanas",
          `Garantía de ${OFFER.guaranteeDays} días`,
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
          { label: "Ver casos de uso", href: "/casos" },
          { label: "Ver precios", href: "/precios" },
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
      {/* JSON-LD: Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#0F0F0F]">
        <Navbar />

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
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Rubén Amirkhanyan: automatización con n8n y Make en Barcelona
            </h1>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[#B8860B] mb-6 leading-snug">
              Automatización de procesos · RASTECH
            </h2>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              {OWNER_INTRO}
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
                    Quién soy
                  </h2>

                  <div className="prose-section space-y-5 text-white/65 text-[16px] leading-[1.85]">
                    <p>
                      Estudio Informática en la UPC y me dedico a automatizar las tareas que se
                      repiten cada semana en una pyme:
                    </p>
                    <ul className="space-y-2 pl-0">
                      {[
                        "Facturación manual en Excel (copiar datos, comprobar, enviar)",
                        "Correos repetitivos con los mismos datos para distintos clientes",
                        "Información copiada de una aplicación a otra",
                        "Reportes que alguien monta a mano cada lunes",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-[#B8860B] mt-1.5 shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>
                      Trabajo solo, así que hablas directamente conmigo desde la primera llamada
                      hasta la entrega. Uso n8n, Make y las APIs de tus herramientas.
                    </p>
                  </div>
                </section>
              </AnimateOnScroll>

              {/* ── S2b: Credibilidad técnica ─────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="especializacion-tecnica">
                  <h2
                    id="especializacion-tecnica"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-7"
                  >
                    Con qué trabajo
                  </h2>
                  <div className="bg-[#1A3A52]/10 border border-[#1A3A52]/40 p-7 space-y-4 mb-6">
                    {[
                      {
                        label: "Stack principal",
                        body: "n8n y Make. Elijo la herramienta según lo que necesita cada proyecto.",
                      },
                      {
                        label: "Enfoque",
                        body: "Herramientas visuales, pensadas para pymes que no quieren depender de un equipo de desarrollo.",
                      },
                      {
                        label: "Integraciones",
                        body: "APIs REST, Google Workspace, Shopify, HubSpot y otras aplicaciones con API.",
                      },
                      {
                        label: "Método",
                        body: "Analizo el proceso real antes de tocar ninguna herramienta. La automatización es el resultado, no el punto de partida.",
                      },
                    ].map(({ label, body }) => (
                      <p key={label} className="flex items-start gap-2 text-[15px] leading-relaxed">
                        <Zap size={15} className="text-[#B8860B] mt-1 shrink-0" />
                        <span>
                          <strong className="text-white">{label}:</strong>{" "}
                          <span className="text-white/55">{body}</span>
                        </span>
                      </p>
                    ))}
                  </div>
                </section>
              </AnimateOnScroll>

              {/* ── S3: A qué me dedico ───────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="diferente">
                  <h2
                    id="diferente"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-7"
                  >
                    A qué me dedico
                  </h2>
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
                  <ul className="space-y-2 text-white/65 text-[16px]">
                    {[
                      "Tus datos viajan cifrados (HTTPS) y se quedan en tus propias cuentas",
                      "Trabajo con tus datos conforme al RGPD",
                      "Los flujos quedan en tus cuentas y documentados",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-[#B8860B] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </AnimateOnScroll>

              {/* ── S5: Compromisos ───────────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="numeros">
                  <h2
                    id="numeros"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-8"
                  >
                    Lo que te ofrezco
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {facts.map(({ value, label }, i) => (
                      <div
                        key={label}
                        className={`p-6 text-center border ${
                          i % 2 === 0
                            ? "bg-[#1A3A52] border-[#1A3A52]"
                            : "bg-[#1A3A52]/40 border-[#1A3A52]/60"
                        }`}
                      >
                        <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#B8860B] mb-2">
                          {value}
                        </p>
                        <p className="text-white/60 text-[13px] leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/55 text-[15px] leading-relaxed">{OFFER.guarantee}</p>
                </section>
              </AnimateOnScroll>

              {/* ── S6: Cómo trabajamos ───────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="como-trabajamos">
                  <h2
                    id="como-trabajamos"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-8"
                  >
                    Cómo trabajo con empresas de Barcelona
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

              {/* ── S6c: FAQ ──────────────────────────────────── */}
              <AnimateOnScroll direction="up">
                <section aria-labelledby="faq">
                  <h2
                    id="faq"
                    className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-8"
                  >
                    Preguntas frecuentes
                  </h2>
                  <div className="space-y-0">
                    {faqs.map(({ q, a }, i) => (
                      <div
                        key={q}
                        className={`py-5 border-b border-white/6 ${i === 0 ? "border-t" : ""}`}
                      >
                        <p className="text-white font-semibold text-[15px] flex items-start gap-2 mb-2">
                          <Users size={15} className="text-[#B8860B] mt-0.5 shrink-0" />
                          {q}
                        </p>
                        <p className="text-white/55 text-[15px] leading-[1.8] pl-5">{a}</p>
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
                  <p className="text-white/60 text-[16px] leading-relaxed mb-8">
                    Cuéntame qué tarea te quita más tiempo. Lo vemos en {OFFER.freeCallMinutes} minutos, sin compromiso.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/#contacto"
                      className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-[15px] tracking-wide px-7 py-4 rounded-[6px] transition-all hover:shadow-[0_0_24px_rgba(184,134,11,0.4)]"
                    >
                      <Calendar size={16} />
                      Reserva tu llamada
                    </a>
                    <Link
                      href="/casos"
                      className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:border-[#B8860B]/50 hover:text-[#B8860B] font-semibold text-[15px] px-7 py-4 rounded-[6px] transition-all"
                    >
                      Ver casos de uso
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
                  {["n8n", "Make", "APIs REST", "Google Sheets", "Shopify", "WooCommerce", "Gmail"].map(
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
        <Footer />
      </div>
    </>
  );
}
